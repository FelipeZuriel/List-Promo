package felps.zuriel.promo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import felps.zuriel.promo.model.Promo;
import felps.zuriel.promo.services.PromoService;

@RestController
public class PromoController {
	
	@Autowired
	private PromoService promoService;
	
	@GetMapping("/promo")
	public ResponseEntity<Iterable<Promo>> getPromo(){
	    return ResponseEntity.ok().body(promoService.getPromo());
	}

	@GetMapping("/promo/{id}")
	public ResponseEntity<Promo> getPromo(@PathVariable Long id){
		return ResponseEntity.ok().body(promoService.getPromo(id));
	}
	
	@PostMapping("/promo")
	public ResponseEntity<Void> adicionarPromo(@RequestBody Promo promo){
		promoService.createPromo(promo);
		return new ResponseEntity<Void>(HttpStatus.CREATED);
	}
	
	@PutMapping("/promo")
	public ResponseEntity<Void> atualizarPromo(@RequestBody Promo promo){
		promoService.updatePromo(promo);
		return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	}
	
	@DeleteMapping("/promo/{id}")
	public ResponseEntity<Void> apagarPromo(@PathVariable Long id){
		var promo = promoService.getPromo(id);
		promoService.deletePromo(promo);
		return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	}
	
}
