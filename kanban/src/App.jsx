import React, { useState } from 'react'
import './App.css'
import { GlobalStyle } from './Global.styled.js'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage.jsx'
import LoginPage from './pages/LoginPage/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage/RegisterPage.jsx'
import CurrentCard from './pages/CardPage/CardPage.jsx'
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx'
import ExitPage from './pages/ExitPage/ExitPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import NewCard from './pages/NewCardPage/NewCard.jsx'
import { UserProvider } from './contexts/user.jsx'
import { TaskProvider } from './contexts/tasks.jsx'


function App() {

  return ( 
    <>
      <GlobalStyle />

      <UserProvider>
        <Routes>
          
          <Route element={<PrivateRoute />} >
            <Route element={<TaskProvider />}>
              <Route path='/' element={<HomePage />}>
                <Route path='/card/:id' element={<CurrentCard />} />
                <Route path='/exit' element={<ExitPage />} />
                <Route path='/newcard' element={<NewCard />} />
              </Route>
            </Route>            
          </Route>

          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />

          <Route path="*" element={<NotFoundPage />} />
                  
        </Routes>
      </UserProvider>
    </>
  )
}

export default App;