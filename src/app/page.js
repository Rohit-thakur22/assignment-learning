import Image from 'next/image'
import styles from './page.module.css'
import './globals.css'
import AccordionTable from '@/components/Accordian'
export default function Home() {
  return (
    <main className={styles.main}>
      <AccordionTable/>
    </main>
  )
}
