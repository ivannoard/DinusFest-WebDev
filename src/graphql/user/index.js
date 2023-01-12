import { gql } from '@apollo/client';
// get all data user
export const GET_ALL_USER = gql`
query MyQuery {
  memolive_user {
    user_id
    telephone
    nama
    email
    password
  }
}
`
// untuk login, filter by email & password
export const GET_USER_BY_EMAIL = gql`
query MyQuery($email: String, $password: String) {
  memolive_user(where: {email: {_eq: $email}, password: {_eq: $password}}) {
    user_id
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