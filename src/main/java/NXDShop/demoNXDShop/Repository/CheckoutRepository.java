package NXDShop.demoNXDShop.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import NXDShop.demoNXDShop.Model.*;

public interface CheckoutRepository extends JpaRepository<CheckoutModel,Integer> {
	
}