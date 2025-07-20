import github_svg from "../assets/icons/github.svg";
import link_svg from "../assets/icons/arrow-up-right.svg";


export default function ProjectBlock(){
    return (
        <div className="flex flex-col w-full m-4 p-2 bg-accent rounded-2xl border-[1.5px] border-blue-border">
            <div className="flex w-full h-80 mb-2 bg-main rounded-xl border-[1.5px] border-blue-border justify-center items-center">image placeholder</div>
            <div className="flex w-full gap-2">
            <div className="flex-grow h-10 flex justify-center items-center text-white bg-main rounded-xl border-[1.5px] border-blue-border cursor-pointer">
                project name
            </div>
            <button className="flex w-10 h-10 justify-center items-center bg-main rounded-xl border-[1.5px] border-blue-border cursor-pointer">
                <img src={github_svg}/>
            </button>
            <button className="flex w-10 h-10 justify-center items-center bg-main rounded-xl border-[1.5px] border-blue-border cursor-pointer">
                <img src={link_svg}/>
            </button>
            </div>

        </div>
    )
}
