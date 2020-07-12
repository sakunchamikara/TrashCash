package com.WasteManagementSystem.Backend.controller;

import javax.validation.Valid;
import org.springframework.validation.BindingResult;

import java.util.HashMap;
//import java.util.HashMap;
import java.util.List;
//import java.util.Map;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.ResponseEntity;
//import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
//import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.WasteManagementSystem.Backend.entity.Event;
import com.WasteManagementSystem.Backend.repository.EventRepository;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class EventController {

    @Autowired

    private EventRepository eventrepo;

    @PostMapping("/events")
    public Event createEvent(@Valid @RequestBody Event event, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
			return null;
		}
        return eventrepo.save(event);
    }

    @GetMapping("/events")
    public List<Event> getAllEvents() {
        return eventrepo.findAll();
    }

    @DeleteMapping("/events/{id}")
    public Map<String, Boolean> deleteEvent(@PathVariable(value = "id") int eventId) throws ResourceNotFoundException {
        Event event = eventrepo.findById(eventId)
                .orElseThrow(() -> new ResourceNotFoundException("events not found for this id :: " + eventId));

        eventrepo.delete(event);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }

    @PutMapping("/events/{id}")
    public ResponseEntity<Event> updateEvent(@PathVariable(value = "id") int eventId,
            @Valid @RequestBody Event eventDetails) throws ResourceNotFoundException {
        Event event = eventrepo.findById(eventId)
                .orElseThrow(() -> new ResourceNotFoundException("Events not found for this id :: " + eventId));

        event.setEventName(eventDetails.getEventName());
        event.setLocation(eventDetails.getLocation());
        event.setDate(eventDetails.getDate());
        event.setImage(eventDetails.getImage());
        event.setNotes(eventDetails.getNotes());

        final Event updatedEvent = eventrepo.save(event);
        return ResponseEntity.ok(updatedEvent);
    }

    @GetMapping("/events/{id}")
    public ResponseEntity<Event> getEventById(@PathVariable(value = "id") int eventId)
            throws ResourceNotFoundException {
        Event event = eventrepo.findById(eventId)
                .orElseThrow(() -> new ResourceNotFoundException("Event not found for this id :: " + eventId));
        return ResponseEntity.ok().body(event);
    }

}
