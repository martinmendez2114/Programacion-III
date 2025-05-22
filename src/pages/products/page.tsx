import Navbar from "@/comoponents/Navbar"
import styles from "./products.module.css"
import Image from "next/imagen"
const productos = [
  {
    id: 1,
    nombre: "Mochila Universitaria",
    precio: 4500,
    imagen: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    nombre: "Cuaderno A4",
    precio: 1200,
    imagen: "https://via.placeholder.com/150"
  },
  {
    id: 3,
    nombre: "Lápiz USB 32GB",
    precio: 2200,
    imagen: "https://via.placeholder.com/150"
  }
]

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <h1 className={styles.titulo}>Productos para Estudiantes</h1>
        <div className={styles.grid}>
          {productos.map((producto) => (
            <div key={producto.id} className={styles.card}>
              <image src={producto.imagen} alt={producto.nombre} />
              <h2>{producto.nombre}</h2>
              <p>${producto.precio}</p>
              <button>Agregar al carrito</button>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}
