import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';  
import { TextField } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Home() {


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const toastFunc = () => {
    toast.success('Sign-Up successful');
    setTimeout(() => {
      handleClose();
    }, 3000); 
  };
  

  return (
    <>
      <div className="row mt-4 text-center">
        <div className="col-md-2"></div>
        <div className="col-md-8">
           <h1 className='fw-bold'>Made For People.<span style={{color:'#5d1451'}}>Build For Productivity .</span></h1>
           <Button onClick={handleShow} id='homeBtn' className='btn p-2 shadow mt-2 rounded'>GET STARTED</Button>
           <h5 className='fw-bold mt-3'>Slack is free try for as long as u like .</h5>
           <div className="row mt-4">
            <div className='col-md-3'></div>
  <div className="col-md-1">
    <img src="https://logospng.org/download/airbnb/logo-airbnb-2048.png" alt="" height={'40px'} />
  </div>
  <div className="col-md-1">
    <img src="https://fastpng.com/images/file/nasa-logo-lkebbf50fbuig154.png" alt="" height={'40px'} />
  </div>
  <div className="col-md-1">
    <img src="https://logospng.org/download/uber/logo-uber-4096.png" alt="" height={'40px'} />
  </div>
  <div className="col-md-1">
    <img src="https://logos-world.net/wp-content/uploads/2020/10/Target-Logo-1968-present.png" alt="" height={'40px'} />
  </div>
  <div className="col-md-1">
    <img src="https://logos-world.net/wp-content/uploads/2020/11/The-New-York-Times-Logo.png" alt="" height={'40px'} />
  </div>
  <div className="col-md-1">
    <img src="https://pnghq.com/wp-content/uploads/etsy-logo-transparent-image-2048x1024.png" alt="" height={'40px'} />
  </div>
  <div className='col-md-3'></div>
</div>
<video id='videoslack' className='mt-2' width="600" height="400" controls>
     <source src="https://a.slack-edge.com/0cedc3b/marketing/img/homepage/true-prospects/hero-revamp/animation/hero@2x.IN.webm" type="video/webm" />
      Your browser does not support the video tag. </video>
        </div>
        <div id='itemsWrapperHome' className="row mt-4">
            <div className="col-md-1"></div>
            <div className="col-md-10 mt-5">
              <div className="row">
                <div className="col-md-6">
                    <img className='imageHome' src="https://www.lifewire.com/thmb/6sgD3ab3vBao-pTLmq_Y6d6X3cw=/1214x0/filters:no_upscale():max_bytes(150000):strip_icc()/setupfinal-716709e5b3014af58f89904663fa88d6.JPG" alt="" height={'250px'} />
                </div>
                <div className="col-md-6 text-center">
                    <h1 className='fw-bold'>Move faster with your </h1>
                    <h1 className='aaa fw-bold'>tools in one place</h1>
                    <p className=''>Automate away routine tasks with the power of generative <br /> AI and simplify your workflow with all your <br /> favourite apps ready to go in Slack.</p>
                    <a className='linksSlack' href="">Learn more about slack platform<FontAwesomeIcon className='ms-2 text-primary' icon={faArrowRight} /></a>
                </div>
              </div>
              <div className="row mt-5 p-5">
                <div className="col-md-6">
                <h1 className='fw-bold'>Choose how you</h1>
                <h1 className ='aaa fw-bold'>want to work</h1>
              <p className=''>In Slack, you’ve got all the flexibility to work when, where <br /> and how it’s best for you. You can easily chat, send audio and <br /> video clips, or join a huddle to talk things through live.</p>
              <a className='linksSlack' href="">Learn more about Flexible Communication<FontAwesomeIcon className='ms-2 text-primary' icon={faArrowRight} /></a>
                </div>
                <div className="col-md-6 ">
                <img className='imageHome' src="https://wallpaperaccess.com/full/6551739.jpg" alt="" height={'250px'} />
                </div>
              </div>
              <div className="row mt-5 p-5">
                <div className="col-md-6">
                <img className='imageHome' src="https://th.bing.com/th/id/OIP.pdHN_vZrBo__7sNr7XfCFQHaEV?rs=1&pid=ImgDetMain" alt="" height={'250px'} />
                </div>
                <div className="col-md-6 ">
                <h1 className='fw-bold'>Bring your team</h1>
                  <h1 className ='aaa fw-bold'>together</h1>
                 <p className=''>At the heart of Slack are channels: organised spaces for<br /> everyone and everything that you need for work. In <br /> channels, it’s easier to connect across departments, offices, <br />time zones and even other companies.</p>
                 <a className='linksSlack' href="">Learn more about Channels<FontAwesomeIcon className='ms-2 text-primary' icon={faArrowRight} /></a>
                </div>
              </div>
            </div>
            <div className="col-md-1"></div>
        </div>
     <div className="col-md-2"></div>
       <div className="row mt-5">
        <h1 className=' fw-bold'>Teams Large And Small Rely On Slack</h1>
        <p>Slack securely scales up to support collaboration at the world’s biggest companies.</p>
        <div className='mt-3'>
        <Button id='homeBtn3' className='btn p-2 shadow rounded'>MEET SLACK FOR ENTERPRISE</Button>
        <Button id='homeBtn4' className='btn p-2 shadow ms-3 rounded'>TALK TO SALES</Button>
        </div>
       </div>
       <div className="row mt-5">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-4">
              <h1 className='percentage'>85%</h1>
              <p>of users say that Slack <br /> has improved communication*</p>
            </div>
            <div className="col-md-4">
            <h1 className='percentage'>86%</h1>
            <p>feel that their ability to work <br />remotely has improved*</p>
            </div>
            <div className="col-md-4">
            <h1 className='percentage'>88%</h1>
            <p>feel more connected to their <br /> teams*</p>
            </div>
          </div>
        </div>
        <div className="col-md-3"></div>
       </div>
       <div className="row mt-5">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <div className="row">
          <div className="col-md-6">
         <img src="https://etimg.etb2bimg.com/photo/95996598.cms" alt=""  height={'300px'}/>
          </div>
          <div className="col-md-6 mt-5 ">
            <h4>Many technology employees were gravitating </h4>
            <h4>naturally to Slack. So we followed our users to</h4>
            <h4>what has become important tools.’</h4>
            <p className='fw-bold me-5'>Matt Beal</p>
            <p>Director of Technology Strategy and Architecture, Vodafone</p>
            <a className='linksSlack' href="">See More Customer Stories<FontAwesomeIcon className='ms-2 text-primary' icon={faArrowRight} /></a>
          </div>
          </div>
        </div>
        <div className="col-md-2"></div>
       </div>
       <div className="row mt-5">
        <p className='shortSentence'>* Weighted average. Based on 2,707 survey responses from weekly Slack users in the US, UK, Australia and Canada with a ± 2% margin of error at 95% CI (December 2021).</p>
       </div>
       <div id='cardsHome' className="row mt-1">
    <h2 className='mt-5 fw-bold text-center'>Take a deeper dive into a new way to work</h2>
    <div className="row ms-3">
        <div className="col-12">
            <div className="row d-flex justify-content-center">
                <Card className='me-2 mb-3' style={{ width: '18rem' }}>
                    <Card.Img className='mt-2' variant="top" src="https://th.bing.com/th/id/OIP.3WSOZh9b9bTumpN4xEAjYAAAAA?rs=1&pid=ImgDetMain" height={'150px'} />
                    <Card.Body>
                        <Card.Title>Event</Card.Title>
                        <Card.Text className='fw-bold'>
                            Ready For The Future Of Ai in Slack?
                        </Card.Text>
                        <a className='linksSlack' href="">WATCH ON DEMAND<FontAwesomeIcon className='ms-2 text-primary' icon={faArrowRight} /></a>
                    </Card.Body>
                </Card>
                <Card className='me-2 mb-3' style={{ width: '18rem' }}>
                    <Card.Img className='mt-2' variant="top" src="https://d34u8crftukxnk.cloudfront.net/slackpress/prod/sites/6/blog-hero-anniversary%402x.jpg?d=500x500&f=inside" height={'150px'} />
                    <Card.Body>
                        <Card.Title>Blog</Card.Title>
                        <Card.Text className='fw-bold'>
                            Ten Features to Know (and love) on Slack's 10th birthday
                        </Card.Text>
                        <a className='linksSlack' href="">READ MORE<FontAwesomeIcon className='ms-2 text-primary' icon={faArrowRight} /></a>
                    </Card.Body>
                </Card>
                <Card className='me-2 mb-3' style={{ width: '18rem' }}>
                    <Card.Img className='mt-2' variant="top" src="https://images5.alphacoders.com/372/thumb-1920-372113.jpg" height={'150px'} />
                    <Card.Body>
                        <Card.Title>Customer Story</Card.Title>
                        <Card.Text className='fw-bold'>
                            How Open AI Expands ChatGPT with Slack
                        </Card.Text>
                        <a className='linksSlack' href="">READ MORE<FontAwesomeIcon className='ms-2 text-primary' icon={faArrowRight} /></a>
                    </Card.Body>
                </Card>
                <Card className='me-2 mb-3' style={{ width: '18rem' }}>
                    <Card.Img className='mt-2' variant="top" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/cf44b866535477.5b192712f2d01.jpg" height={'150px'} />
                    <Card.Body>
                        <Card.Title>Webinar</Card.Title>
                        <Card.Text className='fw-bold'>
                            Top Slack Tips To Boost Productivity
                        </Card.Text>
                        <a className='linksSlack' href="">WATCH NOW<FontAwesomeIcon className='ms-2 text-primary' icon={faArrowRight} /></a>
                    </Card.Body>
                </Card>
            </div>
        </div>
    </div>
</div>
       <div id='lastdivision' className="row">
        <h1 className='text-light fw-bold mt-5'>See All That You Can Accomplish With Slack</h1>
        <div>
        <Button id='navBtn' className='btn p-2 shadow rounded'>TALK TO SALES</Button>
        <Button onClick={handleShow} id='navBtn6' className='btn ms-4 p-2 shadow rounded'>GET STARTED</Button>
        </div>
       </div>
      </div>
      <Modal className='text-center' show={show} onHide={handleClose}>
        <Modal.Header id='modalHeader' closeButton>
          <Modal.Title className='text-center align-items-center justify-content-center fw-bold text-light'>Sign-up To <img className='ms-1' src="https://logos-world.net/wp-content/uploads/2020/10/Slack-Logo.png" alt="" height={'50px'}/></Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="row">
              <div className="col-md-6">
                <img src="https://wallpaperbat.com/img/529614-slack-down-chat-app-suffers-outages-as-users-unable-to-connect-send-messages.jpg" alt="" height={'250px'} width={'100%'} />
              </div>
              <div className="col-md-6 p-2 mt-2">
                <form action="">
                <TextField className='mt-2 rounded shadow w-100' id="outlined-basic" label="UserName" variant="outlined" />
                <TextField className=' mt-2 rounded shadow  w-100' id="outlined-basic" label="E-Mail" variant="outlined" />
                <TextField className=' mt-2 rounded shadow  w-100' id="outlined-basic" label="PassWord" variant="outlined" />
                </form>
              </div>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button id='modalCloseBtn' className='rounded shadow' variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button id='modalSaveBtn' className='rounded shadow' variant="primary" onClick={toastFunc}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer
      position="top-center"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      />
    </>
  )
}

export default Home




                    