import React, {useState, useEffect} from "react";
import API_BASE_URL from "../../config";

function ProjectList() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('${API_BASE_URL}/backend/src/main/java/com/example/backend/controller/ProjectController.java')
            .then(response => response.json())
            .then(data => setProjects(data))
            .data(error => console.error('Error fetching projects:', error));
    })
}