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

import com.WasteManagementSystem.Backend.entity.OutReProduct;
//import com.WasteManagementSystem.Backend.entity.User;
//import com.WasteManagementSystem.Backend.entity.User;
import com.WasteManagementSystem.Backend.repository.OutReProductRepository;
import com.WasteManagementSystem.Backend.service.ProductService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class OutReProductController {

    private byte[] bytes;

  //  @Autowired
   // private ProductService productservice;

    @Autowired
    private OutReProductRepository repo;

    @PostMapping("/Reproducts")
    public OutReProduct createProduct(@Valid @RequestBody OutReProduct product, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            return null;
        }
        product.setImage1(this.bytes);
        return repo.save(product);
        // this.bytes = null;
    }

    // image add
    @PostMapping("/uploadReProduct")
    public void uploadRecycledImage(@RequestParam("imageFile") MultipartFile file) throws IOException {
        this.bytes = file.getBytes();
    }

    @GetMapping("/Reproducts")
    public List<OutReProduct> getAllProducts() {
        return repo.findAll();
    }

    @DeleteMapping("/Reproducts/{id}")
    public Map<String, Boolean> deleteProduct(@PathVariable(value = "id") int reproductId)
            throws ResourceNotFoundException {
    	OutReProduct product = repo.findById(reproductId)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found for this id :: " + reproductId));

        repo.delete(product);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
//
//    @PutMapping("/products/{id}")
//    public ResponseEntity<Product> updateProduct(@PathVariable(value = "id") int productId,
//            @Valid @RequestBody Product productDetails) throws ResourceNotFoundException {
//        Product product = productrepo.findById(productId)
//                .orElseThrow(() -> new ResourceNotFoundException("Product not found for this id :: " + productId));
//
//        product.setTitle(productDetails.getTitle());
//        product.setCategory(productDetails.getCategory());
//        product.setImage1(productDetails.getImage1());
//        product.setImage2(productDetails.getImage2());
//        product.setPrice(productDetails.getPrice());
//        product.setDetails(productDetails.getDetails());
//        final Product updatedProduct = productrepo.save(product);
//        return ResponseEntity.ok(updatedProduct);
//    }
//
//    @GetMapping("/products/{id}")
//    public ResponseEntity<Product> getProductById(@PathVariable(value = "id") int productId)
//            throws ResourceNotFoundException {
//        Product product = productrepo.findById(productId)
//                .orElseThrow(() -> new ResourceNotFoundException("Product not found for this id :: " + productId));
//        return ResponseEntity.ok().body(product);
//    }
//
//    @GetMapping("/getProduct/{category}")
//    public List<Product> getProduct(@PathVariable String category) {
//        return productservice.fetchUserByCategory(category);
//    }
//
//    @GetMapping("/getRandomProduct")
//    public List<Product> getRandomProduct() {
//        return productservice.getRandomProduct();
//    }

}
