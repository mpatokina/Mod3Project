import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Clinics() {
    const [clinics, setClinics] = useState(null);
  
    async function getClinics() {
      try {
        const res = await axios.get('http://localhost:8080/clinics');
        setClinics(res.data);
      } catch(e) {
        console.error(e, e.message);
      }
    }
  
    useEffect(() => {
      getClinics();
    }, [])
  
    const [form, setForm] = useState(null);
  
    function handleChange(e) {
      const { name, value } = e.target;
      setForm({ ...form, [name]: value });
    }
  
    function handleSubmit(e) {
      e.preventDefault();
      createClinic();
    }
  
    async function createClinic() {
      try {
        const res = await axios.post('http://localhost:8080/clinics', form);
        setClinics([...clinics, res.data]);
      } catch(e) {
        console.error(e, e.message);
      }
    }
  
    const [selectedClinic, setSelectedClinic] = useState(null);
  
    function selectClinic(clinic) {
      setSelectedClinic(clinic)
    }
  
    function handleEditChange(e) {
      const { name, value } = e.target;
      setSelectedClinic({ ...selectedClinic, [name]: value });
    }
  
    async function handleEditSubmit(e) {
      e.preventDefault();
      try {
        const res = await axios.patch('http://localhost:8080/clinics', selectedClinic);
        console.log(res.data);
        getClinics();
      } catch(e) {
        console.error(e, e.message);
      }
    }
  
    async function deleteClinic(clinicId) {
      try {
        const res = await axios.delete('http://localhost:8080/clinics/' + clinicId);
        console.log(res.data);
        getClinics();
      } catch(e) {
        console.error(e, e.message);
      }
    }
  
    return(
      <div>
          <h2>Animal Clinics</h2>
        { clinics && clinics.map(clinic => <Clinic clinic={ clinic } selectClinic={ selectClinic } deleteClinic={ deleteClinic } />)}
  
        <div>
          <h2>Add a new clinic!</h2>
          <form
            className="add-clinic-form"
            onChange={ (e) => handleChange(e) }
            onSubmit={ (e) => handleSubmit(e) }>
            <label>
              Name:
              <input type="text" name="clinicName" />
            </label>
            <label>
              Address:
              <input type="text" name="clinicAddress" />
            </label>
            <label>
              City:
              <input type="text" name="clinicCity" />
            </label>
            <label>
              Zip code:
              <input type="text" name="clinicZipCode" />
            </label>
            <label>
              Phone:
              <input type="text" name="clinicPhone" />
            </label>
            <input type="submit" value="ADD NEW CLINIC" className="button-success" />
          </form>
  
          { selectedClinic && <form
            onChange={ (e) => handleEditChange(e) }
            onSubmit={ (e) => handleEditSubmit(e) }>
            <label>
              Name:
              <input type="text" name="clinicName" defaultValue={ selectedClinic.clinicName } />
            </label>
            <label>
              Address:
              <input type="text" name="clinicAddress" defaultValue={ selectedClinic.clinicAddress } />
            </label>
            <label>
              City:
              <input type="text" name="clinicCity" defaultValue={ selectedClinic.clinicCity } />
            </label>
            <label>
              Zip code:
              <input type="text" name="clinicZipCode" defaultValue={ selectedClinic.clinicZipCode } />
            </label>
            <label>
              Phone:
              <input type="text" name="clinicPhone" defaultValue={ selectedClinic.clinicPhone } />
            </label>
            <input className="select-button" type="submit" value="UPDATE CLINIC INFO" />
          </form> }
        </div>
      </div>
    )
  }
  
  function Clinic({ clinic, selectClinic, deleteClinic }) {
    return (
      <div className="clinic" key={ clinic.id }>
        <h3 className="clinic-name">{ clinic.clinicName }</h3>
        <h5>Address: <span className="clinic-address">{ clinic.clinicAddress }</span> | City: <span className="city-zip-code">{ clinic.clinicCity }</span> | Zip code <span className="clinic-zip-code">{ clinic.clinicZipCode }</span></h5>
        <h5>Phone: <span className="clinic-phone">{ clinic.clinicPhone }</span></h5>
        <button className="select-button" onClick={ () => selectClinic(clinic) }>EDIT CLINIC</button>
        <button className="delete-button" onClick={ () => deleteClinic(clinic.id) }>DELETE CLINIC</button>
      </div>
    )
  }

export default Clinics;