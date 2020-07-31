package com.WasteManagementSystem.Backend.service;



//import org.springframework.beans.factory.annotation.Override;
import org.springframework.stereotype.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;


//import lombok.var;

import com.WasteManagementSystem.Backend.entity.Product;

import com.WasteManagementSystem.Backend.repository.ProductRepository;
//import java.util.List;
//import java.util.Map;

@Service

public  class ProductService {
	
	@Autowired
	private ProductRepository repo;
	
	public List<Product> fetchUserByCategory(String category) {
		return repo.findByCategory(category);
	}

	public List<Product> getRandomProduct() {
		return repo.findAllByRandom();
	}
	

	
}