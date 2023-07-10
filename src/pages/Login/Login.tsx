import React, { useContext, useState } from 'react';
import { Container, LoginContainer } from './styles';
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import axios from 'axios';
import AuthContext from '../../context/AuthContext';

function Login(): JSX.Element {
    const { login } = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };


    const handleLogin = async (event: any) => {
        event.preventDefault();
        console.log('hue: ', username);
        console.log('hue: ', password);
        // try {
        //     const response = await axios.post('/api/login', { username, password });
        //     login();
        // } catch (error) {
        //     console.error('Erro ao fazer login:', error);
        // }
    };

    return (
        <Container onSubmit={handleLogin}>
            <LoginContainer>
                <TextField
                    id="outlined-basic"
                    label="Login"
                    variant="outlined"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                />
                {/* <TextField id="outlined-basic" label="Senha" variant="outlined" type='password'/> */}

                <FormControl sx={{ width: '100%' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="alternar a visibilidade da senha"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                    />
                </FormControl>

                <p>Esqueceu a senha?</p>

                <Button
                    variant="contained"
                    sx={{ width: '100%'}}
                    type='submit'
                >
                      Acessar
                </Button>
            </LoginContainer>
        </Container>
    );
}

export { Login };
