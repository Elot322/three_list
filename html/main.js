import { serviceResponseToListModel } from "./src/adapters/services-response-to-list-model.js";
import List from "./src/components/list.js";
serviceResponseToListModel().then((value) => {
  const list = new List(value)
  list.create()
})
