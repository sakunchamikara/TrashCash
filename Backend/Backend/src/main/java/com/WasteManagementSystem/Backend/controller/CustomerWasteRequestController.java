package com.WasteManagementSystem.Backend.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

import com.WasteManagementSystem.Backend.entity.CustomerWasteRequest;
import com.WasteManagementSystem.Backend.repository.CustomerWasteRequestRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;

@CrossOrigin(origins = "http://localhost:4200")
@RestController

public class CustomerWasteRequestController {
    @Autowired

    private CustomerWasteRequestRepository customerWasteRequestRepo;

    @PostMapping("/customerWasteRequest")
    public CustomerWasteRequest  createCustomerWasteRequest(@Valid @RequestBody CustomerWasteRequest customerWasteRequest, BindingResult bindingResult) {
		if (bindingResult.hasErrors()) {
			return null;
		}
        return customerWasteRequestRepo.save(customerWasteRequest);
    }
    
    
}