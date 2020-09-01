package com.WasteManagementSystem.Backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.WasteManagementSystem.Backend.entity.SummaryStock;
import com.WasteManagementSystem.Backend.repository.TestStockRepository;

import java.util.List;


@Service
public class TestStockService{
  
  @Autowired
  private TestStockRepository repo;
  
  public List<SummaryStock> fetchUserByType(String type) {
  return repo.findByType(type);
  }


    
  
}