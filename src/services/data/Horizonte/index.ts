import { IHorizonteData, IhorizonteForm } from "interfaces/HorizonteData.interface";
import api from "services/api";

class MessageData {
  index() {
    return api.get<I/HorizonteData[]>('/messages')
  }
  store(data: IhorizonteForm) {
    return api.post(`/messages`, data)
  }
  show(id: number) {
    return api.get<IHorizonteData>(`/messages/${id}`)
  }
  update(id: number, data: IHorizonteForm) {
    return api.put(`/messages/${id}`, data)
  }
  destroy(id: number) {
    return api.delete(`/messages/${id}`)
  }
}

export default new HorizonteData()