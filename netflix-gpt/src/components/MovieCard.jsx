import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div className='w-24 md:w-48'>
        {/*//TODO:try to make alt dynamic */}
        <img src={IMG_CDN_URL + posterPath} alt="Movie Card" /> 
    </div>
  )
}

export default MovieCard