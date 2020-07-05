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
import com.WasteManagementSystem.Backend.repository.ProductRepository;
//import com.WasteManagementSystem.Backend.service.ProductService;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ProductController {
	
	@Autowired
//	private ProductService productservice;
	
	private ProductRepository productrepo;
	
	
	@PostMapping("/products")
    public Product createProduct(@Valid @RequestBody Product product) {
        return productrepo.save(product);
    }
	@GetMapping("/products")
    public List<Product> getAllProducts() {
        return productrepo.findAll();
    }
	
	@DeleteMapping("/products/{id}")
    public Map<String, Boolean> deleteProduct(@PathVariable(value = "id") int productId)
         throws ResourceNotFoundException {
        Product product = productrepo.findById(productId)
       .orElseThrow(() -> new ResourceNotFoundException("Product not found for this id :: " + productId));

        productrepo.delete(product);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
	
	@PutMapping("/products/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable(value = "id") int productId,
         @Valid @RequestBody Product productDetails) throws ResourceNotFoundException {
        Product product = productrepo.findById(productId)
        .orElseThrow(() -> new ResourceNotFoundException("Product not found for this id :: " + productId));

        product.setTitle(productDetails.getTitle());
        product.setCategory(productDetails.getCategory());
        product.setImage1(productDetails.getImage1());
        product.setImage2(productDetails.getImage2());
        product.setPrice(productDetails.getPrice());
        product.setDetails(productDetails.getDetails());
        final Product updatedProduct = productrepo.save(product);
        return ResponseEntity.ok(updatedProduct);
    }
	
	@GetMapping("/products/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable(value = "id") int productId)
        throws ResourceNotFoundException {
        Product product = productrepo.findById(productId)
          .orElseThrow(() -> new ResourceNotFoundException("Product not found for this id :: " + productId));
        return ResponseEntity.ok().body(product);
    }
	
	
	
}
