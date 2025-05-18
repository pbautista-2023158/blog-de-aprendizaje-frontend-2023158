import React from 'react'
import { Sidebar } from '../components/Sidebar'
import { Posts } from '../components/Posts'

export const MainPage = () => {
  return (
    <div className='d-flex' style={{ minHeight: '100vh' }}>
      <div className="row">
        <div className="bg-dark text-white p-3" style={{ width: '250px', position: 'sticky', top: 0 }}>
          <Sidebar />
        </div>
      </div>
      <div className="col-md-9 col-lg-10 p-3">
        <Posts />
      </div>
    </div>
  )
}
