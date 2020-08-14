import fetch from './../helpers/fetch'


class TodoService {
  constructor(url) {
    this.path = url
  }

  async getTodo() {
    console.log("ouch");
    return await fetch.get(this.path)
  }
  postTodo(todo)  {
    return fetch.post(this.path, todo)
      .then(res => res)
      .catch(err => err)
  }
  putTodo(todo){
    return fetch.put(`${this.path}/${todo._id}`, todo)
      .then(res => res)
      .catch(err => err)
  }
  async deleteTodo(id){
    return await fetch.delete(`${this.path}/${id}`)
      .then(res => res)
      .catch(err => err)
  }
}

export default TodoService
