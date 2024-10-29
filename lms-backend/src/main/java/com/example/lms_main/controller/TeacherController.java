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
        return new ResponseEntity<>("Course ceated successfully!", HttpStatus.CREATED);
    }

    @PutMapping("/editcourse")
    public ResponseEntity<Course> editCourseDetails(Course course){
        Course course1 = courseRepository.findById(course.getId())
                .orElseThrow(() -> new ResourseNotFoundException("Employee not exist with id: " + course.getId()));
        course1.setId(course.getId());
        course1.setName(course.getName());
        course1.setAssignments(course.getAssignments());
        course1.setDescription(course.getDescription());

        courseService.saveCourse(course1);
        return ResponseEntity.ok(course1);
    }

    @DeleteMapping("/courses/{id}")
    public ResponseEntity<String> deleteCourse(@PathVariable Long id) {
        courseService.deleteCourse(id);
        return new ResponseEntity<>("Course deleted Successfully!", HttpStatus.OK);
    }



    @PostMapping("/assignment")
    public ResponseEntity<String> createAssignment(@RequestBody Assignment assignment) {
        assignmentService.createAssignment(assignment);
        return new ResponseEntity<>("Assignment ceated successfully!", HttpStatus.CREATED);
    }
    
    @DeleteMapping("/assignments/{id}")
    public ResponseEntity<String> deleteAssignment(@PathVariable Long id) {
        assignmentService.deleteAssignment(id);
        return new ResponseEntity<>("Assignment deleted Successfully!", HttpStatus.OK);
    }

    @GetMapping("/getallassignments")
    public List<Assignment> getAllAssignments(){
        return assignmentService.getAllAssignments();
    }


    @GetMapping("/getallcourses")
    public List<Course> getAllCourses(){
        return courseService.getAllCourses();
    }
}
