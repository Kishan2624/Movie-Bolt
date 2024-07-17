import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'

const SeasonDetails = () => {
    const params = useParams()
    const fetchDetails = async() => {
        const response = await axios.get(`/tv/${params.id}/season/${params.season}`)
        console.log(response.data.episodes[7])
    }   

    fetchDetails()
  return (
    <div>SeasonDetails</div>
  )
}

export default SeasonDetails