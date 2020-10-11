package com.WasteManagementSystem.Backend.customer;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;
import javax.validation.Valid;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class CustomerAuthController {

    @Autowired
    private CustomerAuthenticationService CustomerAuthService;
    private CustomerAuthenticationRepository customerRepo;           

    @PostMapping("/registerCustomer")
    public Customer registerUser(@RequestBody Customer customer) throws Exception {
        String tempEmail = customer.getEmail();
        if (tempEmail != null && !"".equals(tempEmail)) {
            Customer userObj = CustomerAuthService.fetchCustomerByEmail(tempEmail);
            if (userObj != null) {
                throw new Exception("User with " + tempEmail + " is already exist !!!");
            }
        }
        Customer userObj = null;
        userObj = CustomerAuthService.saveCustomer(customer);
        return userObj;
    }

    @PostMapping("/loginCustomer")
    public Customer loginUser(@RequestBody Customer customer) throws Exception {
        String tempEmail = customer.getEmail();
        String tempPass = customer.getPassword();
        Customer userObj = null;
        if (tempEmail != null && tempPass != null) {
            userObj = CustomerAuthService.fetchCustomerByEmailAndPassword(tempEmail, tempPass);
        }
        if (userObj == null) {
            throw new Exception("Bad credentials !!!");
        }

        return userObj;
    }

    @GetMapping("/getCustomer/{email}")
	public Customer getCustomer(@PathVariable String email) {
		return CustomerAuthService.fetchCustomerByEmail(email);
	}

    // @GetMapping("/termstatus")
    // public List<customerstatus> getAllTermStatus(){
    //     return CustomerAuthService.findAllTermStatus();
    // }
    
    // @PutMapping("/updateCustomerProfile")
	// public Customer updateCustomerProfile(@RequestBody Customer customer) {
    // 	Customer updatedUser = CustomerAuthService.saveUser(customer);
	// 	return updatedUser;
    // }
    
    @GetMapping("/customerstatus")
    public List<Customer> getTermsAceptedCustomers() {
        return CustomerAuthService.findBytermstatus();
    }


    @PutMapping("/updateCustomer/{id}")
    public ResponseEntity<Customer> updateCustomer(@PathVariable(value = "id") int customerId,
         @Valid @RequestBody Customer customerDetails) throws ResourceNotFoundException {
            Customer customer =customerRepo.findById(customerId)
        .orElseThrow(() -> new ResourceNotFoundException("Customer not found for this id :: " + customerId));

        customer.setFirstName(customerDetails.getFirstName());
        customer.setType(customerDetails.getType());
        customer.setEmail(customerDetails.getEmail());
        customer.setContactNumber(customerDetails.getContactNumber());
        customer.setAddress(customerDetails.getAddress());
        customer.setPassword(customerDetails.getPassword());
        customer.setTermStatus(customerDetails.getTermStatus());
        customer.setLocation(customerDetails.getLocation());
        customer.setOrders(customerDetails.getOrders());
        
       ;
        final Customer updatedCustomer = customerRepo.save(customer);
        return ResponseEntity.ok(updatedCustomer);
    }

    @PutMapping("/updateCustomerProfile")
	public User updateCustomerProfile(@RequestBody Customer customer) {
		
		User updatedCustomer = CustomerAuthService.saveUser(customer);
		return updatedCustomer;
	}



	
}
