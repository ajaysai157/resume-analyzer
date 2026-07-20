import api from "./axios";

export const analyzeResume = async (file, jobDescription) => {

    const formData = new FormData();

    formData.append("file", file);

    formData.append(
        "jobDescription",
        jobDescription
    );

    const response = await api.post(
        "/analyze",
        formData,
        {
            headers: {
                "Content-Type":
                    "multipart/form-data",
            },
        }
    );

    return response.data;
};