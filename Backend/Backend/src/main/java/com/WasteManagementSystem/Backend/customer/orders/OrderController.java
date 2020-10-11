package com.WasteManagementSystem.Backend.customer.orders;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.WasteManagementSystem.Backend.customer.Customer;

import org.springframework.web.bind.annotation.RequestParam;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class OrderController {

	@Autowired
	private OrderService orderService;
	
	@PostMapping("/setOrder/{cid}")
	public Orders insertOrder(@Valid @PathVariable int cid ,@RequestBody Orders order) {
		Customer customerObj = new Customer();
		customerObj.setId(cid);
		order.setCustomer(customerObj);
		return orderService.saveOrder(order);
	}

	@GetMapping("/getOrders/{id}")
	public List<Orders> getOrderById(@PathVariable int id) {
		return orderService.findByCustomerId(id);
	}

	@GetMapping(value="getOrdersByType/{type}")
	public List<Orders> getOrdersByType(@PathVariable String type) {
		return orderService.findByStatus(type);
	}
	
	@GetMapping("/getAllOrders")
	public List<Orders> getall() {
		return orderService.findall();
	}
	
	@PutMapping("/updatePendingOrderStatus")
	public Orders updatePendingOrderStatus(@RequestBody Orders order) {
		Orders orderObj = new Orders();
		orderObj = orderService.findById(order.getId());
		orderObj.setStatus(order.getStatus()); 
		return orderService.saveOrder(orderObj);
	}


	@GetMapping("/agentPendingOrders")
    public List<Orders> getAllPendingOrders(){
        return orderService.findAllPendingOrders();
    }

	
	@GetMapping("/getOrder/{oid}")
	public Orders getorder(@PathVariable int oid) {
		return orderService.findById(oid);
	}
	
	@PutMapping("/saveOrder")
	public Orders saveOrder(@RequestBody Orders order) {
		return orderService.saveOrder(order);
	}
	
}

