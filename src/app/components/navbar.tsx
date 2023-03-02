import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>     
        <nav style={{padding:'10px 0 10px 0'}}> 
    <Link href="/" style={{padding:'10px 0 10px 0'}}> Home </Link>
    <Link href="/page2" style={{padding:'10px 0 10px 0'}}> Page2 </Link>
    </nav>
    </div>
  )
}

export default Navbar