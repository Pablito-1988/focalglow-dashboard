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
  const [prevPage, setPrevPage] = useState(1)
  const [nextPage, setNextPage] = useState(2)

  useEffect(() => {
    getProducts(page)
  }, [])

  function getProducts(page) {

    const limit = 10

    fetch(`/api/products/page/${page}/limit/${limit}`)
      .then(result => result.json())
      .then(response => {
        setProducts(response.data)
        setPrevPage(page - 1)
        setNextPage(page + 1)
        setPage(page + 1)
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
      {displayProductModal &&
        <Modal
          onClickClose={() => hideProductModal()}
          info={productDetail}
        />}


      <h3>Listado de Productos</h3>
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

      <div className="page">
        <button onClick={() => getProducts(prevPage)} className="offset" value="1">
          <i className="fas fa-arrow-left"></i>
        </button>
        <button type="submit" className="offset white" value="1">
          {page}
        </button>
        <button onClick={() => getProducts(nextPage)} className="offset" value="2">
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>





    </section>
  )
}

export default ProductList