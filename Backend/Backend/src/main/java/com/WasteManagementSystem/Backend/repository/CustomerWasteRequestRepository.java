package com.WasteManagementSystem.Backend.repository;

import com.WasteManagementSystem.Backend.entity.CustomerWasteRequest;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface CustomerWasteRequestRepository extends JpaRepository<CustomerWasteRequest, Integer> {

    public List<CustomerWasteRequest> findByCustomer(String customer);
}
