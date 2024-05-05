package com.skilldistillery.eventtracker.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.eventtracker.entities.Combat;
import com.skilldistillery.eventtracker.services.CombatService;

@RestController
@RequestMapping("api")
public class CombatController {
	
	private CombatService combatService;

	public CombatController(CombatService combatService) {
		super();
		this.combatService = combatService;
	}
	
	@GetMapping("ping")
	public String ping() {return "pong";}
	
	@GetMapping("combats")
	public List<Combat> index(){
		
		List<Combat> allEntries = combatService.index();
		
		return  allEntries;
	}
	
	@GetMapping("combats/{id}")
	public Combat findById(@PathVariable("id") int id) {
		
		Combat combatEntry = combatService.findById(id);
		System.out.println(combatEntry.getTime().getMinute());
		return combatEntry;
		
	}
	
	@PostMapping("combats")
	public Combat create(@RequestBody Combat combat) {
		
		Combat createdEntry = combatService.create(combat);
		
		
		
		return createdEntry;
		
	}

	@PostMapping("combats/{id}")
	public Combat updateEntry(@PathVariable("id") int id ,@RequestBody Combat combat) {
		
		Combat combatEntry = combatService.update(combat, id);
		
		return combatEntry;
	}

}
