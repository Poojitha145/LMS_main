package com.example.lms_main.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.lms_main.entity.Assignment;

@Service
public interface AssignmentService {
    void createAssignment(Assignment assignment);
    void deleteAssignment(Long id);

    List<Assignment> getAllAssignments();
}
