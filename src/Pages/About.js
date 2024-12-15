import React from 'react'

import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  return (
    <div>
      <div className='service'>
            <div className='service-cover-pic'>
                <img src="/Assets/bangla wash/449828956_393213883742179_6253318608020714878_n.jpg" alt="" />    
            </div> 

            <hr/>
            <div className='address'>
              <address>
                <h3>302 খান জাহান আলী রোড, রয়েল মোড়, খুলনা</h3>
                <p>01711-409032</p>
                <a href="facebook.com/banglawashonlinelaundry">facebook.com/banglawashonlinelaundry</a>
              </address>
            </div>

            <div className='image'>
                <div>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img src='/Assets/bangla wash/image 1.jpg'/>
                    </Card>
                </div>
                <div>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img src='/Assets/bangla wash/image 2.jpg'/>
                    </Card>
                </div>
                <div>
                    <Card style={{ width: '9rem' }}>
                        <Card.Img src='/Assets/bangla wash/image 3.jpg'/>
                    </Card>
                </div>
            </div>

            <hr/>

            <div className='demo-video'>
              <div className='video'>
              <iframe width="300" height="200" src="https://www.youtube.com/embed/m3gJE2y2urU?si=mKyzqbS3j5dEVA1x" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              <div className='video'>
              <iframe width="300" height="200" src="https://www.youtube.com/embed/SOl1yY0ogoI?si=u5nW7W9sUyNi8f_v" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              <div className='video'>
              <iframe width="300" height="200" src="https://www.youtube.com/embed/tfLFE49K4EI?si=waOuWai9aNWq4rBz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
            
            </div>

            <hr/>
            
        </div>
    </div>
  )
}

export default About
