import type { AppProps } from "next/app";
import {
  localWallet,
  smartWallet,
  ThirdwebProvider,
} from "@thirdweb-dev/react";
import "../styles/globals.css";

const activeChain = "goerli";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      activeChain={activeChain}
      supportedWallets={[
        smartWallet({
          factoryAddress: "0xB483bbAB8642Ccf508B002F46558d2b2559Bdb2c", // Address of your account factory smart contract
          thirdwebApiKey:
            "9fe198e23b3fd5c752c22dec8f392a9b2a79739e8e47c93aefb5840b1b4bbfc3ead228d1e0225fea031329b4f2e8dd58f7540bd0f440f09c33571753955d1033",  // Your thirdweb API key
          gasless: true,
          personalWallets: [
            localWallet({
              persist: true,
            }),
          ],
        }),
      ]}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;