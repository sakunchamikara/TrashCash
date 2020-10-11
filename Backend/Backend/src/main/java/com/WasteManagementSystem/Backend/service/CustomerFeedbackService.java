package com.WasteManagementSystem.Backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.WasteManagementSystem.Backend.entity.CustomerFeedback;
import com.WasteManagementSystem.Backend.repository.CustomerFeedbackRepository;

import java.sql.Date;
import java.util.List;


@Service
public class CustomerFeedbackService{
   
    @Autowired
    private CustomerFeedbackRepository repo;

    
    public List<CustomerFeedback> fetchFeedbackByEmail(String email) {
		return repo.findByEmail(email);
  }
  
  
}