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
    location_id
    deskripsi_lokasi
    longitude
    latitude
    own_badge {
      user_id
      collected_by {
        nama
      }
    }
  }
}
`