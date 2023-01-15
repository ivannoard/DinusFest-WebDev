import { gql } from '@apollo/client';
// Get semua data lokasi, dan badge yang akan di dapatkan jika berhasil ke lokasi
export const GET_ALL_LOCATION_BADGE = gql`
query MyQuery {
  memolive_location {
    nama_lokasi
    location_id
    deskripsi_lokasi
    longitude
    latitude
    badge_location {
      nama_badge
      asset_badge
      badge_id
    }
  }
}
`
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
    post_by_location {
      user_id
      location_id
      like
      foto
      feed_id
      caption
    }
  }
}
`
export const GET_ALL_POST_BY_LOCATION = gql`
query MyQuery($location_id: Int) {
  memolive_location(where: {location_id: {_eq: $location_id}}) {
    nama_lokasi
    longitude
    location_id
    latitude
    deskripsi_lokasi
    post_by_location {
      foto
      feed_id
      caption
      location_id
      like
      user_id
      diposting {
        nama
        user_id
        username
      }
    }
  }
}
`

export const SUBS_ALL_LOCATION = gql`
subscription MySubscription {
  memolive_location {
    badge_id
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