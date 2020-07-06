package com.WasteManagementSystem.Backend.entity;

import javax.validation.constraints.NotNull;
import org.hibernate.validator.constraints.Range;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "collectedWaste")
public class CollectedWaste {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @NotNull
    private int id;
    @NotNull
    private String wasteType;
    @NotNull
    private int quantity;

    @Column(name = "amount", nullable = false)
    @NotNull
    @Range(min = 1)
    private float amount;

    @NotNull
    private int invoiceNo;

    @NotNull
    private Date date;


   
    

    public CollectedWaste() {
    }

    public CollectedWaste(int id, String wasteType, int quantity,int amount,int invoiceNo, Date date,
            String details) {
		super();
		this.id = id;
		this.wasteType = wasteType;
		this.quantity = quantity ;
		this.amount = amount;
		this.invoiceNo = invoiceNo;
		this.date= date;
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
    
    public float getAmount() {
		return amount;
	}

	public void setAmount(Float amount) {
		this.amount = amount;
    }
    
    public int getInvoiceNo() {
		return invoiceNo;
	}

	public void setInvoiceNo(int invoiceNo) {
		this.invoiceNo= invoiceNo;
    }
    
	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}
	
	   
}