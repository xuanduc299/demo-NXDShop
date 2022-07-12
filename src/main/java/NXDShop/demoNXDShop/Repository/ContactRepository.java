package NXDShop.demoNXDShop.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import NXDShop.demoNXDShop.Model.*;

public interface ContactRepository extends JpaRepository<ContacModel,Integer> {
	
}