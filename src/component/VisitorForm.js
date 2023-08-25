import React, { useState } from 'react';
import axios from 'axios';
import './VisitorForm.css'; // Import the CSS file

function VisitorForm() {
  const [visitor, setVisitor] = useState({
    visiternumber: '',
    visitername: '',
    visiteremail: '',
    visiterdesignation: '',
    visitercompany: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setVisitor((prevVisitor) => ({
      ...prevVisitor,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:1234/visiter-api/create', visitor);
      console.log('Visitor saved:', response.data);
    } catch (error) {
      console.error('Error saving visitor:', error);
    }
  };

  return (
    <div className="form-container">
      <h2>Visitor Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Visitor Number:
          <input
            type="text"
            name="visiternumber"
            value={visitor.visiternumber}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Visitor Name:
          <input
            type="text"
            name="visitername"
            value={visitor.visitername}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Visitor Email:
          <input
            type="text"
            name="visiteremail"
            value={visitor.visiteremail}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Visitor Designation:
          <input
            type="text"
            name="visiterdesignation"
            value={visitor.visiterdesignation}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Visitor Company:
          <input
            type="text"
            name="visitercompany"
            value={visitor.visitercompany}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Save Visitor</button>
      </form>
    </div>
  );
}

export default VisitorForm;
