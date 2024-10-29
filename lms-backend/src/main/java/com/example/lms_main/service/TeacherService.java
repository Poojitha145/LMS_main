package com.example.lms_main.service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.lms_main.entity.Teacher;

/**
 * Service interface for managing teacher-related operations.
 */
@Service
public interface TeacherService {
    Optional<Teacher> login(String email, String password);
}
