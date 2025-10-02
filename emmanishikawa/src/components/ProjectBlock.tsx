import github_svg from "../assets/icons/github.svg";
import link_svg from "../assets/icons/arrow-up-right.svg";
import projects from "./Projects.ts";
import { Link } from "react-router-dom";


export default function ProjectBlock({ index }: { index: number }){

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    let ghlink = true;
    let plink = true;

    if(projects[index].github_url == null || projects[index].github_url == ""){
        ghlink = false;
    }
    if(projects[index].link_url == null || projects[index].link_url == ""){
        plink = false;
    }

    const handleGHClick = () => {
        if(ghlink) window.open(projects[index].github_url, '_blank');
    }

    const handlePClick = () => {
        if(plink) window.open(projects[index].link_url, '_blank');
    }

    return (
        <div className="flex flex-col w-full p-2 bg-accent rounded-2xl border-[1.5px] border-blue-border">
            <div className="flex w-full gap-2 ">
            
            <Link onClick={handleScrollToTop}
                to={`/emmanishikawa/project/${projects[index].slug}`}
                className="flex-grow h-10 flex justify-center items-center text-white bg-main rounded-xl border-[1.5px] border-blue-border cursor-pointer"
                >
                {projects[index].project_title}
            </Link>


            <button className={`flex w-10 h-10 p-2 justify-center items-center bg-main rounded-xl border-[1.5px] border-blue-border ${ghlink ? 'cursor-pointer' : 'cursor-not-allowed'}`}
                onClick={handleGHClick}>
                <img src={github_svg}/>
            </button>
            <button className={`flex w-10 h-10 p-2 justify-center items-center bg-main rounded-xl border-[1.5px] border-blue-border ${plink ? 'cursor-pointer' : 'cursor-not-allowed'}`}
                onClick={handlePClick}>
                <img src={link_svg}/>
            </button>
            </div>
            <div className="flex flex-col relative w-full h-28 mt-2 p-5 bg-main rounded-xl border-[1.5px] border-blue-border">
                <div>{projects[index].description}</div>
                <div className="absolute bottom-0 mb-2 text-[12px]">{projects[index].tools}</div>
            </div>

        </div>
    )
}