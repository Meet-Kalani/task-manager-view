import axios from 'axios';
import { TAG_API_ENDPOINT } from '../utils/constants';
import { Tag } from '../types/tag';

const headers = {
  Authorization:
    'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODE4ZjAwMzY3NThhNWNkYTEyODlkMjUiLCJpYXQiOjE3NDg1MDA0NTJ9.ZNrOFfBpy9HDvuhHNyWPn3Dm5VBKS0PB9zFYJLYxpXRjhLI4qo1Xh5QWorK8QhKYZzBHMjEK4YBvwT9-MJxcI1uU5rQO9fzQn1KFlnS0IXoBtUwx_4lM2MfyssNErMZEJLmLWR_-DXexrrkJpxny_zJRhg02hUbSJEUicqwAzH1mudHhrQOV4TLt1Z4d1JMRORt69qarLGp491EWO9iqnA_FHpkM1e42NFsXn-_7Zt430JmoCGvebuqYOq61I41unNadEfgR_ltQYLArj-M3n32jeMMNv3JCGfqBsk2vNd8xhySr10ppS_dEKmSlg9cxSsjzySzGRe3bH__p5hjVxA',
};

export const getTags = async (): Promise<Tag[]> => {
  const res = await axios.get(TAG_API_ENDPOINT, {
    headers,
  });
  return res.data;
};

export const getTag = async (id: string): Promise<Tag> => {
  const res = await axios.get(`${TAG_API_ENDPOINT}/${id}`);
  return res.data;
};

export const createTag = async (Tag: Tag): Promise<Tag> => {
  const res = await axios.post(TAG_API_ENDPOINT, Tag);
  return res.data;
};

export const editTag = async (id: string, Tag: Tag): Promise<Tag> => {
  const res = await axios.put(`${TAG_API_ENDPOINT}/${id}`, Tag);
  return res.data;
};

export const deleteTag = async (id: string): Promise<Tag> => {
  const res = await axios.delete(`${TAG_API_ENDPOINT}/${id}`);
  return res.data;
};
