import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      user {
        _id
        username
        email
        bookCount
        savedBooks {
          authors
          description
          bookId
          image
          link
          title
        }
      }
    }
  }
`;


export const SAVE_Book = gql`
  mutation saveBook ($input: saveBook!) {
    saveBook(input: $input) {
           
        _id
        username
        email
        bookCount
        savedBooks {
          authors
          description
          bookId
          image
          link
          title
        }
      }
    
  }
`;

export const REMOVE_Book = gql`
  mutation removeBook ($bookId: ID!) {
    removeBook(bookId: $ID!) {
           
        _id
        username
        email
        bookCount
        savedBooks {
          authors
          description
          bookId
          image
          link
          title
        }
      }
    
  }
`;
