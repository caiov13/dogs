import React from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import Error from '../../Helper/Error';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import { PASSWORD_LOST } from '../../api';

function LoginPasswordLost() {
  const login = useForm();
  const { data, loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({ login: login.value, url: window.location.href.replace('perdeu', 'resetar') });
      const { json } = await request(url, options);
    }
  }

  return (
    <section>
      <h1 className="title">Perdeu a senha?</h1>
      {data ? (
        <p style={{ color: '#4c1' }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="E-mail / Usuário" type="text" name="login" {...login} />
          {loading ? <Button>Eviando...</Button> : <Button>Enviar E-mail</Button>}
        </form>
      )}

      <Error error={error} />
    </section>
  );
}

export default LoginPasswordLost;
