//package com.WasteManagementSystem.Backend.Outsource;
//
//import javax.persistence.Entity;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
//import javax.persistence.Id;
//import javax.persistence.Table;
//
//@Entity
//@Table(name = "outsource")
//public class Outsource {
//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
//	private int id;
//	private String CompanyName;
//	private String email;
//	private int contactNumber;
//	private String address;
//	private String password;
//	
//	public Outsource() { }
//	
//	public Outsource(int id, String CompanyName, String email, int contactNumber, String address,
//			String password) {
//		super();
//		this.id = id;
//		this.CompanyName = CompanyName;
//		this.email = email;
//		this.contactNumber = contactNumber;
//		this.address = address;
//		this.password = password;
//	}
//
//	public int getId() {
//		return id;
//	}
//
//	public void setId(int id) {
//		this.id = id;
//	}
//
//	public String getCompanyName() {
//		return CompanyName;
//	}
//
//	public void setCompanyName(String CompanyName) {
//		this.CompanyName = CompanyName;
//	}
//
//	
//
//	public String getEmail() {
//		return email;
//	}
//
//	public void setEmail(String email) {
//		this.email = email;
//	}
//
//	public int getContactNumber() {
//		return contactNumber;
//	}
//
//	public void setContactNumber(int contactNumber) {
//		this.contactNumber = contactNumber;
//	}
//
//	public String getAddress() {
//		return address;
//	}
//
//	public void setAddress(String address) {
//		this.address = address;
//	}
//
//	public String getPassword() {
//		return password;
//	}
//
//	public void setPassword(String password) {
//		this.password = password;
//	}
//
//	@Override
//	public String toString() {
//		return "Customer [id=" + id + ", CompanyName=" + CompanyName + ", email=" + email
//				+ ", contactNumber=" + contactNumber + ", address=" + address + ", password=" + password + "]";
//	}
//
//}
