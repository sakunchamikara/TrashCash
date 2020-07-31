package com.WasteManagementSystem.Backend.customer.cart;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.WasteManagementSystem.Backend.repository.ProductRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class CartController {
	@Autowired
	private CartService cartService;
	
	@Autowired
	private ProductRepository productRepo ;

	@PostMapping("/addToCart/{pid}")
	public Optional<Object> addToCart(@PathVariable(value = "pid") int pid,@Valid @RequestBody Cart cart) throws Exception {
//		Product productObj = null;
//		Cart cartObj = null;
		Cart checkProduct = cartService.checkProduct(cart.getCustomerId(), cart.getProduct());
		if (checkProduct != null) {
			throw new Exception("This product has already added in cart");
		} else {
			
			 return productRepo.findById(pid).map(product -> {
		         cart.setProduct(product);
		         return  cartService.SaveCart(cart);
		        });
//			cartObj = cartService.SaveCart(cart);
//			return cartObj;
		}

	}
	@GetMapping("/getCartDetails/{id}")
	public List<Cart> getCartDetails(@PathVariable(value = "id") int customerId) throws Exception {
		return cartService.getCartDetails(customerId);
	}
}
