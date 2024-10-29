package com.example.lms_main.controller;

import com.example.lms_main.entity.Course;
import com.example.lms_main.service.CourseService;
import com.example.lms_main.service.StudentService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.http.ResponseEntity;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

class StudentControllerTest {

    private StudentController studentController;
    private CourseService courseService;
    private StudentService studentService;

    @BeforeEach
    void setUp() {
        courseService = mock(CourseService.class);
        studentService = mock(StudentService.class);
        studentController = new StudentController(studentService, courseService);
    }

    @Test
    void testGetAllCourses() {
        Course course1 = new Course();
        course1.setId(1L);
        course1.setName("Course 1");

        Course course2 = new Course();
        course2.setId(2L);
        course2.setName("Course 2");

        when(courseService.getAllCourses()).thenReturn(Arrays.asList(course1, course2));

        List<Course> courses = studentController.getAllCourses();
        assertEquals(2, courses.size());
        assertEquals("Course 1", courses.get(0).getName());
        assertEquals("Course 2", courses.get(1).getName());
    }

    @Test
    void testGetCourseById() {
        Course course = new Course();
        course.setId(1L);
        course.setName("Course 1");

        when(courseService.getCourseById(1L)).thenReturn(java.util.Optional.of(course));

        ResponseEntity<Course> response = studentController.getCourseById(1L);
        assertEquals(200, response.getStatusCodeValue());
        assertEquals("Course 1", response.getBody().getName());
    }
}
