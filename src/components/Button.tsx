import { motion } from "motion/react";

export const MainButton = (props: any) => {
	return (
		<motion.a
			href={props.link}
			target="_blank"
			className="
            leading-[1.3] py-[9px] px-[12px] inline-block border-solid border-[2px] 
            rounded-[10px] transition-all duration-200 ease-in-out hover:text-white
            hover:border-[#444444] text-white/90 bg-[#313336] border-[#2c2c2e]
            "
			whileTap={{ scale: 0.95 }}
		>
			<span>{props.name}</span>
		</motion.a>
	);
};

