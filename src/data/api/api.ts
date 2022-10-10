import axios from "axios";
import { BASE_URL } from "../../constant";

axios.defaults.baseURL = BASE_URL;

export async function fetchStore(clientId: string) {
  return await axios.post("/api/client/get", {
    clientId,
  });
}
