import React from 'react'
import ModalCatchAxios from '../components/comunes/ModalCatchAxios'
import ListarBlog from '../components/ListarBlog'

const index = () => {
  return (
    <>
      <ListarBlog />
      <ModalCatchAxios />
    </>
  )
}

export default index