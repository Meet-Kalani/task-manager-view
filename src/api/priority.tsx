import axios from 'axios';
import { PRIORITY_API_ENDPOINT } from '../utils/constants';
import { Priority } from '../types/priority';

const headers = {
  Authorization:
    'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODE4ZjAwMzY3NThhNWNkYTEyODlkMjUiLCJpYXQiOjE3NDg1MDA0NTJ9.ZNrOFfBpy9HDvuhHNyWPn3Dm5VBKS0PB9zFYJLYxpXRjhLI4qo1Xh5QWorK8QhKYZzBHMjEK4YBvwT9-MJxcI1uU5rQO9fzQn1KFlnS0IXoBtUwx_4lM2MfyssNErMZEJLmLWR_-DXexrrkJpxny_zJRhg02hUbSJEUicqwAzH1mudHhrQOV4TLt1Z4d1JMRORt69qarLGp491EWO9iqnA_FHpkM1e42NFsXn-_7Zt430JmoCGvebuqYOq61I41unNadEfgR_ltQYLArj-M3n32jeMMNv3JCGfqBsk2vNd8xhySr10ppS_dEKmSlg9cxSsjzySzGRe3bH__p5hjVxA',
};

export const getPriorities = async (): Promise<Priority[]> => {
  const res = await axios.get(PRIORITY_API_ENDPOINT, {
    headers,
  });
  return res.data;
};

export const getPriority = async (id: string): Promise<Priority> => {
  const res = await axios.get(`${PRIORITY_API_ENDPOINT}/${id}`);
  return res.data;
};

export const createPriority = async (Priority: Priority): Promise<Priority> => {
  const res = await axios.post(PRIORITY_API_ENDPOINT, Priority);
  return res.data;
};

export const editPriority = async (
  id: string,
  Priority: Priority
): Promise<Priority> => {
  const res = await axios.put(`${PRIORITY_API_ENDPOINT}/${id}`, Priority);
  return res.data;
};

export const deletePriority = async (id: string): Promise<Priority> => {
  const res = await axios.delete(`${PRIORITY_API_ENDPOINT}/${id}`);
  return res.data;
};
