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
	private int customerId;
	
	
	public Orders() {
	}
	
	public Orders(int id, Date date, String status, int customerId) {
		this.id = id;
		this.date = date;
		this.status = status;
		this.customerId = customerId;
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

	public int getcustomerId() {
		return customerId;
	}

	public void setcustomerId(int customerId) {
		this.customerId = customerId;
	}

	@Override
	public String toString() {
		return "Orders [customerId=" + customerId + ", date=" + date + ", id=" + id + ", status=" + status + "]";
	}


	

	
	
	
	
}
