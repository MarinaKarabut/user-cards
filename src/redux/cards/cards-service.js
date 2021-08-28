import BaseHttpService from '../../shared/service/base-http-service';

class CardsService extends BaseHttpService {
  async addCard(body) {
    try {
      this.loadToken();
      const { data } = await this.post('cards', body);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async getCards() {
    try {
      this.loadToken();
      const { data } = await this.get('cards');
      return data;
    } catch (error) {
      throw error;
    }
  }
}

export default CardsService;
