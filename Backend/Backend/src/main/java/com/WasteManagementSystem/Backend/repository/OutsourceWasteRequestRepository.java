package com.WasteManagementSystem.Backend.repository;

import java.util.List;

import com.WasteManagementSystem.Backend.entity.OutsourceWasteRequest;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


@Repository
public interface OutsourceWasteRequestRepository extends JpaRepository<OutsourceWasteRequest, Integer> {

    //public List<OutsourceWasteRequest> findByCustomer(String customer);
	public List<OutsourceWasteRequest> findByEmail(String email);
	//public List<OutsourceWasteRequest> findById(int id);
	//public OutsourceWasteRequest save(int outWasteRequestId);
	@Query(value = "SELECT * FROM outsource_waste_request  WHERE outsource_waste_request.status= 'Pending' OR outsource_waste_request.status = 'Not Availabale At The Moment'", nativeQuery = true)
	public List<OutsourceWasteRequest> findstatus();
	
	@Query(value = "SELECT * FROM outsource_waste_request  WHERE outsource_waste_request.status= 'Confirmed'", nativeQuery = true)
	public List<OutsourceWasteRequest> findstatusCon();
	
	
	
}
