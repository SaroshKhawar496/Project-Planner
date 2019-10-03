import React from "react";

//props coming from react-router
export default function ProjectDetails(props) {
  //   console.log(props);
  //getting the project id from route params
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum,
            repellendus amet reprehenderit minima vitae ipsam ea, incidunt
            blanditiis assumenda placeat adipisci quibusdam totam. Praesentium
            repudiandae possimus dignissimos libero quaerat consequatur!
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Sarosh Khawar</div>
          <div>2nd Oct, 2am</div>
        </div>
      </div>
    </div>
  );
}
