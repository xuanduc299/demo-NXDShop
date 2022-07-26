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
public class CheckoutController {
	@Autowired
	private CheckoutRepository checkoutRepository;
	@Autowired
	private final CheckoutService checkoutService;

	public CheckoutController(CheckoutService checkoutService) {
		this.checkoutService = checkoutService;
	}

	// @RequestMapping (value = "", method = RequestMethod.GET)
	@GetMapping("/checkouts")
	public String getAllCheckouts(ModelMap model) {
		// Iterable<Contact> contactRequest = contactRepository.findAll();
		// model.addAttribute("contactRequest" , contactRequest);
		model.addAttribute("checkoutRequest", new ContacModel());
		model.addAttribute("success", "successful,waiting.... ");
		System.out.println("haha");
		return "checkout";
	}

	@GetMapping("/successs")
	public String getAllsuccess() {
		return "checkout";
	}

	@PostMapping("/checkouts")
	public String getCheckouts(@ModelAttribute CheckoutModel ct, ModelMap model) {
		System.out.println("register request" + ct);
		CheckoutModel checkoutUser = checkoutService.checkoutModel(ct.getFirstname(),
				ct.getLastname(),ct.getCompanyname(), ct.getEmail(), ct.getCompanyemail(),
				ct.getMessage(),ct.getPhone(),ct.getAddress());
		model.addAttribute("success", "successful,waiting.... ");
		return checkoutUser == null ? "error_page" : "redirect:/checkout";
	}

}