package com.WasteManagementSystem.Backend.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.WasteManagementSystem.Backend.entity.Event;
// import com.WasteManagementSystem.Backend.entity.User;
import com.WasteManagementSystem.Backend.repository.EventRepository;



@Service
public class EventService {

    @Autowired
	 private EventRepository repo;
	
	public Event saveEvent(Event event) {
		return repo.save(event);
	}
	
	public Event fetchEventByEventName(String eventName) {
		return repo.findByEventName(eventName);
	}
	
    
}