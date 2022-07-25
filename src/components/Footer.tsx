import { getCurrentYear } from "../util/year";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
    const currentYear = getCurrentYear();
    return (
        <>
            <div className="h-[10vh] flex justify-center items-center py-[30px] bg-normal-bg overflow-x-hidden">
                <div className="font-kgcs items-center flex flex-row justify-between xl:w-[960px] lg:w-[720px] md:w-[530px]">
                    <div id="first" className="text-sm hidden md:block font-medium">
                        Made with <FontAwesomeIcon icon={faHeart} /> by ohashi.
                    </div>
                    <div id="second" className="text-sm font-medium">
                        © {currentYear} jckli
                    </div>
                </div>
            </div>
        </>
    )
}