package com.example.lms_main.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.lms_main.entity.Assignment;
import com.example.lms_main.entity.Course;
import com.example.lms_main.exception.ResourseNotFoundException;
import com.example.lms_main.repository.CourseRepository;
import com.example.lms_main.service.AssignmentService;
import com.example.lms_main.service.CourseService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/teacher")
@RequiredArgsConstructor
public class TeacherController {

    @Autowired
    private CourseService courseService;
    @Autowired
    private AssignmentService assignmentService;
    @Autowired
    private CourseRepository courseRepository;

    @PostMapping("/course")
    public ResponseEntity<String> createCourse(@RequestBody Course course) {
        courseService.createCourse(course);
        return ResponseEntity.status(HttpStatus.CREATED).body("Course created successfully!");
    }

    @PutMapping("/editcourse")
    public ResponseEntity<Course> editCourseDetails(@RequestBody Course course) {
        Course existingCourse = courseRepository.findById(course.getId())
                .orElseThrow(() -> new ResourseNotFoundException("Course not exist with id: " + course.getId()));
        
        existingCourse.setName(course.getName());
        existingCourse.setAssignments(course.getAssignments());
        existingCourse.setDescription(course.getDescription());

        courseService.saveCourse(existingCourse);
        return ResponseEntity.ok(existingCourse);
    }

    @DeleteMapping("/courses/{id}")
    public ResponseEntity<String> deleteCourse(@PathVariable Long id) {
        courseService.deleteCourse(id);
        return ResponseEntity.ok("Course deleted successfully!");
    }

    @PostMapping("/assignment")
    public ResponseEntity<String> createAssignment(@RequestBody Assignment assignment) {
        assignmentService.createAssignment(assignment);
        return ResponseEntity.status(HttpStatus.CREATED).body("Assignment created successfully!");
    }
    
    @DeleteMapping("/assignments/{id}")
    public ResponseEntity<String> deleteAssignment(@PathVariable Long id) {
        assignmentService.deleteAssignment(id);
        return ResponseEntity.ok("Assignment deleted successfully!");
    }

    @GetMapping("/getallassignments")
    public ResponseEntity<List<Assignment>> getAllAssignments() {
        List<Assignment> assignments = assignmentService.getAllAssignments();
        return ResponseEntity.ok(assignments);
    }

    @GetMapping("/getallcourses")
    public ResponseEntity<List<Course>> getAllCourses() {
        List<Course> courses = courseService.getAllCourses();
        return ResponseEntity.ok(courses);
    }
}
