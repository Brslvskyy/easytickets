import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.129.76:3005/", //localhost:3005
  timeout: 90000,
});

export const useEvent = async ({ eventId }) => {
  console.log("eventId", eventId);
  return await instance
    .get("/use-event", {
      params: {
        eventId,
      },
    })
    .then((el) => el.data)
    .catch((error) => {
      console.log("error", error.message);
      console.log(error.message);
      return false;
    });
};

export const useTicket = async ({ ticketId, eventId }) => {
  console.log("ticketId", ticketId);
  return await instance
    .post("/use-ticket", {
      ticketId,
      eventId,
    })
    .then((el) => el.data)
    .catch((error) => {
      console.log("error", error.message);
      console.log(error.message);
      return false;
    });
};
