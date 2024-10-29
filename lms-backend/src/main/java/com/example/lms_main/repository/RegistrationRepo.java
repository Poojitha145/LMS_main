package com.example.lms_main.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.lms_main.entity.RegisteredUser;

@Repository
public interface RegistrationRepo extends JpaRepository<RegisteredUser, Integer> {
    RegisteredUser findByUserAndPassword(String userName, String password);

}
