package com.WasteManagementSystem.Backend.repository;

import com.WasteManagementSystem.Backend.entity.CustomerWasteRequest;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerWasteRequestRepository extends JpaRepository<CustomerWasteRequest, Integer> {
    
}
