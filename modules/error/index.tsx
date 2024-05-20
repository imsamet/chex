import Link from 'next/link';

type Props = {
  type: '404' | '500';
};
const Error: React.FC<Props> = ({ type }) => {
  return (
    <section className="min-h-screen">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center">
          <span>{type}</span>
          <h1 className="">Error</h1>
          <h2 className="">Consectetur sit proident occaecat qui ipsum esse fugiat esse non.</h2>
          <Link href="/" passHref legacyBehavior>
            Anasayfa
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Error;
