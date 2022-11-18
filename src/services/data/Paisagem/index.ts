import { IPaisagemData, IPaisagemForm } from "interfaces/Paisagem.interface";
import api from "services/api";

class PaisagemData {
  index() {
    return api.get<IPaisagemData[]>('/paisagem')
  }
  store(data: IPaisagemForm) {
    return api.post(`/paisagem`, data)
  }
  show(id: number) {
    return api.get<IPaisagemData>(`/paisagem/${id}`)
  }
  update(id: number, data: IPaisagemForm) {
    return api.put(`/paisagem/${id}`, data)
  }
  destroy(id: number) {
    return api.delete(`/paisagem/${id}`)
  }
}

export default new PaisagemData()