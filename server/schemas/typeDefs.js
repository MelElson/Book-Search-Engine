const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    authors: String!
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
  }

  input BookInput {
    authors: [String]
    description: String
    title: String
    bookId: String
    link: String

  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String! email: String!, password: String!): Auth
    saveBook(input: BookInput!): User
    removeBook(bookId: ID!): User
  }

 type Auth {
   token: ID!
   user: User
 }

`;

module.exports = typeDefs;


//change this to match models

//does toJSON need to be here too
//and savedBooks
