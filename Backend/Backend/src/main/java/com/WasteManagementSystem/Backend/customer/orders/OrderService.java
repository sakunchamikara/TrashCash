package com.WasteManagementSystem.Backend.customer.orders;

import java.util.List;
import java.util.Optional;

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

	public List<Orders> findByStatus(String type) {
		return orderRepo.findByStatus(type);
	}

	public List<Orders> findall() {
		return orderRepo.findAll();
	}

	public Orders findById(int id) {
		return orderRepo.findById(id);
	}

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> c97b06ef4a08dd1dc8e99918a4f583d2be7ad0ae
	public List<Orders> findAllPendingOrders(){
		return orderRepo.findPending();
	}

<<<<<<< HEAD
>>>>>>> c97b06ef4a08dd1dc8e99918a4f583d2be7ad0ae
=======
>>>>>>> c97b06ef4a08dd1dc8e99918a4f583d2be7ad0ae
}

