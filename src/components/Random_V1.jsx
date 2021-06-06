import React, { useEffect, useState } from 'react'
import axios from 'axios'
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY

const Random = () => {

  const [gif, gifSet] = useState('')

  const fetchGif = async () => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
    const { data } = await axios.get(url)
    gifSet(data.data.images.downsized_large.url)
  }

  useEffect(() => {
    fetchGif()
  }, [])

  return (
    <div className="container">
      <h1>Random Gif</h1>
      <img width="500" src={gif} alt="Random Gif" />
      <button
        onClick={fetchGif}
      >
        Click for new!
      </button>
    </div>
  )
}

export default Random
