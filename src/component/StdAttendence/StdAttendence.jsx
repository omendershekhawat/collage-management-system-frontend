import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../StdAttendence/StdAttendence.css'
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';



function StdAttendence() {
 



  return (
    <>
      <div className='CheckClass'>
        <h1>Attendance Sheet</h1>
        <h2>January-2024</h2>
        
      </div>


      
          <Table striped bordered hover className='StdClass'>
            <thead>
              <tr>
                <th className='hrheader'>S.No</th>
                <th className='hrheader'>Student's Name</th>
                <th className='hrheader'>Father's Name</th>
                <th className='hrheader'>1</th>
                <th className='hrheader'>2</th>
                <th className='hrheader'>3</th>
                <th className='hrheader'>4</th>
                <th className='hrheader'>5</th>
                <th className='hrheader'>6</th>
                <th className='hrheader'>7</th>
                <th className='hrheader'>8</th>
                <th className='hrheader'>9</th>
                <th className='hrheader'>10</th>
                <th className='hrheader'>11</th>
                <th className='hrheader'>12</th>
                <th className='hrheader'>13</th>
                <th className='hrheader'>14</th>
                <th className='hrheader'>14</th>
                <th className='hrheader'>15</th>
                <th className='hrheader'>16</th>
                <th className='hrheader'>17</th>
                <th className='hrheader'>18</th>
                <th className='hrheader'>19</th>
                <th className='hrheader'>20</th>
                <th className='hrheader'>21</th>
                <th className='hrheader'>22</th>
                <th className='hrheader'>23</th>
                <th className='hrheader'>24</th>
                <th className='hrheader'>25</th>
                <th className='hrheader'>26</th>
                <th className='hrheader'>27</th>
                <th className='hrheader'>28</th>
                <th className='hrheader'>29</th>
                <th className='hrheader'>30</th>
                <th className='hrheader'>31</th>

              </tr>
            </thead>
            <tbody>
              
                  <tr>
                  <td id='S-no'> 1</td>
                  <td id='Name'>Firstname</td>
                  <td id='F-Name'>Fathername</td>
      
                  <td colSpan={1}>
                    <input type="checkbox" className='checkbox' maxLength={1} />
                  </td>
                  <td colSpan={1}>
                    <input type="checkbox" className='checkbox' maxLength={1} />
                  </td>
                  <td colSpan={1}>
                    <input type="checkbox" className='checkbox' maxLength={1} />
                  </td>
                  <td colSpan={1}>
                    <input type="checkbox" className='checkbox' maxLength={1} />
                  </td>
                  <td colSpan={1}>
                    <input type="checkbox" className='checkbox' maxLength={1} />
                  </td>
                  <td colSpan={1}>
                    <input type="checkbox" className='checkbox' maxLength={1} />
                  </td>
                  <td colSpan={1}>
                    <input type="checkbox" className='checkbox' maxLength={1} />
                  </td>
                  <td colSpan={1}>
                    <input type="checkbox" className='checkbox' maxLength={1} />
                  </td>
                  <td colSpan={1}>
                    <input type="checkbox" className='checkbox' maxLength={1} />
                  </td>
                  <td colSpan={1}>
                    <input type="checkbox" className='checkbox' maxLength={1} />
                  </td>
                  <td colSpan={1}>
                    <input type="checkbox" className='checkbox' maxLength={1} />
                  </td>
                  <td colSpan={1}>
                    <input type="checkbox" className='checkbox' maxLength={1} />
                  </td>
                  <td colSpan={1}>
                    <input type="checkbox" className='checkbox' maxLength={1} />
                  </td>
                  <td colSpan={1}>
                    <input type="checkbox" className='checkbox' maxLength={1} />
                  </td>
                  <td colSpan={1}>
                    <input type="checkbox" className='checkbox' maxLength={1} />
                  </td>
                  <td colSpan={1}>
                    <input type="checkbox" className='checkbox' maxLength={1} />
                  </td>
                  <td colSpan={1}>
                    <input type="checkbox" className='checkbox' maxLength={1} />
                  </td>
                  <td colSpan={1}>
                    <input type="checkbox" className='checkbox' maxLength={1} />
                  </td>
                  <td colSpan={1}>
                    <input type="checkbox" className='checkbox' maxLength={1} />
                  </td>
                  <td colSpan={1}>
                    <input type="checkbox" className='checkbox' maxLength={1} />
                  </td>
                  <td colSpan={1}>
                    <input type="checkbox" className='checkbox' maxLength={1} />
                  </td>
                  <td colSpan={1}>
                    <input type="checkbox" className='checkbox' maxLength={1} />
                  </td>
                  <td colSpan={1}>
                    <input type="checkbox" className='checkbox' maxLength={1} />
                  </td>
                  <td colSpan={1}>
                    <input type="checkbox" className='checkbox' maxLength={1} />
                  </td>
                  <td colSpan={1}>
                    <input type="checkbox" className='checkbox' maxLength={1} />
                  </td>
                  <td colSpan={1}>
                    <input type="checkbox" className='checkbox' maxLength={1} />
                  </td>
                  <td colSpan={1}>
                    <input type="checkbox" className='checkbox' maxLength={1} />
                  </td>
                  <td colSpan={1}>
                    <input type="checkbox" className='checkbox' maxLength={1} />
                  </td>
                  <td colSpan={1}>
                    <input type="checkbox" className='checkbox' maxLength={1} />
                  </td>
                  <td colSpan={1}>
                    <input type="checkbox" className='checkbox' maxLength={1} />
                  </td>
                  <td colSpan={1}>
                    <input type="checkbox" className='checkbox' maxLength={1} />
                  </td>
                  <td colSpan={1}>
                    <input type="checkbox" className='checkbox' maxLength={1} />
                  </td>
      
      
      
                </tr>
             
            </tbody>
          </Table>
       
     
    </>
  );

}



export default StdAttendence;