import axios from 'axios';
import { TASK_API_ENDPOINT } from '../utils/constants';
import type { Task } from '../types/task';

const headers = {
  Authorization:
    'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODE4ZjAwMzY3NThhNWNkYTEyODlkMjUiLCJpYXQiOjE3NDg1MDA0NTJ9.ZNrOFfBpy9HDvuhHNyWPn3Dm5VBKS0PB9zFYJLYxpXRjhLI4qo1Xh5QWorK8QhKYZzBHMjEK4YBvwT9-MJxcI1uU5rQO9fzQn1KFlnS0IXoBtUwx_4lM2MfyssNErMZEJLmLWR_-DXexrrkJpxny_zJRhg02hUbSJEUicqwAzH1mudHhrQOV4TLt1Z4d1JMRORt69qarLGp491EWO9iqnA_FHpkM1e42NFsXn-_7Zt430JmoCGvebuqYOq61I41unNadEfgR_ltQYLArj-M3n32jeMMNv3JCGfqBsk2vNd8xhySr10ppS_dEKmSlg9cxSsjzySzGRe3bH__p5hjVxA',
};

export const getTasks = async (): Promise<Task[]> => {
  const res = await axios.get(TASK_API_ENDPOINT, {
    headers,
  });
  return res.data;
};

export const getTask = async (id: string): Promise<Task> => {
  const res = await axios.get(`${TASK_API_ENDPOINT}/${id}`);
  return res.data;
};

export const createTask = async (task: Task): Promise<Task> => {
  const res = await axios.post(TASK_API_ENDPOINT, task);
  return res.data;
};

export const editTask = async (id: string, task: Task): Promise<Task> => {
  const res = await axios.put(`${TASK_API_ENDPOINT}/${id}`, task);
  return res.data;
};

export const deleteTask = async (id: string): Promise<Task> => {
  const res = await axios.delete(`${TASK_API_ENDPOINT}/${id}`);
  return res.data;
};
