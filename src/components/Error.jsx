import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section>
        <h2 className='text-7xl'>404</h2>
        <p>Page not Found</p>
        <Link to='/'>back home</Link>
    </section>
  )
}

export default Error