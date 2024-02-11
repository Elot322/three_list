import { getServicesList } from "../services/get-services-list.js";
import { sortServicesList } from "../utils/sort-services-list.js";

export async function serviceResponseToListModel() {
  const responseList = (await getServicesList()).services
  return sortServicesList(responseList)
}