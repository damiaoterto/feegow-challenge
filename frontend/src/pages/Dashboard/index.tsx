import React, { useState, useEffect, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import feegowLogo from '../../assets/logo-feegow-site-1.png';
import defaultProfile from '../../assets/default-profile.jpg';

import { Title, Form, Repositories } from './styles';
import { Professional, Specialties } from './interfaces';

const Dashboard: React.FC = () => {
  const [professionals, setProfessionals] = useState<Professional[]>([]);
  const [specialties, setSpecialties] = useState<Specialties[]>([]);
  const [specialtieId, setSpecialtieId] = useState<number | string>(263);

  useEffect(() => {
    (async () => {
      const response = await api.get<Specialties[]>(
        'services/specialties/list',
      );

      setSpecialties(response.data);
    })();
  }, []);

  const handleGetProfessionals = async (
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();

    const response = await api.get<Professional[]>(
      `services/professional/list?especialidade_id=${specialtieId}`,
    );

    setProfessionals(response.data);
  };

  return (
    <>
      <img src={feegowLogo} alt="Feegow Challenge" />
      <Title>Agende suas consultas com rapidez</Title>
      <Form hasError={false} onSubmit={handleGetProfessionals}>
        <select
          value={specialtieId}
          onChange={(e) => setSpecialtieId(e.target.value)}
        >
          {specialties.map((special) => (
            <option
              value={special.especialidade_id}
              key={special.especialidade_id}
            >
              {special.nome}
            </option>
          ))}
        </select>
        <button type="submit">Buscar</button>
      </Form>

      <Repositories>
        {professionals.map((professional) => (
          <Link
            key={professional.profissional_id}
            to={`/appointment/${professional.profissional_id}/${specialtieId}`}
          >
            <img src={professional.foto ?? defaultProfile} alt="Profile" />
            <div>
              <strong>{professional.nome}</strong>
              <p>
                {professional.conselho ?? ''}{' '}
                {professional.documento_conselho ?? ''}
              </p>
            </div>
            <FiChevronRight size={20} />
          </Link>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
