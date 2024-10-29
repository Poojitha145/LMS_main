package com.example.lms_main.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.lms_main.entity.RegisteredUser;
import com.example.lms_main.service.serviceImpl.RegistrationService;

@RestController
public class RegistrationController {
    @Autowired
    RegistrationService registrationService;

    @PostMapping("/register")
    public RegisteredUser register(RegisteredUser registeredUser){
        return registrationService.saveUser(registeredUser);
    }
}
