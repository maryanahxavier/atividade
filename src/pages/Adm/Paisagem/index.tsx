import React from "react";
import { useCallback, useEffect, useState } from "react";
import { ButtonComponent } from "components";
import * as S from "./styles";
import { apiPaisagem } from "services/data";
import { IPaisagemData } from "interfaces/Paisagem.interface";
import { LoadingComponent } from "components";
import { FcAddDatabase } from "react-icons/fc";
import { BsPencilSquare, BsTrash2 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import { toast } from "react-toastify";

const AdmPaisagem = () => {
  const [messages, setPaisagems] = useState<IPaisagemData[]>();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const fetchData = useCallback(async () => {
    const response = await apiPaisagem.index();
    setPaisagems(response.data);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleDelete = useCallback(
    async (id: number) => {
      confirmAlert({
        title: "Atenção",
        message: "Tem certeza que deseja apagar o item selecionado?",
        buttons: [
          {
            label: "SIM",
            onClick: async () => {
              setIsLoading(true);
              await apiPaisagem.destroy(id);
              toast.success("Mensagem removida com sucesso!");
              fetchData();
            },
          },
          {
            label: "Não",
            onClick: () => console.log("não"),
          },
        ],
      });
    },
    [fetchData]
  );

  return (
    <>
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <>
          <S.Main>
            <div>
              <ButtonComponent
                bgColor="add"
                type="button"
                onClick={() => navigate("/adm/message/0")}
              >
                <FcAddDatabase />
              </ButtonComponent>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Título</th>
                  <th>Mensagem</th>
                  <th>Editar</th>
                  <th>Remover</th>
                </tr>
              </thead>
              <tbody>
                {messages &&
                  messages.map((item) => (
                    <tr key={item.id}>
                      <td>{item.foto}</td>
                      <td>{item.nome}</td>
                      <td>{item.local}</td>
                      <td>{item.}</td>
                      <td>
                        <ButtonComponent
                          type="button"
                          bgColor="edit"
                          onClick={() => navigate(`/adm/message/${item.id}`)}
                        >
                          <BsPencilSquare />
                        </ButtonComponent>
                      </td>
                      <td>
                        <ButtonComponent
                          type="button"
                          bgColor="remove"
                          onClick={() => item.id && handleDelete(item.id)}
                        >
                          <BsTrash2 />
                        </ButtonComponent>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </S.Main>
        </>
      )}
    </>
  );
};

export default AdmPaisagem;