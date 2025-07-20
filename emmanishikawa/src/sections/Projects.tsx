import ProjectBlock from "../components/ProjectBlock";
import projects from "../components/Projects";

export default function Projects(){
    return (
        <>
            <div className="flex flex-col w-full h-fit pb-10 text-mygray-500 text-[16px] font-[nunito] border-b-[1.5px] border-blue-border">
                <h1 className="font-[kodomo] text-white text-3xl my-8">projects</h1>
                *projects are still work in progress; view github for more info
                <div className="flex flex-col md:flex-row justify-center items-center">
                    {projects.map((_project, _index) => (
                        <ProjectBlock index={_index} />
                    ))}
                </div>
            </div>
        </>
    )
}