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

export const SUBS_CHAT_BY_ID = gql`
subscription MySubscription($id: Int) {
  memolive_chat(where: {user_id: {_eq: $id}}) {
    user_id
    massage
    chat_id
  }
}
`

export const CHAT_BY_USER = gql`
mutation MyMutation($user_id: Int, $massage: String) {
  insert_memolive_chat(objects: {massage: $massage, user_id: $user_id}) {
    returning {
      massage
      user_id
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
// get all feed data by user
export const GET_ALL_FEED_BY_USER = gql`
query MyQuery($user_id: Int) {
  memolive_user(where: {user_id: {_eq: $user_id}}) {
    user_id
    telephone
    password
    nama
    email
    posting_feed {
      user_id
      like
      foto
      feed_id
      caption
      komentar_postingan {
        user_id
        like
        feed_id
        comment_id
        comment
      }
    }
  }
}

`