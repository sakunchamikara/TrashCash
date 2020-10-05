package com.WasteManagementSystem.Backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.WasteManagementSystem.Backend.entity.CustomerWasteRequest;
import com.WasteManagementSystem.Backend.repository.CustomerWasteRequestRepository;

import java.util.List;


@Service
public class CustomerWasteRequestService{
   
    @Autowired
    private CustomerWasteRequestRepository repo;

    
    public List<CustomerWasteRequest> fetchUserByEmail(String email) {
		return repo.findByEmail(email);
  }
  
  public List<CustomerWasteRequest> findAllPendings(){
    return repo.findByStatus();
  }

  public List<CustomerWasteRequest> findAllConfirmings(){
    return repo.findByConfirmed();
  }
}