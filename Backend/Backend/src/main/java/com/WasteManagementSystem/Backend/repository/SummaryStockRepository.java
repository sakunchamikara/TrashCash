package com.WasteManagementSystem.Backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.WasteManagementSystem.Backend.entity.SummaryStock;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface SummaryStockRepository extends JpaRepository<SummaryStock, Integer>{

     public SummaryStock findByWasteType(String wasteType);
	// public List<SummaryStock> findByWasteType(String wasteType);

	@Query("select c.wasteType from SummaryStock c")
	   List<String> getAllWasteType();

	@Query("select c.total from SummaryStock c")
	   List<Integer> getAllWaste();
	   
	   @Query("select c.id from SummaryStock c")
	   List<Integer> getAllWasteId();
	
}