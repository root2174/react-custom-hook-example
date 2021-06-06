import { useEffect, useState } from 'react'
import axios from 'axios'

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY

const useGif = (tag = "") => {
  const [gif, gifSet] = useState('')
  
  const fetchGif = async (tag) => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`
    const { data } = await axios.get(url)
    gifSet(data.data.images.downsized_large.url)
  }

  useEffect(() => {
    fetchGif(tag)
  }, [tag])

  return {gif, fetchGif}

}

export default useGif
