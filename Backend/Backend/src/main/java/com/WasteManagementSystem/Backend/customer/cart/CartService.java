package com.WasteManagementSystem.Backend.customer.cart;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.WasteManagementSystem.Backend.entity.Product;

@Service
public class CartService {
	@Autowired
	private CartRepository repo;
	
	public Cart SaveCart(Cart cart) {
		return repo.save(cart);
	}

	public Cart checkProduct(int customerId,Product product){
		return repo.findByCustomerIdAndProduct(customerId, product);
	}
	
	public List<Cart> getCartDetails(int customerId) {
//		return repo.findByCustomerId(customerId);
		return repo.getData(customerId);
	}
}
