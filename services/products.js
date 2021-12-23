import { instance as axios } from './config'

function create (dataForm) {
  const config = {
    headers: {
      authorization: 'true'
    }
  }
  return axios.post('/products', dataForm, config)
}

function getProducts () {
  return axios.get('/products', { headers: { 'Content-Type': 'application/json' } })
}

function getById (id) {
  return axios.get(`/products/${id}`, { headers: { 'Content-Type': 'application/json' } })
}

function deleteById (id) {
  return axios.delete(`/products/${id}`, { headers: { 'Content-Type': 'application/json', authorization: true } })
}

function updateById (id, formData) {
  const config = {
    headers: {
      authorization: 'true'
    }
  }
  return axios.patch(`/products/${id}`, formData, config)
}

export {
  create,
  getProducts,
  deleteById,
  updateById,
  getById
}
