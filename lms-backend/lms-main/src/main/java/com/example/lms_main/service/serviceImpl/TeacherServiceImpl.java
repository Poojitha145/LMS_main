package com.example.lms_main.service.serviceImpl;

import org.springframework.stereotype.Service;

import com.example.lms_main.entity.RegisteredUser;
import com.example.lms_main.repository.RegistrationRepo;
import com.example.lms_main.repository.TeacherRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class TeacherServiceImpl {
    private final TeacherRepository teacherRepository;
    private final RegistrationRepo registrationRepo;

    public RegisteredUser login(String username, String password) {
        return registrationRepo.findByUserAndPassword(username, password);
    }
}
