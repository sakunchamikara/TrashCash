package com.WasteManagementSystem.Backend.repository;

import com.WasteManagementSystem.Backend.entity.OutsourceWasteRequest;
import com.WasteManagementSystem.Backend.entity.Product;
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
public interface ProductRepository extends JpaRepository<Product, Integer> {
	public List<Product> findByCategory(String category);

	@Query(value = "SELECT * FROM product ORDER BY RAND() LIMIT 3;", nativeQuery = true)
	public List<Product> findAllByRandom();

	@Query(value= "SELECT * FROM product WHERE title LIKE %:keyword%",nativeQuery = true)
	public List<Product> findAll(String keyword);
	
	public List<Product> findByEmail(String email);
	public List<Product> findByUsertype(String usertype);
	
	
	
}