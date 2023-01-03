import { useRef } from 'react';
import styled from 'styled-components';
import { downloadImage } from 'utils/downloadImage';
import Head from 'next/head';
import MainLayout from 'layouts/Main';
import { useLogo } from 'contexts/LogoProvider';
import { getDirection, getFlexDirection } from 'utils/layout';
import * as icons from '@styled-icons/material';
import Button from '@uitoolkit/Button';
import Box from '@uitoolkit/Box';
import TextResize from '@icons/components/TextResize';

const StyledLogoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 0 50px 10px rgba(0, 0, 0, 0.05);
`;

const Home = () => {
  const [logo] = useLogo();
  const Icon = icons[logo.iconId];
  const htmlDivElementRef = useRef();
  const handleDownload = () => {
    downloadImage(htmlDivElementRef.current);
  };
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StyledLogoBox ref={htmlDivElementRef} style={{ backgroundColor: logo.backgroundColor }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: logo.gap,
            direction: getDirection(logo.layout),
            flexDirection: getFlexDirection(logo.layout),
            padding: logo.padding,
          }}
        >
          <Icon color={logo.iconColor} size={logo.iconSize} />
          <div
            className={logo.fontFamily}
            style={{
              color: logo.color,
              fontSize: logo.fontSize,
              letterSpacing: logo.letterSpacing,
              fontWeight: logo.fontWeight,
            }}
          >
            {logo.text}
          </div>
        </div>
      </StyledLogoBox>
      <Box mt={4} textAlign="center">
        <Button
          variant="contained"
          color="secondary"
          size="large"
          onClick={handleDownload}
          startIcon={<TextResize />}
        >
          Download
        </Button>
      </Box>
    </>
  );
};

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default Home;
