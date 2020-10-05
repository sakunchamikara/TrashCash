package com.WasteManagementSystem.Backend.customer.cart;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.WasteManagementSystem.Backend.entity.Product;

public interface CartRepository extends JpaRepository<Cart, Integer> {
    public Cart findByCustomerIdAndProduct(int customerId, Product product);

    public List<Cart> findByCustomerId(int customerId);

    @Query(value = "SELECT * FROM cart INNER JOIN product ON cart.product_id=product.id WHERE cart.customer_id = :id and cart.status = 'pending'", nativeQuery = true)
    public List<Cart> getData(int id);

    public void deleteById(int id);

    // @Query(value= "UPDATE cart SET order_id = :cart.orderId,status = 'paid' WHERE
    // customer_id = :cart.customerId and status = 'pending'", nativeQuery = true)
    // public void updateCartOrder(Cart cart);
}
