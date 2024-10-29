package com.example.lms_main.service.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.lms_main.entity.Assignment;
import com.example.lms_main.entity.Course;
import com.example.lms_main.entity.RegisteredUser;
import com.example.lms_main.entity.Student;
import com.example.lms_main.repository.RegistrationRepo;
import com.example.lms_main.repository.StudentRepository;
import com.example.lms_main.service.StudentService;

@Service
public class StudentServiceImpl implements StudentService {
    @Autowired
    private StudentRepository studentRepository;
    @Autowired
    private RegistrationRepo registrationRepo;
    @Autowired
    private CourseServiceImpl courseService;

    @Override
    public RegisteredUser login(String username, String password) {
        return registrationRepo.findByUserAndPassword(username, password);
    }

    public List<Assignment> getAllAssignmentsByStudents(Student studentEntity){
        return courseService.getAllAssignmentsByStudent(studentEntity);
    }

    public List<Course> getAllCourses(Student studentEntity){
        return courseService.getAllCourses();
    }

}
