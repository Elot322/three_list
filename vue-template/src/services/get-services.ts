import ApiServices from "../api/services-api";

export async function getServices() {
  const api = new ApiServices()

  try {
    const response = (await api.get('services')).services
    return response
  } catch(e) {
    console.log(e)
  }
}