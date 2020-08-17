package com.WasteManagementSystem.Backend.repository;

import com.WasteManagementSystem.Backend.entity.OutReProduct;
//import com.WasteManagementSystem.Backend.entity.User;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
//import org.springframework.data.jpa.repository.Query;

//import com.WasteManagementSystem.Backend.entity.Product;
//import com.WasteManagementSystem.Backend.entity.User;

//import java.util.List;
//import java.util.Map;

@Repository
public interface OutReProductRepository extends JpaRepository<OutReProduct, Integer> {
//	public List<OutReProduct> findByCategory(String category);
//
//	@Query(value = "SELECT * FROM product ORDER BY RAND() LIMIT 3;", nativeQuery = true)
//	public List<Product> findAllByRandom();
	
}