import React, { useRef } from 'react'
import './Testmonials.css'
import next_icon from '../../assets/next.png'
import back_icon from '../../assets/back.png'
import user_1 from '../../assets/user1.webp'
import user_2 from '../../assets/user2.webp'
import user_3 from '../../assets/user3.webp'
import user_4 from '../../assets/user4.webp'

const Textmonials = () => {
      const slider=useRef();
      let tx=0;
  const slideForward = ()=>{
      if(tx > -50){
        tx -= 25;
      }

      slider.current.style.transform=`translateX(${tx}%)`
  }
  
  const slideBackForward=()=>{
    if(tx < 0){
      tx += 25;
    }

    slider.current.style.transform=`translateX(${tx}%)`
  }
return (
    <div className='testmonials'>
      <img src={next_icon} alt="" className='next-btn' 
      onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' 
      onClick={slideBackForward}/>
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Ananthi</h3>
                  <span>Madres, Chennai</span>
                </div>
              </div>
              <p>Choosing to pursue my degree at edusity was one of
                    the best desition I ve ever made.the Suportive 
                    communitive, State-of-the-art facilities, and commitedment
                    to academic excellange have trully exceeded my Expectation
                  </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>city, American</span>
                </div>
              </div>
              <p>Choosing to pursue my degree at edusity was one of
                    the best desition I ve ever made.the Suportive 
                    communitive, State-of-the-art facilities, and commitedment
                    to academic excellange have trully exceeded my Expectation
                  </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Karthic Raja</h3>
                  <span>Edusty, Dubai</span>
                </div>
              </div>
              <p>Choosing to pursue my degree at edusity was one of
                    the best desition I ve ever made.the Suportive 
                    communitive, State-of-the-art facilities, and commitedment
                    to academic excellange have trully exceeded my Expectation
                  </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Sanjay Kumar</h3>
                  <span>city of cuntry, USA</span>
                </div>
              </div>
              <p>Choosing to pursue my degree at edusity was one of
                    the best desition I ve ever made.the Suportive 
                    communitive, State-of-the-art facilities, and commitedment
                    to academic excellange have trully exceeded my Expectation
                  </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Textmonials