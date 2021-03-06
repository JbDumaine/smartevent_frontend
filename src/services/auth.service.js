import axios from 'axios'

const API_URL = `http://smartevent-api.tk/`

class AuthService {
  async login(user) {
    const json = JSON.stringify({
      email: user.email,
      password: user.password
    });
    return axios
      .post(API_URL + `login`, json)
      .then(response => {
        console.log(response.data)
        if (response.data) {
          localStorage.setItem(`userToken`, response.data)
        }

        return response.data
      })
  }

  logout() {
    localStorage.removeItem(`user`)
  }

  register(user) {
    const json = JSON.stringify({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      password: user.password
    });
    console.log(json)
    return axios.post(API_URL + `register`, json)
  }
}

export default new AuthService()
