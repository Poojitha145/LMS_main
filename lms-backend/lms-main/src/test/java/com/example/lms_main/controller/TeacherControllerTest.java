package com.example.lms_main.controller;

import com.example.lms_main.entity.Assignment;
import com.example.lms_main.entity.Course;
import com.example.lms_main.exception.ResourseNotFoundException;
import com.example.lms_main.repository.CourseRepository;
import com.example.lms_main.service.AssignmentService;
import com.example.lms_main.service.CourseService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.http.ResponseEntity;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

class TeacherControllerTest {

    private TeacherController teacherController;
    private CourseService courseService;
    private AssignmentService assignmentService;
    private CourseRepository courseRepository;

    @BeforeEach
    void setUp() {
        courseService = mock(CourseService.class);
        assignmentService = mock(AssignmentService.class);
        courseRepository = mock(CourseRepository.class);
        teacherController = new TeacherController(courseService, assignmentService, courseRepository);
    }

    @Test
    void testCreateCourse() {
        Course course = new Course();
        course.setName("New Course");

        when(courseService.createCourse(course)).thenReturn(course);

        ResponseEntity<String> response = teacherController.createCourse(course);
        assertEquals("Course ceated successfully!", response.getBody());
    }

    @Test
    void testEditCourseDetails() {
        Course existingCourse = new Course();
        existingCourse.setId(1L);
        existingCourse.setName("Existing Course");

        Course updatedCourse = new Course();
        updatedCourse.setId(1L);
        updatedCourse.setName("Updated Course");

        when(courseRepository.findById(1L)).thenReturn(java.util.Optional.of(existingCourse));
        when(courseService.saveCourse(existingCourse)).thenReturn(existingCourse);

        ResponseEntity<Course> response = teacherController.editCourseDetails(updatedCourse);
        assertEquals(200, response.getStatusCodeValue());
        assertEquals("Updated Course", response.getBody().getName());
    }

    @Test
    void testDeleteCourse() {
        long courseId = 1L;
        doNothing().when(courseService).deleteCourse(courseId);

        ResponseEntity<String> response = teacherController.deleteCourse(courseId);
        assertEquals("Course deleted Successfully!", response.getBody());
    }

    @Test
    void testGetAllAssignments() {
        Assignment assignment1 = new Assignment();
        assignment1.setId(1L);
        assignment1.setTitle("Assignment 1");

        Assignment assignment2 = new Assignment();
        assignment2.setId(2L);
        assignment2.setTitle("Assignment 2");

        when(assignmentService.getAllAssignments()).thenReturn(Arrays.asList(assignment1, assignment2));

        List<Assignment> assignments = teacherController.getAllAssignments();
        assertEquals(2, assignments.size());
        assertEquals("Assignment 1", assignments.get(0).getTitle());
    }
}
