import React, { useState } from 'react';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useHistory } from "react-router-dom";


    const ServiceForm = () => {

        const [fname,setFname] = useState('');
        const [lname,setLname] = useState('');
        const [orgname,setOrgname] = useState('');
        const [email,setEmail] = useState('');
        const [phone,setPhone] = useState('');
        const [required,setRequired] = useState('');
        const [startDate, setStartDate] = useState(new Date());
        const [completionDate, setCompletionDate] = useState(new Date());
        const [requestDate, setRequestDate] = useState(new Date());
        const [country, setCountry] = useState('');
        const [region, setRegion] = useState('');
        const [addlInfo,setAddlInfo] = useState('');

    const handleSubmit = (e) => {        
        e.preventDefault();
        const serviceFormData = { fname,lname, orgname,email,required,phone,startDate,completionDate, requestDate,country,region };

    fetch('http://localhost:3000/ServiceFormResponse/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(serviceFormData)
    }).then(() => {
      history.push('/');
    })
    }
    return (
        <div className="serviceform">
            <h3>Service Request Form</h3>
            <p>Please complete the following application to request services.</p>
            
            <form onSubmit={handleSubmit}>
                <label>First Name:</label>
                <input
                  type="text"
                  required 
                  value={fname}
                  placeholder="Enter First Name"
                  onChange={(e) => setFname(e.target.value)}
                  />
                  <label>Last Name:</label>
                  <input
                  type="text"
                  required
                  value={lname}
                  placeholder="Enter Last Name"
                  onChange={(e) => setLname(e.target.value)}
                  />
                  <label>Name Of Organization:</label>
                <input
                  type="text"
                  required
                  value={orgname}
                  placeholder="Enter Organization Name"
                  onChange={(e) => setOrgname(e.target.value)}
                  />
                  <label>Registered:</label>
                <select name ="required" onChange={(e) => setRequired(e.target.value)}>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>

                </select>
                <label>Email:</label>
                <input
                  type="text"
                  required
                  value={email}
                  placeholder="Enter email"
                  onChange={(e) => setEmail(e.target.value)}
                  />
                  <label>Phone Number:</label>
                <input
                  type="text"
                  required
                  value={phone}
                  placeholder="Enter Phone number"
                  onChange={(e) => setPhone(e.target.value)}
                  />
                  <label>Country:</label>
                <div>
                    <CountryDropdown
                    type="select"
                    required
                    selected={country}
                    value={country}
                    onChange={(e) => setCountry(e)}
                    priorityOptions={["CA", "US"]}
                    />
                </div>
                
                <label>Province/Territory:</label>
        
                <div>
                    <RegionDropdown
                    country={country}
                    type="select"
                    required
                    value={region}
                    onChange={(e) => setRegion(e)}
                     />
                </div>
    
                <label>Preferred Service Start Date:</label>
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />

                <label>Preferred Service Completion Date:</label>
                <DatePicker selected={completionDate} onChange={(date) => setCompletionDate(date)} />

                  <label>Request Appointment Date:</label>
                  <DatePicker selected={requestDate} onChange={(date) => setRequestDate(date)} />

                  <label>Description Of Services Required:</label>
                <select>
                    <option value="Security Risk Assessment">Security Risk Assessment</option>
                    <option value="Complete Web Application Security">Complete Web Application Security</option>
                    <option value="Other">Other</option>
                </select>
                 <label>Please provide any additional information that you think would be valuable for us to know:</label> 
                  <textarea
                  required
                  value={addlInfo}
                  placeholder="Enter additional information"
                  onChange={(e) => setAddlInfo(e.target.value)}
                  ></textarea>
                  <button onClick={e => handleSubmit(e)} >Submit</button>
        
            </form>            
        </div>
      );
}
 
export default ServiceForm;