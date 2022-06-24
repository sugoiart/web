import { motion } from "framer-motion";

export const MainButton = (props: any) => {
    return (
        <motion.a
            href={props.link}
            target="_blank"
            className="
            leading-[1.3] py-[9px] px-[12px] inline-block border-solid border-[1px] 
            bg-main-gray rounded-[10px] hover:bg-sorta-white hover:border-norm-gray hover:transition-all hover:duration-200 hover:ease-out hover:text-[#444444]
            hover:border-[#444444] hover:bg-white
            "
            whileTap={{ scale: 0.95 }}
        >
            <span>{props.name}</span>
        </motion.a>
    );
};