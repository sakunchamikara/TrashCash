package com.WasteManagementSystem.Backend.controller;

import java.util.Optional;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class PaymentController {

	@PostMapping("/payment")
	public Object makePayment(@RequestBody Object object) {
		return object;
	}
	
}
