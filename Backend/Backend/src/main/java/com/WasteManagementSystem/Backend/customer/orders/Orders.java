package com.WasteManagementSystem.Backend.customer.orders;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="orders")
public class Orders {
	
	@Id
	private int id;
	private Date date;
	private String status;
	
	
	public Orders() {
	}
	
	public Orders(int id, Date date, String status) {
		super();
		this.id = id;
		this.date = date;
		this.status = status;
	}

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}

	
	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "Orders [id=" + id + ", date=" + date + ", status=" + status + "]";
	}

	
	
	
	
}
