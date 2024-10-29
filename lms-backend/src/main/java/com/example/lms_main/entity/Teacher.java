package com.example.lms_main.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "teacher_table")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Data
public class Teacher {
    @Id
    @Column(name= "username")
    private String username;

    private String password;
}
