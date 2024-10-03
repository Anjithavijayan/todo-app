import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
        <Navbar expand="lg" className='navbarimg shadow'>
                <Container>
                    <Navbar.Brand>
                    <img src="https://cdn-icons-png.flaticon.com/512/7893/7893272.png " alt="" style={{height:'75px'}} />
                        <Link to={'/'}  style={{ color: 'white', textDecoration: 'none' }} className='fs-5'>
                            TO DO APP
                        </Link>
                        
                    </Navbar.Brand>
                </Container>
            </Navbar>
    </div>
  )
}

export default Header