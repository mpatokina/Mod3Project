package com.example.server.repository;

import com.example.server.model.Park;
import org.springframework.data.repository.CrudRepository;

public interface ParkRepository extends CrudRepository<Park, Long> {
}
