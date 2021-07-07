import React from 'react'
import { ProjectData } from '../../data/project'
import ProjectCard from './project-card'
import './project.css'
function Projects() {
    const data = ProjectData
    return (
        <div className="projects">
            <label className="section-title">Projects</label>
            <div>
              {data.map((project)=>{
                  return <ProjectCard project={project}  />
              })}
            </div>
        </div>
    )
}

export default Projects
