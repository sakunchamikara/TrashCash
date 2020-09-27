package com.WasteManagementSystem.Backend.customer.cart;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.WasteManagementSystem.Backend.entity.Product;

@Entity
@Table(name="cart")
public class Cart {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private int customerId;
	
	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name="product_id")
	private Product product;
	private int quentity;
	private String orderId;
	
	public Cart( ) {}

	public Cart(int id, int customerId, Product product, int quentity, String orderId) {
		super();
		this.id = id;
		this.customerId = customerId;
		this.product = product;
		this.quentity = quentity;
		this.orderId = orderId;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getCustomerId() {
		return customerId;
	}

	public void setCustomerId(int customerId) {
		this.customerId = customerId;
	}


	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

	public int getQuentity() {
		return quentity;
	}

	public void setQuentity(int quentity) {
		this.quentity = quentity;
	}

	public String getOrderId() {
		return orderId;
	}

	public void setOrderId(String orderId) {
		this.orderId = orderId;
	}

	@Override
	public String toString() {
		return "Cart [customerId=" + customerId + ", id=" + id + ", orderId=" + orderId + ", product=" + product
				+ ", quentity=" + quentity + "]";
	}
	
	
}
