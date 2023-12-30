import { axiosInstance } from "../../../lib";
import { logEvent } from "../../../lib/logger";

export const getAllEvents = async (page = 1, pageSize = 4) => {
  try {
    const response = await axiosInstance.get(`events?populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}`);
    return response;
  } catch (error) {
    logEvent("EventList_Get", error);
    throw new Error(error);
  }
};

export const getSingleEvents = async (id) => {
  try {
    const response = await axiosInstance.get(`events/${id}?populate=*`);
    return response;
  } catch (error) {
    logEvent("EventList_Get", error);
    throw new Error(error);
  }
};
