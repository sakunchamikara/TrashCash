package com.WasteManagementSystem.Backend.customer.cart;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class CartController {
	@Autowired
	private CartService cartService;
	
	@PostMapping("/addToCart")
	public Cart addToCart(@RequestBody Cart cart) {
		Cart cartObj = null;
		cartObj = cartService.SaveCart(cart);
		return cartObj;
	}

}
