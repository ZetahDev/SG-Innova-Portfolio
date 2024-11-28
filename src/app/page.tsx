import { redirect } from 'next/navigation'

export default function Home() {
  redirect('/en') // Redirigimos a inglés por defecto
}
