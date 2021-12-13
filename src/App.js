import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { Routes, Route} from  "react-router-dom";
import {API_URL} from './config';
import axios from "axios";
import {UserContext} from './context/app.context';
import {useState, useEffect, useContext} from 'react';
import {useNavigate } from 'react-router-dom';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage/LandingPage'
import NavBar from './components/NavBar/NavBar';
import UploadItem from './components/AddImageForm/UploadItem'
import DetailProductPage from './components/DetailProductPage/DetailProductPage'
import CartPage from './components/CartPage'
import HistoryPage from './components/HistoryPage'



function App(){

  const [products, setProducts] = useState([])

  const {user, setUser} = useContext(UserContext)
  const [myError, setError] = useState(null)
  const [fetchingUser, setFetchingUser] = useState(true)

  const navigate = useNavigate()

  useEffect(() => {

    const getData = async () => {
        let response  = await axios.get(`${API_URL}/product`,{withCredentials: true})
        setProducts(response.data)

        // -----------------------------------------------
        // we make the user requst here to know if the user is logged in or not
        try {
          let userResponse = await axios.get(`${API_URL}/user`,{withCredentials: true})
          setFetchingUser(false)
          setUser(userResponse.data)
        }
        catch(err){
          // the request will fail if the user is not logged in 
          setFetchingUser(false)
        }
        // -----------------------------------------------

    }

    getData()

}, [])

  const handleSignIn = async (event) => {
    event.preventDefault()
    console.log(event)
    try {
      let newUser = {
        email: event.target.email.value,
        password: event.target.password.value
      }
      console.log(newUser)
      let response = await axios.post(`${API_URL}/signin`, newUser, {withCredentials: true})
      console.log(response)
      setUser(response.data)
      navigate('/')
    }
    catch(err){
      //console.log(err.response)
      setError("why error")
    }
  }

//   const handleLogout = async () => {
//     await axios.post(`${API_URL}/logout`, {}, {withCredentials: true})
//     setUser(null)
// }

  useEffect(() => {
    navigate('/')
  }, [products, user])

  // Wait for the '/api/user' request to finish so that we know if the user is loggedin or not
  //  if (fetchingUser) {
  //   return <p>Loading user info. . . </p>
  // }
  

  
	return (
   <div>
    <NavBar />
		<div style={{ paddingTop: '75px', minHeight: 'calc(100vh - 80px)' }}>
      
   
      <Routes>
      <Route path="/" element={<LandingPage products={products} /> } />
      <Route path="/signin" element={<SignIn myError={myError} onSignIn={handleSignIn} />}/>
      <Route path="/signup" element={<SignUp />}/>
      <Route path="/product/upload" element={<UploadItem />} />
      <Route path="/product/:productId" element={<DetailProductPage />} />
      <Route path="/user/cart" element={<CartPage />} />
      <Route path="/history" element={<HistoryPage />} />
      </Routes>
      
      </div>
      <Footer />
		
    </div>
    
	);
}

export  default App;
