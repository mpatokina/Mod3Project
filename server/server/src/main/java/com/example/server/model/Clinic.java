package com.example.server.model;
import javax.persistence.*;

@Entity
@Table(name = "pets_clinics")
public class Clinic {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String clinicName;

    @Column
    private String clinicAddress;

    @Column
    private String clinicCity;

    @Column
    private Integer clinicZipCode;

    @Column
    private String clinicPhone;


    public Clinic() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getClinicName() {
        return clinicName;
    }

    public void setClinicName(String clinicName) {
        this.clinicName = clinicName;
    }

    public String getClinicAddress() {
        return clinicAddress;
    }

    public void setClinicAddress(String clinicAddress) {
        this.clinicAddress = clinicAddress;
    }

    public String getClinicCity() {
        return clinicCity;
    }
    public void setClinicCity(String clinicCity) {
        this.clinicCity = clinicCity;
    }

    public Integer getClinicZipCode() {
        return clinicZipCode;
    }
    public void setClinicZipCode(Integer clinicZipCode) {
        this.clinicZipCode = clinicZipCode;
    }
    public String getClinicPhone() {
        return clinicPhone;
    }

    public void setClinicPhone(String clinicPhone) {
        this.clinicPhone = clinicPhone;
    }
}
