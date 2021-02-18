package com.example.server.model;

import javax.persistence.*;

@Entity
@Table(name = "pets_shelters")
public class Shelter {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String shelterName;

    @Column
    private String shelterAddress;

    @Column
    private String shelterCity;

    @Column
    private Integer shelterZipCode;

    @Column
    private String shelterPhone;


    public Shelter() {
}

public Long getId() {
    return id;
}

public void setId(Long id) {
    this.id = id;
}

public String getShelterName() {
    return shelterName;
}

public void setShelterName(String shelterName) {
    this.shelterName = shelterName;
}

public String getShelterAddress() {
        return shelterAddress;
}

public void setShelterAddress(String shelterAddress) {
    this.shelterAddress = shelterAddress;
}

public String getShelterCity() {
        return shelterCity;
}
public void setShelterCity(String shelterCity) {
    this.shelterCity = shelterCity;
}

public Integer getShelterZipCode() {
        return shelterZipCode;
}
public void setShelterZipCode(Integer shelterZipCode) {
    this.shelterZipCode = shelterZipCode;
}
public String getShelterPhone() {
        return shelterPhone;
}

    public void setShelterPhone(String shelterPhone) {
        this.shelterPhone = shelterPhone;
    }
}
