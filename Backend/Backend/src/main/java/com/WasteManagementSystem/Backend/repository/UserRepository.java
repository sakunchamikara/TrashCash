package com.WasteManagementSystem.Backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.WasteManagementSystem.Backend.entity.User;

public interface UserRepository extends JpaRepository<User, Long>{

}
