import React, { FormEvent, useEffect, useState } from "react";
import * as S from "./styles";
import { LoadingComponent, ButtonComponent } from "components";
import { FcDatabase, FcUndo } from "react-icons/fc";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { IPaisagemForm } from "interfaces/Paisagem.interface";
import { IErrorResponse } from "interfaces/user.interface";
import { apiPaisagem } from "services/data";


const PaisagemStore = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const [formData, setFormData] = useState<IPaisagemForm>({
    foto: '',
    nome: '',
    local:'',
    
  })
  const { id } = useParams<{ id: string }>();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    try {
      if (Number(id) > 0) {
        await apiPaisagem.update(Number(id), formData);
        toast.success("Foto alterada com sucesso!");
      } else {
        await apiPaisagem.store(formData);
        toast.success("Foto adicionada com sucesso!");
      }
      navigate('/adm/message')
    } catch (error) {
      const err = error as AxiosError<IErrorResponse>
      let messages = err.response?.data.message
      if (err.response?.data.errors) {
        messages = err.response?.data.errors?.map((i) => i.message)
          .reduce((total, cur) => `${total} ${cur}`)
      }
      toast.error(messages)
    }
  }

  async function handleChange(e: IPaisagemForm) {
    setFormData((state: IPaisagemForm) => ({ ...state, ...e }))
  }


  useEffect(() => {
    const loadTopics = async () => {
      try {
      
      } catch (error) {
        console.log(error);
      }
    }
    if (Number(id) > 0) {
      const fetchData = async (id: number) => {
        try {
          const response = await apiPaisagem.show(id);
          setFormData({
            ...response.data,
            
          });
        } catch (error) {
          console.log(error);
        }
      };
      fetchData(Number(id));
    }
    loadTopics()
    setIsLoading(false);
  }, [id]);

  return (
    <>
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <>
          <S.Main>
            <form method="POST" onSubmit={handleSubmit}>
              <Link to="/adm/message">
                <FcUndo /> Voltar
              </Link>
              <div>
                <label htmlFor="local">Local: </label>
                <input type="text" id="local" placeholder="Adicione o local da sua foto" required
                  onChange={(e) => handleChange({ local: e.target.value })}
                  value={formData?.local}
                />
              </div>
              <div>
                <label htmlFor="foto">Foto: </label>
                <textarea id="foto" placeholder="coloque o link da sua foto " required
                  onChange={(e) => handleChange({ foto: e.target.value })}
                  value={formData?.foto}
                />
                <div>
                 <label htmlFor="nome">Nome: </label>
                 <input type="text" id="nome" placeholder="informe o seu nome" required
                  onChange={(e) => handleChange({  nome: e.target.value })}
                  value={formData?.nome}
                />
              </div>
              </div>
              <ButtonComponent bgColor="add" type="submit">
                Enviar <FcDatabase />
              </ButtonComponent>
            </form>
          </S.Main>
        </>
      )}
    </>
  );
};

export default PaisagemStore;