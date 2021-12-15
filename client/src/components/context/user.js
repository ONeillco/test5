import React, { useState, useEffect } from "react"

const UserContext = React.createContext()

function UseProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loggedIn, setLoggedIn] = useState(false)
  const [heroes, setHeroes] = useState([])


  useEffect(() => {
    fetch('/me')
    .then(res => res.json())
    .then(data => {
      setUser(data)
      if (data.error) {
        setLoggedIn(false)
      } else {
        setLoggedIn(true)
        fetchHeroes()
      }
    })
  }, [])

  const fetchHeroes = () => {
    fetch('/heroes')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setHeroes(data)
    })
  }

  const addHero = (hero) => {
    fetch('/heroes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(hero)
    })
    .then(res => res.json())
    .then(data => {
      setHeroes([...heroes, data])
    })
  }

  const login = () => {
    setUser(user)
    // fetchHeroes()
    setLoggedIn(true)
  }

  const logout = () => {
    setUser({})
    // setHeroes([])
    setLoggedIn(false)
  }

  const signup = () => {
    setUser(user)
    // fetchHeroes()
    setLoggedIn(true)
  }

return (
  <UserContext.Provider value={{user, login, logout, signup, loggedIn, heroes, addHero}}>
    { children }
  </UserContext.Provider>
)
}

export { UserContext, UseProvider }