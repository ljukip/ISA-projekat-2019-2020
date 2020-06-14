package com.klinickicentar.KlinickiCentarREST.model.users;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.Pattern;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;

@Entity // This tells Hibernate to make a table out of this class
@Table(name = "users")
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
@EntityListeners(AuditingEntityListener.class)
public class User{
  @Id
  @GeneratedValue(strategy = GenerationType.TABLE)
    private Long id;

    @Column(name="name", length = 32, nullable = false)
    @Pattern(regexp = "^[A-Za-z]*$")
	private String name;

    @Column(length = 32, nullable = false)
    @Pattern(regexp = "^[A-Za-z]*$")
	private String surname;
	
    @Column(length = 13, nullable = false, unique = true, updatable = false)
    @Pattern(regexp = "^[0-9]{9,10}$")
	private int jmbg;

	@Column(length = 32, nullable = false)
	@Pattern(regexp = "^[A-Za-z]*$")
	private String address;

	@Column(length = 32, nullable = false)
	@Pattern(regexp = "^[A-Za-z]*$")
	private String city;

	@Column(length = 32, nullable = false)
	@Pattern(regexp = "^[A-Za-z]*$")
	private String country;
	
	@Column(length = 5, nullable = false)
	@Pattern(regexp = "^[0-9]{9,10}$")
	private int zip;

	@Column(length = 45, nullable = false, unique = true, updatable = false)
	@Pattern(regexp = "^[A-Za-z0-9+_.-]+@(.+)$")
	private String email;
	
	@Column(nullable = false)
	private boolean emailComfirmation;
	
	@Column(length = 45, nullable = false, unique = true, updatable = false)
	@Pattern(regexp = "^[A-Za-z0-9+_.-]+@(.+)$")
	private String emailToken;

	@Column(length = 45, nullable = false, unique = true)
	@Pattern(regexp = "^[0-9]{9,10}$")
	private String phone;

	@Column(length = 45, nullable = false)
	@Pattern(regexp = "^[A-Za-z]*$")
	private String userName;
	
	@Column(length = 45, nullable = false)
	@Pattern(regexp = "^[A-Za-z]*$")
	private String password;

	@Column(length = 305, nullable = false)
	@Pattern(regexp = "^[A-Za-z]*$")
	private String notes;
	
	@Column(length = 45, nullable = false)
	@Pattern(regexp = "^[A-Za-z]*$")
	private String status;

	@Column(nullable = false)
	private boolean activated;


	public User() {
		super();
	}


	public User(String name, String surname, int jmbg, String address, String city, String country,int zip, String email,
			String phone, String userName, String password, boolean activated) {
		super();
		this.name = name;
		this.surname = surname;
		this.jmbg=jmbg;
		this.address = address;
		this.city = city;
		this.country = country;
		this.zip = zip;
		this.email = email;
		this.phone = phone;
		this.userName = userName;
		this.password = password;
		this.activated = activated;
	}
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getSurname() {
		return surname;
	}


	public void setSurname(String surname) {
		this.surname = surname;
	}


	public int getJmbg() {
		return jmbg;
	}


	public void setJmbg(int jmbg) {
		this.jmbg = jmbg;
	}


	public String getAddress() {
		return address;
	}


	public void setAddress(String address) {
		this.address = address;
	}


	public String getCity() {
		return city;
	}


	public void setCity(String city) {
		this.city = city;
	}


	public String getCountry() {
		return country;
	}


	public void setCountry(String country) {
		this.country = country;
	}
	
	public int getZip() {
		return zip;
	}


	public void setZip(int zip) {
		this.zip = zip;
	}

	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getPhone() {
		return phone;
	}


	public void setPhone(String phone) {
		this.phone = phone;
	}


	public String getUserName() {
		return userName;
	}


	public void setUserName(String userName) {
		this.userName = userName;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public boolean getActivated() {
		return activated;
	}


	public void setActivated(boolean activated) {
		this.activated = activated;
	}
	
	public void copyUser (User user){
		this.activated=user.getActivated();
		this.address=user.getAddress();
		this.city=user.getCity();
		this.country=user.getCountry();
		this.email=user.getEmail();
		this.id=user.getId();
		this.jmbg=user.getJmbg();
		this.name=user.getName();
		this.password=user.getPassword();
		this.phone=user.getPhone();
		this.surname=user.getSurname();
		this.userName=user.getUserName();
		this.zip=user.getZip();
		
	}
	
	


} 