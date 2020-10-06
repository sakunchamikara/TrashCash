package com.WasteManagementSystem.Backend.customer.orders;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderService {
	@Autowired
	private OrderRepository orderRepo;

	public Orders saveOrder(Orders order) {
		return orderRepo.save(order);
	}

	public List<Orders> findByCustomerId(int id) {
		return orderRepo.getOrderById(id);
	}

}
