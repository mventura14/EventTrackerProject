package com.skilldistillery.eventtracker.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.eventtracker.entities.Combat;

public interface RSCombatRepository extends JpaRepository<Combat, Integer>{
	
	

}
