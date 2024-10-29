package com.example.lms_main.controller;

import com.example.lms_main.dto.LoginRequest;
import com.example.lms_main.entity.RegisteredUser;
import com.example.lms_main.service.StudentService;
import com.example.lms_main.service.TeacherService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentMatchers;
import org.mockito.Mockito;
import org.springframework.http.ResponseEntity;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

class LoginControllerTest {

    private LoginController loginController;
    private StudentService studentService;
    private TeacherService teacherService;

    @BeforeEach
    void setUp() {
        studentService = mock(StudentService.class);
        teacherService = mock(TeacherService.class);
        loginController = new LoginController(teacherService, studentService);
    }

    @Test
    void testLoginSuccessStudent() {
        LoginRequest loginRequest = new LoginRequest("student", "password");
        RegisteredUser user = new RegisteredUser();
        user.setRole("STUDENT");

        when(studentService.login(loginRequest.getUsername(), loginRequest.getPassword())).thenReturn(user);

        ResponseEntity<String> response = loginController.login(loginRequest);
        assertEquals("Student login successful", response.getBody());
        assertEquals(200, response.getStatusCodeValue());
    }

    @Test
    void testLoginSuccessTeacher() {
        LoginRequest loginRequest = new LoginRequest("teacher", "password");
        RegisteredUser user = new RegisteredUser();
        user.setRole("TEACHER");

        when(studentService.login(loginRequest.getUsername(), loginRequest.getPassword())).thenReturn(user);

        ResponseEntity<String> response = loginController.login(loginRequest);
        assertEquals("Teacher login successful", response.getBody());
        assertEquals(200, response.getStatusCodeValue());
    }

    @Test
    void testLoginFailure() {
        LoginRequest loginRequest = new LoginRequest("invalidUser", "invalidPassword");
        RegisteredUser user = new RegisteredUser();
        user.setRole("INVALID");

        when(studentService.login(loginRequest.getUsername(), loginRequest.getPassword())).thenReturn(user);

        ResponseEntity<String> response = loginController.login(loginRequest);
        assertEquals("Invalid credentials for user", response.getBody());
        assertEquals(401, response.getStatusCodeValue());
    }
}
