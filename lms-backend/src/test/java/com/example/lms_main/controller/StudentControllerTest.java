package com.example.lms_main.controller;

import com.example.lms_main.entity.Assignment;
import com.example.lms_main.entity.Student;
import com.example.lms_main.service.StudentService;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

class StudentControllerTest {

    private MockMvc mockMvc;

    @Mock
    private StudentService studentService;

    @InjectMocks
    private StudentController studentController;

    StudentControllerTest() {
        MockitoAnnotations.openMocks(this);
        this.mockMvc = MockMvcBuilders.standaloneSetup(studentController).build();
    }

    @Test
    void testGetStudentAssignments() throws Exception {
        List<Assignment> assignments = new ArrayList<>(); 
        assignments.add(new Assignment("Math Assignment", new Student()));

        when(studentService.getAllAssignmentsByStudents(new Student())).thenReturn(assignments);

        mockMvc.perform(get("/api/student/assignments")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }
}
