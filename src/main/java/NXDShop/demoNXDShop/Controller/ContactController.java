package NXDShop.demoNXDShop.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import NXDShop.demoNXDShop.Model.*;
import NXDShop.demoNXDShop.Repository.*;
import NXDShop.demoNXDShop.Service.*;

@Controller
// @RequestMapping (path = "contacts")
public class ContactController {
	@Autowired
	private ContactRepository contactRepository;
	@Autowired
	private final ContactService contactService;

	public ContactController(ContactService contactService) {
		this.contactService = contactService;
	}

	// @RequestMapping (value = "", method = RequestMethod.GET)
	@GetMapping("/contacts")
	public String getAllContacts(ModelMap model) {
		// Iterable<Contact> contactRequest = contactRepository.findAll();
		// model.addAttribute("contactRequest" , contactRequest);
		model.addAttribute("contactRequest", new ContacModel());
		model.addAttribute("success", "successful,waiting.... ");
		System.out.println("haha");
		return "contact";
	}

	@GetMapping("/success")
	public String getAllsuccess() {
		return "contact";
	}

	@PostMapping("/contacts")
	public String getContacts(@ModelAttribute ContacModel ct, ModelMap model) {
		System.out.println("register request" + ct);
		ContacModel contactUser = contactService.contacModel(ct.getName(), ct.getEmail(), ct.getMessage());
		model.addAttribute("success", "successful,waiting.... ");
		return contactUser == null ? "error_page" : "redirect:/contact-us-2";
	}

}
