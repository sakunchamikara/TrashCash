package com.WasteManagementSystem.Backend.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class EmailController {
	
	@Autowired
	EmailService emailService;
	
	@GetMapping("/sendMail/{email}")
	public String sendEmail(@PathVariable (value = "email",required = true )String email) {
		return emailService.sendEmail(email);
	}

}
