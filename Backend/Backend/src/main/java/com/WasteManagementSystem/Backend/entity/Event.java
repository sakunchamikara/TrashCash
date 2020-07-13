package com.WasteManagementSystem.Backend.entity;
import javax.validation.constraints.NotNull;

//import org.hibernate.validator.constraints.Range;
import java.sql.Date;

//import javax.validation.constraints.NotEmpty;
//import javax.validation.constraints.Min;
//import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "event")
public class Event {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@NotNull
	private int id;
	@NotNull
	private String eventName;
	@NotNull
    private String location;
	private Date date;
	
	private String image;

	private String notes;

	
	
	public Event() {
		}
	
	public Event ( int id ,String eventName,String location,Date date,String image, String notes ) {	
		super();
		this.id = id;
		this.eventName = eventName;
		this.location = location;
		this.date = date;
		this.image = image;
		this.notes = notes;
		
	}
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}
	
	public String getEventName() {
		return eventName;
	}

	public void setEventName(String eventName) {
		this.eventName = eventName;
	}
	
	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}
	
	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}
	
	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public String getNotes() {
		return notes;
	}

	public void setNotes(String notes) {
		this.notes = notes;
	}
	
	   
}