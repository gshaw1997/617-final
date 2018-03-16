import { DataStore } from '../interfaces/DataStore';
import * as request from 'request';

export class JsonStore implements DataStore {
  getUsers() {
    return request.get(`http://localhost:3000/users`).then(res => res.data);
  }
  getUser(id: string) {
    return request
      .get(`http://localhost:3000/users/${id}`)
      .then(res => res.data);
  }
  addUser(name: string) {
    return request
      .post('http://localhost:3000/users', {
        name
      })
      .then(res => res.data);
  }
  updateUser(id: string, name: string) {
    return request
      .patch('http://localhost:3000/users/' + id, { id, name })
      .then(res => res.data);
  }
  deleteUser(id: string) {
    return request
      .delete('http://localhost:3000/users/' + id)
      .then(res => res.data);
  }
}
