import axios from "axios"

class BaseHttpService {
  BASE_URL = "http://localhost:4000/api/v1"

  accessToken = null

  async get(endpoint = "", options = {}) {
    Object.assign(options, this.getCommonOptions())
    try {
      const { data } = await axios.get(`${this.BASE_URL}/${endpoint}`, options)
      return data
    } catch (error) {
      this.handleError(error)
    }
  }

  async post(endpoint = "", body, options = {}) {
    Object.assign(options, this.getCommonOptions())
    try {
      const { data } = await axios.post(
        `${this.BASE_URL}/${endpoint}`,
        body,
        options
      )
      return data
    } catch (error) {
      this.handleError(error)
    }
  }

  async patch(endpoint = "", body, options = {}) {
    Object.assign(options, this.getCommonOptions())
    try {
      const { data } = await axios.patch(
        `${this.BASE_URL}/${endpoint}`,
        body,
        options
      )
      return data
    } catch (error) {
      this.handleError(error)
    }
  }

  handleError(error) {
    const { statusCode } = error.response.data
    if (statusCode !== 401) {
      throw error
    } else {
      return this.handle401()
    }
  }

  handle401() {
    this.accessToken = null
    this.removeToken()
  }

  getCommonOptions() {
    const { accessToken } = this
    return {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  }
  getToken() {
    return this.accessToken || this.loadToken()
  }

  saveToken(token) {
    this.accessToken = token
    localStorage.setItem("accessToken", token)
    return token
  }

  loadToken() {
    const accessToken = localStorage.getItem("accessToken")
    this.accessToken = accessToken
    return accessToken
  }

  removeToken() {
    localStorage.removeItem("accessToken")
    this.accessToken = null
  }
}

export default BaseHttpService
