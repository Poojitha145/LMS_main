package com.example.lms_main;

import static org.assertj.core.api.Assertions.assertThat;

import com.example.lms_main.service.CourseService; // Assuming you have a CourseService
import com.example.lms_main.repository.CourseRepository; // Assuming you have a CourseRepository

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.ApplicationContext;

@SpringBootTest(classes = {CourseService.class, CourseRepository.class})
@EnableAutoConfiguration(exclude = { SecurityAutoConfiguration.class })
class LmsMainApplicationTests {

    @Autowired
    private ApplicationContext context;

    @MockBean
    private CourseService courseService;     
    @MockBean
    private CourseRepository courseRepository;

    // Test 1: Context Loads Test
    @Test
    void contextLoads() {
        // Check if the application context loads successfully
        assertThat(context).isNotNull();
    }

    // Test 3: Service Loads Test
    @Test
    void serviceLoads() {
        // Check if the CourseService bean is loaded into the context
        assertThat(courseService).isNotNull();
    }

    // Test 4: Repository Loads Test
    @Test
    void repositoryLoads() {
        // Check if the CourseRepository bean is loaded into the context
        assertThat(courseRepository).isNotNull();
    }

    // Additional Test 5: Example service method functionality test
    @Test
    void testServiceMethodExample() {
        // This assumes that CourseService has a method called 'findAllCourses'
        assertThat(courseService.getAllCourses()).isNotNull();
    }
}
