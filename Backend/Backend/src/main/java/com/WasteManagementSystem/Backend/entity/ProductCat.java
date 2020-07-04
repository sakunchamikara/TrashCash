package com.WasteManagementSystem.Backend.entity;



import java.sql.Blob;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "ProductCategory")
public class ProductCat {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int PCatId;
	private String Name;
	private String Description;
	private Blob Img;
	
	public ProductCat() {
	}

	public ProductCat(int PCatId, String Name, String Description, Blob Img) {
		super();
		this.PCatId = PCatId;
		this.Name = Name;
		this.Description = Description;
		this.Img = Img;
	}

	public int getId() {
		return PCatId;
	}

	public void setId(int PCatId) {
		this.PCatId = PCatId;
	}

	public String gettName() {
		return Name;
	}

	public void setName(String Name) {
		this.Name = Name;
	}

	public String getDescription() {
		return Description;
	}

	public void setDescription(String Description) {
		this.Description = Description;
	}
	
	public Blob getImg() {
		return Img;
	}

	public void setImg(Blob Img) {
		this.Img = Img;
	}



	@Override
	public String toString() {
		return "ProductCat [PCatId=" + PCatId + ", Name=" + Name + ", Description=" + Description + ", Img=" + Img + " ]";
	}

}
