import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { ImageLoader } from './ImagePlaceholder'


const DogImage: React.FC = () => {
  const [ path, setPath ] = useState("")

  useEffect(() => {
    const URL = 'https://dog.ceo/api/breeds/image/random'
    // TODO 関数化する
    axios
    .get(URL)
    .then((response: any) => {
      setPath(response.data.message)
    })
    .catch((error: unknown) => {
      console.error(error);
      return
    })
  }, [])

  return (
    <div style={{width: '600px', margin: '0 auto'}}>
      {path ? (
      <div style={{minWidth: '600px', minHeight: '400px'}}>
        <img src={path} alt="" style={{width: '100%'}} />
      </div>
    ) : (
      <div>
        <ImageLoader width={600} height={400} />
      </div>
    )}
    </div>
  )
}

export { DogImage }
