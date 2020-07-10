package com.WasteManagementSystem.Backend.entity;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.Range;

//import javax.validation.constraints.NotEmpty;
//import javax.validation.constraints.Min;
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
	
    private String image1;
	
	private String image2;
//	@NotEmpty
//	@Min(10)
	@Column(name = "price", nullable = false)
	@NotNull

  @Range(min = 0)
	private float price;

    private String details;
	
	public Product() {
		}
	
	public Product ( int id ,String title,String category ,String image1,String image2,float price ,String details) {	
		super();
		this.id = id;
		this.title = title;
		this.category = category ;
		this.image1 = image1;
		this.image2 = image2;
        this.price = price;
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
	public String getImage1() {
		return image1;
	}

	public void setImage1(String image1) {
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
	
	
	
	
	   
}