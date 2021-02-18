package com.example.server.service;

import com.example.server.model.Park;
import org.springframework.http.HttpStatus;

public interface ParkService {
    Iterable<Park> getParks();
    Park getParkById(Long id);
    Park createPark(Park park);
    Park updatePark(Park park);
    HttpStatus deletePark(Long id);

}
