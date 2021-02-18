package com.example.server.service;

import com.example.server.model.Shelter;
import org.springframework.http.HttpStatus;

public interface ShelterService {
    Iterable<Shelter> getShelters();
    Shelter getShelterById(Long id);
    Shelter createShelter(Shelter shelter);
    Shelter updateShelter(Shelter shelter);
    HttpStatus deleteShelter(Long id);
}
