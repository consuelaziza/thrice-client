import {Navbar, Nav} from  'react-bootstrap'
import {Link} from  'react-router-dom'
import {useContext} from 'react';
import {UserContext} from '../context/app.context'

function MyNav(props) {

	
const {user} = useContext(UserContext)

return (
	<Navbar  bg="light"  expand="lg">
		<Navbar.Toggle  aria-controls="basic-navbar-nav"  />
		<Navbar.Collapse  id="basic-navbar-nav">
			<Nav  className="mr-auto">
				<Link  style={{marginLeft: '10px'}} to="/">To Dos</Link>
				<Link  style={{marginLeft: '10px'}}  to="/add-form">Add To Do</Link>
				{
					user ? (
						<button onClick={props.onLogout}>Logout</button>
					) : (
						<Nav.Item className="justify-content-end" >
						<Link  style={{marginLeft: '10px'}}  to="/signin">Sign In</Link>
						<Link  style={{marginLeft: '10px'}}  to="/signup">Sign Up</Link>
						</Nav.Item>
					)
				}
			</Nav>
		</Navbar.Collapse>
	</Navbar>
	)
}
export default MyNav