import React, {useState,useEffect,useRef} from 'react'
import {Modal} from './Modal'

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)  

export const Search = () => {
    //const[inputtext, setInputtext] = useState('Type here')
    const[text, setText] = useState('')
    const[images, setImages] = useState([])
    const[amount, setAmount] = useState(8)
    const[cimg, setCimg] = useState()
    const[modaltoggle, setModaltoggle] = useState(false)

    const url = `https://pixabay.com/api/?key=14784007-d6d8c8cf15352d491ac7f70be&q=${text}&image_type=photo&per_page=${amount}`

    console.log(text)

    useEffect(() => {
      
      fetch(url)
        .then((res) => res.json())
        .then((json) => {
          if(text !== ''){
          setImages(json.hits)
          }
        })
        .catch(err => console.log(err))
    }, [amount])


    useEffect(()=> {

      fetch(url)
      .then((res) => res.json())
      .then((json) => setImages(json.hits))
      .catch(err => console.log(err))
        

    },[text])

    
    const handleNo = (e) => {
      setAmount(e.target.value)
    }
    
    const handleChange = (e) => {
      const val = e.target.value
        setText(val)

     /*    if(val===''){
          setImages([])
        }
        else{
          fetch(url)
          .then((res) => res.json())
          .then((json) => setImages(json.hits))
          .catch(err => console.log(err))
            } */
        }

    const handleModal = () => {
        setModaltoggle(prev => !prev )
        }

    const myRef = useRef(null)
    const executeScroll = () => scrollToRef(myRef)


    return (
        <div className="wrapper" ref={myRef}>
            <div className="search">
            <input name="searchtext" placeholder="Type something" onChange={handleChange} ></input>
            <select onChange={(e)=> {
              handleNo(e)
              }}>
              <option value="8">8</option>
              <option value="16">16</option>
              <option value="32">32</option>
              <option value="64">64</option>
            </select>
            </div>

        {
        
        (images.length > 0)
        ? images.map((img) => (
          <div className="card" key={img.id} onClick={()=> {handleModal()
            setCimg(img.largeImageURL)
            executeScroll()
          }}><span><img src={img.largeImageURL} alt='img' />
          <span className="photo"><span><strong>Photo: {img.user}</strong></span><span><strong className="modal-open"
          >open</strong></span></span></span></div>
        ))
        : null
        }

      <Modal id={cimg} class={modaltoggle} setModaltoggle={setModaltoggle} />
    </div>
    )
}

