import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Notes from './Notes'
import Note from '../Note'

function App(){
  return(
    <div>
      <Header/>
      {Note.map((props) => {
        return  <Notes key = {props.key} title = {props.title} content = {props.content}/>
      })}
      <Footer/>
    </div>
  )
}

export default App