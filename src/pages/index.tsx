import type { NextPage } from "next";
import { Footer } from "../components/Footer";
import { AllPhotos } from "../util/types";
import { MainButton } from "../components/Button";

interface AppProps {
    AllArt: AllPhotos;
}

const Home = ({ AllArt }: AppProps) => {
    var arturl = "";
    if (!AllArt) {
        arturl = "/public/defaultbgd.png";
    } else {
        arturl = AllArt.data[Math.floor(Math.random() * AllArt.data.length)].url
    }
    return (
        <>
            <div className="bg-cover bg-[#262336] bg-top bg-blend-overlay bg-fixed" style={{backgroundImage: `url(${arturl})`}}>
                <div className="h-[90vh] flex justify-center items-center">
                    <div className="max-w-[750px] py-[30px] px-[40px] text-center">
                        <h1 className="text-3xl font-nunito mb-4">~ ✨ Welcome to artmoe ✨ ~</h1>
                        <MainButton name="API" link="/api" />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export async function getStaticProps() {
    const AllArt = await fetch(`https://api-production-425d.up.railway.app/api/all`).then(res => res.json());

    return {
        props: { AllArt },
    };
}

export default Home;
