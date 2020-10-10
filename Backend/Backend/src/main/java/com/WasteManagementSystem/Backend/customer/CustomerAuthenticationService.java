package com.WasteManagementSystem.Backend.customer;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerAuthenticationService {
	@Autowired
	private CustomerAuthenticationRepository repo;

	public Customer saveCustomer(Customer customer) {
		return repo.save(customer);
	}

	public Customer fetchCustomerByEmail(String email) {
		return repo.findByEmail(email);
	}

	public Customer fetchCustomerByEmailAndPassword(String email, String password) {
		return repo.findByEmailAndPassword(email, password);
	}

	public List<Customer> findBytermstatus(){
		int termStatus = 1;
		return repo.findBytermStatus(termStatus);
	}

	public Customer saveUser(Customer customer) {
		return repo.save(customer);
	}

	public String[] findCompanyByType(String type) {
		return repo.findByType(type);
	}
	
}
