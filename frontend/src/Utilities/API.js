import axios from 'axios';

export default {
  createUser: function (user) {
    return axios.post('/auth/user', user).catch((err) => {
      throw err;
    });
  },
  authenticate: function (user) {
    return axios.post(`/auth/authenticate`, user).catch((err) => {
      throw err;
    });
  },
  checkToken: function () {
    return axios.get('/auth/checkToken').catch((err) => {
      throw err;
    });
  },
  logout: function () {
    return axios.get('/auth/logout').catch((err) => {
      throw err;
    });
  },
  createProject: function (project) {
    return axios.post('/api/projects', project).catch((err) => {
      throw err;
    });
  },
  getAllProjects: function () {
    return axios.get('/api/projects').catch((err) => {
      throw err;
    });
  },
  getProjectById: function (id) {
    console.log('the id' + id);
    return axios.get(`/api/projects/${id}`).catch((err) => {
      throw err;
    });
  },
};
