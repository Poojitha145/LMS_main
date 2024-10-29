package com.example.lms_main.service.serviceImpl;

import org.springframework.stereotype.Service;

import com.example.lms_main.entity.RegisteredUser;
import com.example.lms_main.repository.RegistrationRepo;
import com.example.lms_main.repository.TeacherRepository;

import lombok.RequiredArgsConstructor;

/**
 * Implementation of TeacherService interface for managing teacher-related operations.
 */
@Service
@RequiredArgsConstructor
public class TeacherServiceImpl {
    private final TeacherRepository teacherRepository;
    private final RegistrationRepo registrationRepo;

    /**
     * Logs in a teacher with provided credentials.
     *
     * @param username the teacher's username
     * @param password the teacher's password
     * @return the logged-in user
     */
    public RegisteredUser login(String username, String password) {
        return registrationRepo.findByUserAndPassword(username, password);
    }
}
