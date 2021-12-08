import Head from "next/head"
import Hero from "../Components/Hero/Hero"
import styles from "../styles/Home.module.css"
export default function Home() {
	return (
		<>
			<Head>
				<title>Mahmudul Hasan | Blog</title>
			</Head>
			{/* Hero */}
			<Hero />
		</>
	)
}
