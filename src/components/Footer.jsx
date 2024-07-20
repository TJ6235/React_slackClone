import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, } from 'mdb-react-ui-kit';
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone,faEnvelope,faHouse,faPrint,faHippo,faGhost,faMugHot,faDroplet } from '@fortawesome/free-solid-svg-icons';




function Footer() {
  return (
    <>
    <MDBFooter id='footermain' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span className='text-light'>Get connected with us on social networks:</span>
        </div>

        <div>
        <FontAwesomeIcon className='me-4 text-light' icon={faHippo} />
        <FontAwesomeIcon className='me-4 text-light' icon={faGhost} />
        <FontAwesomeIcon className='me-4 text-light' icon={faMugHot} />
        <FontAwesomeIcon className='me-4 text-light' icon={faDroplet} />
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold'>
                <img src="https://logos-world.net/wp-content/uploads/2020/10/Slack-Logo.png" alt="" height={'70px'}/>
              </h6>
              <p className='text-light'>
              Slack is a popular communication and collaboration tool used by teams and organizations for messaging, file sharing, and project management.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 text-light'>Product</h6>
              <p className='text-light'>
                  Watch Demo
              </p>
              <p className='text-light'>
                 Pricing
              </p>
              <p className='text-light'>
                  Paid vs Free  
              </p>
              <p className='text-light'>
                 Accessibility
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 text-light'>FEATURES</h6>
              <p className='text-light'>
                  Channels
              </p>
              <p className='text-light'>
                  Slack Connect
              </p>
              <p className='text-light'>
                  WorkFlow Builder
              </p>
              <p className='text-light'>
                  Messaging  
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 text-light'>Contact</h6>
              <p className='text-light'>
              <FontAwesomeIcon className='me-2' icon={faHouse} />
                New York, NY 10012, US
              </p>
              <p className='text-light'>
              <FontAwesomeIcon className='me-2' icon={faEnvelope} />
                info@example.com
              </p>
              <p className='text-light'>
              <FontAwesomeIcon className='me-2' icon={faPhone} />
               + 01 234 567 88
              </p>
              <p className='text-light'>
              <FontAwesomeIcon className='me-2' icon={faPrint} /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4 text-light' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Slack Technologies, LLC, a Salesforce company.
        
      </div>
    </MDBFooter>
    </>
  )
}

export default Footer