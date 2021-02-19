import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Shelters() {
    const [shelters, setShelters] = useState(null);
  
    async function getShelters() {
      try {
        const res = await axios.get('http://localhost:8080/shelters');
        setShelters(res.data);
      } catch(e) {
        console.error(e, e.message);
      }
    }
  
    useEffect(() => {
      getShelters();
    }, [])
  
    const [form, setForm] = useState(null);
  
    function handleChange(e) {
      const { name, value } = e.target;
      setForm({ ...form, [name]: value });
    }
  
    function handleSubmit(e) {
      e.preventDefault();
      createShelter();
    }
  
    async function createShelter() {
      try {
        const res = await axios.post('http://localhost:8080/shelters', form);
        setShelters([...shelters, res.data]);
      } catch(e) {
        console.error(e, e.message);
      }
    }
  
    const [selectedShelter, setSelectedShelter] = useState(null);
  
    function selectShelter(shelter) {
      setSelectedShelter(shelter)
    }
  
    function handleEditChange(e) {
      const { name, value } = e.target;
      setSelectedShelter({ ...selectedShelter, [name]: value });
    }
  
    async function handleEditSubmit(e) {
      e.preventDefault();
      try {
        const res = await axios.patch('http://localhost:8080/shelters', selectedShelter);
        console.log(res.data);
        getShelters();
      } catch(e) {
        console.error(e, e.message);
      }
    }
  
    async function deleteShelter(shelterId) {
      try {
        const res = await axios.delete('http://localhost:8080/shelters/' + shelterId);
        console.log(res.data);
        getShelters();
      } catch(e) {
        console.error(e, e.message);
      }
    }
  
    return(
      <div>
        { shelters && shelters.map(shelter => <Shelter shelter={ shelter } selectShelter={ selectShelter } deleteShelter={ deleteShelter } />)}
  
        <div>
          <h2>Add a new shelter!</h2>
          <form
            className="add-shelter-form"
            onChange={ (e) => handleChange(e) }
            onSubmit={ (e) => handleSubmit(e) }>
            <label>
              Name:
              <input type="text" name="shelterName" />
            </label>
            <label>
              Address:
              <input type="text" name="shelterAddress" />
            </label>
            <label>
              City:
              <input type="text" name="shelterCity" />
            </label>
            <label>
              Zip code:
              <input type="text" name="shelterZipCode" />
            </label>
            <label>
              Phone:
              <input type="text" name="shelterPhone" />
            </label>
            <input type="submit" value="ADD NEW SHELTER" className="button-success" />
          </form>
  
          { selectedShelter && <form
            onChange={ (e) => handleEditChange(e) }
            onSubmit={ (e) => handleEditSubmit(e) }>
            <label>
              Name:
              <input type="text" name="shelterName" defaultValue={ selectedShelter.shelterName } />
            </label>
            <label>
              Address:
              <input type="text" name="shelterAddress" defaultValue={ selectedShelter.shelterAddress } />
            </label>
            <label>
              City:
              <input type="text" name="shelterCity" defaultValue={ selectedShelter.shelterCity } />
            </label>
            <label>
              Zip code:
              <input type="text" name="shelterZipCode" defaultValue={ selectedShelter.shelterZipCode } />
            </label>
            <label>
              Phone:
              <input type="text" name="shelterPhone" defaultValue={ selectedShelter.shelterPhone } />
            </label>
            <input className="select-button" type="submit" value="UPDATE SHELTER INFO" />
          </form> }
        </div>
      </div>
    )
  }
  
  function Shelter({ shelter, selectShelter, deleteShelter }) {
    return (
      <div className="shelter" key={ shelter.id }>
        <h3 className="shelter-name">{ shelter.shelterName }</h3>
        <h5>Address: <span className="shelter-address">{ shelter.shelterAddress }</span> | City: <span className="city-zip-code">{ shelter.shelterCity }</span> | Zip code <span className="shelter-zip-code">{ shelter.shelterZipCode }</span></h5>
        <h5>Phone: <span className="shelter-phone">{ shelter.shelterPhone }</span></h5>
        <button className="select-button" onClick={ () => selectShelter(shelter) }>EDIT SHELTER</button>
        <button className="delete-button" onClick={ () => deleteShelter(shelter.id) }>DELETE SHELTER</button>
      </div>
    )
  }
  

export default Shelters;