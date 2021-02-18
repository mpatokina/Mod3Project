package com.example.server.repository;

import com.example.server.model.Clinic;
import org.springframework.data.repository.CrudRepository;

public interface ClinicRepository extends CrudRepository<Clinic, Long> {
}
