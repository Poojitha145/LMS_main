package com.example.lms_main.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.lms_main.dto.LoginRequest;
import com.example.lms_main.entity.RegisteredUser;
import com.example.lms_main.service.StudentService;
import com.example.lms_main.service.TeacherService;

@RestController
@RequestMapping("/auth")
public class LoginController {

    private final TeacherService teacherService;
    private final StudentService studentService;

    public LoginController(TeacherService teacherService, StudentService studentService) {
        this.teacherService = teacherService;
        this.studentService = studentService;
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginRequest loginRequest) {
        RegisteredUser user = studentService.login(loginRequest.getUsername(), loginRequest.getPassword());
        if (user != null) {
            if (user.getRole().equals("STUDENT")) {
                return ResponseEntity.ok("Student login successful");
            } else if (user.getRole().equals("TEACHER")) {
                return ResponseEntity.ok("Teacher login successful");
            }
        }
        return ResponseEntity.status(401).body("Invalid credentials for user");
    }
}
