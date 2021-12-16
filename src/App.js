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
import CheckoutForm from './components/CheckoutForm'
import HistoryPage from './components/HistoryPage'
import AboutPage from './components/AboutPage'
import EditProductPage from './components/EditProductPage'
import NotFoundPage from './components/NotFoundPage'
import StripeApp from './components/StripeApp'
import CartPage from './components/CartPage'




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
          
        // -----------------------------------------------

    }
    const getUserData = async () => {
          let userResponse = await axios.get(`${API_URL}/user`,{withCredentials: true})
          try {
          setFetchingUser(false)
          setUser(userResponse.data)
        }
        catch(err){
          // the request will fail if the user is not logged in 
          setFetchingUser(false)
        }
    }

    getData()
    getUserData()

}, [])

const createProduct = async (event) => {
        event.preventDefault();
console.log(event.target.title.value)

let {title, description, price, stuff} = event.target
       let imageForm = new FormData()
       imageForm.append('imageUrl', event.target.myImage.files[0])
       
       let imgResponse = await axios.post(`${API_URL}/upload`, imageForm)
         console.log(imgResponse.data)

        if (!title.value || !description.value || !price.value ||
            !stuff.value ) {
            return alert('fill all the fields first!')
        }

        const variables = {
            
            title: title.value,
            description: description.value,
            price:price.value,
            images: imgResponse.data.image,
            categories: stuff.value,
        }

       let response= await axios.post(`${API_URL}/create`, variables, {withCredentials: true})
               
                    setProducts([response.data, ...products])

            
    }


  const handleEdit = async (event, id) => {
      event.preventDefault()

      let imageForm = new FormData()
       imageForm.append('imageUrl', event.target.myImage.files[0])
       
       let imgResponse = await axios.post(`${API_URL}/upload`, imageForm)
         console.log(imgResponse.data)

      let editedProducts = {
        title: event.target.title.value,
        description: event.target.description.value,
        images: imgResponse.data.image,
        completed: false,
      }
      // Pass an object as a 2nd param in POST requests
      let response = await axios.patch(`${API_URL}/product/${id}`, editedProducts, {withCredentials: true})
      // Update our state 'products' with the edited product so that the user see the upadted info without refrshing the page

      // We have the updated product here
      console.log(response.data)

      let updatedProducts = products.map((elem) => {
          if (elem._id == id) {
              elem.title = response.data.title
              elem.description = response.data.description
          }
          return elem
      })

      setProducts(updatedProducts)
      navigate("/")
      
  }

  const handleDelete = async (id) => {
    console.log("its the id of the delete one", id)
    // make a request to the server to delete it from the database
    await axios.delete(`${API_URL}/product/${id}`)

    // Update your state 'products' and remove the product that was deleted
    let filteredProducts = products.filter((elem) => {
      return elem._id !== id
    })

    setProducts(filteredProducts)
    navigate("/")
  }

  

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

  const handleLogout = async () => {
    await axios.post(`${API_URL}/logout`, {}, {withCredentials: true})
    setUser(null)
}

 /* useEffect(() => {
    navigate('/')
  }, [products, user])*/

  // Wait for the '/api/user' request to finish so that we know if the user is loggedin or not
  //  if (fetchingUser) {
  //   return <p>Loading user info. . . </p>
  // }
  
  console.log(user)
  
	return (
   <div>
    <NavBar user={user} onLogout={handleLogout}/>
		<div style={{ paddingTop: '75px', minHeight: 'calc(100vh - 80px)' }}>
      
   
      <Routes>
      <Route path="/" element={<LandingPage products={products} /> } />
      <Route path="/signin" element={<SignIn myError={myError} onSignIn={handleSignIn} />}/>
      <Route path="/signup" element={<SignUp />}/>
      <Route path="/product/upload" element={<UploadItem submit={createProduct}/>} />
      <Route path="/product/:productId" element={<DetailProductPage btnDelete={handleDelete}/>} />
      <Route path="/product/:productId/edit" element={<EditProductPage btnEdit={handleEdit}/>} />
      <Route path="/user/cart" element={<StripeApp />} />
      <Route path="/history" element={<HistoryPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={NotFoundPage} />

      </Routes>
      
      </div>
      <Footer />
		
    </div>
    
	);
}

export  default App;
