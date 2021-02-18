package com.example.server.service;

import com.example.server.model.Clinic;
import com.example.server.repository.ClinicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class ClinicServiceImpl implements ClinicService {

    @Autowired
    ClinicRepository clinicRepository;

    @Override
    public Iterable<Clinic> getClinics() { return clinicRepository.findAll(); }

    @Override
    public Clinic getClinicById(Long id) { return clinicRepository.findById(id).get(); }

    @Override
    public Clinic createClinic(Clinic clinic) { return clinicRepository.save(clinic); }

    @Override
    public Clinic updateClinic(Clinic clinic) { return clinicRepository.save(clinic); }

    @Override
    public HttpStatus deleteClinic(Long id) {
        clinicRepository.deleteById(id);
        return HttpStatus.OK;
    }

}
