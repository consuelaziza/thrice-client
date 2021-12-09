import {Navbar, Nav} from  'react-bootstrap'
import {Link} from  'react-router-dom'
import {useContext} from 'react';
import {UserContext} from '../context/app.context'
import {Button} from 'react-bootstrap'
import {Container} from 'react-bootstrap'
import {FormControl, Form} from 'react-bootstrap'

function MyNav(props) {

	
const {user} = useContext(UserContext)

return (
	<Navbar  bg="light"  expand="lg">
	  <Container fluid>
		<Navbar.Toggle  aria-controls="basic-navbar-nav"  />
		<Navbar.Collapse  id="basic-navbar-nav">
			<Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
				<Link  style={{marginLeft: '10px'}} to="/">Thrice</Link>
				<Link  style={{marginLeft: '10px'}}  to="/add-form">Add Item</Link>
				{
					user ? (
						<div className="justify-content-end" > 
						<Button variant="link" style={{marginLeft: '10px'}} onClick={props.onLogout}>Logout</Button>
						</div>
					) : (
						<Nav.Item className="justify-content-end" >
						<Link  style={{marginLeft: '10px'}}  to="/signin">Sign In</Link>
						<Link  style={{marginLeft: '10px'}}  to="/signup">Sign Up</Link>
						</Nav.Item>
					)
				}
			</Nav>
			<Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-dark">Search</Button>
      </Form>
		</Navbar.Collapse>
	  </Container>
	</Navbar>
	)
}
export default MyNav