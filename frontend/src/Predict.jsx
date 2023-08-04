import React, { useState } from 'react';
import axios from 'axios';

function Predict() {
  const [userInput, setUserInput] = useState('');
  const [predictions, setPredictions] = useState([]);

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:3001/recommend', { userInput: userInput });
      setPredictions(response.data.predictions);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <div>
      <input type="text" value={userInput} onChange={handleInputChange} />
      <button onClick={handleSubmit}>Get Recommendations</button>
      <div>
        {predictions.map((prediction, index) => (
          <p key={index}>{prediction}</p>
        ))}   
      </div>
    </div>
  );
}

export default Predict;
