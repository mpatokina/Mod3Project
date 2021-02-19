import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Parks() {
    const [parks, setParks] = useState(null);
  
    async function getParks() {
      try {
        const res = await axios.get('http://localhost:8080/parks');
        setParks(res.data);
      } catch(e) {
        console.error(e, e.message);
      }
    }
  
    useEffect(() => {
      getParks();
    }, [])
  
    const [form, setForm] = useState(null);
  
    function handleChange(e) {
      const { name, value } = e.target;
      setForm({ ...form, [name]: value });
    }
  
    function handleSubmit(e) {
      e.preventDefault();
      createPark();
    }
  
    async function createPark() {
      try {
        const res = await axios.post('http://localhost:8080/parks', form);
        setParks([...parks, res.data]);
      } catch(e) {
        console.error(e, e.message);
      }
    }
  
    const [selectedPark, setSelectedPark] = useState(null);
  
    function selectPark(park) {
      setSelectedPark(park)
    }
  
    function handleEditChange(e) {
      const { name, value } = e.target;
      setSelectedPark({ ...selectedPark, [name]: value });
    }
  
    async function handleEditSubmit(e) {
      e.preventDefault();
      try {
        const res = await axios.patch('http://localhost:8080/parks', selectedPark);
        console.log(res.data);
        getParks();
      } catch(e) {
        console.error(e, e.message);
      }
    }
  
    async function deletePark(parkId) {
      try {
        const res = await axios.delete('http://localhost:8080/parks/' + parkId);
        console.log(res.data);
        getParks();
      } catch(e) {
        console.error(e, e.message);
      }
    }
  
    return(
      <div className = "container">
          <h2>Dog Parks and Playgrounds</h2>
        { parks && parks.map(park => <Park park={ park } selectPark={ selectPark } deletePark={ deletePark } />)}
  
        <div>
          <h2>Add a new park or playground!</h2>
          <form
            className="add-park-form"
            onChange={ (e) => handleChange(e) }
            onSubmit={ (e) => handleSubmit(e) }>
            <label>
              Name:
              <input type="text" name="parkName" />
            </label>
            <label>
              Address:
              <input type="text" name="parkAddress" />
            </label>
            <label>
              City:
              <input type="text" name="parkCity" />
            </label>
            <label>
              Zip code:
              <input type="text" name="parkZipCode" />
            </label>
            <label>
              Phone:
              <input type="text" name="parkPhone" />
            </label>
            <input type="submit" value="ADD NEW PARK" className="button-success" />
          </form>
  
          { selectedPark && <form
            onChange={ (e) => handleEditChange(e) }
            onSubmit={ (e) => handleEditSubmit(e) }>
            <label>
              Name:
              <input type="text" name="parkName" defaultValue={ selectedPark.parkName } />
            </label>
            <label>
              Address:
              <input type="text" name="parkAddress" defaultValue={ selectedPark.parkAddress } />
            </label>
            <label>
              City:
              <input type="text" name="parkCity" defaultValue={ selectedPark.parkCity } />
            </label>
            <label>
              Zip code:
              <input type="text" name="parkZipCode" defaultValue={ selectedPark.parkZipCode } />
            </label>
            <label>
              Phone:
              <input type="text" name="parkPhone" defaultValue={ selectedPark.parkPhone } />
            </label>
            <input className="select-button" type="submit" value="UPDATE PARK INFO" />
          </form> }
        </div>
      </div>
    )
  }
  
  function Park({ park, selectPark, deletePark }) {
    return (
      <div className="park" key={ park.id }>
        <h3 className="park-name">{ park.parkName }</h3>
        <h5>Address: <span className="park-address">{ park.parkAddress }</span> | City: <span className="city-zip-code">{ park.parkCity }</span> | Zip code <span className="park-zip-code">{ park.parkZipCode }</span></h5>
        <h5>Phone: <span className="park-phone">{ park.parkPhone }</span></h5>
        <button className="select-button" onClick={ () => selectPark(park) }>EDIT PARK</button>
        <button className="delete-button" onClick={ () => deletePark(park.id) }>DELETE PARK</button>
      </div>
    )
  }

export default Parks;