import Link from "next/link"
import styles from "../styles/Home.module.css"
const Home = () => {
	return (
		<div className={styles.main}>
			<div className={styles.title}>Welcome</div>
			<div className={styles.card}>
				{["best-hello-ever", "best-hello-world-ever", "best-world-ever"].map(link => (
					<Link href={link} key={link}>
						<a className={styles.description} style={{color: "cornflowerblue"}}>
							{link}
						</a>
					</Link>
				))}
			</div>
		</div>
	)
}

export default Home
