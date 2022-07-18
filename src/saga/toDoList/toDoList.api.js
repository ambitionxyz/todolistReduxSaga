import Axios from '../../services/';

const HOME_API = {
  fetch: async () => {
    return await Axios.get(`/item`);
  },
  get: async id => {
    return await Axios.get(`/item/${id}`);
  },
  post: async data => {
    console.log('post', data);
    delete data['id'];
    return await Axios.post(`/item`, { ...data });
  },
  put: async payload => {
    console.log(payload);
    const { id, ...job } = payload;
    return await Axios.put(`/item/${id}`, { ...job });
  },
  delete: async id => {
    return await Axios.delete(`/item/${id}`);
  },
};

export default HOME_API;
