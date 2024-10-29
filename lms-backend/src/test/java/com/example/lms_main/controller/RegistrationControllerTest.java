package com.example.lms_main.controller;

import com.example.lms_main.entity.RegisteredUser;
import com.example.lms_main.service.serviceImpl.RegistrationService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.http.ResponseEntity;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

class RegistrationControllerTest {

    private RegistrationController registrationController;
    private RegistrationService registrationService;

    @BeforeEach
    void setUp() {
        registrationService = mock(RegistrationService.class);
        registrationController = new RegistrationController();
        registrationController.registrationService = registrationService;
    }

    @Test
    void testRegisterUser() {
        RegisteredUser registeredUser = new RegisteredUser();
        registeredUser.setUsername("newUser");

        when(registrationService.saveUser(registeredUser)).thenReturn(registeredUser);

        RegisteredUser response = registrationController.register(registeredUser);
        assertEquals("newUser", response.getUsername());
        verify(registrationService, times(1)).saveUser(registeredUser);
    }
}
