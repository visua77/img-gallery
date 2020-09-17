import React, {useState} from 'react'
import {Search} from './components/Search'

export const App = () => {

/*   const[images, setImages] = useState([])

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setImages(json.hits)
      })
  }, []) */
 

//console.log(images)

  return (
    <div className="main">
      <Search />
    </div>
  )
}
