package com.WasteManagementSystem.Backend.customer.cart;

import java.util.List;
import java.util.Optional;

// import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.WasteManagementSystem.Backend.entity.Product;
import com.WasteManagementSystem.Backend.repository.ProductRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class CartController {
	@Autowired
	private CartService cartService;

	@Autowired
	private ProductRepository productRepo;

	@PostMapping("/addToCart/{pid}")
	public Optional<Object> addToCart(@PathVariable(value = "pid") int pid, @RequestBody Cart cart)
			throws Exception {
		
		Product productObj = new Product();
		productObj.setId(pid);
		cart.setProduct(productObj);
		Cart checkProduct = cartService.checkProduct(cart.getCustomerId(), cart.getProduct());
		
		if (checkProduct != null) {
			throw new Exception("This product has already added in cart");
		} else {

			return productRepo.findById(pid).map(product -> {
				cart.setProduct(product);
				return cartService.SaveCart(cart);
			});
		}

	}

	@GetMapping("/getCartDetails/{id}")
	public List<Cart> getCartDetails(@PathVariable(value = "id") int customerId) throws Exception {
		return cartService.getCartDetails(customerId);
	}

	@DeleteMapping("/cart/delete/{id}")
	public ResponseEntity<Void> updateCart(@PathVariable(value = "id") int id) {
		cartService.updateCart(id);
		return ResponseEntity.noContent().build();
	}

	// @PutMapping("/updateCartOrder")
	// public String updateCartOrder(@RequestBody Cart cart) {
	// 	cartService.updateCartOrder(cart);
	// 	return "ok";
	// }
}
