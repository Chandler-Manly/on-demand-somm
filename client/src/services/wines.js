import api from './api-config';

export const getAllWines = async () => {
  const resp = await api.get('/wines');
  return resp.data;
}

export const getOneWine = async (id) => {
  const resp = await api.get(`/wines/${id}`);
  return resp.data;
}

export const postWine = async (wineData) => {
  const resp = await api.post('/wines', { wine: wineData });
  return resp.data;
}

export const putWine = async (id, wineData) => {
  const resp = await api.put(`/wines/${id}`, { wine: wineData });
  return resp.data;
}

export const destroyWine = async (id) => {
  const resp = await api.delete(`/wines/${id}`);
  return resp;
}