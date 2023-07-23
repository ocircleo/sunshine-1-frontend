import TopItCompany from "./components/TopItCompany";
import JobsTabs from "./components/jobsTabs";
import Welcome from "./components/welcome";

const Home = () => {
    let arr = [21, 3, , 4,]
    return (
        <>

            <Welcome></Welcome>
            <div className="md:w-3/4 lg:w-2/3 sm:w-4/5 w-5/6  mx-auto">
                <JobsTabs></JobsTabs>
                <div className="grid grid-cols-6 gap-2 mb-3">
                    <div className="col-span-6 text-center">
                        <h2 className="text-2xl font-semibold underline  decoration-4 py-3 underline-offset-8 decoration-indigo-300">Top Jobs in the globe</h2>
                        <p className="max-w-md mx-auto">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam reiciendis eos architecto sed corrupti voluptatum alias.</p>

                    </div>
                    <p className="col-span-6 font-semibold">In Bangladesh</p>

                    {
                        arr.map(ele => <TopItCompany></TopItCompany>)
                    }
                    <p className="col-span-6 font-semibold">World Wide</p>

                    {
                        arr.map(ele => <TopItCompany></TopItCompany>)
                    }

                </div>
            </div>
        </>
    );
};

export default Home;