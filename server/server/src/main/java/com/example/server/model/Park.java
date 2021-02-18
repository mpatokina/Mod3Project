package com.example.server.model;
import javax.persistence.*;

@Entity
@Table(name = "pets_parks")
public class Park {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String parkName;

    @Column
    private String parkAddress;

    @Column
    private String parkCity;

    @Column
    private Integer parkZipCode;

    @Column
    private String parkPhone;


    public Park() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getParkName() {
        return parkName;
    }

    public void setParkName(String parkName) {
        this.parkName = parkName;
    }

    public String getParkAddress() {
        return parkAddress;
    }

    public void setParkAddress(String parkAddress) {
        this.parkAddress = parkAddress;
    }

    public String getParkCity() {
        return parkCity;
    }
    public void setParkCity(String parkCity) {
        this.parkCity = parkCity;
    }

    public Integer getParkZipCode() {
        return parkZipCode;
    }
    public void setParkZipCode(Integer parkZipCode) {
        this.parkZipCode = parkZipCode;
    }
    public String getParkPhone() {
        return parkPhone;
    }

    public void setParkPhone(String parkPhone) {
        this.parkPhone = parkPhone;
    }
}

