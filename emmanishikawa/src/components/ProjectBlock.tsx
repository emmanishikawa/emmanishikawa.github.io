import github_svg from "../assets/icons/github.svg";
import link_svg from "../assets/icons/arrow-up-right.svg";
import projects from "./Projects.ts";


export default function ProjectBlock({index}: ProjectBlockProps){
    return (
        <div className="flex flex-col w-full m-4 p-2 bg-accent rounded-2xl border-[1.5px] border-blue-border">
            <div className="flex w-full h-80 mb-2 bg-main rounded-xl border-[1.5px] border-blue-border justify-center items-center">
                {/*<img src={projects[index].project_image}/>*/}
                image placeholder
            </div>
            <div className="flex w-full gap-2">
            <div className="flex-grow h-10 flex justify-center items-center text-white bg-main rounded-xl border-[1.5px] border-blue-border cursor-pointer">
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

        </div>
    )
}

interface ProjectBlockProps {
    index: number;
}
