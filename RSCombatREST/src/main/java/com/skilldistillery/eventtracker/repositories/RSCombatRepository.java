package com.skilldistillery.eventtracker.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.eventtracker.entities.Combat;

public interface RSCombatRepository extends JpaRepository<Combat, Integer>{

	List<Combat> findByCombatStyleContainingOrCategoryContainingOrNameContaining(String keyword, String keyword2,
			String keyword3);

	List<Combat> findByCombatStyleContainingAndCategoryContainingAndNameContaining(String nameKw, String typeKw,
			String string);


	List<Combat> findByNameContainingAndCategoryContaining(String nameKw, String categoryKw);
	
	

}
