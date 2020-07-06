package com.WasteManagementSystem.Backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.WasteManagementSystem.Backend.entity.ProductCat;

public interface ProductCatRepository extends JpaRepository<ProductCat, Integer>{
	
}
