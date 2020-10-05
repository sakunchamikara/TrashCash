package com.WasteManagementSystem.Backend.customer;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "customer")
public class Customer {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String firstName;
	private String type = "customer";
	private String email;
	private int contactNumber;
	private String address;
	private String password;
	private Boolean termStatus;
	
	public Customer() { }
	
	public Customer(int id, String firstName, String lastName, String email, int contactNumber, String address,
			String password, Boolean termStatus) {
	private String location;
	
	public Customer() { }
	
	public Customer(int id, String firstName, String type, String email, int contactNumber, String address,
			String password,String location) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.type = type;
		this.email = email;
		this.contactNumber = contactNumber;
		this.address = address;
		this.password = password;
		this.termStatus = termStatus;
		this.location = location;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public int getContactNumber() {
		return contactNumber;
	}

	public void setContactNumber(int contactNumber) {
		this.contactNumber = contactNumber;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	public String getLocation(){
		return location;
	}
	public void setLocation(String location){
		this.location=location;
	}

	public Boolean getTermStatus() {
		return termStatus;
	}

	public void setTermStatus(boolean termStatus) {
		this.termStatus = termStatus;
	}

	@Override
	public String toString() {
		return "Customer [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", email=" + email
				+ ", contactNumber=" + contactNumber + ", address=" + address + ", password=" + password + ", termStatus=" + termStatus + "]";
		return "Customer [id=" + id + ", firstName=" + firstName + ", type=" + type + ", email=" + email
				+ ", contactNumber=" + contactNumber + ", address=" + address + ", password=" + password + ", location=" +location +"]";
	}

}
