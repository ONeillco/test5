import React, { useState, useContext } from 'react'
import { Route, useParams } from "react-router-dom"
import { UserContext } from '../context/user'
import HeroForm from './HeroForm'


const Heroes = () => {
  const {heroes, loggedIn} = useContext(UserContext)
  const [formFlag, setFormFlag] = useState(false)
  const params = useParams()

  const addHeroFlag = () => {
    setFormFlag(false)
  }

  if (loggedIn) {
    const heroesList = heroes.map(c => <li>{c.name}</li>)
    return (
      <div>
        <h3>Heroes</h3>
        <br />
        {heroesList}
        <br />
        {formFlag ? <HeroForm addHeroFlag={addHeroFlag} /> : <button onClick={() => setFormFlag(true)}>Add Hero</button> }
      </div>
    )
  } else {
    return (
      <h3>Access Denied - Please Signup or Login</h3>
    )
  }
}

export default Heroes
