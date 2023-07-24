
const Contact = () => {
    return (
        <form className="flex flex-col container mx-auto px-1 gap-5 my-5">
            <div className="flex flex-col md:flex-row gap-5 w-full">
            <input type="text" placeholder="Your name" className="input input-bordered w-full  border-4" />
            <input type="email" placeholder="Your Email" className="input input-bordered w-full border-4" />
            </div>
            <textarea className=" w-full border-4 rounded p-2" rows={8} placeholder="detaill"></textarea>
            <div className=" flex ">

            <button className="btn btn-primary">send</button>
            </div>
        </form>
    );
};

export default Contact;