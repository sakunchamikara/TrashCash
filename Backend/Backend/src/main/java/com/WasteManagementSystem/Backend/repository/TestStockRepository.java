package com.WasteManagementSystem.Backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.WasteManagementSystem.Backend.entity.SummaryStock;

import java.util.List;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;

@Repository
public interface TestStockRepository extends JpaRepository<SummaryStock, Integer>{

	//  public List<SummaryStock> findByType(String type);

	
	public List<SummaryStock> findByType(Integer total);
	
}