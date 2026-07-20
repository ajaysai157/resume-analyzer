import api from "./axios";

export const getDashboardData = async () => {

    const response = await api.get("/history");

    return response.data;

};