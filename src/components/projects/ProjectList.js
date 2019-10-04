import React from "react";
import ProjectSummary from "./ProjectSummary";

const ProjectList = props => {
  const projects = props.projects;

  return (
    <div className="project-list section">
      {/* projects might not have data until 
      component reaches out to db so need the following "And" condition */}
      {projects &&
        projects.map(project => {
          return <ProjectSummary project={project} key={project.id} />;
        })}
    </div>
  );
};
export default ProjectList;
