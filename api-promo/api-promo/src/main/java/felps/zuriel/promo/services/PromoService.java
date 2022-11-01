package felps.zuriel.promo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import felps.zuriel.promo.model.Promo;
import felps.zuriel.promo.repository.PromoRepository;

@Service
public class PromoService {
		
	@Autowired
	private PromoRepository repository;
	
	public Iterable<Promo> getPromo(){
		return repository.findAll();
	}
	
	public void createPromo(Promo promo) {
		repository.save(promo);
	}
	
	public Promo getPromo(Long id) {
		return repository.findById(id).orElse(null);
	}
	
	public void updatePromo(Promo promo) {
		repository.save(promo);
	}
	
	public void deletePromo(Promo promo) {
		repository.delete(promo);
	}
	
}
