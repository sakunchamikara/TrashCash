package com.WasteManagementSystem.Backend.customer;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerAuthenticationRepository extends JpaRepository<Customer, Integer>{
	public Customer findByEmail(String email);
	public Customer findByEmailAndPassword(String email,String Password);
}
