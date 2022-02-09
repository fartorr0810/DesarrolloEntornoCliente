package com.example.demo.model;

import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Comentario {
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private String idcomentario;
	private String email;
	private String telefono;
	private String dni;
	private String comentario;
	@ManyToOne
	private User usuario;
	
	public Comentario(String email, String telefono, String dni, String comentario, User usuario) {
		super();
		this.email = email;
		this.telefono = telefono;
		this.dni = dni;
		this.comentario = comentario;
		this.usuario = usuario;
	}

	public Comentario() {
		super();
	}
	
	public Comentario(User usuario) {
		super();
		this.usuario = usuario;
	}
	public String getIdcomentario() {
		return idcomentario;
	}
	public void setIdcomentario(String idcomentario) {
		this.idcomentario = idcomentario;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getTelefono() {
		return telefono;
	}
	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}
	public String getDni() {
		return dni;
	}
	public void setDni(String dni) {
		this.dni = dni;
	}
	public String getComentario() {
		return comentario;
	}
	public void setComentario(String comentario) {
		this.comentario = comentario;
	}

	@Override
	public int hashCode() {
		return Objects.hash(idcomentario);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Comentario other = (Comentario) obj;
		return Objects.equals(idcomentario, other.idcomentario);
	}
	
}
