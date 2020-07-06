package com.WasteManagementSystem.Backend.entity;





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
	private int pCatId;
	private String name;
	private String description;
	private String img;
	
	public ProductCat() {
	}

	public ProductCat(int pCatId, String name, String description, String img) {
		super();
		this.pCatId = pCatId;
		this.name = name;
		this.description = description;
		this.img = img;
	}

	public int getPCatId() {
		return pCatId;
	}

	public void setPCatId(int pCatId) {
		this.pCatId = pCatId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
	public String getImg() {
		return img;
	}

	public void setImg(String img) {
		this.img = img;
	}



	@Override
	public String toString() {
		return "ProductCat [pCatId=" + pCatId + ", name=" + name + ", description=" + description + ", img=" + img + " ]";
	}

}
