import axios from "axios";
import {
  key,
  proxy
} from '../config';

export default class Search {
  constructor(query) {
    this._query = query;
  }

  async getResults() {

    //error handling
    try {
      const res = await axios(
        `${proxy}api/search?q=${this._query}`
      );
      this._result = res.data.recipes;
    } catch (err) {
      console.log(err);
    }
  }
}