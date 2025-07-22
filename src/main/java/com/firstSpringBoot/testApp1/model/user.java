package com.firstSpringBoot.testApp1.model;
import jakarta.persistence.*;


@Entity
@Table(name = "username")
public class user {

    @Id
    private String userId;
    private String password;

    public user() {
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
