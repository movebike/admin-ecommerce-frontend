import React from 'react'

export default function TableProducts () {
  return (
    <table className='table'>
      <thead>
        <tr>
          <th scope='col'><img src='/table-image.svg' alt='' /></th>
          <th scope='col'>#</th>
          <th scope='col'>Producto</th>
          <th scope='col'>Precio</th>
          <th scope='col'>Stock</th>
          <th scope='col'>Codigo</th>
          <th scope='col'>Acciones</th>

        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Mark</td>
          <th scope='row'>1</th>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>
            <button className='btn btn-primary'> <img src='/edit-icon.svg' alt='' /> </button>
            <button className='btn btn-danger'><img src='/remove-icon.svg' alt='' /></button>
          </td>
        </tr>
        <tr>
          <td>Mark</td>
          <th scope='row'>1</th>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>
            <button className='btn btn-primary'> <img src='/edit-icon.svg' alt='' /> </button>
            <button className='btn btn-danger'><img src='/remove-icon.svg' alt='' /></button>
          </td>
        </tr>
      </tbody>
    </table>
  )
}
