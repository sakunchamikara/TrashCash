package com.WasteManagementSystem.Backend.entity;
import org.hibernate.validator.constraints.Range;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "summaryStock")
public class SummaryStock {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String wasteType;
    private int total;

    public SummaryStock(){ }

    public SummaryStock(int id,String wasteType, int total){

        super();
        this.id = id;
        this.wasteType = wasteType;
        this.total = total;
        
    }

    public int getId(){
        return id;
    }

    public void setId(int id){
        this.id = id;
    }
    public String getWasteType(){
        return wasteType;
    }
    public void setWasteType(String wasteType){
        this.wasteType = wasteType;
    }
    public int getTotal(){
        return total;
    }
    public void setTotal(int total){
        this.total = total;
    }

}