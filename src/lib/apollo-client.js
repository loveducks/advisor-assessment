import {ApolloClient, InMemoryCache, HttpLink, ApolloLink} from "@apollo/client"

const httpLink = new HttpLink({uri: process.env.HASURA_GQL})

const authLink = new ApolloLink((operation, forward) => {
	// Use the setContext method to set the HTTP headers.
	operation.setContext({
		headers: {
			"x-hasura-admin-secret": process.env.HASURA_SECRET
		}
	})

	// Call the next link in the middleware chain.
	return forward(operation)
})

const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache()
})

export default client
