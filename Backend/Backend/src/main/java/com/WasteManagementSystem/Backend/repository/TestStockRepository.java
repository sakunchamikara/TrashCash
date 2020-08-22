package com.WasteManagementSystem.Backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.WasteManagementSystem.Backend.entity.SummaryStock;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface TestStockRepository extends JpaRepository<SummaryStock, Integer>{

	 public List<SummaryStock> findByType(String type);
	
}