package com.WasteManagementSystem.Backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.WasteManagementSystem.Backend.entity.Contactus;



public interface ContactusRepository extends JpaRepository<Contactus, Integer>{
	
}