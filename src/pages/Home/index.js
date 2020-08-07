import React, { useCallback, useState, useRef } from 'react';
import { Form } from '@unform/web';
import { isBefore, parseISO } from 'date-fns';
import * as Yup from 'yup';
import yahooFinance from 'yahoo-finance';
import { toast } from 'react-toastify';
import logo from '../../assets/logo.png';
import getValidationErrors from '../../utils/getValitationErors';
import List from '../../components/List';
import Input from '../../components/Input';
import Loading from '../../components/Loading';
import { Container } from './styles';

function Home() {
  const [quotesData, setQuotesData] = useState([]);
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(async (data) => {
    // const dateFormatted = formatISO(parseISO(data.to));
    // console.log(dateFormatted);
    try {
      setLoading(true);
      formRef.current.setErrors({});

      const dateIsBefore = isBefore(parseISO(data.to), parseISO(data.from));

      if (dateIsBefore) {
        toast.error('A data de início deve ser anterior à data de término.');
        setLoading(false);
        return;
      }

      const schema = Yup.object().shape({
        symbol: Yup.string().required('Precisamos que informe Symbol'),
        from: Yup.string().required('Precisamos que informe Date start'),
        to: Yup.string().required('Precisamos que informe Date end'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const quotes = await yahooFinance.historical({
        symbol: data.symbol,
        from: data.from,
        to: data.to,
      });

      setQuotesData(quotes);

      setLoading(false);
    }catch(err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current.setErrors(errors);
        setLoading(false);
        return;
      }
      toast.error('Erro ao buscar dados, tente novamente');
      setLoading(false);
    }
  },[]);

  return (
    <>
      <Container className="container">
        <img src={logo} alt="Yahoo Finances" />
        <h3>Cotações de ações gratuitas</h3>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input type="text"  name="symbol" placeholder="Symbol" />
          <Input type="text" name="from" placeholder="Data start (aaaa-mm-dd)" />
          <Input type="text" name="to" placeholder="Data end (aaaa-mm-dd)" />
          <button type="submit">{loading ? 'Carregando...' : 'Procurar'}</button>
        </Form>
      </Container>
      {loading && <Loading />}
      {quotesData.length > 0
        && (
          <List quotes={quotesData} />
        )
      }
    </>
  );
}

export default Home;
