import React from "react";
import { useState } from "react";
import { ApiRouteProps } from "../util/types";

export const ApiRoute: React.FC<ApiRouteProps> = ({ method, route, description, fullUrl }) => {
	const [copyText, setCopyText] = useState("Copy");

	const handleCopy = () => {
		navigator.clipboard.writeText(fullUrl);
		setCopyText("Copied!");
		setTimeout(() => {
			setCopyText("Copy");
		}, 2000);
	};

	return (
		<div className="ml-[25px] mt-4">
			<span className="text-white/80 text-xl">{route}</span>
			<p className="text-white/60 font-lexreg">{description}</p>
			<div className="flex items-center p-3 border-2 border-[#2b2b35] rounded-lg max-w-xl mt-2 bg-[#1e1e25] overflow-x-auto">
				<pre className="flex-grow">
					<span className="font-lexbold select-none">{method}</span>
					<code className="font-lexreg ml-3">{fullUrl}</code>
				</pre>
				<button
					onClick={handleCopy}
					className="ml-4 bg-white/10 px-3 py-1 rounded-md text-sm hover:bg-white/20 transition-colors"
				>
					{copyText}
				</button>
			</div>
		</div>
	);
};
