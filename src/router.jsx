import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './components/home/home'
import Demo from './components/home/demo'
import Login from './components/home/login'
import ForgotPasswordComponent from './components/home/forgotPassword'
import ChangePassword from './components/home/changePassword'
import Profile from './components/profile/profile'
import Sidebar from './components/sidebar/sidebar'
import Leads from './components/leads/leads'
import TeachersPage from './components/teachers/teachers'
import TeacherInfo from './components/teachers/teacherInfo'

function RouterComponent() {
  const location = useLocation()
  const hideSidebar = location.pathname !== "/" && location.pathname !== "/login" && location.pathname !== "/login" && location.pathname !== "/login/forgot-password" && location.pathname !== "/login/change-password" && location.pathname !== "/request-demo"
  return (
    <div>
        {hideSidebar && <Sidebar/>}
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/request-demo' element={<Demo/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/login/forgot-password' element={<ForgotPasswordComponent/>}/>
            <Route path='/login/change-password' element={<ChangePassword/>}/>
            
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/leads' element={<Leads/>}/>
            <Route path='/teachers' element={<TeachersPage/>}/>
            <Route path='/teacher/:id' element={<TeacherInfo/>}/>

        </Routes>
    </div>
  )
}

export default RouterComponent
