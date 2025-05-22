import Navbar from "@/components/Navbar"
import styles from "./page.module.css"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <h1>Bienvenido a la tienda para estudiantes</h1>
        <p>Explorá productos útiles y accesibles para tu vida académica.</p>
      </main>
    </>
  )
}
