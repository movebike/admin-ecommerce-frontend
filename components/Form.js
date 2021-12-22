import React from 'react'

export default function Form () {
  return (
    <form className='row g-3 form-add mt-1'>
      <div className='col-12'>
        <input type='file' className='form-control' aria-label='imagen' />
      </div>
      <div className='col-12 col-md-6'>
        <input type='text' className='form-control' placeholder='nombre del producto' aria-label='nombre del producto' />
      </div>
      <div className='col-12 col-md-6'>
        <input type='text' className='form-control' placeholder='Código del producto' aria-label='Código del producto' />
      </div>
      <div className='col-12 col-md-6'>
        <input type='number' className='form-control' placeholder='Precio del producto' aria-label='Precio del producto' />
      </div>
      <div className='col-12 col-md-6'>
        <input type='number' className='form-control' placeholder='Stock disponible' aria-label='Stock disponible' />
      </div>
      <div className='col-12 col-md-4'>
        <input type='number' className='form-control' placeholder='Last Rode' aria-label='Last Rode' />
      </div>
      <div className='col-12 col-md-4'>
        <input type='number' className='form-control' placeholder='Speed' aria-label='Speed' />
      </div>
      <div className='col-12 col-md-4'>
        <input type='number' className='form-control' placeholder='Limit' aria-label='Limit' />
      </div>
      <div className='col-12 '>
        <textarea className='form-control' aria-label='With textarea' placeholder='Agrega una breve descripción del producto' />
      </div>

      <div className='col-12'>
        <button type='submit' className='btn btn-primary'>Agregar producto</button>
      </div>
    </form>
  )
}
