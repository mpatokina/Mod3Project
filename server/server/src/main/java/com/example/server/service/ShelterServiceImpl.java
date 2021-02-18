package com.example.server.service;

import com.example.server.model.Shelter;
import com.example.server.repository.ShelterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class ShelterServiceImpl implements ShelterService {

    @Autowired
    ShelterRepository shelterRepository;

    @Override
    public Iterable<Shelter> getShelters() { return shelterRepository.findAll(); }

    @Override
    public Shelter getShelterById(Long id) { return shelterRepository.findById(id).get(); }

    @Override
    public Shelter createShelter(Shelter shelter) { return shelterRepository.save(shelter); }

    @Override
    public Shelter updateShelter(Shelter shelter) { return shelterRepository.save(shelter); }

    @Override
    public HttpStatus deleteShelter(Long id) {
        shelterRepository.deleteById(id);
        return HttpStatus.OK;
    }


}
