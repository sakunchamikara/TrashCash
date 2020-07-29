package com.WasteManagementSystem.Backend.customer.cart;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CartService {
	@Autowired
	private CartRepository repo;
	
	public Cart SaveCart(Cart cart) {
		return repo.save(cart);
	}
}
