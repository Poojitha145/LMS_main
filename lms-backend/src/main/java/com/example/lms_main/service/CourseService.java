package com.example.lms_main.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.lms_main.entity.Course;

/**
 * Service interface for managing courses.
 */
@Service
public interface CourseService {
    List<Course> getAllCourses();
    Course saveCourse(Course course);
    Optional<Course> getCourseById(Long id);
    void createCourse(Course course);
    void deleteCourse(Long id);
}
