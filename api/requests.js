import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.129.76:3005/", //localhost:3005
  timeout: 4000,
});

export const useTicket = async ({ ticketId }) => {
  console.log("ticketId", ticketId);
  return await instance
    .post("/use-ticket", {
      ticketId,
    })
    .then((el) => el.data)
    .catch((error) => {
      console.log("error", error.message);
      console.log(error.message);
      return false;
    });
};

export const testQuery = async () => {
  const { data } = await instance.get("/").catch((error) => {
    console.log("error", error.message);
    console.log(error);
    return false;
  });
  return data;
};
