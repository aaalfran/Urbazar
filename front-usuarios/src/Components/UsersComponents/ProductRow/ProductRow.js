import React, { useRef, useState } from 'react'
import styled from 'styled-components'

import {
  AiOutlineCheck,
  AiOutlineClose,
  AiFillEdit,
  AiTwotoneDelete
} from 'react-icons/ai'

import axios from 'axios'
import data from '../../../enviroment'

const Container = styled.tr`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 10px;
  background-color: ${props => props.theme.colors.productRow};
`

const FieldName = styled.td`
  display: flex;
  flex-direction: column;
  width: 20%;
`

const FieldPrice = styled.td`
  display: flex;
  flex-direction: column;
  width: 5%;
`

const FieldCategory = styled.td`
  display: flex;
  flex-direction: column;
  width: 10%;
`

const FieldDescription = styled.td`
  display: flex;
  flex-direction: column;
  width: 40%;
`

const FieldFile = styled.td`
  display: flex;
  flex-direction: column;
  width: 15%;
`

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`

const TextInput = styled.input`
  padding: 10px;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.borderRadius};
  font-family: ${(props) => props.theme.fontFamily};
`

const Select = styled.select`
  padding: 10px;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.borderRadius};
  font-family: ${(props) => props.theme.fontFamily};
`

const FileInput = styled.input`
  padding: 10px;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.borderRadius};
  font-family: ${(props) => props.theme.fontFamily};
`

const Img = styled.img`
  width: 50px;
`

const ButtonsWrapper = styled.td`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 30px;
`

const CheckIcon = styled(AiOutlineCheck)`
  font-size: 2rem;
  :hover {
    cursor: pointer;
  }
`

const CancelIcon = styled(AiOutlineClose)`
  font-size: 2rem;
  :hover {
    cursor: pointer;
  }
`

const EditIcon = styled(AiFillEdit)`
  font-size: 2rem;
  :hover {
    cursor: pointer;
  }
`

const DeleteIcon = styled(AiTwotoneDelete)`
  font-size: 2rem;
  :hover {
    cursor: pointer;
  }
`

function ProductRow({ product, reloadPage }) {
  const [editMode, setEditMode] = useState(false)
  const [fileData, setFileData] = useState('')

  const { id, nombre, precio, source, descripcion, stock, ID_Categoria } = product || {
    id: 0,
    nombre: 'Cargando...',
    precio: 0,
    descripcion: 'Cargando...',
    stock: 0,
    ID_Categoria: 0
  }

  const { imagePath, name, price, description } = {
    imagePath: source,
    name: nombre,
    price: precio,
    description: descripcion
  }

  const nameRef = useRef()
  const priceRef = useRef()
  const categoryRef = useRef()
  const descriptionRef = useRef()
  const stockRef = useRef()
  const fileRef = useRef()

  const getFile = (e) => {
    setFileData(e.target.files[0])
  }

  const updateProduct = async () => {
    console.log(nameRef.current.value)
    console.log(priceRef.current.value)
    console.log(categoryRef.current.value)
    console.log(stockRef.current.value)
    console.log(descriptionRef.current.value)
    console.log(fileRef.current.value)
    try {
      const dataF = new FormData()
      dataF.append('file', fileData)
      if (fileData !== '') {
        const response = await axios.post(`${data.url}/upload`, dataF, {
          headers: {
            'content-type': 'multipart/form-data'
          }
        })
        console.log(nameRef.current.value)
        console.log(priceRef.current.value)
        console.log(categoryRef.current.value)
        console.log(stockRef.current.value)
        console.log(descriptionRef.current.value)
        console.log(fileRef.current.value)
        await axios.patch(`${data.url}/productos/${id}`, {
          ID_Categoria: categoryRef.current.value,
          nombre: nameRef.current.value,
          precio: parseInt(priceRef.current.value),
          descripcion: descriptionRef.current.value,
          stock: parseInt(stockRef.current.value),
          source: fileData !== '' ? `${data.url}/products/${response.data.filename}` : imagePath
        })
      } else {
        await axios.patch(`${data.url}/productos/${id}`, {
          ID_Categoria: categoryRef.current.value,
          nombre: nameRef.current.value,
          precio: parseInt(priceRef.current.value),
          descripcion: descriptionRef.current.value,
          stock: parseInt(stockRef.current.value)
        })
      }
      setEditMode(false)
      reloadPage()
    } catch (error) {
      console.error(error)
    }
  }

  const deleteProduct = async () => {
    try {
      await axios.delete(`${data.url}/productos/${id}`)
      reloadPage()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Container>
      <FieldName>
        {editMode
          ? (
          <>
            <Label>Nombre</Label>
            <TextInput type="text" required ref={nameRef} defaultValue={name} />
          </>
            )
          : (
              name
            )}
      </FieldName>
      <FieldPrice>
        {editMode
          ? (
          <>
            <Label>Precio</Label>
            <TextInput
              type="number"
              required
              ref={priceRef}
              defaultValue={price}
            />
          </>
            )
          : (
              price
            )}
      </FieldPrice>
      <FieldCategory>
        {editMode
          ? (
          <>
            <Label>Categoria</Label>
            <Select name="category" ref={categoryRef}>
              <option value="1">Ropa</option>
              <option value="2">Tecnologia</option>
              <option value="3">Comida</option>
              <option value="4">Hogar</option>
              <option value="5">Otros</option>
            </Select>
          </>
            )
          : (
              ID_Categoria
            )}
      </FieldCategory>
      <FieldCategory>
        {editMode
          ? (
          <>
            <Label>Stock</Label>
            <TextInput
              type="number"
              required
              ref={stockRef}
              defaultValue={stock}
            />
          </>
            )
          : (
              stock
            )}
      </FieldCategory>
      <FieldDescription>
        {editMode
          ? (
          <>
            <Label>Descripción</Label>
            <TextInput
              type="text"
              required
              ref={descriptionRef}
              defaultValue={description}
            />
          </>
            )
          : (
              description
            )}
      </FieldDescription>
      <FieldFile>
        {editMode
          ? (
          <>
            <Label>Imagen</Label>
            <FileInput type="file" name='file' onChange={getFile} required ref={fileRef} />
          </>
            )
          : (
          <Img src={source} alt="imagen del producto" />
            )}
      </FieldFile>
      <ButtonsWrapper>
        {editMode
          ? (
          <>
            <CheckIcon onClick={updateProduct} />
            <CancelIcon onClick={() => setEditMode(false)} />
          </>
            )
          : (
          <>
            <EditIcon onClick={() => setEditMode(true)} />
            <DeleteIcon onClick={deleteProduct} />
          </>
            )}
      </ButtonsWrapper>
    </Container>
  )
}

export default ProductRow
