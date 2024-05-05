package com.skilldistillery.eventtracker.services;

import java.util.List;

import com.skilldistillery.eventtracker.entities.Combat;

public interface CombatService {
	
	Combat findById(int id);
	List<Combat> index();
	Combat create(Combat combat);
	Combat update (Combat combat, int combatId);
	void Delete(int combatId);
	
}
