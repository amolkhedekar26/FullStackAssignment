import client from "../utils/apiClient";

const clientApi = {
  getClients: (data) => client.get("clients/", data),
};

export default clientApi;
