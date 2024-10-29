package com.example.lms_main.service.serviceImpl;

import org.springframework.stereotype.Service;

import com.example.lms_main.entity.RegisteredUser;
import com.example.lms_main.repository.RegistrationRepo;

@Service
public class RegistrationService {
    private RegistrationRepo registrationRepo;

    public RegisteredUser saveUser(RegisteredUser registeredUser){
        return registrationRepo.save(registeredUser);
    }
}
