package com.example.lms_main.controller;


import com.example.lms_main.dto.LoginRequest;
import com.example.lms_main.entity.RegisteredUser;
import com.example.lms_main.service.StudentService;
import com.example.lms_main.service.TeacherService;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class LoginController {

    private final TeacherService teacherService;
    private final StudentService studentService;

    public LoginController(TeacherService teacherService, StudentService studentService) {
        this.teacherService = teacherService;
        this.studentService = studentService;
    }
    @PostMapping("/login/")
    public ResponseEntity<String> login(@RequestBody LoginRequest loginRequest) {
        RegisteredUser user = studentService.login(loginRequest.getUsername(), loginRequest.getPassword());
        if(user.getRole() .equals("STUDENT")){
            return ResponseEntity.ok("Student login successful");
        } else if (user.getRole().equals("TEACHER")){
            return ResponseEntity.ok("Teacher login successful");
        }else{
            return ResponseEntity.status(401).body("Invalid credentials for user");
        }
    }

}

