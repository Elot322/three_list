import { responseToListModel } from './adapters/response-to-list-model'

export type ListType = Awaited<ReturnType<typeof responseToListModel>>