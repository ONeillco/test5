import React, { useState, useContext } from 'react'
import { UserContext } from '../context/user'

const HeroForm = ({addHeroFlag}) => {
  const [name, setName] = useState("")
  const [story, setStory] = useState("")
  const [category, setCategory] = useState("")
  const { addHero } = useContext(UserContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    addHero({
      name: name,
      story: story,
      category: category
    })
    addHeroFlag()
  }

  return (
       <div>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        /> <br/>
        <label>Story</label>
        <input
        type="text"
        id="story"
        value={story}
        onChange={(e) => setStory(e.target.value)}
        /> <br/>
        <label>Category </label>
        <input
        type="text"
        id="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        /> <br/>
        <input type="submit"/>
     </form>

     {/* <ul>
       {errorsList}
     </ul> */}
      
    </div>
  )
}

export default HeroForm
