package com.WasteManagementSystem.Backend.service;



//import org.springframework.beans.factory.annotation.Override;
import org.springframework.stereotype.Service;

// import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;


//import lombok.var;

import com.WasteManagementSystem.Backend.entity.CollectedWaste;
// import com.WasteManagementSystem.Backend.entity.User;
import com.WasteManagementSystem.Backend.repository.CollectedWasteRepository;
//import java.util.List;
//import java.util.Map;

@Service

public  class collectedwasteService {
	
	@Autowired
	private CollectedWasteRepository repo;
	
	public CollectedWaste fetchUserByCategory(String wasteType) {
		return repo.findquantity(wasteType);
	}
	
	

	
}