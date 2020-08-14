import { useState, useEffect } from "react"
import {TodoService} from './../services/'


const useFetch = (url) =>  {
console.log("entra useFetch");
  const [state, setState] = useState(null)
  useEffect( () => {
    setState(null)
    const TODO  =  new TodoService(url)
    TODO.getTodo()
      .then(({data}) => setState(data))
  }, [url])
  return state
}

export default useFetch
