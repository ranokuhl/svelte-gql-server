import { ApolloServer, gql } from "apollo-server"

const typeDefs = gql`
    type Article {
        slug: String
        title: String
        author: String
        content: String
    }
    type Query {
        articles: [Article]
        }
`

const articles = [
    {
        slug: "hello-world",
        title: "Hello World",
        content: "This is my first article",
        author: "Rano Kuhl"

    },
    {
        slug: "my-new-book",
        title: "My new book",
        content: "I got a new book coming out",
        author: "Rano Kuhl"

    },
]

const resolvers = {
    Query: {
        articles: () => articles,
    },
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
    console.log(`Server ready at ${ url }`)
}
)
