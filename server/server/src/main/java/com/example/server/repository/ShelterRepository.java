package com.example.server.repository;

import com.example.server.model.Shelter;
import org.springframework.data.repository.CrudRepository;

public interface ShelterRepository extends CrudRepository<Shelter, Long> {
}
