package com.WasteManagementSystem.Backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.WasteManagementSystem.Backend.entity.CollectedWaste;

public interface CollectedWasteRepository extends JpaRepository<CollectedWaste, Integer> {
    
}