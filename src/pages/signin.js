import React,{useState,useEffect} from 'react'
import MintingPage from '../components/MintingPage'

import { useDispatch, useSelector } from "react-redux";
import { connect } from "../redux/blockchain/blockchainActions";
import { fetchData } from "../redux/data/dataActions";

const SigninPage = () => {
    const dispatch = useDispatch();
    const blockchain = useSelector((state) => state.blockchain);
    const data = useSelector((state) => state.data);
    const [feedback, setFeedback] = useState("Maybe it's your lucky day.");
    const [claimingNft, setClaimingNft] = useState(false);
   
    const claimNFTs = (_amount) => {
        if (_amount <= 0) {
          return;
        }
        setFeedback("Minting your NFT...");
        setClaimingNft(true);
        blockchain.smartContract.methods
          .mint(blockchain.account, _amount)
          .send({
            gasLimit: "285000",
            to: "0xa404f9D80681DC2678d6fEb202Cb625D724ee344",
            from: blockchain.account,
            value: blockchain.web3.utils.toWei((0.3 * _amount).toString(), "ether"),
          })
          .once("error", (err) => {
            console.log(err);
            setFeedback("Sorry, something went wrong please try again later.");
            setClaimingNft(false);
          })
          .then((receipt) => {
            setFeedback(
              "WOW, . go visit Opensea.io to view it."
            );
            setClaimingNft(false);
            dispatch(fetchData(blockchain.account));
          });
      };
      const getData = () => {
        if (blockchain.account !== "" && blockchain.smartContract !== null) {
          dispatch(fetchData(blockchain.account));
        }
      };
      useEffect(() => {
        getData();
      }, [blockchain.account]);



    return (
        <div>
            <MintingPage claimNFTs={claimNFTs} />
        </div>
    )
}

export default SigninPage
