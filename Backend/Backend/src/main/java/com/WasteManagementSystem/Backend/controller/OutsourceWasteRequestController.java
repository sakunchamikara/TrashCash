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
//import com.WasteManagementSystem.Backend.entity.CustomerWasteRequest;
import com.WasteManagementSystem.Backend.entity.OutsourceWasteRequest;
import com.WasteManagementSystem.Backend.entity.Product;
import com.WasteManagementSystem.Backend.repository.OutsourceWasteRequestRepository;
import com.WasteManagementSystem.Backend.service.OutwasteService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;

@CrossOrigin(origins = "http://localhost:4200")
@RestController

public class OutsourceWasteRequestController {
	
	@Autowired

    private OutsourceWasteRequestRepository outsourceWasteRequestRepo;
	
	 @Autowired
	    private OutwasteService service;

	    @PostMapping("/outRequest")
	    public OutsourceWasteRequest createOutsourceWasteRequest(@Valid @RequestBody OutsourceWasteRequest outsourceWasteRequest, BindingResult bindingResult) {
			if (bindingResult.hasErrors()) {  
				return null;
			}
	        return outsourceWasteRequestRepo.save(outsourceWasteRequest);
	    }
	    
	    
	    @GetMapping("/outRequest")
	    public List<OutsourceWasteRequest> getAllOutsourceWasteRequests() {
	        return outsourceWasteRequestRepo.findAll();
	    }
	    
	    @GetMapping("/getwaste/{email}")
	    public List<OutsourceWasteRequest> getProduct(@PathVariable String email) {
	        return service.fetchUserByEmail(email);
	    }
	    
	    @DeleteMapping("/outRequest/{id}")
	    public Map<String, Boolean> deletecOutWasteRequest(@PathVariable(value = "id") int outWasteRequestId)
	         throws ResourceNotFoundException {
	    	OutsourceWasteRequest outsourceWasteRequest = outsourceWasteRequestRepo.findById(outWasteRequestId)
	       .orElseThrow(() -> new ResourceNotFoundException("Waste not found for this id :: " + outWasteRequestId));

	    	outsourceWasteRequestRepo.delete(outsourceWasteRequest);
	        Map<String, Boolean> response = new HashMap<>();
	        response.put("deleted", Boolean.TRUE);
	        return response;
	    }

       
	    
	    
}