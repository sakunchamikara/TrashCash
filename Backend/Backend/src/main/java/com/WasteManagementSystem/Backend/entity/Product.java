package com.WasteManagementSystem.Backend.entity;

import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.Range;

import java.util.Arrays;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "product")
public class Product {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@NotNull
	private int id;
	@NotNull
	private String title;
	@NotNull
	private String category;

	// private String image1;

	@Column(name = "image1", length = 1000)
	private byte[] image1;

	private String image2;
	// @NotEmpty
	// @Min(10)
	@Column(name = "price", nullable = false)
	@NotNull

	@Range(min = 0)
	private float price;

	private int quentity;

	private String details;

	// @OneToMany(mappedBy="product",cascade = CascadeType.REMOVE)
	// private List<Cart> cart = new ArrayList<Cart>();
	//
	public Product() {
	}

	

	// public Product(@NotNull int id, @NotNull String title, @NotNull String
	// category, byte[] image1, String image2,
	// @NotNull @Range(min = 0) float price, String details, List<Cart> cart) {
	// super();
	// this.id = id;
	// this.title = title;
	// this.category = category;
	// this.image1 = image1;
	// this.image2 = image2;
	// this.price = price;
	// this.details = details;
	// this.cart = cart;
	// }

	public Product(@NotNull int id, @NotNull String title, @NotNull String category, byte[] image1, String image2,
			@NotNull @Range(min = 0) float price, int quentity, String details) {
		super();
		this.id = id;
		this.title = title;
		this.category = category;
		this.image1 = image1;
		this.image2 = image2;
		this.price = price;
		this.quentity = quentity;
		this.details = details;
	}



	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public byte[] getImage1() {
		return image1;
	}

	public void setImage1(byte[] image1) {
		this.image1 = image1;
	}

	public String getImage2() {
		return image2;
	}

	public void setImage2(String image2) {
		this.image2 = image2;
	}

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	public String getDetails() {
		return details;
	}

	public void setDetails(String details) {
		this.details = details;
	}



	public int getQuentity() {
		return quentity;
	}



	public void setQuentity(int quentity) {
		this.quentity = quentity;
	}



	@Override
	public String toString() {
		return "Product [id=" + id + ", title=" + title + ", category=" + category + ", image1="
				+ Arrays.toString(image1) + ", image2=" + image2 + ", price=" + price + ", quentity=" + quentity
				+ ", details=" + details + "]";
	}

	
	// public List<Cart> getCart() {
	// return cart;
	// }
	//
	// public void setCart(List<Cart> cart) {
	// this.cart = cart;
	// }
	//
	

}