package com.WasteManagementSystem.Backend.entity;





import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "ProductCategory")
public class ProductCat {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@NotNull
	private String name;
	
	private String description;
	
	@Column(name = "img", length = 1000)
	private byte[] img;
	
	
	public ProductCat() {
	}

	public ProductCat(int id, String name, String description, byte[] img) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.img = img;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
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
	
	public byte[] getImg() {
		return img;
	}

	public void setImg(byte[] img) {
		this.img = img;
	}



//	@Override
//	public String toString() {
//		return "ProductCat [id=" + id + ", name=" + name + ", description=" + description + ", img=" + img + " ]";
//	}

}
