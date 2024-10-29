package com.example.lms_main.dto;


import lombok.*;

@NoArgsConstructor
@Setter
@Getter
@ToString
public class StudentDto {
    // public StudentDto(int sid, String name, String address, String tel, String nic) {
    //     this.sid = sid;
    //     this.name = name;
    //     this.address = address;
    //     this.tel = tel;
    //     this.nic = nic;
    // }

    // private int sid;
    // private String name;
    // private String address;
    // private String tel;
    // private String nic;

    public StudentDto(String username, String password) {

    }
}
