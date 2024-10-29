package com.example.lms_main.entity;

import jakarta.persistence.*;
import lombok.*;


@Entity
@Table(name = "student_table")
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@ToString

public class Student{
     @Id
     @GeneratedValue(strategy=GenerationType.AUTO)
     @Column(name = "sid",length = 40)
     private int sid;

    @Id
    @Column(name = "username")
    private String username;

    @Column(name = "password")
    private String password;
}
