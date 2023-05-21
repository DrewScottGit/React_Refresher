import React from 'react'

export default function EmployeeListItem() {
  return (
<div className='employeeListItem'>
    <div className="employee">
    <img src="../src/images/male.png" className="image" alt="icon" />
    <div className="name">
      <h3>James Noel</h3>
      <h4 className="jobTitle">President and CEO</h4>
    </div>
  </div>

  <div className="employee">
    <img src="../src/images/male.png" className="image" alt="icon" />
    <div className="name">
      <h3>Jim Under</h3>
      <h4 className="jobTitle">CFO</h4>
    </div>
  </div>

  <div className="employee">
    <img src="../src/images/male.png" className="image" alt="icon" />
    <div className="name">
      <h3>Jack Bower</h3>
      <h4 className="jobTitle">Internal Audit</h4>
    </div>
  </div>

  <div className="employee">
    <img src="../src/images/female.png" className="image" alt="icon" />
    <div className="name">
      <h3>Jill Downs</h3>
      <h4 className="jobTitle">Compliance </h4>
    </div>
  </div>

  <div className="employee">
    <img src="../src/images/female.png" className="image" alt="icon" />
    <div className="name">
      <h3>Jane Doe</h3>
      <h4 className="jobTitle">Keeper Of Secrets</h4>
    </div>
  </div>

  <div className="employee">
    <img src="../src/images/male.png" className="image" alt="icon" />
    <div className="name">
      <h3>Jordan Noel</h3>
      <h4 className="jobTitle">Works here because his dad owns the company</h4>
    </div>
  </div>

  </div>
  )
}
