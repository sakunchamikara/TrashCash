package com.WasteManagementSystem.Backend.entity;

import javax.validation.constraints.NotNull;
import javax.persistence.Column;

//import org.hibernate.validator.constraints.Range;

//import javax.validation.constraints.NotEmpty;
//import javax.validation.constraints.Min;
//import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "contactus")
public class Contactus {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@NotNull
	private int id;
	@NotNull
	private String name;
	@NotNull
	private String email;
	@NotNull
	private int phone ;
	@NotNull
	private String message;
	@NotNull
	
	@NotNull
	

	public Contactus() {
	}

	public Contactus(int id, String name, String email, int phone, String message) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.phone = phone;
		this.message = message;

	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public int getPhone() {
		return phone;
	}

	public void setPhone(int phone) {
		this.phone = phone;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

}