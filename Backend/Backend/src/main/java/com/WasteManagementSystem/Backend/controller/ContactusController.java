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

import com.WasteManagementSystem.Backend.entity.Contactus;
import com.WasteManagementSystem.Backend.repository.ContactusRepository;
//import com.WasteManagementSystem.Backend.service.ContactusService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ContactusController {

    @Autowired

    private ContactusRepository contactusrepo;

    @PostMapping("/contactus")
    public Contactus createContactus(@Valid @RequestBody Contactus contactus, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            return null;
        }
        return contactusrepo.save(contactus);
    }

    @GetMapping("/contactus")
    public List<Contactus> getAllContactus() {
        return contactusrepo.findAll();
    }

    @DeleteMapping("/contactus/{id}")
    public Map<String, Boolean> deleteContactus(@PathVariable(value = "id") int contactusId) throws ResourceNotFoundException {
        Contactus contactus = contactusrepo.findById(contactusId)
                .orElseThrow(() -> new ResourceNotFoundException("Contactus not found for this id :: " + contactusId));

        contactusrepo.delete(contactus);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }

    @PutMapping("/contactus/{id}")
    public ResponseEntity<Contactus> updateContactus(@PathVariable(value = "id") int contactusId,
            @Valid @RequestBody Contactus contactusDetails) throws ResourceNotFoundException {
        Contactus contactus = contactusrepo.findById(contactusId)
                .orElseThrow(() -> new ResourceNotFoundException("Contactus not found for this id :: " + contactusId));

        contactus.setName(contactusDetails.getName());
        contactus.setEmail(contactusDetails.getEmail());
        contactus.setPhone(contactusDetails.getPhone());
        contactus.setMessage(contactusDetails.getMessage());
        

        final Contactus updatedContactus = contactusrepo.save(contactus);
        return ResponseEntity.ok(updatedContactus);
    }

    @GetMapping("/contactus/{id}")
    public ResponseEntity<Contactus> getContactusById(@PathVariable(value = "id") int contactusId)
            throws ResourceNotFoundException {
        Contactus contactus = contactusrepo.findById(contactusId)
                .orElseThrow(() -> new ResourceNotFoundException("Contactus not found for this id :: " + contactusId));
        return ResponseEntity.ok().body(contactus);
    }

}
