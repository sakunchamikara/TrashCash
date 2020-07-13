package com.WasteManagementSystem.Backend.controller;

import javax.validation.Valid;

import java.io.IOException;
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
//import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

//import com.WasteManagementSystem.Backend.entity.CollectedWaste;
import com.WasteManagementSystem.Backend.entity.ProductCat;
import com.WasteManagementSystem.Backend.entity.User;
//import com.WasteManagementSystem.Backend.entity.User;
//import com.WasteManagementSystem.Backend.entity.Product;
//import com.WasteManagementSystem.Backend.entity.ProductCat;
import com.WasteManagementSystem.Backend.repository.ProductCatRepository;
//import com.WasteManagementSystem.Backend.service.ProductService;
import com.WasteManagementSystem.Backend.service.ProductCatService;
//import com.WasteManagementSystem.Backend.service.RegistrationService;

import org.springframework.validation.BindingResult;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ProductCatController {
	
    private byte[] bytess;
	
	
	
	@Autowired
	private ProductCatRepository productcatRepository;
	
	@Autowired
	private ProductCatService service;
	
	
	@PostMapping("/productCats")
    public ProductCat createProductCat(@Valid @RequestBody ProductCat productcat, BindingResult bindingResult) throws Exception {
		String tempName = productcat.getName();
		if (tempName != null && !"".equals(tempName)) {
			ProductCat userObj = service.fetchProductCatByName(tempName);
			if (userObj != null) {
				throw new Exception("Product Category with " + tempName + " is already exist !!!");
		
			}
		}
        if (bindingResult.hasErrors()) {
            return null;
        }
        productcat.setImg(this.bytess);
        //return productcatRepository.save(productcat);
        
        ProductCat userObj = null;
		userObj = service.saveProductCat(productcat);
		return userObj;
        
    }
	
	//adding image
		@PostMapping("/uploadImg")
		public void uploadImage(@RequestParam("imageFile") MultipartFile file) throws IOException {
			this.bytess = file.getBytes();
		}
	
	@GetMapping("/productCats")
    public List<ProductCat> getAllProductCats() {
        return productcatRepository.findAll();
    }
	
	@DeleteMapping("/productCats/{id}")
    public Map<String, Boolean> deleteProductCat(@PathVariable(value = "id") int productCatId)
         throws ResourceNotFoundException {
		ProductCat productCat = productcatRepository.findById(productCatId)
       .orElseThrow(() -> new ResourceNotFoundException("category not found for this id :: " + productCatId));

		productcatRepository.delete(productCat);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
	
	@GetMapping("/productCats/{id}")
    public ResponseEntity<ProductCat> getProductCatsById(@PathVariable(value = "id") int productCatId)
        throws ResourceNotFoundException {
		ProductCat productCat = productcatRepository.findById(productCatId)
          .orElseThrow(() -> new ResourceNotFoundException("category not found for this id :: " + productCatId));
        return ResponseEntity.ok().body(productCat);
    }


	@PutMapping("/productCats/{id}")
    public ResponseEntity<ProductCat> updateProductCat(@PathVariable(value = "id") int productCatId,
         @Valid @RequestBody ProductCat productCatDetails) throws ResourceNotFoundException {
		ProductCat productCat =productcatRepository.findById(productCatId)
        .orElseThrow(() -> new ResourceNotFoundException("category not found for this id :: " + productCatId));

		
		productCat.setName(productCatDetails.getName());
		productCat.setDescription(productCatDetails.getDescription());
		productCat.setImg(productCatDetails.getImg());
		
		
       
        final ProductCat updatedProductCat = productcatRepository.save(productCat);
        return ResponseEntity.ok(updatedProductCat);
    }
}
