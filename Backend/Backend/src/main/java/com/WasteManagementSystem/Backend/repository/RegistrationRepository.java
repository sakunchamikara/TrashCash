package com.WasteManagementSystem.Backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.WasteManagementSystem.Backend.entity.User;

// repository 1k hadanwa kiynne interface 1k hadanwa

public interface RegistrationRepository extends JpaRepository<User, Integer>{
	public User findByEmail(String email);
	public User findByEmailAndPassword(String email,String Password);
	@Query(value="select email from user where user_type = :type",nativeQuery = true)
	public String[] findByUserType(String type);
}
