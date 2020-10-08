package com.WasteManagementSystem.Backend.customer;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.WasteManagementSystem.Backend.customer.orders.Orders;

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
	private int termStatus;
	private String location;
	@OneToMany(mappedBy="customer", cascade = CascadeType.ALL)
	private List<Orders> orders;
	
	public Customer() { }

	public Customer(int id, String firstName, String type, String email, int contactNumber, String address,
			String password, int termStatus, String location, List<Orders> orders) {
		this.id = id;
		this.firstName = firstName;
		this.type = type;
		this.email = email;
		this.contactNumber = contactNumber;
		this.address = address;
		this.password = password;
		this.termStatus = termStatus;
		this.location = location;
		this.orders = orders;
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

	public int getTermStatus() {
		return termStatus;
	}

	public void setTermStatus(int termStatus) {
		this.termStatus = termStatus;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}
	

	public List<Orders> getOrders() {
		return orders;
	}

	public void setOrders(List<Orders> orders) {
		this.orders = orders;
	}

	@Override
	public String toString() {
		return "Customer [address=" + address + ", contactNumber=" + contactNumber + ", email=" + email + ", firstName="
				+ firstName + ", id=" + id + ", location=" + location + ", orders=" + orders + ", password=" + password
				+ ", termStatus=" + termStatus + ", type=" + type + "]";
	}

	
	
	

}
