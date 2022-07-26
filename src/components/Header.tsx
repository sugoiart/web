import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

export const Header = () => {
    function scrollToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return (
        <>
            <div className="sticky top-0 bg-navbar-bg z-50 navbar">
                <div className="font-kgcs flex items-center px-8 py-5 mx-auto max-w-[1300px] text-2xl">
                    <h1>sugoiart</h1>
                    <ul className="flex gap-[20px] list-none text-white/70 ml-[40px] text-xl flex-1 font-lexbold">
                        <li>
                            <a href="#" onClick={scrollToTop} className="hover:text-white/90 transition-all duration-200 ease-in-out">home</a>
                        </li>
                        <li>
                            <a href="#documentation" className="hover:text-white/90 transition-all duration-200 ease-in-out">documentation</a>
                        </li>
                    </ul>
                    <div className="flex">
                        <a href="https://github.com/sugoiart/web">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}