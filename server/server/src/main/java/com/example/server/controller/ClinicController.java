package com.example.server.controller;

import com.example.server.model.Clinic;
import com.example.server.model.Shelter;
import com.example.server.service.ClinicService;
import com.example.server.service.ShelterService;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/clinics")
public class ClinicController {
    @Autowired
    ClinicService clinicService;

    @GetMapping
    public Iterable<Clinic> getClinics() { return clinicService.getClinics(); }

    @PostMapping
    public Clinic createClinic(@RequestBody Clinic clinic) { return clinicService.createClinic(clinic); }

    @PatchMapping
    public Clinic updateClinic(@RequestBody Clinic clinic) { return clinicService.updateClinic(clinic); }

    @DeleteMapping("/{id}")
    public HttpStatus deleteClinic(@PathVariable Long id) { return clinicService.deleteClinic(id); }


}
