package com.WasteManagementSystem.Backend.controller;

import java.util.List;
//import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.PathVariable;

import com.WasteManagementSystem.Backend.entity.ProductCat;
import com.WasteManagementSystem.Backend.repository.ProductCatRepository;



@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ProductCatController {
	
	@Autowired
	private ProductCatRepository productcatRepository;
	
	
	@PostMapping("/product-category")
    public ProductCat createProductCat(@RequestBody ProductCat productcat) {
        return productcatRepository.save(productcat);
    }
	
	@GetMapping("/product-category")
    public List<ProductCat> getAllProductCat() {
        return productcatRepository.findAll();
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
