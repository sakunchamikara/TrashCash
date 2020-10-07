package com.WasteManagementSystem.Backend.customer.orders;

import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.WasteManagementSystem.Backend.customer.Customer;
import com.WasteManagementSystem.Backend.customer.cart.Cart;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="orders")
public class Orders {
	
	@Id
	private int id;
	private Date date;
	private String status;
	@OneToMany(mappedBy = "order")
	private List<Cart> cart;
	@JsonIgnore
	@ManyToOne
	private Customer customer;
	
	
	public Orders() {
	}


	public Orders(int id, Date date, String status, List<Cart> cart, Customer customer) {
		super();
		this.id = id;
		this.date = date;
		this.status = status;
		this.cart = cart;
		this.customer = customer;
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


	public List<Cart> getCart() {
		return cart;
	}


	public void setCart(List<Cart> cart) {
		this.cart = cart;
	}


	public Customer getCustomer() {
		return customer;
	}


	public void setCustomer(Customer customer) {
		this.customer = customer;
	}


	@Override
	public String toString() {
		return "Orders [id=" + id + ", date=" + date + ", status=" + status + ", cart=" + cart + ", customer="
				+ customer + "]";
	}

	
}
