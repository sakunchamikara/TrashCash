package com.WasteManagementSystem.Backend.repository;

import com.WasteManagementSystem.Backend.entity.CustomerFeedback;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface CustomerFeedbackRepository extends JpaRepository<CustomerFeedback, Integer> {


}