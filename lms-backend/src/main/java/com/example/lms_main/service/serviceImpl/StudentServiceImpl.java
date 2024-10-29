package com.example.lms_main.service.serviceImpl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.lms_main.entity.Assignment;
import com.example.lms_main.entity.Course;
import com.example.lms_main.entity.RegisteredUser;
import com.example.lms_main.entity.Student;
import com.example.lms_main.repository.RegistrationRepo;
import com.example.lms_main.repository.StudentRepository;
import com.example.lms_main.service.StudentService;

import lombok.RequiredArgsConstructor;

/**
 * Implementation of StudentService interface for managing student-related operations.
 */
@Service
@RequiredArgsConstructor
public class StudentServiceImpl implements StudentService {
    private final StudentRepository studentRepository;
    private final RegistrationRepo registrationRepo;
    private final CourseServiceImpl courseService;

    @Override
    public RegisteredUser login(String email, String password) {
        return registrationRepo.findByUserAndPassword(email, password);
    }

    /**
     * Retrieves all assignments for a specific student.
     *
     * @param studentEntity the student whose assignments to retrieve
     * @return a list of assignments for the student
     */
    public List<Assignment> getAllAssignmentsByStudents(Student studentEntity) {
        return courseService.getAllAssignmentsByStudent(studentEntity);
    }

    /**
     * Retrieves all courses for a specific student.
     *
     * @param studentEntity the student whose courses to retrieve
     * @return a list of courses available to the student
     */
    public List<Course> getAllCourses(Student studentEntity) {
        return courseService.getAllCourses();
    }
}
