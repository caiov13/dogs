import Head from '../Helper/Head';
import Feed from './Feed/Feed';

function Home() {
  return (
    <section className="container mainContainer">
      <Head title="Fotos" description="Home do site Dogs, com o feed de fotos." />
      <Feed />
    </section>
  );
}

export default Home;
