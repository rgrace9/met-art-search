import axios from 'axios';

export   const MetObjectClient = axios.create({
  baseURL: 'https://collectionapi.metmuseum.org/public/collection/v1/objects/',
  timeout: 100000,
});

export const MetClient = axios.create({
  baseURL: 'https://collectionapi.metmuseum.org/public/collection/v1',
});

export const MetDepartmentClient = axios.create({
  baseURL: 'https://collectionapi.metmuseum.org/public/collection/v1/departments',
  timeout: 100000,
});