package com.example.server.service;

import com.example.server.model.Clinic;
import org.springframework.http.HttpStatus;

public interface ClinicService {
    Iterable<Clinic> getClinics();
    Clinic getClinicById(Long id);
    Clinic createClinic(Clinic clinic);
    Clinic updateClinic(Clinic clinic);
    HttpStatus deleteClinic(Long id);
}
