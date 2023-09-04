import React from 'react';
import './Projects.css';

function Project({title, description, image}){
    return (
        <div className='project'>
            <img src={image} alt={title}/>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

function Projects() {
    const projects = [
        {
            title: 'Project 1',
            description: 'First project created',
            image: 'proj1.jpg'
        },
        {
            title: 'Project 2',
            description: 'Second project created',
            image: 'proj2.jpg'
        },
        {
            title: 'Project 3',
            description: 'Third project created',
            image: 'proj3.jpg'
        }
    ];

    return (
        <section className="projects">
            <h2>Projects</h2>
            <div className="dashboard">
                {projects.map((project, index) => (
                    <Project 
                    key={index}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    />
                ))}
            </div>
        </section>
    )
}

export default Projects;