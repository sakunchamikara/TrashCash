package com.WasteManagementSystem.Backend.customer.cart;

import java.util.List;
import java.util.Optional;

import com.WasteManagementSystem.Backend.customer.orders.Orders;
import com.WasteManagementSystem.Backend.entity.Product;
import com.WasteManagementSystem.Backend.repository.ProductRepository;

// import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class CartController {
	@Autowired
	private CartService cartService;

	@Autowired
	private ProductRepository productRepo;
	
	@Autowired
	private CartRepository repo;

	@PostMapping("/addToCart/{pid}")
	public Optional<Object> addToCart(@PathVariable(value = "pid") int pid, @RequestBody Cart cart)
			throws Exception {
		
		Product productObj = new Product();
		productObj.setId(pid);
		cart.setProduct(productObj);
		String status = "pending";
		Cart checkProduct = cartService.checkProduct(cart.getCustomerId(), cart.getProduct(),status);
		
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

	//all the data of cart
	@GetMapping("/getCartDetails")
    public List<Cart> getAllProducts() {
        return repo.findAll();
    }
	
	@GetMapping("/getCart/{email}")
	public List<Cart> getCartDetails(@PathVariable String email) {
	    return cartService.fetchCartByEmail(email);
	}
	
//	@GetMapping("/getCartDetails/{usertype}")
//	 public List<Cart> getCartDetailsByUsertype(@PathVariable String usertype) throws Exception {
//		Product productObj = new Product();
//		productObj.setUsertype(usertype);
//		
//		return cartService.getCartDetailsUsertype(usertype);
//	}
	
	@DeleteMapping("/cart/delete/{id}")
	public ResponseEntity<Void> updateCart(@PathVariable(value = "id") int id) {
		cartService.updateCart(id);
		return ResponseEntity.noContent().build();
	}

	@PostMapping("/updateCartOrder/{orderId}")
	public String updateCartOrder(@PathVariable(value = "orderId") int orderId ,@RequestBody List<Cart> carts) {
		Orders orderObj = new Orders();
		orderObj.setId(orderId);
		for (Cart cart : carts){
			cart.setOrder(orderObj);
			cartService.SaveCart(cart);
		}
		return "ok";
	}

	@GetMapping("/getCartByOrder/{oid}")
	public List<Cart> getCartByOrder(@PathVariable int oid) {
		return cartService.getCartByOrder(oid);
	}
}
