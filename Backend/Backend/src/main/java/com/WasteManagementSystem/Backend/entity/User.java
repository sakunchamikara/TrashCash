package com.WasteManagementSystem.Backend.entity;

import java.util.Arrays;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "user")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String fisrtName;
	private String lastName;
	private Date birthday;
	private String userType;
	private String gender;
	private String email;
	private String password;

	@Column(name = "image", length = 1000)
	private byte[] image;
	private int contactNumber;

	public User() {
	}

	public User(int id, String fisrtName, String lastName, Date birthday, String userType, String gender, String email,
			String password, byte[] image, int contactNumber) {
		this.id = id;
		this.fisrtName = fisrtName;
		this.lastName = lastName;
		this.birthday = birthday;
		this.userType = userType;
		this.gender = gender;
		this.email = email;
		this.password = password;
		this.image = image;
		this.contactNumber = contactNumber;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFisrtName() {
		return fisrtName;
	}

	public void setFisrtName(String fisrtName) {
		this.fisrtName = fisrtName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public Date getBirthday() {
		return birthday;
	}

	public void setBirthday(Date birthday) {
		this.birthday = birthday;
	}

	public String getUserType() {
		return userType;
	}

	public void setUserType(String userType) {
		this.userType = userType;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public byte[] getImage() {
		return image;
	}

	public void setImage(byte[] image) {
		this.image = image;
	}

	public int getContactNumber() {
		return contactNumber;
	}

	public void setContactNumber(int contactNumber) {
		this.contactNumber = contactNumber;
	}

	@Override
	public String toString() {
		return "User [birthday=" + birthday + ", contactNumber=" + contactNumber + ", email=" + email + ", fisrtName="
				+ fisrtName + ", gender=" + gender + ", id=" + id + ", image=" + Arrays.toString(image) + ", lastName="
				+ lastName + ", password=" + password + ", userType=" + userType + "]";
	}

	

	


}
