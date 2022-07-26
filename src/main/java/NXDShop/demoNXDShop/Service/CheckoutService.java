package NXDShop.demoNXDShop.Service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import NXDShop.demoNXDShop.Model.*;
import NXDShop.demoNXDShop.Repository.*;

@Service
public class CheckoutService {
	private final CheckoutRepository checkoutRepository;
	
	public CheckoutService(CheckoutRepository checkoutRepository) {
	    this.checkoutRepository = checkoutRepository;
	}
//	 public List<Contact> listAll() {
//		 List<Contact> products = new ArrayList ();
//		 contactRepository.findAll().forEach(products::add); 
//		 return products;
//	 }
	
	public CheckoutModel checkoutModel(String firstname,String lastname,String message,String companyname ,
			String email ,String companyemail ,Integer phone ,String address
			) {
		if(email ==null){
			return null;
		}else {
			CheckoutModel ct =new CheckoutModel();
			ct.setFirstname(firstname);
			ct.setLastname(lastname);
			ct.setCompanyname(companyname);
			ct.setEmail(email);
			ct.setCompanyemail(companyemail);
			ct.setPhone(phone);
			ct.setAddress(address);
			ct.setMessage(message);
			return  checkoutRepository.save(ct);
		}
	}
	
	
	
	
}
