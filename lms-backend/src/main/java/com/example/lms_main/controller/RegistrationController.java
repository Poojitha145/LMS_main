package com.example.lms_main.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.lms_main.entity.RegisteredUser;
import com.example.lms_main.service.serviceImpl.RegistrationService;

@RestController
public class RegistrationController {
    @Autowired
    RegistrationService registrationService;

    @PostMapping("/register")
    public ResponseEntity<RegisteredUser> register(@RequestBody RegisteredUser registeredUser) {
        RegisteredUser savedUser = registrationService.saveUser(registeredUser);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedUser);
    }
}
