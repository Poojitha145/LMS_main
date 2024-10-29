package com.example.lms_main.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.lms_main.entity.Student;
@Repository
public interface StudentRepository extends JpaRepository<Student,String>{
    Optional<Student> findByUsernameAndPassword(String username, String password);
}
