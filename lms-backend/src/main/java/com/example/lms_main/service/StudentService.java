package com.example.lms_main.service;

import org.springframework.stereotype.Service;

import com.example.lms_main.entity.RegisteredUser;

/**
 * Service interface for managing student-related operations.
 */
@Service
public interface StudentService {
    RegisteredUser login(String email, String password);
}
