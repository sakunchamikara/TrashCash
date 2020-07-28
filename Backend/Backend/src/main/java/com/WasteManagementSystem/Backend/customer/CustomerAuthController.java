package com.WasteManagementSystem.Backend.customer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.GetMapping;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class CustomerAuthController {

    @Autowired
    private CustomerAuthenticationService CustomerAuthService;

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
}
