import BaseHttpService from '../../shared/service/base-http-service';

class AuthService extends BaseHttpService {
  async register(body) {
    try {
      const { data } = await this.post('auth/register', body);
      this.saveToken(data.token);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async login(body) {
    try {
      const { data } = await this.post('auth/login', body);
      this.saveToken(data.token);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async logout() {
    try {
      await this.post('auth/logout');
      this.removeToken();
    } catch (error) {
      throw error;
    }
  }

  async currentUser() {
    try {
      this.loadToken();
      const { data } = await this.get('users/current');
      return data;
    } catch (error) {
      throw error;
    }
  }
}

export default AuthService;
