import React, {useState, useEffect} from "react";

function ProjectList() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('${API_BASE_URL}/api/projects/')
            .then(response => response.json())
            .then(data => setProjects(data))
            .data(error => console.error('Error fetching projects:', error));
    }, []);

    return (
        <div>
            <h1>Projects</h1>
            <ul>
                {projects.map(project => (
                    <li key={project.id}>{project.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default ProjectList;