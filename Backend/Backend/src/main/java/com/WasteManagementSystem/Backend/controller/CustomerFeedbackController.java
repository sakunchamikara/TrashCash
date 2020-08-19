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
import com.WasteManagementSystem.Backend.entity.CustomerFeedback;
import com.WasteManagementSystem.Backend.entity.CustomerWasteRequest;
import com.WasteManagementSystem.Backend.entity.ProductCat;
import com.WasteManagementSystem.Backend.repository.CustomerFeedbackRepository;
//import com.WasteManagementSystem.Backend.service.OutwasteService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;

@CrossOrigin(origins = "http://localhost:4200")
@RestController

public class CustomerFeedbackController {
	
	@Autowired

    private CustomerFeedbackRepository cusfeedrepo;
//	
//	 @Autowired
//	    private OutwasteService service;

	    @PostMapping("/customerFeedback")
	    public CustomerFeedback createCustomerFeedback(@Valid @RequestBody CustomerFeedback customerFeedback, BindingResult bindingResult) {
			if (bindingResult.hasErrors()) {  
				return null;
			}
	        return cusfeedrepo.save(customerFeedback);
	    }
	    
	    @GetMapping("/customerFeedback")
	    public List<CustomerFeedback> getAllCustomerFeedbacks() {
	        return cusfeedrepo.findAll();
	    }
	    
		@PutMapping("/customerFeedback/{id}")
	    public ResponseEntity<CustomerFeedback> updateCustomerFeedback(@PathVariable(value = "id") int customerFeedbackId,
	         @Valid @RequestBody CustomerFeedback customerFeedbackDetails) throws ResourceNotFoundException {
			CustomerFeedback customerFeedback =cusfeedrepo.findById(customerFeedbackId)
	        .orElseThrow(() -> new ResourceNotFoundException("Feedback not found for this id :: " + customerFeedbackId));

			
			
			customerFeedback.setStatus(customerFeedbackDetails.getStatus());
			
			
	       
	        final CustomerFeedback updatedCustomerFeedback = cusfeedrepo.save(customerFeedback);
	        return ResponseEntity.ok(updatedCustomerFeedback);
	    }
		
		@GetMapping("/customerFeedback/{id}")
	    public ResponseEntity<CustomerFeedback> getCustomerFeedbackById(@PathVariable(value = "id") int customerFeedbackId)
	        throws ResourceNotFoundException {
			CustomerFeedback customerFeedback = cusfeedrepo.findById(customerFeedbackId)
	          .orElseThrow(() -> new ResourceNotFoundException("feedback not found for this id :: " + customerFeedbackId));
	        return ResponseEntity.ok().body(customerFeedback);
	    }
}