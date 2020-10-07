package com.WasteManagementSystem.Backend.repository;

import com.WasteManagementSystem.Backend.entity.CollectedWaste;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


public interface CollectedWasteRepository extends JpaRepository<CollectedWaste, Integer> {
	
//	@Query("SELECT u FROM User u WHERE u.status = :status and u.name = :'name'")
//	User findUserByStatusAndNameNamedParams(
//	  @Param("status") Integer status, 
//	  @Param("name") String name);
	
	@Query(value = "SELECT * FROM collected_Waste  WHERE collected_Waste.waste_type= :waste_type", nativeQuery = true)
	public CollectedWaste findquantity(@Param("waste_type")String wasteType);
	
	
	//public List<CollectedWaste>findquantity(String wasteType);
}