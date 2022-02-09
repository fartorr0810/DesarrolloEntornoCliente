package com.example.demo.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepo;
@Primary
@Service("servicioUsuario")
public class UsuarioService {
	
	@Autowired
	private UserRepo repositorioUser;
	
	public User addUsuario(User u) {
		return repositorioUser.save(u); 
	}
	
	public User editUsuario(User u) {
		User aux=findById(u.getId());
		return repositorioUser.save(aux);
	}
	public User findById(Integer id) {
		return repositorioUser.findById(id).orElse(null);
	}
	public Optional<User> findByEmail(String email){
		return repositorioUser.findByEmail(email);
	}		
	}
