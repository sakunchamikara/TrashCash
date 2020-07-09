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

import com.WasteManagementSystem.Backend.entity.Terms;
import com.WasteManagementSystem.Backend.repository.TermsRepository;
//import com.WasteManagementSystem.Backend.service.TermsService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TermsController {

    @Autowired

    private TermsRepository termsrepo;

    @PostMapping("/terms")
    public Terms createTerms(@Valid @RequestBody Terms terms, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            return null;
        }
        return termsrepo.save(terms);
    }

    @GetMapping("/terms")
    public List<Terms> getAllTerms() {
        return termsrepo.findAll();
    }

    @DeleteMapping("/terms/{id}")
    public Map<String, Boolean> deleteTerms(@PathVariable(value = "id") int termsId) throws ResourceNotFoundException {
        Terms terms = termsrepo.findById(termsId)
                .orElseThrow(() -> new ResourceNotFoundException("Terms not found for this id :: " + termsId));

        termsrepo.delete(terms);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }

    @PutMapping("/terms/{id}")
    public ResponseEntity<Terms> updateTerms(@PathVariable(value = "id") int termsId,
            @Valid @RequestBody Terms termsDetails) throws ResourceNotFoundException {
        Terms terms = termsrepo.findById(termsId)
                .orElseThrow(() -> new ResourceNotFoundException("Terms not found for this id :: " + termsId));

        terms.setTitle(termsDetails.getTitle());
        terms.setTurl(termsDetails.getTurl());
        // console.log("urlll" + termsDetails.getTurl());
        terms.setTdiscrip(termsDetails.getTdiscrip());
        // console.log("discripp")+termsDetails.getTdiscrip();

        final Terms updatedTerms = termsrepo.save(terms);
        return ResponseEntity.ok(updatedTerms);
    }

    @GetMapping("/terms/{id}")
    public ResponseEntity<Terms> getTermsById(@PathVariable(value = "id") int termsId)
            throws ResourceNotFoundException {
        Terms terms = termsrepo.findById(termsId)
                .orElseThrow(() -> new ResourceNotFoundException("Terms not found for this id :: " + termsId));
        return ResponseEntity.ok().body(terms);
    }

}
