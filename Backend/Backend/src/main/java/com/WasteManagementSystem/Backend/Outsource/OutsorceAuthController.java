//package com.WasteManagementSystem.Backend.Outsource;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.WasteManagementSystem.Backend.Outsource.OutsorceAuthService;
//
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.GetMapping;
//
//@CrossOrigin(origins = "http://localhost:4200")
//@RestController
//public class OutsorceAuthController {
//
//    @Autowired
//    private OutsorceAuthService service;
//
//    @PostMapping("/registerOutsource")
//    public Outsource registerUser(@RequestBody Outsource outsource) throws Exception {
//        String tempEmail = outsource.getEmail();
//        if (tempEmail != null && !"".equals(tempEmail)) {
//        	Outsource userObj = service.fetchOutsourceByEmail(tempEmail);
//            if (userObj != null) {
//                throw new Exception("User with " + tempEmail + " is already exist !!!");
//            }
//        }
//        Outsource userObj = null;
//        userObj = service.saveOutsource(outsource);
//        return userObj;
//    }
//
////    @PostMapping("/loginCustomer")
////    public Customer loginUser(@RequestBody Customer customer) throws Exception {
////        String tempEmail = customer.getEmail();
////        String tempPass = customer.getPassword();
////        Customer userObj = null;
////        if (tempEmail != null && tempPass != null) {
////            userObj = CustomerAuthService.fetchCustomerByEmailAndPassword(tempEmail, tempPass);
////        }
////        if (userObj == null) {
////            throw new Exception("Bad credentials !!!");
////        }
////
////        return userObj;
////    }
////
////    @GetMapping("/getCustomer/{email}")
////	public Customer getCustomer(@PathVariable String email) {
////		return CustomerAuthService.fetchCustomerByEmail(email);
////	}
//}
