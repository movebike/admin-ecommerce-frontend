import { useState, useContext, useEffect } from 'react'
import { IsChangeDataContext } from '../contexts/isGetData'
import { getProducts, deleteById } from '../services/products'
import Form from '../components/Form'

export default function TableProducts () {
  const [products, setProducts] = useState([])
  const [idToUpdate, setIdToUpdate] = useState()
  const { isChange, setIsChange } = useContext(IsChangeDataContext)

  const fetchData = async () => {
    const response = await getProducts()
    // console.log(response)
    if (response.status === 200) {
      setProducts(response.data.data.products)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    console.log(isChange)
    if (isChange) {
      fetchData()
      setIsChange(!isChange)
    }
  }, [isChange, setIsChange])

  const handleDelete = async (id) => {
    const response = await deleteById(id)
    console.log(response)
    if (response.status === 200) {
      console.log('Producto eliminado')
      setIsChange(true)
    }
  }
  return (
    <>
      {/* <!-- Modal --> */}
      <div className='modal fade' id='staticBackdrop' data-bs-backdrop='static' data-bs-keyboard='false' tabIndex='-1' aria-labelledby='staticBackdropLabel' aria-hidden='true'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='staticBackdropLabel'>Actualizar Producto</h5>
              <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close' />
            </div>
            <div className='modal-body'>
              <Form type='update' idProduct={idToUpdate} />
            </div>
            <div className='modal-footer'>
              <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>Close</button>
            </div>
          </div>
        </div>
      </div>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'><img src='/table-image.svg' alt='' /></th>
            <th scope='col'>#</th>
            <th scope='col'>Producto</th>
            <th scope='col'>Precio</th>
            <th scope='col'>Stock</th>
            <th scope='col'>Código</th>
            <th scope='col'>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {
          products.map(({ id, name, code, price, stock, picture }, index) => (
            <tr key={index}>
              <td><img className='image' src={picture} alt={name} /></td>
              <th scope='row'>{index + 1}</th>
              <td>{name}</td>
              <td>{price} USD</td>
              <td>{stock}</td>
              <td>{code}</td>
              <td>
                <button className='btn btn-primary' data-bs-toggle='modal' data-bs-target='#staticBackdrop' onClick={() => setIdToUpdate(id)}> <img src='/edit-icon.svg' alt='' /> </button>
                <button className='btn btn-danger' onClick={() => handleDelete(id)}><img src='/remove-icon.svg' alt='' /></button>
              </td>
            </tr>
          ))
        }
        </tbody>
      </table>
    </>
  )
}
