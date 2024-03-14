import React, { useEffect } from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header/Header.jsx'
import Home from './component/Home/Home.jsx'
import Footer from './component/Footer/Footer.jsx'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import ContactUs from './component/ContactUs/ContactUs.jsx'
import Mediagallary from './component/MediaGallery/Mediagallary.jsx'
import Aboutus from './component/Aboutus/Aboutus.jsx'
import Bca from './component/Studentpanel/BCA/Bca.jsx'
import Ba from './component/Studentpanel/BA/Ba.jsx'
import Bba from './component/Studentpanel/BBA/Bba.jsx'
import Bcom from './component/Studentpanel/BCOM/Bcom.jsx'
import Bsc from './component/Studentpanel/BSC/Bsc.jsx'
import Ma from './component/Studentpanel/MA/Ma.jsx'
import Mcom from './component/Studentpanel/MCOM/Mcom.jsx'
import Msc from './component/Studentpanel/MSC/Msc.jsx'
import Ncc from './component/Studentpanel/NCC/Ncc.jsx'
import Nss from './component/Studentpanel/NSS/Nss.jsx'
import Scout from './component/Studentpanel/SCOUT/Scout.jsx'
import View from './component/Courses/View-all.jsx'
import Employeelogin from './component/EmployeeLogin/Employeelogin.jsx'
import Employregform from './component/EmployeeRegistration/Employregform.jsx'
import AdminPage from './component/AdminPage/AdminPage.jsx'
import AdminRecord from './component/AdminRecord/AdminRecord.jsx'
import Studentlogin from './component/StudentLogin/Studentlogin.jsx'
import Regform from './component/StudentRegistration/Regform.jsx'
import StudentPage from './component/Student-page/StudentPage.jsx'
import StudentRecord from './component/StudentRecord/StudentRecord.jsx'
import StudentComplainBox from './component/StudentComplaint-Box/StudentComplaintBox.jsx'
import AdminAddStudentRecord from './component/AdminAddStudentRecord/AdminAddStudentRecord.jsx'
// import StudentDetails from './component/StudentDetails/StudentDetails.jsx'
import AllStdRecord from './component/AllStdRecord/AllStdRecord.jsx'
import ShowStudentDetails from './component/ShowStudentDetails/ShowStudentDetails.jsx'
import NoticeForm from './component/Notice/Notice.jsx'
import StdResultPage from './component/StdResultPage/StdResultPage.jsx'
import ReceiveNotice from './component/ReceiveNotice/ReceiveNotice.jsx'
import ReceivedComplaint from './component/ReceivedComplaint/ReceivedComplaint.jsx'
import Result from './component/Result/Result.jsx'
import MarksTable from './component/Std-Result/Marks-table/MarksTable.jsx'
import Attendence from './component/Attendence/Attendence.jsx'
import StdAttendence from './component/StdAttendence/StdAttendence.jsx'





// export const context = createContext({
//   serverLink: '',
//   isStudentLoggedIn: false,
//   isAdminLoggedIn: false,
//   setStudentLoggedIn: () => { },
//   setAdminLoggedIn: () => { },
// });

function App() {
  // const [adminData, setadminData] = useState({})
  // const [studentData, setstudentData] = useState({})
  // const [isAdminLoggedIn, setAdminLoggedIn] = useState(false);
  // const [isStudentLoggedIn, setStudentLoggedIn] = useState(false)

  // const serverLink = import.meta.env.VITE_REACT_APP_SERVER_URL;
  // const serverLink = process.env.VITE_REACT_APP_SERVER_URL
  const serverLink = import.meta.env.VITE_REACT_APP_SERVER_URL;
  // console.log("Server Link:", serverLink);


  // useEffect(() => {
  //   let data = localStorage.getItem("adminData")

  //   if (data) {
  //     data = JSON.parse(data)
  //     setadminData(data)
  //     setAdminLoggedIn(true)

  //   }
  // }, [setadminData, setAdminLoggedIn])


  // useEffect(() => {
  //   let data = localStorage.getItem("userData")

  //   if (data) {
  //     data = JSON.parse(data)
  //     setstudentData(data)
  //     setStudentLoggedIn(true)

  //   }
  // }, [setstudentData, setStudentLoggedIn])


 

  return (
    <>
      <BrowserRouter>
        {/* <context.Provider value={{ serverLink, adminData, isAdminLoggedIn, setAdminLoggedIn, isStudentLoggedIn, setStudentLoggedIn, studentData }}> */}
          <Header />
          <Routes>
            {/* <Route index element={<Header/>} /> */}
            <Route index element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/contactus' element={<ContactUs />} />
            <Route path='/mediagallery' element={<Mediagallary />} />
            <Route path='/about' element={<Aboutus />} />
            <Route path='/viewall/*' element={<View />} />
            <Route path='/bca/*' element={<Bca />} />
            <Route path='/bba/*' element={<Bba />} />
            <Route path='/ba/*' element={<Ba />} />
            <Route path='/bcom/*' element={<Bcom />} />
            <Route path='/bsc/*' element={<Bsc />} />
            <Route path='/ma/*' element={<Ma />} />
            <Route path='/mcom/*' element={<Mcom />} />
            <Route path='/msc/*' element={<Msc />} />
            <Route path='/ncc/*' element={<Ncc />} />
            <Route path='/nss/*' element={<Nss />} />
            <Route path='/scout/*' element={<Scout />} />
            <Route path='/adminreg/*' element={<Employregform />} />
            <Route path='/adminlog/*' element={<Employeelogin />} />
            <Route path='/stdlogin/*' element={<Studentlogin />} />
            <Route path='/stdReg/*' element={<Regform />} />
         

          
              
                  <Route path='/AdminRecord/*' element={<AdminRecord />} />
                  <Route path='/AdminPage/*' element={<AdminPage />} />
                  <Route path='/AllStdRecord' element={<AllStdRecord />} />
                  <Route path='/ShowStdDetail/:studentId' element={<ShowStudentDetails />} />
                  {/* <Route path='/adminlog/:adminId' element={<Employeelogin />} /> */}
                  <Route path='/AdminPage/:adminId' element={<AdminPage />} />
                  <Route path='/AdminPage/:studentId' element={<AdminPage />} />
                  <Route path='/Notice' element={<NoticeForm />} />
                  <Route path='/AddStdRecord' element={<AdminAddStudentRecord/>} />

                  {/* <Route path='/StdDetails' element={<StudentDetails />} /> */}
                  <Route path='/ReceiveComplaint' element={<ReceivedComplaint />} />
                  <Route path='/Result' element={<Result />} />
                  <Route path='/Marks/:selectedClass/:selectedSemester' element={<MarksTable/>} />
                  <Route path='/Attendence' element={<Attendence/>}/>
                  <Route path='/StdAttendence/:selectedClass' element={<StdAttendence/>}/>

              
           

          
                  {/* <Route path='/ShowStdDetail/:studentId' element={<h2>hiiii</h2>} /> */}
                  <Route path='/tdResult' element={<StdResultPage />} />
                  <Route path='/stdPage/*' element={<StudentPage />} />
                  <Route path='/stdRecord/*' element={<StudentRecord />} />
                  <Route path='/ComBox/*' element={<StudentComplainBox />} />
                  <Route path='/ReceiveNotice' element={<ReceiveNotice />} />


                </Routes>
             
          
          <Footer />
        {/* </context.Provider> */}
      </BrowserRouter>
    </>
  )
}

export default App;
