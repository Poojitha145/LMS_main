package com.example.lms_main.service.serviceImpl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.lms_main.entity.Assignment;
import com.example.lms_main.repository.AssignmentRepository;
import com.example.lms_main.service.AssignmentService;

import lombok.RequiredArgsConstructor;

/**
 * Implementation of AssignmentService interface for managing assignments.
 */
@Service
@RequiredArgsConstructor
public class AssignmentServiceImpl implements AssignmentService {
    private final AssignmentRepository assignmentRepository;

    @Override
    public void createAssignment(Assignment assignment) {
        assignmentRepository.save(assignment);
    }

    @Override
    public void deleteAssignment(Long id) {
        assignmentRepository.deleteById(id);
    }

    @Override
    public List<Assignment> getAllAssignments() {
        return assignmentRepository.findAll();
    }
}
