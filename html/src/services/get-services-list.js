import ApiService from '../api/api-service.js'

export async function getServicesList() {
  const url = 'Сюда url'
  const params = 'Cюда парамс'
  const api = new ApiService(url, params)

  try {
    const list = await api.get()
    return list
  } catch(e) {
    alert(e)
  }
}