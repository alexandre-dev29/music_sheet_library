import http from 'k6/http';

export const options = {
  stages: [
    { duration: '5s', target: 500 },
    { duration: '10s', target: 200 },
  ],
};
const query = `
  {
  getData{
    name
  }
}
`;

const headers = {
  'Content-Type': 'application/json',
};

export default function () {
  http.post(
    'http://localhost:3000/graphql',
    JSON.stringify({ query }),
    { headers }
  );
}