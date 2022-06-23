import type { NextPage } from "next";
import { Footer } from "../components/Footer";

const Home: NextPage = () => {
    return (
        <>
            <div className="h-[90vh] flex justify-center items-center">
                <div className="max-w-[750px] py-[30px] px-[40px] text-center">
                    <h1 className="text-3xl font-nunito">~ ✨ Welcome to artmoe ✨ ~</h1>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Home;
