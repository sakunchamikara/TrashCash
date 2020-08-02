package com.WasteManagementSystem.Backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.WasteManagementSystem.Backend.entity.ProductCat;

public interface ProductCatRepository extends JpaRepository<ProductCat, Integer>{
	public ProductCat findByName(String name);
	
	@Query("select c.name from ProductCat c")
	   List<String> getAllName();
	
}
