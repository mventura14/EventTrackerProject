package com.skilldistillery.eventtracker.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.eventtracker.entities.Combat;
import com.skilldistillery.eventtracker.services.CombatService;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("api")
public class CombatController {
	
	private CombatService combatService;

	public CombatController(CombatService combatService) {
		super();
		this.combatService = combatService;
	}


	@GetMapping("combats")
	public List<Combat> index(){
		
		List<Combat> allEntries = combatService.index();
		
		return  allEntries;
	}
	
	@GetMapping("combats/{id}")
	public Combat findById(@PathVariable("id") int id) {
		
		Combat combatEntry = combatService.findById(id);
		return combatEntry;
		
	}
	
	@PostMapping("combats")
	public Combat create(@RequestBody Combat combat,HttpServletResponse response, HttpServletRequest request) {
		
		Combat createdEntry = combatService.create(combat);
		
		if (createdEntry != null) {
			response.setStatus(HttpServletResponse.SC_CREATED);
			response.setHeader("location", request.getRequestURI().toString() + "/" + createdEntry.getId());
		} else {
			response.setStatus(HttpServletResponse.SC_NOT_FOUND);
		}
		
		return createdEntry;
		
	}

	@PostMapping("combats/{id}")
	public Combat updateEntry(@PathVariable("id") int id ,@RequestBody Combat combat) {
		
		Combat combatEntry = combatService.update(combat, id);
		
		return combatEntry;
	}
	
	@GetMapping("combats/search/{keyword}")
	public List<Combat> searchByKeyword(@PathVariable("keyword") String keyword){
		
		List<Combat> entryList = combatService.findByKeyword(keyword);
		return entryList;
	};

	@GetMapping("combats/search/{nameKeyword}/{typeKeyword}")
	public List<Combat> searchByKeyword(@PathVariable("nameKeyword") String nameKw,@PathVariable("typeKeyword") String typeKw){
		
		System.out.println("-----"+ nameKw + "------");
		
		List<Combat> entryList = combatService.findByKeyword(nameKw,typeKw);
		return entryList;
	};
	
	@DeleteMapping("combats/{id}")
	public void delete(@PathVariable("id") int id) {
		
		combatService.delete(id);
	}
}
