package java.com.example.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/portfolio/src/components/Projects")
public class ProjectController {
    public List<Project> getProjects() {
        List<Project> projects = new ArrayList<>();
        projects.add(new Project("Python Projects", "Projects created with mostly Python."));
        projects.add(new Project("React Projects", "Projects created mainly using React.js."));
        projects.add(new Project("Java Projects", "Projects mainly created using Java."));
        return projects;
    }

    public static class Project{
        private String title;
        private String description;

        public Project (String title, String description){
            this.title = title;
            this.description = description;
        }
    }
}
