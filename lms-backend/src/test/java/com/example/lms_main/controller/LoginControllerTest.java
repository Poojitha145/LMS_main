// LoginControllerTest.java

package com.example.lms_main.controller;

import com.example.lms_main.entity.RegisteredUser;
import com.example.lms_main.entity.Teacher;
import com.example.lms_main.service.StudentService;
import com.example.lms_main.service.TeacherService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.Optional; // Ensure this import is added

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

class LoginControllerTest {

    private MockMvc mockMvc;

    @Mock
    private StudentService studentService;

    @Mock
    private TeacherService teacherService;

    @InjectMocks
    private LoginController loginController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        this.mockMvc = MockMvcBuilders.standaloneSetup(loginController).build();
    }

    @Test
    void testStudentLoginSuccess() throws Exception {
        RegisteredUser registeredUser = new RegisteredUser(1L, "studentUser", "password123", "STUDENT");

        // Simulate a successful login
        when(studentService.login("studentUser", "password123"))
                .thenReturn(registeredUser);

        mockMvc.perform(post("/api/login/student")
                .contentType(MediaType.APPLICATION_JSON)
                .content("{\"username\":\"studentUser\", \"password\":\"password123\"}"))
                .andExpect(status().isOk());
    }

    @Test
    void testTeacherLoginSuccess() throws Exception {
        Teacher teacher = new Teacher(); // Assuming Teacher class is properly defined
        teacher.setId(2L); // Ensure this method exists in Teacher class
        teacher.setUsername("teacherUser");
        teacher.setPassword("password123");

        // Simulate a successful login with an Optional<Teacher>
        when(teacherService.login("teacherUser", "password123"))
                .thenReturn(Optional.of(teacher));

        mockMvc.perform(post("/api/login/teacher")
                .contentType(MediaType.APPLICATION_JSON)
                .content("{\"username\":\"teacherUser\", \"password\":\"password123\"}"))
                .andExpect(status().isOk());
    }

    @Test
    void testStudentLoginFailure() throws Exception {
        // Simulate a failed login for the student
        when(studentService.login("unknownUser", "wrongPassword"))
                .thenReturn(null); // StudentService login method returns null for failure

        mockMvc.perform(post("/api/login/student")
                .contentType(MediaType.APPLICATION_JSON)
                .content("{\"username\":\"unknownUser\", \"password\":\"wrongPassword\"}"))
                .andExpect(status().isUnauthorized());
    }

    @Test
    void testTeacherLoginFailure() throws Exception {
        // Simulate a failed login with an empty Optional for the teacher
        when(teacherService.login("unknownTeacher", "wrongPassword"))
                .thenReturn(Optional.empty());

        mockMvc.perform(post("/api/login/teacher")
                .contentType(MediaType.APPLICATION_JSON)
                .content("{\"username\":\"unknownTeacher\", \"password\":\"wrongPassword\"}"))
                .andExpect(status().isUnauthorized());
    }
}
