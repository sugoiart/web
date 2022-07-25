import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

export const Header = () => {
    return (
        <>
            <div className="sticky top-0 bg-navbar-bg z-50 navbar">
                <div className="font-kgcs flex items-center px-8 py-5 mx-auto max-w-[1300px] text-2xl">
                    <h1>sugoiart</h1>
                    <ul className="flex gap-[20px] list-none text-white/70 ml-[40px] text-xl flex-1">
                        <li>
                            <a href="#" className="hover:text-white/90 transition-all duration-200 ease-in-out">home</a>
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