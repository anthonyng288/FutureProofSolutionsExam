export async function fetchMethods() {
  try {
    const response = await axios.get("https://apidev.borely.com/v1/methods");
    return response.data;
  } catch (err) {
    throw new Error("Failed to fetch methods");
  }
}
