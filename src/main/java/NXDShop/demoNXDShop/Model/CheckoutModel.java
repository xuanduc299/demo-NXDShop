package NXDShop.demoNXDShop.Model;

import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tb_checkout_nxd")


public class CheckoutModel{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	private Integer id;
	private String firstname;
	private String lastname;
	private String companyname;
	private String email;
	private String companyemail;
	private Integer phone;
	private String address;
	private String message;
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getFirstname() {
		return firstname;
	}
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}
	public String getLastname() {
		return lastname;
	}
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}
	public String getCompanyname() {
		return companyname;
	}
	public void setCompanyname(String companyname) {
		this.companyname = companyname;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getCompanyemail() {
		return companyemail;
	}
	public void setCompanyemail(String companyemail) {
		this.companyemail = companyemail;
	}
	public Integer getPhone() {
		return phone;
	}
	public void setPhone(Integer phone) {
		this.phone = phone;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	@Override
	public int hashCode() {
		return Objects.hash(address, companyemail, companyname, email, firstname, id, lastname, message, phone);
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		CheckoutModel other = (CheckoutModel) obj;
		return Objects.equals(address, other.address) && Objects.equals(companyemail, other.companyemail)
				&& Objects.equals(companyname, other.companyname) && Objects.equals(email, other.email)
				&& Objects.equals(firstname, other.firstname) && Objects.equals(id, other.id)
				&& Objects.equals(lastname, other.lastname) && Objects.equals(message, other.message)
				&& Objects.equals(phone, other.phone);
	}
	@Override
	public String toString() {
		return "CheckoutModel [id=" + id + ", firstname=" + firstname + ", lastname=" + lastname + ", companyname="
				+ companyname + ", email=" + email + ", companyemail=" + companyemail + ", phone=" + phone
				+ ", address=" + address + ", message=" + message + "]";
	}
	
}

