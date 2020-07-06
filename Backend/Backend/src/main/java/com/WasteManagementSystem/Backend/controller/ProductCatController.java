package com.WasteManagementSystem.Backend.controller;

import javax.validation.Valid;

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

import com.WasteManagementSystem.Backend.entity.Product;
import com.WasteManagementSystem.Backend.entity.ProductCat;
import com.WasteManagementSystem.Backend.repository.ProductCatRepository;
//import com.WasteManagementSystem.Backend.service.ProductService;




@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ProductCatController {
	
	@Autowired
	private ProductCatRepository productcatRepository;
	
	
	@PostMapping("/productCats")
    public ProductCat createProductCat(@Valid @RequestBody ProductCat productcat) {
        return productcatRepository.save(productcat);
    }
	
	@GetMapping("/productCats")
    public List<ProductCat> getAllProductCats() {
        return productcatRepository.findAll();
    }
	
	@DeleteMapping("/productCats/{id}")
    public Map<String, Boolean> deleteProductCat(@PathVariable(value = "id") int pCatId)
         throws ResourceNotFoundException {
        ProductCat productCat = productcatRepository.findById(pCatId)
       .orElseThrow(() -> new ResourceNotFoundException("Product category not found for this id :: " + pCatId));

        productcatRepository.delete(productCat);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
	
	@GetMapping("/productCats/{id}")
    public ResponseEntity<ProductCat> getProductCatById(@PathVariable(value = "id") int pCatId)
        throws ResourceNotFoundException {
		ProductCat productCat = productcatRepository.findById(pCatId)
          .orElseThrow(() -> new ResourceNotFoundException("Product category not found for this id :: " + pCatId));
        return ResponseEntity.ok().body(productCat);
    }
	
//	@DeleteMapping("/employees/{id}")
//    public Map<String, Boolean> deleteEmployee(@PathVariable(value = "id") Long employeeId)
//          {
//        ProductCat employee = productcatRepository.findById(employeeId)
//       
//        employeeRepository.delete(employee);
//        Map<String, Boolean> response = new HashMap<>();
//        response.put("deleted", Boolean.TRUE);
//        return response;
//    }
	
	
}
