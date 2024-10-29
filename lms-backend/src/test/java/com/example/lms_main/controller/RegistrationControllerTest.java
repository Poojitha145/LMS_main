package com.example.lms_main.controller;

import com.example.lms_main.entity.RegisteredUser;
import com.example.lms_main.service.RegistrationService;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

class RegistrationControllerTest {

    private MockMvc mockMvc;

    @Mock
    private RegistrationService registrationService;

    @InjectMocks
    private RegistrationController registrationController;

    RegistrationControllerTest() {
        MockitoAnnotations.openMocks(this);
        this.mockMvc = MockMvcBuilders.standaloneSetup(registrationController).build();
    }

    @Test
    void testRegisterUser() throws Exception {
        RegisteredUser newUser = new RegisteredUser(1L, "newUser", "password123", "STUDENT");

        when(registrationService.saveUser(newUser)).thenReturn(newUser);

        mockMvc.perform(post("/api/register")
                .contentType(MediaType.APPLICATION_JSON)
                .content("{\"username\":\"newUser\", \"password\":\"password123\", \"role\":\"STUDENT\"}"))
                .andExpect(status().isOk());
    }
}
