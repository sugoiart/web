import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { RandomPhoto } from "../util/types";
import { MainButton } from "../components/Button";
import { useState, useEffect } from "react";

const Home = () => {
    return (
        <>
            <div className="bg-cover bg-normal-bg bg-center bg-blend-overlay bg-fixed">
                <Header />
                <div className="main">
                    <div className="h-[800px] flex items-center justify-center">
                        <div className="max-w-[750px] py-[30px] px-[40px] font-kgcs font-thin text-center">
                            <h1 className="text-3xl mb-4">
                                a simple, fast, and<br />
                                open source art api
                            </h1>
                            <div className="flex gap-[20px] justify-center">
                                <MainButton name="API" link="https://sugoiapi.hayasaka.moe" />
                                <MainButton name="Source" link="https://github.com/sugoiart/api" />
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    );
};

export default Home;
