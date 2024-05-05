package com.skilldistillery.eventtracker.entities;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.Persistence;

class CombatTest {

	private static EntityManagerFactory emf;
	private EntityManager em;
	Combat combat = null;

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf = Persistence.createEntityManagerFactory("RSCombatJPA");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		combat = em.find(Combat.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		combat = null;
	}
	
	@Test
	void combat_entity_basic_mapping() {
		assertNotNull(combat);
		assertEquals("Chaos Elemental", combat.getName());
	}

}
