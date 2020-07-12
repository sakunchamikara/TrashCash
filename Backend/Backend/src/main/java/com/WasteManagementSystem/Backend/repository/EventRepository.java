package com.WasteManagementSystem.Backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.WasteManagementSystem.Backend.entity.Event;



public interface EventRepository extends JpaRepository<Event, Integer>{
	
}
