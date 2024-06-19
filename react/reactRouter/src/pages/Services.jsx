import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Services() {
  return (
    <div>
        <Link to={'wd'} >web development</Link><br />
        <Link to={'app'}>app development</Link><br />
      this is service page <br />
      <Outlet/>
    </div>
  )
}

export default Services
