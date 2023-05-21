import React from 'react'
import Header from './Header';
import Search from './Search';
import EmployeeList from './EmployeeList';

export default function homepage(props) {
  return (
   <div className='homePage'>
    <Header text={props.text}/>
    <div className='searchBar'>
      <Search />
    </div>
    <div>
      <EmployeeList />
    </div>
   </div>
  )
}
