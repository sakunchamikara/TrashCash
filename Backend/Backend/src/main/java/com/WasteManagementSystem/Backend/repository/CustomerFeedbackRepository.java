package com.WasteManagementSystem.Backend.repository;

import com.WasteManagementSystem.Backend.entity.CustomerFeedback;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;



@Repository
public interface CustomerFeedbackRepository extends JpaRepository<CustomerFeedback, Integer> {

	@Query("select cf.status from CustomerFeedback cf where cf.status='new'")
	   List<String> getStatus();
	
	@Query("select cf from CustomerFeedback cf where cf.status='published'")
	   List<CustomerFeedback> getPublishedFeedbacks();
	
	@Query("select cf from CustomerFeedback cf")
	   List<CustomerFeedback> getFeedbacksOfUser();
	

}