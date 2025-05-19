import axios from 'axios';
import { STATUS_API_ENDPOINT } from '../utils/constants';
import type { Status } from '../types/status';

const headers = {
  Authorization:
    'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODE4ZjAwMzY3NThhNWNkYTEyODlkMjUiLCJpYXQiOjE3NDY3MjIyMTl9.inPbgruNeAbeIki5JF3SjZ0RSAiJKMPmpbYplzONFG5DmOaCU5rZxtK3AWSXrKD7oRfH5coDSVUov0qFFsvEtH2N_EL16YpcZGCoVsPPEJWtRbFY8QHux7FpwYKh6Ejv9isEsvLojmswkevIZyFk3AsiiNv780AUZm_uzODCqs6UkdrS9RBOBGZWKZadgZjwnlsYF94q0EuJGGyuA3KZc29HTLL4FONJs014v98chUf-NasicXr9hcwj-9n7uuGFb_84TXYYLWygRIw19WYuVymS9V0KEWEWgPuDjD7Ozpg7_P_sJ_Uk1E69j0F4fOXU2IrLQBk3ITy3bnc8jYT4Rw',
};

export const getStatuses = async (): Promise<Status[]> => {
  const res = await axios.get(STATUS_API_ENDPOINT, {
    headers,
  });
  return res.data;
};

export const getStatus = async (id: string): Promise<Status> => {
  const res = await axios.get(`${STATUS_API_ENDPOINT}/${id}`);
  return res.data;
};

export const createStatus = async (status: Status): Promise<Status> => {
  const res = await axios.post(STATUS_API_ENDPOINT, status);
  return res.data;
};

export const editStatus = async (
  id: string,
  status: Status
): Promise<Status> => {
  const res = await axios.put(`${STATUS_API_ENDPOINT}/${id}`, status);
  return res.data;
};

export const deleteStatus = async (id: string): Promise<Status> => {
  const res = await axios.delete(`${STATUS_API_ENDPOINT}/${id}`);
  return res.data;
};
