import { Footer } from "../components/Footer";
import { RandomPhoto } from "../util/types";
import { MainButton } from "../components/Button";
import { useState, useEffect } from "react";

const Home = () => {
    const [art, setArt] = useState<RandomPhoto>()
    const [isLoading, setLoading] = useState(false)

    /**todo: change orientation background depending on size of device */
    useEffect(() => {
        setLoading(true)
        fetch("https://sugoiapi.hayasaka.moe/v1/art/random?orien=landscape")
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
            <div className="bg-cover bg-[#262336] bg-center bg-blend-overlay bg-fixed" style={{backgroundImage: `url(${art.url})`}}>
                <div className="h-[90vh] flex justify-center items-center">
                    <div className="max-w-[750px] py-[30px] px-[40px] text-center">
                        <h1 className="text-3xl font-nunito mb-4">~ ✨ Welcome to sugoiart ✨ ~</h1>
                        <MainButton name="API" link="https://sugoiapi.hayasaka.moe" />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Home;
