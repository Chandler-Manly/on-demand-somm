import api from './api-config';

export const getAllTastings = async () => {
  const resp = await api.get('/tastings');
  return resp.data;
}

export const addTasting = async (wineId, tastingId) => {
  const resp = await api.post(`/wines/${wineId}/tastings/${tastingId}`);
  return resp.data;
}