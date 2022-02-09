package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import com.example.demo.model.Comentario;
import com.example.demo.repository.ComentarioRepository;

@Primary
@Service("ComentarioService")
public class ComentarioService {
	@Autowired
	private ComentarioRepository repositorioComentario;
	
	
	public Comentario addComentario(Comentario c) {
		return repositorioComentario.save(c);
	}
	public void deleteComentario(Comentario c) {
		repositorioComentario.delete(c);
	}
	public void deleteComentarioById(Integer idcomentario) {
		repositorioComentario.deleteById(idcomentario);
	} 
}
