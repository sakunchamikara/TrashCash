package com.WasteManagementSystem.Backend.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
<<<<<<< HEAD
=======
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
>>>>>>> c97b06ef4a08dd1dc8e99918a4f583d2be7ad0ae
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class EmailController {
	
	@Autowired
	EmailService emailService;
	
	@GetMapping("/sendMail/{email}")
<<<<<<< HEAD
	public String sendEmail(@PathVariable (value = "email",required = true )String email) {
		return emailService.sendEmail(email);
	}

=======
	public String sendEmail(@PathVariable (value = "email",required = true )String email){
		return emailService.sendEmail(email);
	}
	
	@PostMapping("/mailContent")
	public String getContent(@RequestBody String content) {
		emailService.setcontent(content);
		return "ok";
	}
>>>>>>> c97b06ef4a08dd1dc8e99918a4f583d2be7ad0ae
}
