'use strict';

import http from './http.js';

export default {
  searchUser(userName){
    return http.getJson('/github/search/users?q='+userName);
  },
  getUser(userName){
    return http.getJson('/github/users/'+userName);
  }
}