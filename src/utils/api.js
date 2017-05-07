const axios = require('axios');

module.exports = {
  fetchPopularRepos: function (language) {
    const encodedURI = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`);

    return axios.get(encodedURI)
            .then(function (response) {
              return response.data.items;
            });
  },
  fetchUser: function (username) {
    const encodeURI = window.encodeURI(`https://api.github.com/users/${username}`);

    return axios.get(encodeURI)
            .then(function (response) {
              return response.data;
            })
  }
};
