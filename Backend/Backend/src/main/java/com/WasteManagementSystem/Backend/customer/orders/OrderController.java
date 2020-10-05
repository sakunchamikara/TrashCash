package com.WasteManagementSystem.Backend.customer.orders;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class OrderController {

	@Autowired
	private OrderService orderService;

	@PostMapping("/setOrder")
	public Orders insertOrder(@Valid @RequestBody Orders order) {
		return orderService.saveOrder(order);
	}

}
