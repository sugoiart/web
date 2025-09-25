import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { MainButton } from "../components/Button";
import { useRandomImage } from "../hooks/useRandomImage";
import { BackgroundState } from "../util/types";
import { ApiRoute } from "../components/ApiRoute";

const Home = () => {
	const { url: backgroundImageUrl, isFallback }: BackgroundState = useRandomImage(
		"https://api.art.hayasaka.moe/v1/art/random?o=landscape",
		"/background.jpg"
	);

	const backgroundPositionClass = isFallback ? "bg-top" : "bg-center";

	return (
		<>
			<div className="bg-cover bg-normal-bg bg-center bg-blend-overlay bg-fixed">
				<Header />
				<div
					id="#top"
					style={{ backgroundImage: `url(${backgroundImageUrl})` }}
					className={`bg-blend-overlay bg-[#3d3d47] bg-cover ${backgroundPositionClass} h-[90vh] flex items-center justify-center`}
				>
					<div className="max-w-[750px] py-[30px] px-[40px] font-lexbold font-thin text-center">
						<h1 className="text-3xl mb-4">
							a simple, fast, and
							<br />
							open source art api
						</h1>
						<div className="flex gap-[20px] justify-center">
							<MainButton name="API" link="https://api.art.hayasaka.moe" />
							<MainButton
								name="Source"
								link="https://github.com/sugoiart/api"
							/>
						</div>
					</div>
				</div>
				<div id="documentation" className="max-w-[1100px] mx-auto py-20 px-6 font-lexbold">
					<h1 className="text-4xl mb-8">documentation</h1>
					<div>
						<h2 className="text-2xl inline-block py-[2px] px-[8px] bg-[#2f8132] mb-[5px]">
							GET
						</h2>
						<h2 className="text-2xl inline-block ml-[10px]">v1/art/...</h2>
						<br />
						<ApiRoute
							method="GET"
							route="v1/art/all"
							description="GET all artworks (supports query parameters)"
							fullUrl="https://api.art.hayasaka.moe/v1/art/all"
						/>
						<br />
						<ApiRoute
							method="GET"
							route="v1/art/random"
							description="GET a random artwork (supports query parameters)"
							fullUrl="https://api.art.hayasaka.moe/v1/art/random"
						/>
						<br />
						<ApiRoute
							method="GET"
							route="v1/art/sha/:sha"
							description="GET an artwork by its SHA256 hash"
							fullUrl="https://api.art.hayasaka.moe/v1/art/sha/:sha"
						/>
						<br />
						<ApiRoute
							method="GET"
							route="v1/art/stats"
							description="GET statistics about the API and the artwork count"
							fullUrl="https://api.art.hayasaka.moe/v1/art/stats"
						/>
						<hr className="mb-4 mt-6 bg-white/60 border-none h-[1px] max-w-[600px]" />
						<div className="ml-[25px]">
							<h2 className="text-2xl">parameters</h2>
							<table className="mt-4 border-collapse border-[1px] border-solid border-[#2b2b35] max-w-[600px]">
								<tbody>
									<tr>
										<td className="text-white/80 text-xl w-[150px] border-r-[1px] border-[#2b2b35] px-4 py-2">
											o
										</td>
										<td className="text-white/80 text-lg font-lexreg py-2 px-4">
											art orientation (one of
											landscape, portrait, square)
										</td>
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
