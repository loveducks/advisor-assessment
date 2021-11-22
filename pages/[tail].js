import React from "react"

import {gql} from "@apollo/client"
import client from "../src/lib/apollo-client"
import {getJSONresponse} from "../src/lib/api"
import styles from "../styles/Home.module.css"

const Info = ({data = {title: "test", description: "filler"}}) => {
	return (
		<div className={styles.main}>
			<div className={styles.card}>
				<div className={styles.description}>{data.title}</div>
				<div className={styles.description}>{data.description}</div>
			</div>
		</div>
	)
}

export async function getStaticProps(ctx) {
	const {data} = await client.query({
		query: gql`
			query {
				long_tails {
					json_id
					tail
				}
			}
		`
	})

	const res = data.long_tails.find(desc => desc.tail === ctx.params.tail)
	const resp = await getJSONresponse(res.json_id)

	return {
		props: {
			data: resp
		}
	}
}

export async function getStaticPaths() {
	const posts = ["best-hello-ever", "best-hello-world-ever", "best-world-ever"]
	const paths = posts.map(post => ({
		params: {tail: post}
	}))

	return {paths, fallback: false}
}

export default Info
