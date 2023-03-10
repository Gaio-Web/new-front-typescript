
import { CalendarStyles } from './styles'

interface ICalendar {
    //horário funcionamento
    segunda: string | null;
    terca: string;
    quarta: string;
    quinta: string;
    sexta: string;
    sabado: string;
    domingo: string;
}


function Calendar({segunda, terca, quarta, quinta, sexta, sabado, domingo}: ICalendar){
    return(

        <CalendarStyles>
        <div className='sixth-wrapper'>
                    <h1 >Horário de funcionamento</h1>

                    <div className='table'>
                    <div className='header'>
                       <h2>Horário de funcionamento</h2>
                    </div>

                    <div className='line'>
                        <div className='value' style={{ borderRight: '1px solid #000' }}>
                            <h1>
                                Segunda feira:
                            </h1>
                        </div>
                        <div className='value'>
                            <h3>{segunda}</h3>
                        </div>
                    </div>

                    <div className='line'>
                        <div className='value' style={{ borderRight: '1px solid #000' }}>
                            <h1> Terça feira:</h1>
                        </div>
                        <div className='value'>
                            <h3>{terca}</h3>
                        </div>
                    </div>

                    <div className='line'>
                        <div className='value' style={{ borderRight: '1px solid #000' }}>
                            <h1>
                                Quarta feira:
                            </h1>
                        </div>
                        <div className='value'>
                            <h3>{quarta}</h3>
                        </div>
                    </div>

                    <div className='line'>
                        <div className='value' style={{ borderRight: '1px solid #000' }}>
                            <h1>
                            Quinta feira:
                            </h1>
                        </div>
                        <div className='value'>
                            <h3>{quinta}</h3>
                        </div>
                    </div>

                    <div className='line'>
                        <div className='value' style={{ borderRight: '1px solid #000' }}>
                            <h1>
                            Sexta feira:
                            </h1>
                        </div>
                        <div className='value'>
                            <h3>{sexta}</h3>
                        </div>
                    </div>

                    <div className='line'>
                        <div className='value' style={{ borderRight: '1px solid #000' }}>
                            <h1>
                            Sábado:
                            </h1>
                        </div>
                        <div className='value'>
                            <h3>{sabado}</h3>
                        </div>
                    </div>

                    <div className='line'>
                        <div className='value' style={{ borderRight: '1px solid #000' }}>
                            <h1>
                            Domingo:
                            </h1>
                        </div>
                        <div className='value'>
                            <h3>{domingo}</h3>
                        </div>
                        </div>
                    </div>
                </div>
        </CalendarStyles>
    )
}

export { Calendar };