package com.WasteManagementSystem.Backend.controller;

import javax.validation.Valid;
import org.springframework.validation.BindingResult;

import java.util.HashMap;
//import java.util.HashMap;
import java.util.List;
//import java.util.Map;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.ResponseEntity;
//import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
//import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.WasteManagementSystem.Backend.entity.CollectedWaste;
import com.WasteManagementSystem.Backend.repository.CollectedWasteRepository;
//import com.WasteManagementSystem.Backend.service.CustomerWasteRequestService;
//import com.WasteManagementSystem.Backend.service.collectedwasteService;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class CollectedWasteController {
    
    @Autowired
    private CollectedWasteRepository collectedWasterepo;
//    @Autowired
//    private collectedwasteService service;
   
    @PostMapping("/collectedWaste")
    public CollectedWaste createCollectedWaste(@Valid @RequestBody CollectedWaste collectedWaste, BindingResult bindingResult) {
		if (bindingResult.hasErrors()) {
			return null;
		}
        return collectedWasterepo.save(collectedWaste);
    }

    @GetMapping("/collectedWaste")
    public List<CollectedWaste> getAllCollectedWastes() {
        return collectedWasterepo.findAll();
    }
	
	@DeleteMapping("/collectedWaste/{id}")
    public Map<String, Boolean> deleteCollectedWaste(@PathVariable(value = "id") int collectedWasteId)
         throws ResourceNotFoundException {
        CollectedWaste collectedWaste = collectedWasterepo.findById(collectedWasteId)
       .orElseThrow(() -> new ResourceNotFoundException("Waste not found for this id :: " + collectedWasteId));

        collectedWasterepo.delete(collectedWaste);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
	
	@PutMapping("/collectedWaste/{id}")
    public ResponseEntity<CollectedWaste> updateCollectedWaste(@PathVariable(value = "id") int collectedWasteId,
         @Valid @RequestBody CollectedWaste collectedWasteDetails) throws ResourceNotFoundException {
        CollectedWaste collectedWaste =collectedWasterepo.findById(collectedWasteId)
        .orElseThrow(() -> new ResourceNotFoundException("Waste not found for this id :: " + collectedWasteId));

        collectedWaste.setWasteType(collectedWasteDetails.getWasteType());
        collectedWaste.setQuantity(collectedWasteDetails.getQuantity());
        collectedWaste.setAmount(collectedWasteDetails.getAmount());
        collectedWaste.setInvoiceNo(collectedWasteDetails.getInvoiceNo());
        collectedWaste.setDate(collectedWasteDetails.getDate());
       ;
        final CollectedWaste updatedCollectedWaste = collectedWasterepo.save(collectedWaste);
        return ResponseEntity.ok(updatedCollectedWaste);
    }
	
	@GetMapping("/collectedWaste/{id}")
    public ResponseEntity<CollectedWaste> getCollectedWasteById(@PathVariable(value = "id") int collectedWasteId)
        throws ResourceNotFoundException {
        CollectedWaste collectedWaste = collectedWasterepo.findById(collectedWasteId)
          .orElseThrow(() -> new ResourceNotFoundException("Waste not found for this id :: " + collectedWasteId));
        return ResponseEntity.ok().body(collectedWaste);
    }

//	@GetMapping("/collectWaste/{wasteType}")
//	
//	public CollectedWaste getProduct(@PathVariable String wasteType) {
//        return service.fetchUserByCategory(wasteType);
//    }
    
}