package com.WasteManagementSystem.Backend.controller;

import java.util.HashMap;
//import java.util.HashMap;
import java.util.List;
//import java.util.Map;
import java.util.Map;

import javax.validation.Valid;

import com.WasteManagementSystem.Backend.entity.OutsourceWasteRequest;
//import com.WasteManagementSystem.Backend.entity.User;
//import com.WasteManagementSystem.Backend.entity.User;
import com.WasteManagementSystem.Backend.repository.OutsourceWasteRequestRepository;
import com.WasteManagementSystem.Backend.service.OutwasteService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
//import org.springframework.ui.Model;
//import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
//import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class OutWasteController {
	
	@Autowired
    private OutsourceWasteRequestRepository outsourceWasteRequestRepo;
	
	 @Autowired
	 private OutwasteService service;
	 
	 //add waste request
	 @PostMapping("/outRequest")
	    public OutsourceWasteRequest createOutsourceWasteRequest(@Valid @RequestBody OutsourceWasteRequest outsourceWasteRequest, BindingResult bindingResult) {
	        if (bindingResult.hasErrors()) {
	            return null;
	        }
	      
	        return outsourceWasteRequestRepo.save(outsourceWasteRequest);
	        // this.bytes = null;
	    }
	 
	 //view all requests to staff
	 @GetMapping("/outRequest")
	    public List<OutsourceWasteRequest> getAllOutsourceWasteRequest() {
	        return outsourceWasteRequestRepo.findAll();
	    }
	 
	 //view all requests to company
	 @GetMapping("/getwaste/{email}")
	    public List<OutsourceWasteRequest> getWasteEmail(@PathVariable String email) {
	        return service.fetchUserByEmail(email);
	    }
	 
	 
	 
	 //delete request to company
	 @DeleteMapping("/outRequest/{id}")
	    public Map<String, Boolean> deleteOutWaste(@PathVariable(value = "id") int wasteId)
	            throws ResourceNotFoundException {
		 OutsourceWasteRequest outsourceWasteRequest = outsourceWasteRequestRepo.findById(wasteId)
	                .orElseThrow(() -> new ResourceNotFoundException("Product not found for this id :: " + wasteId));

		 outsourceWasteRequestRepo.delete(outsourceWasteRequest);
	        Map<String, Boolean> response = new HashMap<>();
	        response.put("deleted", Boolean.TRUE);
	        return response;
	    }
	 
	 //view by id
	 @GetMapping("/getwasteid/{id}")
	    public ResponseEntity<OutsourceWasteRequest> getWasteById(@PathVariable(value = "id") int wasteId)
	            throws ResourceNotFoundException {
		 OutsourceWasteRequest outsourceWasteRequest = outsourceWasteRequestRepo.findById(wasteId)
	                .orElseThrow(() -> new ResourceNotFoundException("Product not found for this id :: " + wasteId));
	        return ResponseEntity.ok().body(outsourceWasteRequest);
	    }
	 
	//update status
	 @PutMapping("/upoutwaste/{id}")
	    public ResponseEntity<OutsourceWasteRequest> updateWaste(@PathVariable(value = "id") int wasteId,
	            @Valid @RequestBody OutsourceWasteRequest wasteDetails) throws ResourceNotFoundException {
		 OutsourceWasteRequest outsourceWasteRequest = outsourceWasteRequestRepo.findById(wasteId)
	                .orElseThrow(() -> new ResourceNotFoundException("Product not found for this id :: " + wasteId));

	        outsourceWasteRequest.setWasteType(wasteDetails.getWasteType());
	        outsourceWasteRequest.setQuantity(wasteDetails.getQuantity());
	        outsourceWasteRequest.setDate(wasteDetails.getDate());
	        outsourceWasteRequest.setCustomer(wasteDetails.getCustomer());
	        outsourceWasteRequest.setEMail(wasteDetails.getEMail());
	        outsourceWasteRequest.setstatus(wasteDetails.getstatus());
	        final OutsourceWasteRequest updateWaste = outsourceWasteRequestRepo.save(outsourceWasteRequest);
	        return ResponseEntity.ok(updateWaste);
	    }
	 
	   //view status=confirmed data
	 @GetMapping("/getwasteStatus")
	    public List<OutsourceWasteRequest> getWasteStatus() {
	        return service.fetchUserByStatus();
	    }
}