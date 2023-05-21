import React from 'react'
import Header from './Header'


export default function employee(props) {
  return (
    <div className='employeeSelected'>
      <div className='employeeHeader'>
        <Header text ={props.text}/>
        <div>
          <div className='employeeInfo'>
            <img src='./src/images/male.png'  className="image" alt="icon"/>
            <h1>Jane Doe</h1>
            <p>Keeper of Secrets</p>
          </div>
          <div className='employeeInfo'>
            <h3>Office Extension</h3>
            <p>614-888-9191</p>
          </div>
          <div className='employeeInfo'>
            <h3>Mobile</h3>
            <p>614-000-0000</p>
          </div>
          <div className='employeeInfo'>
            <h3>SMS</h3>
            <p>614-000-0000</p>
          </div>
        </div>
      </div>
    </div>
  )
}
