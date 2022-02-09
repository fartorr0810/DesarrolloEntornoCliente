package com.example.demo.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepo;


@RestController
public class UserController {

    @Autowired private UserRepo userRepo;

    @GetMapping("/user")
    public ResponseEntity<Integer> getUserDetails(){
		String email=(String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return ResponseEntity.ok(userRepo.findByEmail(email).get().getId());
    }


}