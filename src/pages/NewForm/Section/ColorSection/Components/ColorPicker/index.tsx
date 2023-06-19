import React, { useState} from "react";

import {
  ColorOption, ColorPicker,
} from './styles'

// interface IColorPickerProps {
//   main?: string;
//   second?: string;
//   accent?: string;
// }


function ColorPickerComponent(): JSX.Element {
  const [mainColor, setMainColor] = useState<string>('#034AA3');
  const [secondaryColor, setSecondaryColor] = useState<string>('#034AA3');
  const [accentColor, setAccentColor] = useState<string>('#034AA3');

  const [options, setoptions] = useState([
    { mainColor: '#013759', secondaryColor: '#378DBD', accentColor:'#EBF2F3', title: 'Mar Profundo' },
    { mainColor: '#F4972B', secondaryColor: '#264653', accentColor:'#2A9D8F', title: 'Laranja' },
    { mainColor: '#FD3997', secondaryColor: '#383961', accentColor:'#5F758E', title: 'Rosa' },
    { mainColor: '#5E8B7E', secondaryColor: '#9F7E69', accentColor:'#003459', title: 'Verde' },
    { mainColor: '#00ADB5', secondaryColor: '#1B4965', accentColor:'#B49A67', title: 'Azul' },
    { mainColor: '#6868AC', secondaryColor: '#C17767', accentColor:'#23967F', title: 'Lilás' },
    { mainColor: '#6B0BE6', secondaryColor: '#453823', accentColor:'#39A2AE', title: 'Roxo' },
    { mainColor: '#00000', secondaryColor: '#8D775F', accentColor:'#A71D31', title: 'Preto' },
    { mainColor: '#B4A5A5', secondaryColor: '#5B5941', accentColor:'#3E6990', title: 'Areia' },
    { mainColor: '#D80C0C', secondaryColor: '#390040', accentColor:'#730071', title: 'Vermelho' },
    { mainColor: '#25D8A7', secondaryColor: '#696D7D', accentColor:'#19381F', title: 'Turquesa' },
    { mainColor: '#6D6D6D', secondaryColor: '#2DC7FF', accentColor:'#0A369D', title: 'Cinza' },
]);

  const handleColorChange = (main: string, secondary: string, accent: string) => {
    setMainColor(main);
    setSecondaryColor(secondary);
    setAccentColor(accent);
  };

  return (
    <>
    <ColorPicker style={{ backgroundColor: mainColor }}>
        <div className="options">
            {options.map((opt) => (
                <div
                    className={mainColor  === opt.mainColor ? 'selected' : 'non-selected'}
                    onClick={() => {
                        if (opt.mainColor !== undefined && opt.secondaryColor !== undefined && opt.accentColor !== undefined) {
                            setMainColor(opt.mainColor);
                            setSecondaryColor(opt.secondaryColor);
                            setAccentColor(opt.accentColor);
                        }
                    }}
                >
                    <ColorOption>
                        <div className='mainColor' style={{ backgroundColor: opt.mainColor }}></div>
                        <div className='secondaryColor' style={{ backgroundColor: opt.secondaryColor }}></div>
                        <div className='accentColor' style={{ backgroundColor: opt.accentColor }}></div>
                    </ColorOption>
                    <h1>{opt.title}</h1>
                </div>
            ))}
        </div>

        { secondaryColor == '#034AA3' ? (
            <></>
        ) : (
            <div className='colorDemonstration'>
                <div className='demonstrationWrapper'>
                    <div className='exampleSecondary' style={{ backgroundColor: secondaryColor }}></div>
                    <h4>Cor secundária</h4>
                </div>

                <div className='demonstrationWrapper'>
                    <div className='exampleAccent' style={{ backgroundColor: accentColor }}></div>
                    <h4>Cor de destaque</h4>
              </div>
            </div>
        )}
    </ColorPicker>
</>
  )
}

export { ColorPickerComponent }
