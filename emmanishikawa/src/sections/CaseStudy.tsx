import { useParams } from "react-router-dom";
import projects, { type Project } from "../components/Projects";
import BlockRenderer from "../components/caseStudyBlocks/BlockRenderer";

export default function CaseStudy() {
  const { slug } = useParams();
  const project: Project | undefined = projects.find((p) => p.slug === slug);

  if (!project) {
    return <div className="p-6 text-red-500">Project not found.</div>;
  }

  return (
    <div className="flex h-screen w-screen justify-center ">
                <div className="flex flex-col relative w-screen h-auto mx-8 lg:m-0 lg:w-3xl top-14 lg:top-25 ">
                    
      <h1 className="font-[kodomo] text-white text-3xl my-8">
        {project.case_study.title}
      </h1>

      {project.case_study.content.map((block, idx) => (
        <BlockRenderer key={idx} block={block} />
      ))}
      </div>
    </div>
  );
}
