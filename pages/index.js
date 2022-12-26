import Head from 'next/head';
import MainLayout from 'layouts/Main';
import { useLogo } from 'contexts/LogoProvider';
import * as icons from 'components/icons';

const Home = () => {
  const [logo] = useLogo();
  const Icon = icons[logo.iconId];
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ backgroundColor: logo.backgroundColor, height: '100%', width: '100%' }}>
        <div>
          <div>
            <div
              className={logo.fontFamily}
              style={{ color: logo.color, fontSize: `${logo.fontSize}px` }}
            >
              {logo.text}
            </div>
            <Icon />
            <pre>
              <code>{JSON.stringify(logo, null, 6)}</code>
            </pre>
          </div>
        </div>
      </main>
    </>
  );
};

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default Home;
