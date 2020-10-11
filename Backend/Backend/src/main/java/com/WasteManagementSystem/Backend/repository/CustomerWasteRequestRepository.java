package com.WasteManagementSystem.Backend.repository;

import com.WasteManagementSystem.Backend.entity.CollectedWaste;
import com.WasteManagementSystem.Backend.entity.CustomerWasteRequest;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.sql.Date;
import java.util.List;


@Repository
public interface CustomerWasteRequestRepository extends JpaRepository<CustomerWasteRequest, Integer> {

    // public List<CustomerWasteRequest> findByCustomer(String customer);
    public List<CustomerWasteRequest> findByEmail(String email);

    @Query("select c from  CustomerWasteRequest c where c.status ='Pending' ")
    public List<CustomerWasteRequest> findByStatus();

    @Query("select c from  CustomerWasteRequest c where c.status ='Confirmed' ")
    public List<CustomerWasteRequest> findByConfirmed();
  
  @Query(value = "select * from  customer_waste_request where customer_waste_request.year= :year and customer_waste_request.month= :month", nativeQuery = true)
  public List<CustomerWasteRequest> findDate(@Param("year")int year, @Param("month")int month);
  
  
}
