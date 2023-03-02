'use client'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers, increment, decrement} from "../slice/userSlices"
import React, {useEffect , useRef } from 'react' 
import { AppDispatch, RootState } from '../store/store'
import Form from '../components/form'
import { LockClosedIcon } from '@heroicons/react/solid'


export default function Home() {

  const userRef = useRef(false);

  const { entities, loading, value } = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch<AppDispatch>()

  console.log('loading' ,loading)
  console.log(entities);
  

useEffect(() => {

  if(userRef.current === false) {

    dispatch(fetchUsers())
  }

  return () => {
    userRef.current = true 
  };
}, [])


  return (
   <div className='mt-5 ml-5 '>
     {loading ? (<h1> Loading ... </h1> )
     : (entities?.map((user :any) => 
        <h3 key={user.id}> {user.name } </h3>)
      )}
<div className=' flex flex-row gap-4 pt-5 mt-5 items-center'>

    <button  className='bg-green-500 p-2' onClick={() => dispatch(increment())}> Click Me tTo Inc</button>
    <p className='text-center '>{value} </p>
    <button className='bg-red-500 p-2' onClick={() => dispatch(decrement())}> Click Me To dsc</button>
    
    <button className='bg-red-500 p-2' onClick={() => dispatch({type:"ADD_TODO", payload:
   {
    id: 3,
    title: 'todo3',
    description: 'description'
    }
    })}> ADD TODO </button>

    

    </div>
     
     <section className='pt-10 '>

    {/* <Form/> */}



  
     </section>
   </div>
     
    
  )
}
