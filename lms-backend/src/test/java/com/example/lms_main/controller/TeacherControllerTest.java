package com.example.lms_main.controller;

import com.example.lms_main.entity.Teacher;
import com.example.lms_main.service.TeacherService;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.Optional;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

class TeacherControllerTest {

    private MockMvc mockMvc;

    @Mock
    private TeacherService teacherService;

    @InjectMocks
    private TeacherController teacherController;

    TeacherControllerTest() {
        MockitoAnnotations.openMocks(this);
        this.mockMvc = MockMvcBuilders.standaloneSetup(teacherController).build();
    }

    @Test
    void testTeacherLogin() throws Exception {
        Teacher teacher = new Teacher();
        teacher.setEmail("teacher@example.com");
        teacher.setPassword("password123");

        when(teacherService.login("teacher@example.com", "password123")).thenReturn(Optional.of(teacher));

        mockMvc.perform(post("/api/login/teacher")
                .contentType(MediaType.APPLICATION_JSON)
                .content("{\"email\":\"teacher@example.com\", \"password\":\"password123\"}"))
                .andExpect(status().isOk());
    }
}
