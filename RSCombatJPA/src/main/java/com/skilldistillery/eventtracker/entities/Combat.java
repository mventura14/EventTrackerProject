package com.skilldistillery.eventtracker.entities;

import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.Objects;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Combat {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private String name;
	
	private LocalTime time;
	
	private String category;
	
	private int count;
	
	@Column(name = "combat_style")
	private String combatStyle;
	
	private Long gp;
	
	@CreationTimestamp
	@Column(name = "created_at")
	private LocalDateTime createdAt;
	
/////////////////////////////////////////////////////////////////////	

	public Combat() {
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public LocalTime getTime() {
		return time;
	}

	public void setTime(LocalTime time) {
		this.time = time;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public int getCount() {
		return count;
	}

	public void setCount(int count) {
		this.count = count;
	}

	public String getCombatStyle() {
		return combatStyle;
	}

	public void setCombatStyle(String combatStyle) {
		this.combatStyle = combatStyle;
	}

	public Long getGp() {
		return gp;
	}

	public void setGp(Long gp) {
		this.gp = gp;
	}

	public LocalDateTime getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj) {
			return true;
		}
		if (obj == null) {
			return false;
		}
		if (getClass() != obj.getClass()) {
			return false;
		}
		Combat other = (Combat) obj;
		return id == other.id;
	}

	@Override
	public String toString() {
		return "Combat [id=" + id + ", name=" + name + ", time=" + time + ", category=" + category + ", count=" + count
				+ ", combatStyle=" + combatStyle + ", gp=" + gp + ", createdAt=" + createdAt + "]";
	}
	
	
}
