package com.WasteManagementSystem.Backend.repository;

import java.util.List;

import com.WasteManagementSystem.Backend.entity.SummaryStock;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TestStockRepository extends JpaRepository<SummaryStock, Integer>{

	 public List<SummaryStock> findByType(String type);

	
	// public List<SummaryStock> findByType(Integer total);
	
}