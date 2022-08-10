import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'


const App = () => {
  const [apiData, setApiData] = useState([]);
  const submit = () => {
    fetch("https://api.sampleapis.com/countries/countries")
      .then((res) => {
        console.log(res);
        res.json().then((data) => {
          console.log(data)
          setApiData(data)
        })
      })
      .catch((err) => {

      })
  }
  useEffect(() => {
    submit();
  }, [])
  return (
    <div>
      <button onClick={submit}> Refresh</button>
      <div>
        <table border={1}>
          <thead>
            <tr>
              <th>Country Name</th>
              <th>Flag </th>
              <th>Currency</th>
              <th>Population</th>
            </tr>
          </thead>
          <tbody>
            {
              console.log("this is", apiData)}
            {apiData.map((value) => {
              return (
                <tr>
                  <td>{value.name}</td>
                  <td><img src={value.media.flag} alt="not available" style={{height:'10px',width:'10px'}}/></td>
                  <td>{value.currency}</td>
                  <td>{value.population}</td>
                </tr>
              )
            })
            }
          </tbody>
        </table>

      </div>
    </div>
  )
}

export default App