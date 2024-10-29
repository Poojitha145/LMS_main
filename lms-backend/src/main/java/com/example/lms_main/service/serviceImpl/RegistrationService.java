package com.example.lms_main.service.serviceImpl;

import org.springframework.stereotype.Service;

import com.example.lms_main.entity.RegisteredUser;
import com.example.lms_main.repository.RegistrationRepo;

import lombok.RequiredArgsConstructor;

/**
 * Service for managing registration and user-related operations.
 */
@Service
@RequiredArgsConstructor
public class RegistrationService {
    private final RegistrationRepo registrationRepo;

    /**
     * Saves a registered user.
     *
     * @param registeredUser the user to save
     * @return the saved user
     */
    public RegisteredUser saveUser(RegisteredUser registeredUser) {
        return registrationRepo.save(registeredUser);
    }
}
