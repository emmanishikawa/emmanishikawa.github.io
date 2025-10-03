import github_svg from "../assets/icons/github.svg";
import link_svg from "../assets/icons/arrow-up-right.svg";
import { useParams } from "react-router-dom";
import projects, { type Project } from "../components/Projects";
import BlockRenderer from "../components/caseStudyBlocks/BlockRenderer";

export default function CaseStudy() {
  const { slug } = useParams();
  const project: Project | undefined = projects.find((p) => p.slug === slug);

  if (!project) {
    return <div className="p-6 text-red-800">project not found.</div>;
  }

  let ghlink = true;
    let plink = true;

    if(project.github_url == null || project.github_url == ""){
        ghlink = false;
    }
    if(project.link_url == null || project.link_url == ""){
        plink = false;
    }

    const handleGHClick = () => {
        if(ghlink) window.open(project.github_url, '_blank');
    }

    const handlePClick = () => {
        if(plink) window.open(project.link_url, '_blank');
    }


  return (
    <div className="flex h-screen w-screen justify-center ">
      <div className="flex flex-col relative w-screen h-full mx-8 lg:m-0 lg:w-3xl top-14 lg:top-25 ">     
      <div className="flex flex-row gap-2">  
      <h1 className="font-[kodomo] text-white text-3xl my-8">
        {project.case_study.title}
      </h1>
      <div className="flex flex-row gap-2 justify-center items-center">
        <button className={`flex w-10 h-10 p-2 justify-center items-center bg-main rounded-xl border-[1.5px] border-blue-border ${ghlink ? 'cursor-pointer' : 'hidden'}`}
        onClick={handleGHClick}>
        <img src={github_svg}/>
      </button>
      <button className={`flex w-10 h-10 p-2 justify-center items-center bg-main rounded-xl border-[1.5px] border-blue-border ${plink ? 'cursor-pointer' : 'hidden'}`}
          onClick={handlePClick}>
          <img src={link_svg}/>
      </button>
      </div>    
      </div>
      <div className="text-mygray-500 text-[12px]">{project.case_study.timeline}</div>
  
      {project.case_study.content_1?.map((block, idx) => (
        <BlockRenderer key={idx} block={block} />
      ))}
      </div>
    </div>
  );
}
