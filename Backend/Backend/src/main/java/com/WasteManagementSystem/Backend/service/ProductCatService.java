package com.WasteManagementSystem.Backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.WasteManagementSystem.Backend.entity.ProductCat;
import com.WasteManagementSystem.Backend.repository.ProductCatRepository;

@Service
public class ProductCatService {
	
	@Autowired
	private ProductCatRepository repo;
	
	public ProductCat saveProductCat(ProductCat productcat) {
		return repo.save(productcat);
	}
	
	
}
