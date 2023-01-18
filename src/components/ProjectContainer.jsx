import { useState } from "react";
import Project1 from "./Projects/Project1";
import Project2 from "./Projects/Project2";
import arrow from "../assets/arrowdown.svg";
import Project3 from "./Projects/Project3";
const ProjectContainer = () => {
  const [project, setProject] = useState([
    { id: 1, showProject: false, project: Project1 },
    { id: 2, showProject: false, project: Project1 },
    { id: 3, showProject: false, project: Project1 },
    { id: 4, showProject: false, project: Project1 },
    { id: 5, showProject: false, project: Project1 },
    { id: 6, showProject: false, project: Project1 },
    { id: 7, showProject: false, project: Project1 },
  ]);

  return (
    <div className="w-full mt-[7rem] divide-y divide-solid divide-black">
      {project.map((prj, i) => (
        <div
          className="cursor-pointer "
          key={i}
          onClick={() => {
            setProject(
              [...project].map((object) => {
                if (i + 1 == object.id) {
                  return {
                    ...object,
                    showProject: !prj.showProject,
                  };
                } else
                  return {
                    ...object,
                    showProject: false,
                  };
              })
            );
          }}
        >
          <div className="flex justify-between  items-center group border-t border-black py-10">
            <div className="text-2xl duration-300 group-hover:ml-8">
              Styllar
            </div>
            <div
              className={`group-hover:mr-8 ${
                prj.showProject && "rotate-180"
              } duration-300`}
            >
              <img src={arrow} />
            </div>
          </div>
          {prj.showProject && <prj.project />}
        </div>
      ))}
    </div>
  );
};

export default ProjectContainer;
