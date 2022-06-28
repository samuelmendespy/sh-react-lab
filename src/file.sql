
const GET_LESSONS_QUERY = gql`
query {
  lessons {
    id
    slug
    title
    teacher {
      name
      bio
      avatarURL
    }  } }`

