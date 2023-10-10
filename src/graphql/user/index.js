import { gql } from '@apollo/client';
// get all data user
export const GET_USER_BY_ID = gql`
subscription MySubscription($user_id: Int) {
  memolive_user(where: {user_id: {_eq: $user_id}}) {
    username
    user_id
    telephone
    password
    nama
    foto
    email
  }
}
`

export const UPDATE_USER_BY_EMAIL = gql`
mutation MyMutation(
  $user_id: Int,
  $email: String,
  $foto: String,
  $nama: String,
  $telephone: String,
  $username: String) {
  update_memolive_user(
    where: 
    {
      user_id: {_eq: $user_id}, 
      email: {_eq: $email}
    }, 
    _set: {foto: $foto, nama: $nama, telephone: $telephone, username: $username}) {
    returning {
      username
      nama
    }
  }
}
`

// untuk login, filter by email & password
export const GET_USER_BY_EMAIL = gql`
query MyQuery($email: String, $password: String) {
  memolive_user(where: {email: {_eq: $email}, password: {_eq: $password}}) {
    user_id
    username
    telephone
    nama
    email
    password
  }
}
`