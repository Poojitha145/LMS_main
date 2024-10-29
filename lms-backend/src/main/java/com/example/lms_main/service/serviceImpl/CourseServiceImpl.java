package com.example.lms_main.service.serviceImpl;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.example.lms_main.entity.Assignment;
import com.example.lms_main.entity.Course;
import com.example.lms_main.entity.Student;
import com.example.lms_main.repository.AssignmentRepository;
import com.example.lms_main.repository.CourseRepository;
import com.example.lms_main.service.CourseService;

import lombok.RequiredArgsConstructor;

/**
 * Implementation of CourseService interface for managing courses.
 */
@Service
@RequiredArgsConstructor
public class CourseServiceImpl implements CourseService {
    private final CourseRepository courseRepository;
    private final AssignmentRepository assignmentRepository;

    @Override
    public List<Course> getAllCourses() {
        return courseRepository.findAll();
    }

    @Override
    public Course saveCourse(Course course) {
        return courseRepository.save(course);
    }

    @Override
    public Optional<Course> getCourseById(Long id) {
        return courseRepository.findById(id);
    }

    @Override
    public void createCourse(Course course) {
        courseRepository.save(course);
    }

    @Override
    public void deleteCourse(Long id) {
        courseRepository.deleteById(id);
    }

    /**
     * Retrieves all assignments for a specific student.
     *
     * @param student the student whose assignments to retrieve
     * @return a list of assignments for the student
     */
    public List<Assignment> getAllAssignmentsByStudent(Student student) {
        List<Assignment> assignments = assignmentRepository.findAll();
        return assignments.stream()
                         .filter(ass -> ass.getStudent().getSid() == student.getSid())
                         .collect(Collectors.toList());
    }
    
}
