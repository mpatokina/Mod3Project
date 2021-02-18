package com.example.server.controller;

import com.example.server.model.Park;

import com.example.server.service.ParkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/parks")
public class ParkController {
    @Autowired
    ParkService parkService;

    @GetMapping
    public Iterable<Park> getParks() { return parkService.getParks(); }

    @PostMapping
    public Park createPark(@RequestBody Park park) { return parkService.createPark(park); }

    @PatchMapping
    public Park updatePark(@RequestBody Park park) { return parkService.updatePark(park); }

    @DeleteMapping("/{id}")
    public HttpStatus deletePark(@PathVariable Long id) { return parkService.deletePark(id); }


}
