package com.WasteManagementSystem.Backend.customer;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface CustomerAuthenticationRepository extends JpaRepository<Customer, Integer>{
	public Customer findByEmail(String email);
	public Customer findByEmailAndPassword(String email,String Password);
	
	public List<Customer> findBytermStatus(Integer termStatus);

// @Query("select c from  Customer c where c.status ='1' ")
//     public List<Customer> findBytermStatus();

	@Query(value="select email from customer where type = :type",nativeQuery = true)
	public String[] findByType(String type);
}
