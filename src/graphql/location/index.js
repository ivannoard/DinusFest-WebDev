import { gql } from '@apollo/client';
// ini mau dijadiin 1 query atau terpisah aja ?
// get semua data lokasi, siapa saja yang sudang pernah kesana (nama)
export const GET_ALL_LOCATION = gql`
query MyQuery {
  memolive_location {
    nama_lokasi
    longitude
    location_id
    latitude
    deskripsi_lokasi
    badge_id
  }
}
`

export const SUBS_ALL_LOCATION = gql`
subscription MySubscription {
  memolive_location {
    deskripsi_lokasi
    latitude
    location_id
    longitude
    nama_lokasi
    post_by_location {
      caption
      feed_id
      foto
      like
      location_id
      user_id
    }
  }
}
`