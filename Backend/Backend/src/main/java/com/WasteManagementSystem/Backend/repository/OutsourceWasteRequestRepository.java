package com.WasteManagementSystem.Backend.repository;

import com.WasteManagementSystem.Backend.entity.CollectedWaste;
import com.WasteManagementSystem.Backend.entity.OutsourceWasteRequest;
import com.WasteManagementSystem.Backend.entity.Product;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface OutsourceWasteRequestRepository extends JpaRepository<OutsourceWasteRequest, Integer> {

    //public List<OutsourceWasteRequest> findByCustomer(String customer);
	public List<OutsourceWasteRequest> findByEmail(String email);
	//public List<OutsourceWasteRequest> findById(int id);
	//public OutsourceWasteRequest save(int outWasteRequestId);
	@Query(value = "SELECT * FROM outsource_waste_request  WHERE outsource_waste_request.status= 'Pending' OR outsource_waste_request.status = 'Not Availabale At The Moment'", nativeQuery = true)
	public List<OutsourceWasteRequest> findstatus();
	
	
	
}
