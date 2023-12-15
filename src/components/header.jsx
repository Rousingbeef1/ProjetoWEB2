import { Inter } from 'next/font/google'
import styles from './header.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Header() {
  return (
    <>
     <div className={styles.cabecalho}>
        <><a href="./buscapokemon">Busca Pokemon</a></>
        <><a href="./crianome">Randomizar nome</a></>
        <><a href="./capturados">Capturar Pokemons</a></>
     </div>
    </>
  )
}
