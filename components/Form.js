import { useContext, useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import FormData from 'form-data'
import { create, updateById, getById } from '../services/products'

import { IsChangeDataContext } from '../contexts/isGetData'

const schemaProduct = yup.object({
  name: yup.string().required('Campo requerido'),
  description: yup.string().required('Campo requerido'),
  code: yup.string().required('Campo requerido'),
  price: yup.number().positive().integer().required('Campo requerido'),
  stock: yup.number().positive().integer().required('Campo requerido'),
  lastRode: yup.number().positive().integer().required('Campo requerido'),
  speed: yup.number().positive().integer().required('Campo requerido'),
  limit: yup.number().positive().integer().required('Campo requerido')
}).shape({
  picture: yup
    .mixed()
    .test('fileSize', 'El archivo es muy grande', (value) => {
      return value && value[0].size <= 2000000
    })
    .test('type', 'Solo se aceptan las siguientes extenciones: .jpeg, .jpg, .bmp, svg', (value) => {
      return value && (
        value[0].type === 'image/jpeg' ||
            value[0].type === 'image/bmp' ||
            value[0].type === 'image/png' ||
            value[0].type === 'image/svg'
      )
    })
})

export default function Form ({ type = 'create', idProduct }) {
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm({
    resolver: yupResolver(schemaProduct)
  })
  const { setIsChange } = useContext(IsChangeDataContext)

  // console.log(errors)

  const onSubmit = async data => {
    console.log(data)
    const { name, description, code, price, stock, lastRode, speed, limit } = data
    const form = new FormData()
    form.append('product', JSON.stringify({ name, description, code, price, stock, lastRode, speed, limit }))
    if (data.picture) form.append('picture', data.picture[0])

    if (type === 'create') {
      const response = await create(form)
      if (response.status === 200) {
        reset()
        setIsChange(true)
      }
    } else {
      const response = await updateById(idProduct, form)
      console.log(response)
      if (response.status === 200) {
        reset()
        setIsChange(true)
      }
    }
  }

  useEffect(() => {
    const fetchData = async (id) => {
      const response = await getById(id)
      console.log(response)
      if (response.status === 200) {
        const { name, description, price, stock, lastRode, speed, limit, code } = response.data.data.products
        setValue('name', name)
        setValue('description', description)
        setValue('price', price)
        setValue('stock', stock)
        setValue('lastRode', lastRode)
        setValue('speed', speed)
        setValue('limit', limit)
        setValue('code', code)
      }
    }
    if (type === 'update' && idProduct) {
      fetchData(idProduct)
    }
  }, [type, setValue, idProduct])

  return (
    <form className='row g-3 form-add mt-1' onSubmit={handleSubmit(onSubmit)}>
      <div className='col-12'>
        <input {...register('picture')} type='file' className='form-control' aria-label='imagen' />
      </div>
      <div className='col-12 col-md-6'>
        <input {...register('name')} name='name' type='text' className='form-control' placeholder='nombre del producto' aria-label='nombre del producto' />
      </div>
      <div className='col-12 col-md-6'>
        <input {...register('code')} type='text' className='form-control' placeholder='Código del producto' aria-label='Código del producto' />
      </div>
      <div className='col-12 col-md-6'>
        <input {...register('price')} type='number' className='form-control' placeholder='Precio del producto' aria-label='Precio del producto' />
      </div>
      <div className='col-12 col-md-6'>
        <input {...register('stock')} type='number' className='form-control' placeholder='Stock disponible' aria-label='Stock disponible' />
      </div>
      <div className='col-12 col-md-4'>
        <input {...register('lastRode')} type='number' className='form-control' placeholder='Last Rode' aria-label='Last Rode' />
      </div>
      <div className='col-12 col-md-4'>
        <input {...register('speed')} type='number' className='form-control' placeholder='Speed' aria-label='Speed' />
      </div>
      <div className='col-12 col-md-4'>
        <input {...register('limit')} type='number' className='form-control' placeholder='Limit' aria-label='Limit' />
      </div>
      <div className='col-12 '>
        <textarea {...register('description')} className='form-control' aria-label='With textarea' placeholder='Agrega una breve descripción del producto' />
      </div>

      <div className='col-12'>

        <button type='submit' className='btn btn-primary'>{type === 'create' ? 'Agregar producto' : 'Actualizar producto'}</button>
      </div>
    </form>
  )
}
