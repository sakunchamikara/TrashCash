package com.WasteManagementSystem.Backend.repository;

import com.WasteManagementSystem.Backend.entity.OutsourceWasteRequest;
import com.WasteManagementSystem.Backend.entity.Product;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface OutsourceWasteRequestRepository extends JpaRepository<OutsourceWasteRequest, Integer> {

    //public List<OutsourceWasteRequest> findByCustomer(String customer);
	public List<OutsourceWasteRequest> findByEmail(String email);
}
