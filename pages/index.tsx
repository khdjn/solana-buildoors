import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Box, Center, Spacer, Stack } from "@chakra-ui/react";
import NavBar from "../components/NavBar"
import Disconnected from "../components/Disconnected";
import Connected from "../components/Connected";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";

const Home: NextPage = () => {
  const {connected } = useWallet()
  return (
    <div className={styles.container}>
      <Head>
        <title>Buildoors</title>
        <meta name="The NFT Collection for Buildoors" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        w="full"
        h="calc(100vh)"
        bgImage={connected ? "" : "url(/home-background.svg)"}
        backgroundPosition="center"
      >
        <Stack w="full" h="calc(100vh)" justify="center">
          <NavBar />
      
          <Spacer>

          <Center>
            
            {connected ? <Connected /> : <Disconnected />}
          
          </Center>
          </Spacer>


        </Stack>
      </Box>
    </div>
  );
};

export default Home;
