package com.WasteManagementSystem.Backend.repository;
import com.WasteManagementSystem.Backend.entity.Product;
//import com.WasteManagementSystem.Backend.entity.User;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
//import org.springframework.data.jpa.repository.Query;

//import com.WasteManagementSystem.Backend.entity.Product;
//import com.WasteManagementSystem.Backend.entity.User;

//import java.util.List;
//import java.util.Map;

 @Repository
public interface ProductRepository extends JpaRepository<Product, Integer>{
	 public List<Product> findByCategory(String category);
	
}