import React, { useState } from 'react'
import useGif from '../hooks/useGif'

const Tag = () => {
  const [tag, tagSet] = useState('')
  const {gif, fetchGif} = useGif(tag) 


  return (
    <div className="container">
      <h1>Random {tag} Gif</h1>
      <img width="500" src={gif} alt="Random Gif" />
      <input type="text" value={tag} onChange={(e) => tagSet(e.target.value)}/>
      <button
        onClick={() => fetchGif(tag)}
      >
        Click for new!
      </button>
    </div>
  )
}

export default Tag
