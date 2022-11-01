package felps.zuriel.promo.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import felps.zuriel.promo.model.Promo;

@Repository
public interface PromoRepository extends CrudRepository<Promo, Long>{
    
}  
