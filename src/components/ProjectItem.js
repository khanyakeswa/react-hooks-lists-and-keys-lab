import React from "react";

function ProjectItem({ name, about, technologies }) {
  console.log(technologies)
  let index = 0

  const technologyArray = technologies.map((tech) => <span key={index += 1}>{tech}</span>)
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologyArray}
      </div>
    </div>
  );
}

export default ProjectItem;
