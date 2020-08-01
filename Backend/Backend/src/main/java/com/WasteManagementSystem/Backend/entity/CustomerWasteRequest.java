package com.WasteManagementSystem.Backend.entity;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;


@Entity
@Table(name = "customerWasteRequest")
public class CustomerWasteRequest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @NotNull
    private int id;
    @NotNull
    private String wasteType;
    @NotNull
	private int quantity;
	@NotNull
	private Date date;
	@NotNull
	private String customer;


	public CustomerWasteRequest(){

	}
    public CustomerWasteRequest(int id, String wasteType, int quantity,Date date,String customer,String details){
        super();
        this.id = id;
		this.quantity = quantity ;
		this.date = date;
		this.customer = customer;
    }

    public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}
	
	public String getWasteType() {
		return wasteType;
	}

	public void setWasteType(String wasteType) {
		this.wasteType =wasteType;
	}
	
	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	
	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public String getCustomer() {
		return customer;
	}

	public void setCustomer(String customer) {
		this.customer =customer;
	}
    
}