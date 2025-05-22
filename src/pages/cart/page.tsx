import Navbar from "@/comoponents/Navbar"
import styles from "./cart.module.css"

const carrito = [
  {
    id: 1,
    nombre: "Mochila Universitaria",
    precio: 4500,
    cantidad: 1
  },
  {
    id: 2,
    nombre: "Cuaderno A4",
    precio: 1200,
    cantidad: 2
  }
]

export default function CartPage() {
  const total = carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0)

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <h1>Carrito de Compras</h1>
        {carrito.length === 0 ? (
          <p>Tu carrito está vacío.</p>
        ) : (
          <>
            <ul className={styles.lista}>
              {carrito.map((producto) => (
                <li key={producto.id} className={styles.item}>
                  <div>
                    <strong>{producto.nombre}</strong> x {producto.cantidad}
                  </div>
                  <div>${producto.precio * producto.cantidad}</div>
                </li>
              ))}
            </ul>
            <div className={styles.total}>
              <strong>Total:</strong> ${total}
            </div>
            <button className={styles.checkout}>Finalizar Compra</button>
          </>
        )}
      </main>
    </>
  )
}
