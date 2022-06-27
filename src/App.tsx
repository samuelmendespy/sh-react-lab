import { gql, useQuery } from "@apollo/client"
import { client } from "./lib/apollo"
import { useEffect } from "react"

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


 
interface Lesson {
  id: string;
  title: string;
}

function App() {

const {data} = useQuery<{lessons: Lesson[] }>(GET_LESSONS_QUERY)

console.log(data);


  return (
   <>
   <h1 className="title">Hello World</h1>
   <ul>
    {data?.lessons.map(lesson => {
      return <li key={lesson.id}>{lesson.title}</li>
    })}
   </ul>
   </>
  )
}

export default App
