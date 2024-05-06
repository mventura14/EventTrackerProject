package com.skilldistillery.eventtracker.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.skilldistillery.eventtracker.entities.Combat;
import com.skilldistillery.eventtracker.repositories.RSCombatRepository;

@Service
public class combatServiceImpl implements CombatService {
	
	private RSCombatRepository combatRepo;
	
	

	public combatServiceImpl(RSCombatRepository combatRepo) {
		super();
		this.combatRepo = combatRepo;
	}

	@Override
	public Combat findById(int id) {
		
		Optional<Combat> combatEntry = combatRepo.findById(id);
		
		if(combatEntry.isPresent()) {
			return combatEntry.get();
		}
		
		return null;
	}

	@Override
	public List<Combat> index() {
		return combatRepo.findAll();
	}

	@Override
	public Combat create(Combat combat) {
		return combatRepo.saveAndFlush(combat);
	}

	@Override
	public Combat update(Combat combat, int combatId) {
		Optional<Combat> entryOptional = combatRepo.findById(combatId);
		Combat managedEntry = null;
		
		if(entryOptional.isPresent()) {
			managedEntry = entryOptional.get();
			
			
			if(combat.getCategory() != null) {managedEntry.setCategory(combat.getCategory());}
			if(combat.getCombatStyle() != null) {managedEntry.setCombatStyle(combat.getCombatStyle());}
			if(combat.getCount() > 0) {managedEntry.setCount(combat.getCount());}
			if(combat.getGp() != null) {managedEntry.setGp(combat.getGp());}
			if(combat.getName() != null) {managedEntry.setName(combat.getName());}
			if(combat.getTime() != null) {managedEntry.setTime(combat.getTime());}
			
			
			
			combatRepo.saveAndFlush(managedEntry);
		}
	
		return managedEntry;
	}

	@Override
	public void delete(int combatId) {
		if (combatRepo.existsById(combatId)) {
			combatRepo.deleteById(combatId);
		}
		
	}

	@Override
	public List<Combat> findByKeyword(String keyword) {
		
		List<Combat> entryList = combatRepo.findByCombatStyleContainingOrCategoryContainingOrNameContaining(keyword,keyword,keyword);
		
		return entryList;
	}

	@Override
	public List<Combat> findByKeyword(String nameKw, String categoryKw) {
		
		nameKw = nameKw.equals("")? " ":nameKw;
		categoryKw = categoryKw.equals("")? " ":categoryKw;
		
		List<Combat> entryList = combatRepo.findByNameContainingAndCategoryContaining(nameKw,categoryKw);
		return entryList;
	}



	

	
}
