import React from 'react'
import { ProjectData } from '../../data/project'
import ProjectCard from './project-card'
import Separator from '../../common/social-contact/seperator/separator'
import './project.css'
function Projects() {
    const data = ProjectData
    return (
        <div className="projects">
            <Separator/>
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
