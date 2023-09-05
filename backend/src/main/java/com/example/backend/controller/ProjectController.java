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
        projects.add(new Project("Project 1", "Description1"));
        projects.add(new Project("Project 2", "Desc 2"));
        projects.add(new Project("Project 3", "Desc 3"));
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
