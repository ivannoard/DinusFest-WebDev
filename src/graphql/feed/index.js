import { gql } from '@apollo/client';

export const ALL_FEED_DATA = gql`
query MyQuery {
  memolive_feed {
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
`