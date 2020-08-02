package com.WasteManagementSystem.Backend.service;



//import org.springframework.beans.factory.annotation.Override;
import org.springframework.stereotype.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;


//import lombok.var;

import com.WasteManagementSystem.Backend.entity.OutsourceWasteRequest;

import com.WasteManagementSystem.Backend.repository.OutsourceWasteRequestRepository;
//import java.util.List;
//import java.util.Map;

@Service

public  class OutwasteService {
	
	@Autowired
	private OutsourceWasteRequestRepository repo;
	
	public List<OutsourceWasteRequest> fetchUserByEmail(String email) {
		return repo.findByEmail(email);
	}

	
}