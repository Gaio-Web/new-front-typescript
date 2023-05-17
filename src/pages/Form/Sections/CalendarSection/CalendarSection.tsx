import React, { useState } from 'react';
import { InputMask, InputMaskChangeEvent } from 'primereact/inputmask';
import { Container } from './syles';
import SendButton1 from '../../../Products/Components/SendButton';

interface ICalendarProp {
  userID: string;
  mondayData: any;
  tuesdayData: any;
  wednesdayData: any;
  thursdayData: any;
  fridayData: any;
  saturdayData: any;
  sundayData: any;
}

function CalendarSection({userID, mondayData, tuesdayData, wednesdayData, thursdayData, fridayData, saturdayData, sundayData}: ICalendarProp): JSX.Element{
  //CALENDAR

  const [segunda, setSegunda] = useState('');
  const [terca, setTerca] = useState('');
  const [quarta, setQuarta] = useState('');
  const [quinta, setQuinta] = useState('');
  const [sexta, setSexta] = useState('');
  const [sabado, setSabado] = useState('');
  const [domingo, setDomingo] = useState('');

  const [disabledSeg, setDisabledSeg] = useState(false);
  const [disabledTer, setDisabledTer] = useState(false);
  const [disabledQuar, setDisabledQuar] = useState(false);
  const [disabledQuin, setDisabledQuin] = useState(false);
  const [disabledSex, setDisabledSex] = useState(false);
  const [disabledSab, setDisabledSab] = useState(false);
  const [disabledDom, setDisabledDom] = useState(false);

  const handleSendCalendar = async () => {
    const body = {
      phone: userID,
      segunda: segunda,
      terca: terca,
      quarta: quarta,
      quinta: quinta,
      sexta: sexta,
      sabado: sabado,
      domingo: domingo,
    };
    try {
      const response = await fetch(
        `${import.meta.env.VITE_MAIN_API_URL}/updateBusinessHours`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        }
      );
      const data = await response.json();

    } catch (error) {
      console.log(error);
    }
  };

  //SEGUNDA
  const segunda24Checked = segunda === '24 horas';
  const segundaFecChecked = segunda === 'Fechado';

  function handleSegunda(event: any) {
    setSegunda(event.target.value);
  }

  function handlesegundafec() {
    if (segunda === 'Fechado') {
      setSegunda('');
      setDisabledSeg(false);
    } else {
      setSegunda('Fechado');
      setDisabledSeg(true);
    }
  }

  function handlesegunda24() {
    if (segunda === '24 horas') {
      setSegunda('');
      setDisabledSeg(false);
    } else {
      setSegunda('24 horas');
      setDisabledSeg(true);
    }
  }

  function handleCheckboxChangeSeg(checkboxName: string) {
    if (checkboxName === 'segunda24') {
      handlesegunda24();
      setDisabledSeg(segundaFecChecked);
      console.log(segundaFecChecked);
    } else if (checkboxName === 'segundaFec') {
      handlesegundafec();
      setDisabledSeg(segunda24Checked);
      console.log(segunda);
    }
  }

  //TERCA
  const terca24Checked = terca === '24 horas';
  const tercaFecChecked = terca === 'Fechado';

  function handleTerca(event: any) {
    setTerca(event.target.value);
  }

  function handletercfec() {
    if (terca === 'Fechado') {
      setTerca('');
      setDisabledTer(false);
    } else {
      setTerca('Fechado');
      setDisabledTer(true);
    }
  }

  function handleterc24() {
    if (terca === '24 horas') {
      setTerca('');
      setDisabledTer(false);
    } else {
      setTerca('24 horas');
      setDisabledTer(true);
    }
  }

  function handleCheckboxChangeTer(checkboxName: string) {
    if (checkboxName === 'terca24') {
      handleterc24();
      setDisabledTer(tercaFecChecked);
      console.log(terca);
    } else if (checkboxName === 'tercaFec') {
      handletercfec();
      setDisabledTer(terca24Checked);
      console.log(terca);
    }
  }

  //QUARTA
  const quarta24Checked = quarta === '24 horas';
  const quartaFecChecked = quarta === 'Fechado';

  function handleQuarta(event: any) {
    setQuarta(event.target.value);
  }

  function handlequartafec() {
    if (quarta === 'Fechado') {
      setQuarta('');
      setDisabledQuar(false);
    } else {
      setQuarta('Fechado');
      setDisabledQuar(true);
    }
  }

  function handlequarta24() {
    if (quarta === '24 horas') {
      setQuarta('');
      setDisabledQuar(false);
    } else {
      setQuarta('24 horas');
      setDisabledQuar(true);
    }
  }

  function handleCheckboxChangeQuar(checkboxName: string) {
    if (checkboxName === 'quarta24') {
      handlequarta24();
      setDisabledQuar(quartaFecChecked);
      console.log(quarta);
    } else if (checkboxName === 'quartaFec') {
      handlequartafec();
      setDisabledQuar(quarta24Checked);
      console.log(quarta);
    }
  }

  //QUINTA
  const quinta24Checked = quinta === '24 horas';
  const quintaFecChecked = quinta === 'Fechado';

  function handleQuinta(event: any) {
    setQuinta(event.target.value);
  }

  function handlequintafec() {
    if (quinta === 'Fechado') {
      setQuinta('');
      setDisabledQuin(false);
    } else {
      setQuinta('Fechado');
      setDisabledQuin(true);
    }
  }

  function handlequinta24() {
    if (quinta === '24 horas') {
      setQuinta('');
      setDisabledQuin(false);
    } else {
      setQuinta('24 horas');
      setDisabledQuin(true);
    }
  }

  function handleCheckboxChangeQuin(checkboxName: string) {
    if (checkboxName === 'quinta24') {
      handlequinta24();
      setDisabledQuin(quintaFecChecked);
      console.log(quinta);
    } else if (checkboxName === 'quintaFec') {
      handlequintafec();
      setDisabledQuin(quinta24Checked);
      console.log(quinta);
    }
  }

  //SEXTA
  const sexta24Checked = sexta === '24 horas';
  const sextaFecChecked = sexta === 'Fechado';

  function handleSexta(event: any) {
    setSexta(event.target.value);
  }

  function handlesextafec() {
    if (sexta === 'Fechado') {
      setSexta('');
      setDisabledSex(false);
    } else {
      setSexta('Fechado');
      setDisabledSex(true);
    }
  }

  function handlesexta24() {
    if (sexta === '24 horas') {
      setSexta('');
      setDisabledSex(false);
    } else {
      setSexta('24 horas');
      setDisabledSex(true);
    }
  }

  function handleCheckboxChangeSex(checkboxName: string) {
    if (checkboxName === 'sexta24') {
      handlesexta24();
      setDisabledSex(sextaFecChecked);
      console.log(sexta);
    } else if (checkboxName === 'sextaFec') {
      handlesextafec();
      setDisabledSex(sexta24Checked);
      console.log(sexta);
    }
  }

  //SABADO
  const sabado24Checked = sabado === '24 horas';
  const sabadoFecChecked = sabado === 'Fechado';

  function handleSabado(event: any) {
    setSabado(event.target.value);
  }

  function handlesabadofec() {
    if (sabado === 'Fechado') {
      setSabado('');
      setDisabledSab(false);
    } else {
      setSabado('Fechado');
      setDisabledSab(true);
    }
  }

  function handlesabado24() {
    if (sabado === '24 horas') {
      setSabado('');
      setDisabledSab(false);
    } else {
      setSabado('24 horas');
      setDisabledSab(true);
    }
  }

  function handleCheckboxChangeSab(checkboxName: string) {
    if (checkboxName === 'sabado24') {
      handlesabado24();
      setDisabledSab(sabadoFecChecked);
      console.log(sabado);
    } else if (checkboxName === 'sabadoFec') {
      handlesabadofec();
      setDisabledSab(sabado24Checked);
      console.log(sabado);
    }
  }

  //DOMINGO
  const domingo24Checked = domingo === '24 horas';
  const domingoFecChecked = domingo === 'Fechado';

  function handleDomingo(event: any) {
    setDomingo(event.target.value);
  }

  function handledomingofec() {
    if (domingo === 'Fechado') {
      setDomingo('');
      setDisabledDom(false);
    } else {
      setDomingo('Fechado');
      setDisabledDom(true);
    }
  }

  function handledomingo24() {
    if (domingo === '24 horas') {
      setDomingo('');
      setDisabledDom(false);
    } else {
      setDomingo('24 horas');
      setDisabledDom(true);
    }
  }

  function handleCheckboxChangeDom(checkboxName: string) {
    if (checkboxName === 'domingo24') {
      handledomingo24();
      setDisabledDom(domingoFecChecked);
      console.log(domingo);
    } else if (checkboxName === 'domingoFec') {
      handledomingofec();
      setDisabledDom(domingo24Checked);
      console.log(domingo);
    }
  }

  return (
    <Container>
      <div className="sixth-wrapper">
        <h1>Horário de funcionamento</h1>

        <div className="table">
          <div className="line">
            <div
              className="working-hours-wrapper"
              style={{
                borderRadius: '10px 10px 0 0',
                backgroundColor: '#034aa6',
              }}
            >
              <h2>Horário de funcionamento</h2>
            </div>
            <div className="input-wrapper">
              <div className="title-value">
                <h2>24hrs</h2>
              </div>
              <div className="title-value">
                <h2>Fechado</h2>
              </div>
            </div>
          </div>

          <div className="line">
            <div className="working-hours-wrapper">
              <div
                className="value"
                style={{ borderRight: '1px solid gray' }}
              >
                <h3>Segunda feira:</h3>
              </div>
              <div className="value">
                <InputMask
                  mask={'99:99h ás 99:99h'}
                  placeholder="PREENCHER"
                  value={mondayData}
                  onChange={handleSegunda}
                  disabled={disabledSeg}
                  style={
                    disabledSeg === true
                      ? { color: '#FAFAFF' }
                      : { color: 'gray' }
                  }
                />
              </div>
            </div>

            <div className="input-wrapper">
              <div className="input-value">
                <div className={'checkbox-wrapper'}>
                  <input
                    type="checkbox"
                    className={'checkbox'}
                    checked={segunda24Checked}
                    onChange={() => handleCheckboxChangeSeg('segunda24')}
                  ></input>
                </div>
              </div>

              <div className="input-value">
                <div className={'checkbox-wrapper'}>
                  <input
                    type="checkbox"
                    className={'checkbox'}
                    checked={segundaFecChecked}
                    onChange={() => handleCheckboxChangeSeg('segundaFec')}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="line">
            <div className="working-hours-wrapper">
              <div
                className="value"
                style={{ borderRight: '1px solid gray' }}
              >
                <h3>Terça feira:</h3>
              </div>
              <div className="value">
                <InputMask
                  mask={'99:99h ás 99:99h'}
                  placeholder="PREENCHER"
                  value={tuesdayData}
                  onChange={handleTerca}
                  disabled={disabledTer}
                  style={
                    disabledTer === true
                      ? { color: '#FAFAFF' }
                      : { color: 'gray' }
                  }
                />
              </div>
            </div>

            <div className="input-wrapper">
              <div className="input-value">
                <div className={'checkbox-wrapper'}>
                  <input
                    type="checkbox"
                    className={'checkbox'}
                    checked={terca24Checked}
                    onChange={() => handleCheckboxChangeTer('terca24')}
                  ></input>
                </div>
              </div>

              <div className="input-value">
                <div className={'checkbox-wrapper'}>
                  <input
                    type="checkbox"
                    className={'checkbox'}
                    checked={tercaFecChecked}
                    onChange={() => handleCheckboxChangeTer('tercaFec')}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="line">
            <div className="working-hours-wrapper">
              <div
                className="value"
                style={{ borderRight: '1px solid gray' }}
              >
                <h3>Quarta feira:</h3>
              </div>
              <div className="value">
                <InputMask
                  mask={'99:99h ás 99:99h'}
                  placeholder="PREENCHER"
                  value={wednesdayData}
                  onChange={handleQuarta}
                  disabled={disabledQuar}
                  style={
                    disabledQuar === true
                      ? { color: '#FAFAFF' }
                      : { color: 'gray' }
                  }
                />
              </div>
            </div>

            <div className="input-wrapper">
              <div className="input-value">
                <div className={'checkbox-wrapper'}>
                  <input
                    type="checkbox"
                    className={'checkbox'}
                    checked={quarta24Checked}
                    onChange={() => handleCheckboxChangeQuar('quarta24')}
                  ></input>
                </div>
              </div>

              <div className="input-value">
                <div className={'checkbox-wrapper'}>
                  <input
                    type="checkbox"
                    className={'checkbox'}
                    checked={quartaFecChecked}
                    onChange={() => handleCheckboxChangeQuar('quartaFec')}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="line">
            <div className="working-hours-wrapper">
              <div
                className="value"
                style={{ borderRight: '1px solid gray' }}
              >
                <h3>Quinta feira:</h3>
              </div>
              <div className="value">
                <InputMask
                  mask={'99:99h ás 99:99h'}
                  placeholder="PREENCHER"
                  value={thursdayData}
                  onChange={handleQuinta}
                  disabled={disabledQuin}
                  style={
                    disabledQuin === true
                      ? { color: '#FAFAFF' }
                      : { color: 'gray' }
                  }
                />
              </div>
            </div>

            <div className="input-wrapper">
              <div className="input-value">
                <div className={'checkbox-wrapper'}>
                  <input
                    type="checkbox"
                    className={'checkbox'}
                    checked={quinta24Checked}
                    onChange={() => handleCheckboxChangeQuin('quinta24')}
                  ></input>
                </div>
              </div>

              <div className="input-value">
                <div className={'checkbox-wrapper'}>
                  <input
                    type="checkbox"
                    className={'checkbox'}
                    checked={quintaFecChecked}
                    onChange={() => handleCheckboxChangeQuin('quintaFec')}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="line">
            <div className="working-hours-wrapper">
              <div
                className="value"
                style={{ borderRight: '1px solid gray' }}
              >
                <h3>Sexta feira:</h3>
              </div>
              <div className="value">
                <InputMask
                  mask={'99:99h ás 99:99h'}
                  placeholder="PREENCHER"
                  value={fridayData}
                  onChange={handleSexta}
                  disabled={disabledSex}
                  style={
                    disabledSex === true
                      ? { color: '#FAFAFF' }
                      : { color: 'gray' }
                  }
                />
              </div>
            </div>

            <div className="input-wrapper">
              <div className="input-value">
                <div className={'checkbox-wrapper'}>
                  <input
                    type="checkbox"
                    className={'checkbox'}
                    checked={sexta24Checked}
                    onChange={() => handleCheckboxChangeSex('sexta24')}
                  ></input>
                </div>
              </div>

              <div className="input-value">
                <div className={'checkbox-wrapper'}>
                  <input
                    type="checkbox"
                    className={'checkbox'}
                    checked={sextaFecChecked}
                    onChange={() => handleCheckboxChangeSex('sextaFec')}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="line">
            <div className="working-hours-wrapper">
              <div
                className="value"
                style={{ borderRight: '1px solid gray' }}
              >
                <h3>Sabado:</h3>
              </div>
              <div className="value">
                <InputMask
                  mask={'99:99h ás 99:99h'}
                  placeholder="PREENCHER"
                  value={saturdayData}
                  onChange={handleSabado}
                  disabled={disabledSab}
                  style={
                    disabledSab === true
                      ? { color: '#FAFAFF' }
                      : { color: 'gray' }
                  }
                />
              </div>
            </div>

            <div className="input-wrapper">
              <div className="input-value">
                <div className={'checkbox-wrapper'}>
                  <input
                    type="checkbox"
                    className={'checkbox'}
                    checked={sabado24Checked}
                    onChange={() => handleCheckboxChangeSab('sabado24')}
                  ></input>
                </div>
              </div>

              <div className="input-value">
                <div className={'checkbox-wrapper'}>
                  <input
                    type="checkbox"
                    className={'checkbox'}
                    checked={sabadoFecChecked}
                    onChange={() => handleCheckboxChangeSab('sabadoFec')}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="line">
            <div
              className="working-hours-wrapper"
              style={{ borderRadius: '0 0 10px 10px' }}
            >
              <div
                className="value"
                style={{
                  borderRadius: '0 0 0 10px',
                  borderRight: '1px solid gray',
                  borderBottom: '0',
                }}
              >
                <h3>Domingo:</h3>
              </div>
              <div
                className="value"
                style={{ borderRadius: '0 0 10px 0', borderBottom: '0' }}
              >
                <InputMask
                  mask={'99:99h ás 99:99h'}
                  placeholder="PREENCHER"
                  value={sundayData}
                  onChange={handleDomingo}
                  disabled={disabledDom}
                  style={
                    disabledDom === true
                      ? { color: '#FAFAFF', borderRadius: '0 0 10px 0' }
                      : { color: 'gray', borderRadius: '0 0 10px 0' }
                  }
                />
              </div>
            </div>

            <div className="input-wrapper">
              <div className="input-value">
                <div className={'checkbox-wrapper'}>
                  <input
                    type="checkbox"
                    className={'checkbox'}
                    checked={domingo24Checked}
                    onChange={() => handleCheckboxChangeDom('domingo24')}
                  ></input>
                </div>
              </div>

              <div className="input-value">
                <div className={'checkbox-wrapper'}>
                  <input
                    type="checkbox"
                    className={'checkbox'}
                    checked={domingoFecChecked}
                    onChange={() => handleCheckboxChangeDom('domingoFec')}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <SendButton1 submit={handleSendCalendar} />
      </div>
    </Container>
  );
}

export { CalendarSection };
