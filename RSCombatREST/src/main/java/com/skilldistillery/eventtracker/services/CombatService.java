package com.skilldistillery.eventtracker.services;

import java.util.List;

import com.skilldistillery.eventtracker.entities.Combat;

public interface CombatService {
	
	Combat findById(int id);
	List<Combat> index();
	Combat create(Combat combat);
	Combat update (Combat combat, int combatId);
	List<Combat> findByKeyword(String keyword);
	List<Combat> findByKeyword(String nameKw, String categoryKw);
	void delete(int combatId);
	
}
