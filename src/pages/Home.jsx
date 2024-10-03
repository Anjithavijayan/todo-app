import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'
import Footer from '../components/Footer'

function Home() {
    return (
<>
        <div className='container-fluid d-flex justify-content-center align-items-center  '>
            <Row className='mt-5 mb-5'>
                <Col md={6} className='d-flex justify-content-center align-items-center flex-column'>
                    <div>
                        <div>
                            <h1>Organize life </h1>
                            <h1><span style={{ color: 'darkviolet' }}>then go enjoy it ....</span></h1>
                        </div>
                        <div className='mt-4'>
                            <h6>Stay organized,prioritise daily activities and responsibilities</h6>
                        </div>
                        <div className='mt-4'>
                            <Link to={'/Todo'}>
                                <button className='btn btn-outline-secondary my-4 shadow'>GET STARTED<i class="fa-solid fa-arrow-right ms-2"></i></button>
                            </Link>
                        </div>
                    </div>

                </Col>
                <Col md={6} className='d-flex justify-content-center align-items-center flex-column '>
                    <img src="https://png.pngtree.com/png-clipart/20230825/original/pngtree-businessman-checklist-clipboard-check-work-picture-image_8514763.png" width="85%" alt="" />
                </Col>
            </Row>
            
        </div>
        <Footer/>
        
         </>
    )
}

export default Home