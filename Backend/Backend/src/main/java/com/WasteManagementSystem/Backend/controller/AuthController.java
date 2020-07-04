package com.WasteManagementSystem.Backend.controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.WasteManagementSystem.Backend.entity.User;
import com.WasteManagementSystem.Backend.service.RegistrationService;
import org.springframework.web.bind.annotation.PutMapping;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class AuthController {

	@Autowired
	private RegistrationService service;

	@PostMapping("/registerUser")
	public User registerUser(@RequestBody User user) throws Exception {
		String tempEmail = user.getEmail();
		if (tempEmail != null && !"".equals(tempEmail)) {
			User userObj = service.fetchUserByEmail(tempEmail);
			if (userObj != null) {
				throw new Exception("User with " + tempEmail + "is already exist");
			}
		}
		User userObj = null;
		userObj = service.saveUser(user);
		return userObj;
	}

	@PostMapping("/loginUser")
	public User loginUser(@RequestBody User user) throws Exception {
		String tempEmail = user.getEmail();
		String tempPass = user.getPassword();
		User userObj = null;
		if (tempEmail != null && tempPass != null) {
			userObj = service.fetchUserByEmailAndPassword(tempEmail, tempPass);
		}
		if (userObj == null) {
			throw new Exception("Bad credentials");
		}

		return userObj;
	}

	@GetMapping("/getUser/{email}")
	public User getUser(@PathVariable String email) {
		return service.fetchUserByEmail(email);
	}

	@PutMapping("/updateUser")
	public User putMethodName(@RequestBody User user) {
		User updatedUser = service.saveUser(user);
		return updatedUser;
	}
}
