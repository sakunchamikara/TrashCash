package com.WasteManagementSystem.Backend.repository;

import com.WasteManagementSystem.Backend.entity.CustomerWasteRequest;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;


@Repository
public interface CustomerWasteRequestRepository extends JpaRepository<CustomerWasteRequest, Integer> {

    // public List<CustomerWasteRequest> findByCustomer(String customer);
    public List<CustomerWasteRequest> findByEmail(String email);

    @Query("select c from  CustomerWasteRequest c where c.status ='Pending' ")
    public List<CustomerWasteRequest> findByStatus();

    @Query("select c from  CustomerWasteRequest c where c.status ='Confirmed' ")
    public List<CustomerWasteRequest> findByConfirmed();
}
