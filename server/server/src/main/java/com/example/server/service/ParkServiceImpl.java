package com.example.server.service;

import com.example.server.model.Park;
import com.example.server.model.Shelter;
import com.example.server.repository.ParkRepository;
import com.example.server.repository.ShelterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class ParkServiceImpl implements ParkService {

    @Autowired
    ParkRepository parkRepository;

    @Override
    public Iterable<Park> getParks() { return parkRepository.findAll(); }

    @Override
    public Park getParkById(Long id) { return parkRepository.findById(id).get(); }

    @Override
    public Park createPark(Park park) { return parkRepository.save(park); }

    @Override
    public Park updatePark(Park park) { return parkRepository.save(park); }

    @Override
    public HttpStatus deletePark(Long id) {
        parkRepository.deleteById(id);
        return HttpStatus.OK;
    }

}
