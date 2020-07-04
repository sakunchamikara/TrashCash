package com.WasteManagementSystem.Backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.WasteManagementSystem.Backend.entity.Product;



public interface ProductRepository extends JpaRepository<Product, Integer>{
	
}