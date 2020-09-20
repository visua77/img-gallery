import React, {useState,useEffect,useRef} from 'react'
import {Modal} from './Modal'

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)  

export const Search = () => {
    const[text, setText] = useState('')
    const[images, setImages] = useState([])
    const[amount, setAmount] = useState(6)
    const[cimg, setCimg] = useState()
    const[modaltoggle, setModaltoggle] = useState(false)
    //console.log(amount)
    const url = `https://pixabay.com/api/?key=14784007-d6d8c8cf15352d491ac7f70be&q=${text}&image_type=photo&per_page=${amount}`



    useEffect(() => {
      //console.log(amount)
      fetch(url)
        .then((res) => res.json())
        .then((json) => {
          if(text != ''){
          setImages(json.hits)
        }
        if(text === ''){
          setImages([])
          console.log(images)
        }
        })
        .catch(err => console.log(err))
    }, [amount])
    
    const handleNo = (e) => {
      setAmount(e.target.value)
      //console.log(amount)
      //setText(e.target.value)
    }
    
    
    const handleChange = (e) => {
        setText(e.target.value)
        fetch(url)
        .then((res) => res.json())
        .then((json) => {
          setImages(json.hits)
        })
        .catch(err => console.log(err))
    }

    const handleModal = () => {
        setModaltoggle(prev => !prev )
            //setCimg(images.img.largeImageURL)

    }

    const myRef = useRef(null)
    const executeScroll = () => scrollToRef(myRef)

    //console.log(cimg)
    return (
        <div className="wrapper" ref={myRef}>
            <div className="search">
            <input name="searchtext" onChange={handleChange}></input>
            <select onChange={(e)=> {
              handleNo(e)
              }}>
              <option value="6">6</option>
              <option value="12">12</option>
              <option value="24">24</option>
            </select>
            </div>

        {images.map((img) => (
        <div className="card" key={img.id}><span><img src={img.largeImageURL} alt='img' onClick={()=> {handleModal()
          setCimg(img.largeImageURL)
          executeScroll()
        }} />
        <span className="photo"><span><strong>Photo: {img.user}</strong></span><span><strong className="modal-open"
        onClick={()=> {handleModal()
                      setCimg(img.largeImageURL)
                      executeScroll()
        }
        
        }>open</strong></span></span></span></div>
      ))}

      <Modal id={cimg} class={modaltoggle} setModaltoggle={setModaltoggle} />
    </div>
    )
}

