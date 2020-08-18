package com.WasteManagementSystem.Backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.WasteManagementSystem.Backend.entity.SummaryStock;
import com.WasteManagementSystem.Backend.repository.SummaryStockRepository;

import java.util.List;


@Service
public class SummaryStockService{
  
  @Autowired
  private SummaryStockRepository repo;

  
  public List<SummaryStock> fetchUserByWasteType(String wasteType) {
  return repo.findByWasteType(wasteType);
}
    
  
}