import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../Hooks/useFetch';
import { GET_PHOTO } from '../../api';
import Error from '../../Helper/Error';
import Loading from '../../Helper/Loading';
import PhotoContent from './PhotoContent';
import Head from '../../Helper/Head';

function Photo() {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = GET_PHOTO(id);
    request(url, options);
  }, [request, id]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <section className="container mainContainer">
        <Head title={data.photo.title} description="Página da foto do cachorro." />
        <PhotoContent single={true} data={data} />
      </section>
    );
  else return null;
}

export default Photo;
