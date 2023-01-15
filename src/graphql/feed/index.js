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
    }
    komentar_postingan {
      comment
      comment_id
      feed_id
      like
      user_id
    }
  }
}
`
export const ALL_FEED_DATA_BY_LOCATION = gql`
query MyQuery($location_id: Int = 10) {
  memolive_feed(where: {location_id: {_eq: $location_id}}) {
    user_id
    location_id
    like
    foto
    feed_id
    caption
    post_by_location {
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
    }
    lokasi_photo {
      nama_lokasi
      longitude
      location_id
      latitude
      deskripsi_lokasi
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
    lokasi_photo {
      nama_lokasi
      deskripsi_lokasi
      own_badge {
        user_id
      }
      longitude
      latitude
    }
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
    lokasi_photo {
      badge_id
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
    }
  }
}
`

export const POST_FEED = gql`
mutation MyMutation($caption: String, $foto: String, $location_id: Int, $user_id: Int) {
  insert_memolive_feed(objects: {caption: $caption, foto: $foto, location_id: $location_id, user_id: $user_id}) {
    returning {
      feed_id
      caption
    }
  }
}

`