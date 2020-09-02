package com.WasteManagementSystem.Backend.controller;

import javax.validation.Valid;
import org.springframework.validation.BindingResult;

import java.io.IOException;
import java.util.HashMap;
//import java.util.HashMap;
import java.util.List;
//import java.util.Map;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.ResponseEntity;
//import org.springframework.ui.Model;
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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.WasteManagementSystem.Backend.entity.Product;
import com.WasteManagementSystem.Backend.entity.SummaryStock;
import com.WasteManagementSystem.Backend.repository.summaryR;
import com.WasteManagementSystem.Backend.service.ProductService;
import com.WasteManagementSystem.Backend.service.summaryS;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class summaryC {
	
	@Autowired
    private summaryS service;
	
	@GetMapping("/getwastetypeFrom/{wasteType}")
    public List<SummaryStock> getwastetypes(@PathVariable String wasteType) {
        return service.fetchUserByWastetype(wasteType);
    }

}
