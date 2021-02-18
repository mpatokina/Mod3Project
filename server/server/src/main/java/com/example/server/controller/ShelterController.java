package com.example.server.controller;


import com.example.server.model.Shelter;
import com.example.server.service.ShelterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/shelters")
public class ShelterController {
    @Autowired
    ShelterService shelterService;

    @GetMapping
    public Iterable<Shelter> getShelters() { return shelterService.getShelters(); }

    @PostMapping
    public Shelter createShelter(@RequestBody Shelter shelter) { return shelterService.createShelter(shelter); }

    @PatchMapping
    public Shelter updateShelter(@RequestBody Shelter shelter) { return shelterService.updateShelter(shelter); }

    @DeleteMapping("/{id}")
    public HttpStatus deleteShelter(@PathVariable Long id) { return shelterService.deleteShelter(id); }


}
