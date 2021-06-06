import React, { useEffect, useState } from 'react'
import axios from 'axios'
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY

const Tag = () => {

  const [gif, gifSet] = useState('')
  const [tag, tagSet] = useState('')

  const fetchGif = async (tag) => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`
    const { data } = await axios.get(url)
    gifSet(data.data.images.downsized_large.url)
  }

  useEffect(() => {
    fetchGif(tag)
  }, [tag])

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
