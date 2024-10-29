package com.example.lms_main.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class StudentDto {
    private int sid;         
    private String username; 
    private String password; 


    public StudentDto(int sid, String username) {
        this.sid = sid;
        this.username = username;
    }
}
