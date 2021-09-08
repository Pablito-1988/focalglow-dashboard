import './style-productList.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Modal from '../PrincipialInfo/Modal/Modal'

function ProductList() {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [displayProductModal, setDisplayProductModal] = useState(false)
  const [productDetail, setProductDetail] = useState({})

  const [page, setPage] = useState(1)

  useEffect(() => {
    getProducts()
  }, [])

  function getProducts() {

    const limit = 10

    fetch(`/api/products/page/${page}/limit/${limit}`)
      .then(result => result.json())
      .then(response => {
        setProducts(
          response.data
        )
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function deleteProduct(id) {
    if (window.confirm(`Esta acción borrará el producto ${id}`)) {
      fetch(`/api/products/${id}`, { method: 'DELETE' })
        .then(result => result.json())
        .then(response => {
          getProducts()
        })
    }
  }

  function showProductDetail(id) {
    fetch(`/api/products/${id}`)
      .then(result => result.json())
      .then(response => {
        setProductDetail(response)
      })

    showProductModal()
  }

  function showProductModal() {

    setDisplayProductModal(true)
  }
  function hideProductModal() {
    setDisplayProductModal(false)
  }


  const load = (
    <tr key="-1">
      <td>Loading...</td>
      <td>Loading...</td>
      <td>Loading...</td>
      <td>Loading...</td>
      <td>Loading...</td>
      <td>Loading...</td>
      <td><i className="fas fa-search"></i></td>
      <td><i className="far fa-edit"></i></td>
      <td><i class="far fa-trash-alt"></i></td>
    </tr>
  )

  const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  console.log(productDetail)
  return (

    <section className="tableContainer">
      <h4>Listado de Productos</h4>
      <table>
        <tr>
          <th>ID</th>
          <th>Categoría</th>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Cantidad</th>
          <th>Imagen</th>
          <th>Detalle</th>
          <th>Editar</th>
          <th>Borrar</th>
        </tr>

        {loading ? load : products.map((element, index) => {

          return (
            <tr key={index}>
              <td className="center">{element.id}</td>
              <td className="center">{element.category.name}</td>
              <td>{element.name}</td>
              <td>${toThousand(element.price)}</td>
              <td className="center">{element.quantity}</td>
              <td className="center"><img alt="product" width="80px" src={`/img/${element.images[0].name}`} /></td>
              <td className="center">
                <button onClick={() => showProductDetail(element.id)} className="search"><i className="fas fa-search"></i></button>
              </td>
              <td className="center">
                <Link to={{ pathname: `http://localhost:3000/product/${element.id}/edit` }} target="_blank" >
                  <i className="far fa-edit"></i>
                </Link>
              </td>

              <td className="center">
                <button onClick={() => deleteProduct(element.id)} variant="danger" className="trash" type="submit"><i class="far fa-trash-alt"></i></button>
              </td>


            </tr>

          )
        })
        }

      </table>
      {displayProductModal && <Modal onClickClose={() => hideProductModal()}
        info={productDetail}
      />}
    </section>
  )
}

export default ProductList