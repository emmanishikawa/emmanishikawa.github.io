import ProjectBlock from "../components/ProjectBlock";
import projects from "../components/Projects";

export default function Projects(){
    return (
        <>
            <div className="flex flex-col flex-wrap w-full h-fit pb-10 text-mygray-500 text-[16px] font-[nunito] border-b-[1.5px] border-blue-border">
                <h1 className="font-[kodomo] text-white text-3xl my-8">projects</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {projects.map((_project, _index) => (
                        <ProjectBlock key={_index} index={_index} />
                    ))}
                </div>
            </div>
        </>
    )
}