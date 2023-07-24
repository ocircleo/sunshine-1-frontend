import TopItCompany from "./components/TopItCompany";
import WelcomeHome from "./components/WelcomeHome";
import ReactTab from "./components/ReactTab";
import { useEffect, useState } from "react";


const Home = () => {
    let [bangladesh, setBangladesh] = useState([])
    let [international, setInternational] = useState([])
    useEffect(() => {
        fetch('https://sunshine-phi.vercel.app/topcompanys/bd/3').then(res => res.json()).then(data => setBangladesh(data))
        fetch('https://sunshine-phi.vercel.app/topcompanys/in/3').then(res => res.json()).then(data => setInternational(data))
    }, [])
    return (
        <>
            <WelcomeHome></WelcomeHome>
            <div className="md:w-3/4 lg:w-2/3 sm:w-4/5 w-5/6  mx-auto">
                <ReactTab></ReactTab>
                <div className="grid grid-cols-6 gap-2 mb-3">
                    <div className="col-span-6 text-center">
                        <h2 className="text-2xl font-semibold underline  decoration-4 py-3 underline-offset-8 decoration-indigo-300">Top Jobs in the globe</h2>
                        <p className="max-w-md mx-auto">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam reiciendis eos architecto sed corrupti voluptatum alias.</p>

                    </div>
                    <p className="col-span-6 font-semibold">In Bangladesh</p>

                    {
                        bangladesh.map(ele => <TopItCompany key={ele._id} data={ele}></TopItCompany>)
                    }
                    <p className="col-span-6 font-semibold">World Wide</p>

                    {
                        international.map(ele => <TopItCompany key={ele._id} data={ele}></TopItCompany>)
                    }

                </div>
            </div>
        </>
    );
};

export default Home;