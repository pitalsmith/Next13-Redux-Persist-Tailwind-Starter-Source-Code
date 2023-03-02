'use client'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers, increment, decrement} from "./slice/userSlices"
import React, {useEffect , useRef } from 'react' 
import { AppDispatch, RootState } from './store/store'
import Form from './components/form'
import { LockClosedIcon } from '@heroicons/react/solid'
import { todoReducer } from './reducer/todoReducer'
import { useState } from 'react'
import storage from 'redux-persist'



export default function Home() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')


  const userRef = useRef(false);

  const { entities, loading, value } = useSelector((state: RootState) => state.user)
  const { todos } = useSelector((state: RootState) => state.todos)
  const dispatch = useDispatch<AppDispatch>()

  console.log('loading' ,loading)
  console.log('entities',entities);
  console.log('todos',todos);

  const handleSubmit = (e:any) => {
  e.preventDefault();

  const newTodo = {
    id:Math.floor(Math.random()*100),
    title:title,
    description:description
  }
  // console.log('newTodo', newTodo)
  dispatch({type:"ADD_TODO", payload:newTodo})

  }

  const clearStorage = () => {
    localStorage.removeItem('persist:root')
  }


// useEffect(() => {

//   if(userRef.current === false) {

//     dispatch(fetchUsers())
//   }

//   return () => {
//     userRef.current = true 
//   };
// }, [])


  return (
   <div className='mt-5 ml-5 '>
     {loading ? (<h1> Loading ... </h1> )
     : (todos?.map((todo :any) => 
     <div className=''>
      <h3 key={todo.id} className='p-4'> {todo.title } {todo.description }</h3>
     </div>
        )
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


<button className='bg-red-500 p-2' onClick={clearStorage}> Clear Storage </button>
    

    </div>
     
     <section className='pt-10 '>

    {/* <Form/> */}



     <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8">
      <form onSubmit={handleSubmit} className="mt-8 space-y-6" action="#" >
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <label htmlFor="email-address" className="sr-only">
             Title
            </label>
            <input
            onChange={(e) =>setTitle(e.target.value)}
              name="title"
              type="text"
              className="appearance-none rounded-none relative block
              w-full px-3 py-2 border border-gray-300
              placeholder-gray-500 text-gray-900 rounded-t-md
              focus:outline-none focus:ring-indigo-500
              focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Enter Title"
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
            Description
            </label>
            <input
             onChange={(e) =>setDescription(e.target.value)}
              name="description"
              type="text"
              className="appearance-none rounded-none relative block
              w-full px-3 py-2 border border-gray-300
              placeholder-gray-500 text-gray-900 rounded-b-md
              focus:outline-none focus:ring-indigo-500
              focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Enter Description"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center
            py-2 px-4 border border-transparent text-sm font-medium
            rounded-md text-white bg-indigo-600 hover:bg-indigo-700
            focus:outline-none focus:ring-2 focus:ring-offset-2
            focus:ring-indigo-500"
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
              aria-hidden="true" />
            </span>
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  </div>
     </section>
   </div>
     
    
  )
}
