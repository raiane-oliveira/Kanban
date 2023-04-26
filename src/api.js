import axios from "axios";

const baseURL = "https://random-data-api.com/api/v2/";

export async function getRandomUser() {
  const response = await axios
    .get(`${baseURL}/users`)
    .then((res) => (res.status === 200 ? res.data : false))
    .catch((error) => error.message);
  return response;
}
