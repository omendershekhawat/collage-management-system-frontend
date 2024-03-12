import React from 'react'
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import axios from 'axios';

import './MarksTable.css'


function MarksTable() {
  

  return (
    <>
      <div className='semester'>
        <h1>selectedSemester</h1>
        <h1>selectedClass</h1>
      </div>
      <div className='table'>

        
            <Table striped bordered hover size="sm">
              <thead>
                <tr className='table-row'>
                  <th>S.no</th>
                  <th>Name</th>
                  <th>Roll no</th>
                  <th>Subject</th>
                  <th>Subject</th>
                  <th>Subject</th>
                  <th>Subject</th>
                  <th>Subject</th>
                  <th>Subject</th>

                </tr>
              </thead>
              <tbody>
                
                  <tr >
                    <td>1</td>
                    <td colSpan={1}>Firstname</td>
                    <td colSpan={1}>Fathersname</td>
                    <td colSpan={1}> <input type="text" /></td>
                    <td colSpan={1}><input type="text" /></td>
                    <td colSpan={1}><input type="text" /></td>
                    <td colSpan={1}><input type="text" /></td>
                    <td colSpan={1}><input type="text" /></td>
                    <td colSpan={1}><input type="text" /></td>

                  </tr>
               
              </tbody>
            </Table>
         



      </div>
    </>

  )
}

export default MarksTable