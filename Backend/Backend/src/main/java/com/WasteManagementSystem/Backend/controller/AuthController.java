package com.WasteManagementSystem.Backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.WasteManagementSystem.Backend.entity.User;
import com.WasteManagementSystem.Backend.service.RegistrationService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class AuthController {
	
	@Autowired
	private RegistrationService service;
	
	@PostMapping("/registerUser")
	public User registerUser(@RequestBody User user) throws Exception {
		String tempEmail = user.getEmail();
		if(tempEmail != null && !"".equals(tempEmail)) {
			User userObj=service.fetchUserByEmail(tempEmail);
			if(userObj!= null) {
				throw new Exception("User with "+tempEmail+"is already exist");
			}
		}
		User userObj = null;
		userObj=service.saveUser(user); 
		return userObj;
	}
	
	@PostMapping("/loginUser")
	public User loginUser(@RequestBody User user) throws Exception{
		String tempEmail=user.getEmail();
		String tempPass=user.getPassword();
		User userObj=null;
		if(tempEmail != null && tempPass != null) {
			userObj = service.fetchUserByEmailAndPassword(tempEmail, tempPass);
		}
		if(userObj == null) {
			throw new Exception("Bad credentials");
		}
		
		return userObj;
	}
}