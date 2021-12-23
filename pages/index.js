import { useEffect, useState, useContext } from 'react'
import Form from '../components/Form'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Product from '../components/Product'
import TableProducts from '../components/TableProducts'

export default function Home () {
  return (
    <Layout>
      <Navbar />
      <main className='container'>
        <div className='row'>
          <div className='col-12 col-md-6 col-xl-8 col-xxl-6 mt-4'>
            <Form />
          </div>
          <div className='col-12 col-md-6 col-xl-4 col-xxl-6 mt-4'>
            <Product />
          </div>
          <div className='col-12 mt-4'>
            <TableProducts />
          </div>
        </div>
      </main>
    </Layout>
  )
}
