const axios = require('axios');
const id = '';
const sec = '';
const params = `?client_id=${id}&client_secret=${sec}`;

const getProfile = (username) => {
  return axios.get(`https://api.github.com/users/${username}`)
    .then(({ data }) => data);
};

const getRepos = (username) => {
  return axios.get(`https://api.github.com/users/${username}/repos?per_page=100`)
    .then(({ data }) => data);
};

const getStarCount = (data) => {
  return data.reduce((count, repo) => {
    return count + repo.stargazers_count;
  }, 0);
};

const calculateScores = (profile, repos) => {
  const followers = profile.followers;
  const totalStars = getStarCount(repos);

  return (followers * 3) + totalStars;
};

const handleError = error => console.log(error);

const getUserData = (player) => {
  return axios.all([
    getProfile(player),
    getRepos(player)
  ]).then((data) => {
    const profile = data[0];
    const repos = data[1];

    return {
      profile,
      score: calculateScores(profile, repos)
    };
  });
};

const sortPlayer = (players) => {
  return players.sort((a, b) => {
    return b.score - a.score;
  });
};

module.exports = {
  battle: function (players) {
    return axios.all(players.map(getUserData))
      .then(sortPlayer)
      .catch(handleError);
  },
  fetchPopularRepos: function (language) {
    const encodedURI = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`);

    return axios.get(encodedURI)
            .then(function (response) {
              return response.data.items;
            });
  }
};
