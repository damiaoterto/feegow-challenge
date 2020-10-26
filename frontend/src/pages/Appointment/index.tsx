import React, { useEffect, useState, FormEvent } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronsLeft, FiCheckCircle, FiAlertTriangle } from 'react-icons/fi';
import api from '../../services/api';

import { Header, Form, Success, Error } from './styles';
import { Source, RouteParams } from './interfaces';

import feegowLogo from '../../assets/logo-feegow-site-1.png';

const Repository: React.FC = () => {
  const [success, setSuccess] = useState('');
  const [formError, setFormError] = useState('');

  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [sourceId, setSourceId] = useState<number | string>('n');
  const [sources, setSources] = useState<Source[]>([]);
  const [birthdate, setBirthdate] = useState('');

  const { params } = useRouteMatch<RouteParams>();

  useEffect(() => {
    (async () => {
      const response = await api.get<Source[]>('services/sources/list');

      setSources(response.data);
    })();
  }, []);

  const handleSubmitForm = async (
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();

    try {
      await api.post('appointments', {
        name,
        cpf,
        professional_id: params.professional,
        specialty_id: params.specialty,
        date_time: new Date(),
        birthdate,
        source_id: sourceId,
      });

      setSuccess('Agendamento criado com sucesso');

      setName('');
      setCpf('');
      setBirthdate('');
    } catch (error) {
      setFormError('Erro ao enviar o formulário');
    }
  };

  return (
    <>
      <Header>
        <img src={feegowLogo} alt="Github Explorer" />
        <Link to="/">
          <FiChevronsLeft size={16} /> Voltar
        </Link>
      </Header>

      <Form onSubmit={handleSubmitForm}>
        {success && (
          <Success>
            <FiCheckCircle size={25} />
            {success}
          </Success>
        )}

        {formError && (
          <Error>
            <FiAlertTriangle size={25} />
            {formError}
          </Error>
        )}

        <div>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Nome Completo"
            required
          />
          <select
            required
            value={sourceId}
            onChange={(e) => setSourceId(e.target.value)}
          >
            <option value="n">Como nos conheceu ?</option>
            {sources.map((source) => (
              <option key={source.origem_id} value={source.origem_id}>
                {source.nome_origem}
              </option>
            ))}
          </select>
        </div>

        <div>
          <input
            required
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
            type="date"
            placeholder="Data de Nascimento"
          />
          <input
            required
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            inputMode="numeric"
            pattern="[0-9]*"
            type="number"
            placeholder="CPF"
          />
        </div>

        <button type="submit">Agendar</button>
      </Form>
    </>
  );
};

export default Repository;
