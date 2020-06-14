package com.klinickicentar.KlinickiCentarREST.model.users;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Pattern;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;

@Entity // This tells Hibernate to make a table out of this class
@Table(name = "patients")
@EntityListeners(AuditingEntityListener.class)

public class Patient extends User{
	  @GeneratedValue(strategy=GenerationType.IDENTITY)

	    @Column(length = 9, nullable = false, unique = true, updatable = false)
	    @Pattern(regexp = "^[0-9]{9,10}$")
		private int lbo;
		
	    public Patient() {
			super();
		}
		

}


