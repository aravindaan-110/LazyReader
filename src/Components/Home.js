import React from 'react'
import '../App.css'
import Discuss from '../Assets/discuss.svg'

function onSubmit(event) {
  event.preventDefault();

  console.log("clicked");
  
  
  const script1 = document.createElement("script");
  script1.src = "https://binocs.postaffiliatepro.com/scripts/jwk8n1https://binocs.postaffiliatepro.com/scripts/jwk8n1";
  script1.id = "pap_x2s6df8d"
  script1.type = "text/javascript"
  document.body.appendChild(script1);
  const script2 = document.createElement("script");
  script2.type = "text/javascript";
  script2.body = "PostAffTracker.setAccountId('default1'); var sale = PostAffTracker.createAction('accountSetup-success'); sale.setTotalCost('120.50'); sale.setOrderID('ORD_12345XYZ'); sale.setProductID('test product'); sale.setStatus('A'); PostAffTracker.register();"
  document.body.appendChild(script2);
}

const Home = () => {
  return (
    <div style={{ maxHeight: '100vh', overflow: 'hidden', position: 'relative' }}>
      <svg className='home-background-top' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="1" d="M0,224L80,213.3C160,203,320,181,480,186.7C640,192,800,224,960,229.3C1120,235,1280,213,1360,202.7L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
      <div className='header'>
        <h1 style={{ color: 'white' }} className='title'>Lazy Reader</h1>
      </div>
      <div className='home-body'>
        <div className='home-content'>
          <h1>A one-stop solution to all your academic problems!</h1>
          <h3>Online materials needed for your courses are available here.</h3>
          <div>
            <a className='home-link' style={{ color: 'white' }} onClick= {onSubmit}  href='/login'>Login</a>
            <a className='home-link' href='/register' style={{ marginLeft: '30px', color: 'white' }}>Register</a>
          </div>
        </div>
        <img alt='discuss' src={Discuss} className='home-image' />
      </div>
      <svg className='home-background-bottom' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="1" d="M0,160L80,170.7C160,181,320,203,480,197.3C640,192,800,160,960,149.3C1120,139,1280,149,1360,154.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
    </div>
  )
}

export default Home


