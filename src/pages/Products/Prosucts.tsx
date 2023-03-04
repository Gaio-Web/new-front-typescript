import React, {useState, useEffect} from 'react';
import axios from 'axios';

interface Contact {
    name: string;
    phone: string;
}

interface Props {
    phone: string;
}

function FindByPhone({phone}: Props): JSX.Element {
    const [data, setData] = useState<Contact | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            try {
                const response = await axios.get<Contact>(
                    `https://gaio-web-new-api-test.onrender.com/findByPhone/${phone}`
                );
                setData(response.data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        fetchData().then(() => console.log("Data fetched successfully!")).catch((error) => console.error(error));
    }, [phone]);


    if (loading) {
        return <p>Carregando...</p>;
    }

    if (!data) {
        return <p>Registro não encontrado</p>;
    }

    return (
            <div>
                <p>Nome: {data.name}</p>
                {/*<p>Telefone: {data.phone}</p>*/}
            </div>
    );
}

export default FindByPhone;
