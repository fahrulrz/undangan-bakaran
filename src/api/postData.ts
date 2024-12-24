import { fetcher } from "@/lib/api";

export const postData = async (
    name: string,
) => {
    try {
        const endpoint = "/bakaran-names";
        const body = JSON.stringify({name});

        const response = await fetcher(endpoint, {
            method: "POST",
            body,
        })

        if (response.message === "Name created successfully") {
            return response.data; // Kembalikan data nama yang baru dibuat
          } else {
            throw new Error(response.message || "Failed to create name");
          }
    } catch (error) {
        console.error('Error registering user:', error);
        throw error;
    }
}