import github_svg from "../assets/icons/github.svg";
import link_svg from "../assets/icons/arrow-up-right.svg";
import projects from "./Projects.ts";


export default function ProjectBlock({index}: ProjectBlockProps){
    return (
        <div className="flex flex-col w-full m-4 p-2 bg-accent rounded-2xl border-[1.5px] border-blue-border">
            <div className="flex w-full gap-2">
            <div className="flex-grow h-10 flex justify-center items-center text-white bg-main rounded-xl border-[1.5px] border-blue-border">
                {projects[index].project_title}
            </div>
            <button className="flex w-10 h-10 p-2 justify-center items-center bg-main rounded-xl border-[1.5px] border-blue-border cursor-pointer"
                onClick={() => {
                                window.open(projects[index].github_url, '_blank');
                                }}>
                <img src={github_svg}/>
            </button>
            <button className="flex w-10 h-10 p-2 justify-center items-center bg-main rounded-xl border-[1.5px] border-blue-border cursor-pointer"
                onClick={() => {
                                window.open(projects[index].link_url, '_blank');
                                }}>
                <img src={link_svg}/>
            </button>
            </div>
            <div className="flex flex-col relative w-full h-40 mt-2 p-5 bg-main rounded-xl border-[1.5px] border-blue-border">
                <div>{projects[index].description}</div>
                <div className="absolute bottom-0 mb-2 text-[12px]">{projects[index].tools}</div>
            </div>

        </div>
    )
}

interface ProjectBlockProps {
    index: number;
}
