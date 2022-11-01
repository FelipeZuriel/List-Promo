package felps.zuriel.promo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity(name="promo")
public class Promo {
    
    @Id
    @GeneratedValue
    private Long id;
    private String titulo;
	private String cupom;
    private Double preco;
    private String descricao;
    private String link;
    
    public Promo() {
        super();
    }
    
    public Promo(Long id, String titulo, String cupom, Double preco, String descricao, String link) {
		super();
		this.id = id;
		this.titulo = titulo;
		this.cupom = cupom;
		this.preco = preco;
		this.descricao = descricao;
		this.link = link;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public String getCupom() {
		return cupom;
	}

	public void setCupom(String cupom) {
		this.cupom = cupom;
	}

	public Double getPreco() {
		return preco;
	}

	public void setPreco(Double preco) {
		this.preco = preco;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public String getLink() {
		return link;
	}

	public void setLink(String link) {
		this.link = link;
	}

}