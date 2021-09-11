import './style-productList.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Modal from '../PrincipialInfo/Modal/Modal'

function ProductList() {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [displayProductModal, setDisplayProductModal] = useState(false)
  const [productDetail, setProductDetail] = useState({})

  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const [prevPage, setPrevPage] = useState(1)
  const [nextPage, setNextPage] = useState(2)
  const [pageQuantity, setPageQuantity] = useState(1)


  useEffect(() => {
    getProducts(page, limit)
  }, [page])

  useEffect(() => {

    setPage(1)
  }, [limit])




  function getProducts(page, limit) {

    fetch(`/api/products/page/${page}/limit/${limit}`)
      .then(result => result.json())
      .then(response => {
        setProducts(response.data)
        page - 1 === 0 ? setPrevPage(1) : setPrevPage(page - 1)
        page + 1 > response.meta.pageQuantity ? setNextPage(response.meta.pageQuantity) : setNextPage(page + 1)
        page > response.meta.pageQuantity ? setPage(response.meta.pageQuantity) : setPage(page)
        setPageQuantity(response.meta.pageQuantity)
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
          getProducts(page, limit)
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

  const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')

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
        <tbody>
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
        </tbody>


      </table>
      <caption>Productos por vista:
        <select value={limit} onChange={event => {
          setLimit(event.target.value)

        }}>
          <option value="5"> 5</option>
          <option value="10"> 10</option>
          <option value="15"> 15</option>
          <option value="20"> 20</option>
        </select>
      </caption>

      <div className="page">
        <button onClick={() => setPage(page - 1)} className="offset">
          <i className="fas fa-arrow-left"></i>
        </button>
        <button type="submit" className="offset white">
          {page}
        </button>
        <button onClick={() => setPage(page + 1)} className="offset">
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>

      <caption>Cantidad de páginas: {pageQuantity}</caption>

    </section>
  )
}

export default ProductList