package com.WasteManagementSystem.Backend.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import com.WasteManagementSystem.Backend.entity.CustomerWasteRequest;
import com.WasteManagementSystem.Backend.repository.CustomerWasteRequestRepository;
import com.WasteManagementSystem.Backend.service.CustomerWasteRequestService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;

@CrossOrigin(origins = "http://localhost:4200")
@RestController

public class CustomerWasteRequestController {
    @Autowired

    private CustomerWasteRequestRepository customerWasteRequestRepo;

    @Autowired
    private CustomerWasteRequestService service;

    @PostMapping("/customerWasteRequest")
    public CustomerWasteRequest createCustomerWasteRequest(@Valid @RequestBody CustomerWasteRequest customerWasteRequest, BindingResult bindingResult) {
		if (bindingResult.hasErrors()) {  
			return null;
		}
        return customerWasteRequestRepo.save(customerWasteRequest);
    }

    @GetMapping("/customerWasteRequest")
    public List<CustomerWasteRequest> getAllCustomerWasteRequests() {
        return customerWasteRequestRepo.findAll();
    }
    @DeleteMapping("/customerWasteRequest/{id}")
    public Map<String, Boolean> deletecteCustomerWasteRequest(@PathVariable(value = "id") int customerWasteRequestId)
         throws ResourceNotFoundException {
            CustomerWasteRequest customerWasteRequest = customerWasteRequestRepo.findById(customerWasteRequestId)
       .orElseThrow(() -> new ResourceNotFoundException("Waste not found for this id :: " + customerWasteRequestId));

       customerWasteRequestRepo.delete(customerWasteRequest);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
	
	@PutMapping("/customerWasteRequest/{id}")
    public ResponseEntity<CustomerWasteRequest> updateCustomerWasteRequest(@PathVariable(value = "id") int customerWasteRequestId,
         @Valid @RequestBody CustomerWasteRequest customerWasteRequestDetails) throws ResourceNotFoundException {
            CustomerWasteRequest customerWasteRequest =customerWasteRequestRepo.findById(customerWasteRequestId)
        .orElseThrow(() -> new ResourceNotFoundException("Waste not found for this id :: " + customerWasteRequestId));

        customerWasteRequest.setWasteType(customerWasteRequestDetails.getWasteType());
        customerWasteRequest.setQuantity(customerWasteRequestDetails.getQuantity());
        customerWasteRequest.setDate(customerWasteRequestDetails.getDate());
        customerWasteRequest.setCustomer(customerWasteRequestDetails.getCustomer());
       ;
        final CustomerWasteRequest updatedCustomerWasteRequest = customerWasteRequestRepo.save(customerWasteRequest);
        return ResponseEntity.ok(updatedCustomerWasteRequest);
    }
	
	@GetMapping("/customerWasteRequest/{id}")
    public ResponseEntity<CustomerWasteRequest> getCustomerWasteRequestById(@PathVariable(value = "id") int customerWasteRequestId)
        throws ResourceNotFoundException {
            CustomerWasteRequest customerWasteRequest = customerWasteRequestRepo.findById(customerWasteRequestId)
          .orElseThrow(() -> new ResourceNotFoundException("Waste request not found for this id :: " + customerWasteRequestId));
        return ResponseEntity.ok().body(customerWasteRequest);
    }

    @GetMapping("/customerWasteRequest/{customer}")
    public List<CustomerWasteRequest> getCustomerWasteRequest(@PathVariable String customer) {
        return service.fetchWasteRequestByCustomer(customer);
    }
    
}