import { gql } from '@apollo/client';

export const ALL_FEED_DATA = gql`
query MyQuery{
  memolive_feed {
    feed_id
    foto
    like
    location_id
    caption
    diposting {
      nama
      user_id
      username
      foto
    }
  }
}
`
export const ALL_FEED_DATA_BY_LOCATION = gql`
query MyQuery($location_id: Int) {
  memolive_feed(where: {location_id: {_eq: $location_id}}) {
    user_id
    location_id
    like
    foto
    feed_id
    caption
    created_at
    lokasi_photo {
      nama_lokasi
      location_id
      latitude
      longitude
      deskripsi_lokasi
    }
    diposting {
      username
      user_id
      nama
      foto
    }
  }
}
`
export const ALL_FEED_DATA_BY_USER = gql`
query MyQuery($user_id: Int) {
  memolive_feed(where: {user_id: {_eq: $user_id}}) {
    user_id
    location_id
    like
    foto
    feed_id
    caption
    created_at
    diposting {
      username
      user_id
      nama
    }
  }
}
`
export const SUBS_ALL_FEED_DATA_BY_USER = gql`
subscription MySubscription($user_id: Int) {
  memolive_feed(where: {user_id: {_eq: $user_id}}) {
    caption
    feed_id
    foto
    like
    location_id
    user_id
    created_at
    lokasi_photo {
      deskripsi_lokasi
      latitude
      location_id
      longitude
      nama_lokasi
    }
    diposting {
      nama
      username
      user_id
      foto
    }
  }
}
`

export const POST_FEED = gql`
mutation MyMutation($caption: String, $foto: String, $location_id: Int, $user_id: Int, $created_at: date) {
  insert_memolive_feed(objects: {caption: $caption, foto: $foto, location_id: $location_id, user_id: $user_id, created_at: $created_at}) {
    returning {
      feed_id
      caption
    }
  }
}

`