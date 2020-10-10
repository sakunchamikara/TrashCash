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

import com.WasteManagementSystem.Backend.entity.OutsourceWasteRequest;
import com.WasteManagementSystem.Backend.entity.Product;
//import com.WasteManagementSystem.Backend.entity.User;
//import com.WasteManagementSystem.Backend.entity.User;
import com.WasteManagementSystem.Backend.repository.ProductRepository;
import com.WasteManagementSystem.Backend.service.ProductService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ProductController {

    private byte[] bytes;

    @Autowired
    private ProductService productservice;

    @Autowired
    private ProductRepository productrepo;

    @PostMapping("/products")
    public Product createProduct(@Valid @RequestBody Product product, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            return null;
        }
        product.setImage1(this.bytes);
        return productrepo.save(product);
        // this.bytes = null;
    }

    // image add
    @PostMapping("/upload")
    public void uploadImage(@RequestParam("imageFile") MultipartFile file) throws IOException {
        this.bytes = file.getBytes();
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
        product.setQuantity(productDetails.getQuantity());
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

    @GetMapping("/getProduct/{category}")
    public List<Product> getProduct(@PathVariable String category) {
        return productservice.fetchUserByCategory(category);
    }

    @GetMapping("/getRandomProduct")
    public List<Product> getRandomProduct() {
        return productservice.getRandomProduct();
    }

    @GetMapping("/searchProduct/{keyword}")
    public List<Product> serchProduct(@PathVariable String keyword) {
        return productservice.searchProduct(keyword);
    }
    
    //getproduct by company
    //view all requests to company
	 @GetMapping("/getcompanyproduct/{email}")
	public List<Product> getcompanyProduct(@PathVariable String email) {
	    return productservice.fetchProductByEmail(email);
	}
	 
	 @GetMapping("/getsystemProduct/{usertype}")
	 public List<Product> getsystemProduct(@PathVariable String usertype) {
		    return productservice.fetchProductByUsertype(usertype);
		}

    @PutMapping("/updateProductQuantity/{pid}")
    public Product updateProductQuantity(@PathVariable int pid,@RequestBody Product product) {
    	Product productObj = productrepo.findById(pid)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found for this id :: " + pid));
    	productObj.setQuantity(product.getQuantity());
        return productservice.updateProductQuantity(productObj);
    }
}
