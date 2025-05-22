import Link from "next/link"
import styles from "./Navbar.module.css"

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>E-Estudiantes</Link>
        <div className={styles.links}>
          <Link href="/products">Productos</Link>
          <Link href="/cart">Carrito</Link>
          <Link href="/login">Ingresar</Link>
        </div>
      </div>
    </nav>
  )
}
