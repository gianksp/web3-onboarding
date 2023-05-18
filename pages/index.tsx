import { Web3Button } from "@thirdweb-dev/react";
import type { NextPage } from "next";

const contractAddress = "0x343Bf79208113c528349D5A408B25D85d88B6450"

const Home: NextPage = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "50vw",
        height: "75vh",
      }}
    >
      <Web3Button
        contractAddress={contractAddress}
        action={(contract) => contract.erc721.claim(1)}
        onSuccess={(tx) => {
          alert("Claimed! close this to view your transaction");
          console.log(tx);
          const receipt = tx[0].receipt;
          const hash = receipt.transactionHash;
          const id = tx[0].id.toNumber();
          // Open link to transaction
          window.open(`https://goerli.etherscan.io/tx/${hash}`, '1')
          // Open link to opensea item
          window.open(`https://testnets.opensea.io/assets/goerli/${contractAddress}/${id}`, '2')
        }}
      >
        Claim NFT!
      </Web3Button>
    </div>
  );
};

export default Home;