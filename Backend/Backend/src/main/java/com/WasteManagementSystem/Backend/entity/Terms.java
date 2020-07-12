package com.WasteManagementSystem.Backend.entity;
import javax.validation.constraints.NotNull;

//import org.hibernate.validator.constraints.Range;

//import javax.validation.constraints.NotEmpty;
//import javax.validation.constraints.Min;
//import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "terms")
public class Terms {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@NotNull
	private int id;
	@NotNull
	private String title;
	@NotNull
    private String turl;
@NotNull
 private String tdiscrip;
@NotNull
	
	
	public Terms() {
		}
	
	public Terms ( int id ,String title,String turl, String tdiscrip ) {	
		super();
		this.id = id;
		this.title = title;
		this.turl = turl ;
		this.tdiscrip = tdiscrip;
		
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
	
	public String getTurl() {
		return turl;
	}

	public void setTurl(String turl) {
		this.turl = turl;
	}

	public String getTdiscrip() {
		return tdiscrip;
	}

	public void setTdiscrip(String tdiscrip) {
		this.tdiscrip = tdiscrip;
	}

	
	
	
	
	
	
	
	   
}