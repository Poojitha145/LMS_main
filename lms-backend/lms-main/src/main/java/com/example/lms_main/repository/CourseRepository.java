package com.example.lms_main.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.lms_main.entity.Course;
@Repository
public interface CourseRepository extends JpaRepository<Course,Long>{

}
