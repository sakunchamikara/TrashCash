package com.WasteManagementSystem.Backend.customer.orders;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends JpaRepository<Orders, Integer> {

    @Query(value="SELECT * FROM orders WHERE customer_id = :id",nativeQuery = true)
    public List<Orders> getOrderById(int id);

	public List<Orders> findByStatus(String type);
	
	public Orders save(Orders order);
	
	public Orders findById(int id);
}
