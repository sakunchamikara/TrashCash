package com.WasteManagementSystem.Backend.customer.orders;

import javax.persistence.criteria.Order;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CartRepository extends JpaRepository<Order, Integer>{

}
