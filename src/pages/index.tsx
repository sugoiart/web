import type { NextPage } from "next";
import { Footer } from "../components/Footer";
import { RandomPhoto } from "../util/types";
import { MainButton } from "../components/Button";
import { useState, useEffect } from "react";

const Home = () => {
    const [art, setArt] = useState<RandomPhoto>()
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch("/api/art/random")
          .then((res) => res.json())
          .then((art) => {
            setArt(art)
            setLoading(false)
          })
    }, [])

    if (isLoading) return <p>Loading...</p>
    if (!art) return <p>No profile data</p>
    return (
        <>
            <div className="bg-cover bg-[#262336] bg-top bg-blend-overlay bg-fixed" style={{backgroundImage: `url(${art.url})`}}>
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
