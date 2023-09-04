import React from 'react';
import './Projects.css';

function Project({title, description, image}){
    return (
        <div className='project'>
            <img src={process.env.PUBLIC_URL + image} alt={title}/>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

function Projects() {
    const projects = [
        {
            title: 'Python Projects',
            description: 'Projects created with mostly Python.',
            image: '/python.png'
        },
        {
            title: 'React Projects',
            description: 'Projects created mainly using React.js.',
            image: '/React.webp'
        },
        {
            title: 'Java Projects',
            description: 'Projects mainly created using Java.',
            image: '/Java.webp'
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