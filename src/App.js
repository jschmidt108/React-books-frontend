//////////////////////////////////////////////
//import
//////////////////////////////////////////////

// general imports
import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios'

// view imports
import Login from './components/ViewLogin.js'
import Signup from './components/ViewSignup.js'
import Main from './components/ViewMain.js'
import Profile from './components/ViewProfile.js'
import Account from './components/ViewAccount.js'


const App = () => {

  //////////////////////////////////////////////
  //states
  //////////////////////////////////////////////

  // general states
  let [users, setUsers] = useState([])
  let emptyUser = { name: '', username: '', email: '', password: '', hasRead: [], isReading: [], toRead: [] }
  const [user, setUser] = useState(emptyUser)
  // const [userId, setUserId] = useState(0)

  let [books, setBooks] = useState([])
  let [shelves, setShelves] = useState([])
  // let emptyBook = { cover_img: '', title: '', author_name: '', genre: '', page_count: '', isbn: '', rating: ''}
  // const [book, setBook] = useState(emptyBook)

  // view states
  let [view, setView] = useState('login')
  let [loginStatus, setLoginStatus] = useState(false)

  // local vs heroku links - deploy with heroku


  //////////////////////////////////////////////
  // fetching the data from the backend
  //////////////////////////////////////////////


  // //////////////////////////////////////////////
  // // useEffect
  // //////////////////////////////////////////////


  //////////////////////////////////////////////
  // the return - skeleton
  //////////////////////////////////////////////

  if (loginStatus === false) {
    return (
      <>
        <Login 
        users={users} setUsers={setUsers}
        user={user} setUser={setUser} 
        // userId={userId} setUserId={setUserId} 
        view={view} setView={setView} 
        loginStatus={loginStatus} setLoginStatus={setLoginStatus}
        books={books} setBooks={setBooks}
        shelves={shelves} setShelves={setShelves}
        // book={book} setBook={setBook}
        />
      </>
    )
  } else if (view === 'signup') {
    return (
      <>

        <Signup 
        users={users} setUsers={setUsers} 
        user={user} setUser={setUser} 
        // userId={userId} setUserId={setUserId} 
        view={view} setView={setView} 
        loginStatus={loginStatus} setLoginStatus={setLoginStatus}
        books={books} setBooks={setBooks}
        shelves={shelves} setShelves={setShelves}
        // book={book} setBook={setBook}
        />

      </>
    )
  } else 
  // if (view === 'Main') {
    return (
      <>

        <Main
        users={users} setUsers={setUsers} 
        user={user} setUser={setUser} 
        // userId={userId} setUserId={setUserId} 
        view={view} setView={setView} 
        loginStatus={loginStatus} setLoginStatus={setLoginStatus}
        books={books} setBooks={setBooks}
        shelves={shelves} setShelves={setShelves}
        // book={book} setBook={setBook}
        />

      </>
    )
  // } else if (view === 'profile') {
  //   return (
  //     <>
  //       <Profile 
  //       users={users} setUsers={setUsers} 
  //       user={user} setUser={setUser} 
  //       view={view} setView={setView} 
  //       loginStatus={loginStatus} setLoginStatus={setLoginStatus}
  //       />
  //     </>
  //   )
  // } else if (view === 'account') {
  //   return (
  //     <>
  //       <Account 
  //       users={users} setUsers={setUsers} 
  //       user={user} setUser={setUser} 
  //       view={view} setView={setView} 
  //       loginStatus={loginStatus} setLoginStatus={setLoginStatus}
  //       />
  //     </>
  //   )
  // } 

  }

export default App;
