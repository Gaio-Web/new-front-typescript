/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import { CalendarStyles } from './styles';

interface ICalendar {
  //horário funcionamento
  segunda: string | null;
  terca: string;
  quarta: string;
  quinta: string;
  sexta: string;
  sabado: string;
  domingo: string;
  secondaryColor: string;
  accentColor: string;
  isAutonomous: string;
}

interface Contact {
  mainColor: string;
  secondaryColor: string;
  accentColor: string;
  isAutonomous: string;
  businessName: string;
  phone: string;
  id: string;
}

interface Props {
  phone: string;
}

function Calendar({
  segunda,
  terca,
  quarta,
  quinta,
  sexta,
  sabado,
  domingo,
  accentColor,
  secondaryColor,
  isAutonomous,
}: ICalendar) {
  const { id } = useParams();

  const [data, setData] = useState<Contact | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const uniqueName = id!.replace(/\s+/g, '-');

  document.title = uniqueName;

  const converted = id;

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await axios.get<Contact>(
          `${
            import.meta.env.VITE_MAIN_API_URL
          }/findByConvertedName/${converted}`
        );
        setData(response.data);
      } catch (error) {
        console.log('erro');
      } finally {
        setLoading(false);
      }
    }

    fetchData()
      .then(() => console.log('Data fetched successfully!'))
      .catch((error) => console.log('error'));
  }, []);

  return (
    <CalendarStyles>
      <div className="sixth-wrapper">
        <div className="table">
          <div className="header" style={{ backgroundColor: accentColor }}>
            {isAutonomous == '1' ? (
              <h2 style={{ color: secondaryColor }}>Horário de atendimento</h2>
            ) : (
              <h2 style={{ color: secondaryColor }}>
                Horário de funcionamento
              </h2>
            )}
          </div>

          <div className="line">
            <div className="value" style={{ borderRight: '1px solid #000' }}>
              <h1>Segunda feira:</h1>
            </div>
            <div className="value">
              <h3>{segunda}</h3>
            </div>
          </div>

          <div className="line">
            <div className="value" style={{ borderRight: '1px solid #000' }}>
              <h1> Terça feira:</h1>
            </div>
            <div className="value">
              <h3>{terca}</h3>
            </div>
          </div>

          <div className="line">
            <div className="value" style={{ borderRight: '1px solid #000' }}>
              <h1>Quarta feira:</h1>
            </div>
            <div className="value">
              <h3>{quarta}</h3>
            </div>
          </div>

          <div className="line">
            <div className="value" style={{ borderRight: '1px solid #000' }}>
              <h1>Quinta feira:</h1>
            </div>
            <div className="value">
              <h3>{quinta}</h3>
            </div>
          </div>

          <div className="line">
            <div className="value" style={{ borderRight: '1px solid #000' }}>
              <h1>Sexta feira:</h1>
            </div>
            <div className="value">
              <h3>{sexta}</h3>
            </div>
          </div>

          <div className="line">
            <div className="value" style={{ borderRight: '1px solid #000' }}>
              <h1>Sábado:</h1>
            </div>
            <div className="value">
              <h3>{sabado}</h3>
            </div>
          </div>

          <div className="line">
            <div className="value" style={{ borderRight: '1px solid #000' }}>
              <h1>Domingo:</h1>
            </div>
            <div className="value">
              <h3>{domingo}</h3>
            </div>
          </div>
        </div>
      </div>
    </CalendarStyles>
  );
}

export { Calendar };
