package NXDShop.demoNXDShop.Service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import NXDShop.demoNXDShop.Model.*;
import NXDShop.demoNXDShop.Repository.*;

@Service
public class ContactService {
	
	private final ContactRepository contactRepository;
	
	public ContactService(ContactRepository contactRepository) {
	    this.contactRepository = contactRepository;
	}
//	 public List<Contact> listAll() {
//		 List<Contact> products = new ArrayList ();
//		 contactRepository.findAll().forEach(products::add); 
//		 return products;
//	 }
	
	public ContacModel contacModel(String name,String email,String message) {
		if(email ==null){
			return null;
		}else {
			ContacModel ct =new ContacModel();
			ct.setName(name);
			ct.setEmail(email);
			ct.setMessage(message);
			return  contactRepository.save(ct);
		}
	}
	
	
	
	
}
