import './style-productList.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
function ProductList() {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetch('/api/products')
      .then(response => response.json())
      .then(response => {
        setProducts(
          response.data.products
        )
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [])


  /* const loading = (
    <tr key="-1">
      <td>Loading...</td>
      <td>Loading...</td>
      <td>Loading...</td>
      <td>Loading...</td>
    </tr>
  ) */

  const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')

  return (
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

      {products.length < 1 ? loading : products.map((element, index) => {
        return (
          <tr key={index}>
            <td>{element.id}</td>
            <td className="center">{element.category.name}</td>
            <td>{element.name}</td>
            <td>${toThousand(element.price)}</td>
            <td className="center">{element.quantity}</td>
            <td className="center"><img alt="product" width="80px" src={`/img/${element.images[0].name}`} /></td>
            <td className="center">
              <Link to={`/product/${element.id}`} /><i className="fas fa-search"></i>
            </td>
            <td className="center">
              <Link to={`/product/${element.id}`} /><i className="far fa-edit"></i>
            </td>
            <td className="center"><i className="far fa-trash-alt"></i></td>

          </tr>
        )
      })
      }

    </table>
  )
}

export default ProductList