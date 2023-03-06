import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <header className="header">
      <div className="container d-flex flex-column align-items-center">
          <img className="header__avatar" src="./images/avatar.png" alt="avatar" />
          <h1 className="header__title">sudar</h1>
          <hr className="divider--light"/>
          <p className="header__slogan">Slogan</p>
      </div>
    </header>
    <article className="image__layout py-3 py-sm-5">
    <div className="container">
      <h1 className="text-center">IMAGES</h1>
      <hr className="divider--dark"/>
      <div className="row">
        <div className="image mt-4 col-sm-6 col-lg-3">
          <a href="" className="image__link">
            <img src="images/img1.jpg" alt="" className="image__style"/>
          </a>
          <p className="image_title">Place 1</p>
        </div>
        <div className="image mt-4 col-sm-6 col-lg-3">
          <a href="" className="image__link">
            <img src="images/img2.jpg" alt="" className="image__style"/>
          </a>
          <p className="image_title">Place 2</p>
        </div>
        <div className="image mt-4 col-sm-6 col-lg-3">
          <a href="" className="image__link">
            <img src="images/img3.jpg" alt="" className="image__style"/>
          </a>
          <p className="image_title">Place 3</p>
        </div>
        <div className="image mt-4 col-sm-6 col-lg-3">
          <a href="" className="image__link">
            <img src="images/img4.jpg" alt="" className="image__style"/>
          </a>
          <p className="image_title">Place 4</p>
        </div>
        <div className="image mt-4 col-sm-6 col-lg-3">
          <a href="" className="image__link">
            <img src="images/img5.jpg" alt="" className="image__style"/>
          </a>
          <p className="image_title">Place 5</p>
        </div>
        <div className="image mt-4 col-sm-6 col-lg-3">
          <a href="" className="image__link">
            <img src="images/img6.jpg" alt="" className="image__style"/>
          </a>
          <p className="image_title">Place 6</p>
        </div>                
        <div className="image mt-4 col-sm-6 col-lg-3">
          <a href="" className="image__link">
            <img src="images/img7.jpg" alt="" className="image__style"/>
          </a>
          <p className="image_title">Place 7</p>
        </div>
        <div className="image mt-4 col-sm-6 col-lg-3">
          <a href="" className="image__link">
            <img src="images/img8.jpg" alt="" className="image__style"/>
          </a>
          <p className="image_title">Place 8</p>
        </div>   
      </div>
    </div>
  </article>
    </div>
  )
}

export default App
