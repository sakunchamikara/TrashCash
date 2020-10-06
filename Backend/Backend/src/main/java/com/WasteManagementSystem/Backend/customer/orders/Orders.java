package com.WasteManagementSystem.Backend.customer.orders;

import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.WasteManagementSystem.Backend.customer.cart.Cart;

@Entity
@Table(name="orders")
public class Orders {
	
	@Id
	private int id;
	private Date date;
	private String status;
	private int customerId;
	@OneToMany(mappedBy = "order")
	private List<Cart> cart;
	
	
	public Orders() {
	}

	public Orders(int id, Date date, String status, int customerId, List<Cart> cart) {
		this.id = id;
		this.date = date;
		this.status = status;
		this.customerId = customerId;
		this.cart = cart;
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

	public int getCustomerId() {
		return customerId;
	}

	public void setCustomerId(int customerId) {
		this.customerId = customerId;
	}

	public List<Cart> getCart() {
		return cart;
	}

	public void setCart(List<Cart> cart) {
		this.cart = cart;
	}

	@Override
	public String toString() {
		return "Orders [cart=" + cart + ", customerId=" + customerId + ", date=" + date + ", id=" + id + ", status="
				+ status + "]";
	}
	
	


	

	
	
	
	
}
