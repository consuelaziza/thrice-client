import React, {useState, useEffect} from 'react'
import {Spinner} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {Typography} from '@mui/material'

function TodoList(props) {

     //creating this state to store our json
     const [someJson, setJson] = useState(null)
    
     useEffect(() => {
         const getData = async () => {
             let res = await axios.get('https://assets5.lottiefiles.com/packages/lf20_0etcyzow.json')
             setJson(res.data)
         }
 
         getData()
     },[])
 
     const {todos} = props
 
     if(!todos.length || !someJson) {
         return <Spinner animation="grow" variant="dark" />
     }
    return (
        <div>
        <Typography component="h1" variant="h5">
        To Dos List
          </Typography>
            
            {
                todos.map((elem) => {
                    return (
                        <div>
                            <Link to={`/todo/${elem._id}`}>{elem.name}</Link>
                        </div>  
                        
                        
                    )
                })

                
            }

                
        </div>
    )
}

export default TodoList
