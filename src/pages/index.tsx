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
                <div id="#top" className="main">
                    <div className="h-[800px] flex items-center justify-center">
                        <div className="max-w-[750px] py-[30px] px-[40px] font-lexbold font-thin text-center">
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
                <div id="documentation" className="max-w-[1100px] mx-auto py-20 px-6 font-lexbold">
                    <h1 className="text-4xl mb-8">
                        documentation
                    </h1>
                    <div>
                        <h2 className="text-2xl inline-block py-[2px] px-[8px] bg-[#2f8132] mb-[5px]">GET</h2>
                        <h2 className="text-2xl inline-block ml-[10px]">v1/art/...</h2>
                        <div className="ml-[25px] mt-4">
                            <span className="text-white/80 text-xl">GET v1/art/random</span>
                            <p className="font-lexreg text-white/60">GET a random artwork</p>
                            <div className="flex p-[10px] border-2 border-solid border-[#2b2b35] rounded-[10px] max-w-[550px] mt-3 bg-[#1e1e25] overflow-auto">
                                <pre>
                                    <span className="font-lexbold">GET</span>
                                    <code className="font-lexreg ml-[10px]">
                                        https://sugoiapi.hayasaka.moe/v1/art/random
                                    </code>
                                </pre>
                            </div>
                        </div>
                        <br />
                        <div className="ml-[25px] mt-4">
                            <span className="text-white/80 text-xl">GET v1/art/all</span>
                            <p className="font-lexreg text-white/60">GET all artworks</p>
                            <div className="flex p-[10px] border-2 border-solid border-[#2b2b35] rounded-[10px] max-w-[550px] mt-3 bg-[#1e1e25] overflow-auto">
                                <pre>
                                    <span className="font-lexbold">GET</span>
                                    <code className="font-lexreg ml-[10px]">
                                        https://sugoiapi.hayasaka.moe/v1/art/all
                                    </code>
                                </pre>
                            </div>
                        </div>
                        <hr className="mb-4 mt-6 bg-white/60 border-none h-[1px] max-w-[600px]" />
                        <div className="ml-[25px]">
                            <h2 className="text-2xl">parameters</h2>
                            <table className="mt-4 border-collapse border-[1px] border-solid border-[#2b2b35] max-w-[600px]">
                                <tbody>
                                    <tr>
                                        <td className="text-white/80 text-xl w-[150px] border-r-[1px] border-[#2b2b35] px-4 py-2">orien</td>
                                        <td className="text-white/80 text-lg font-lexreg py-2 px-4">art orientation (one of landscape, portrait, square)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
                <Footer />
            </div>
        </>
    );
};

export default Home;
