import React from "react";
import ProjectSummary from "./ProjectSummary";
import { Link } from "react-router-dom";

const ProjectList = props => {
  const projects = props.projects;

  return (
    <div className="project-list section">
      {/* projects might not have data until 
      component reaches out to db so need the following "And" condition */}
      {projects &&
        projects.map(project => {
          return (
            <Link to={"/project/" + project.id} key={project.id}>
              <ProjectSummary project={project} />
            </Link>
          );
        })}
    </div>
  );
};
export default ProjectList;
