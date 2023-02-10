import React, { useEffect, useState, useRef } from "react";
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { connect } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataActions";
import Navbar from './components/Navbar/index'
import Sidebar from "./components/Sidebar";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Home from './pages'
import SigninPage from "./pages/signin";
import Login from "./pages/login";
import TraitsPage from "./pages/traitsPage";

function App() {
  const[ isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [feedback, setFeedback] = useState("Maybe it's your lucky day.");
  const [claimingNft, setClaimingNft] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  // const claimNFTs = (_amount) => {
  //   if (_amount <= 0) {
  //     return;
  //   }
  //   setFeedback("Minting your NFTs...");
  //   setClaimingNft(true);
  //   blockchain.smartContract.methods
  //     .mint(blockchain.account, _amount)
  //     .send({
  //       gasLimit: "285000",
  //       to: "0xa404f9D80681DC2678d6fEb202Cb625D724ee344",
  //       from: blockchain.account,
  //       value: blockchain.web3.utils.toWei((100 * _amount).toString(), "ether"),
  //     })
  //     .once("error", (err) => {
  //       console.log(err);
  //       setFeedback("Sorry, something went wrong please try again later.");
  //       setClaimingNft(false);
  //     })
  //     .then((receipt) => {
  //       setFeedback(
  //         "WOW, you now own NFT. go visit Opensea.io to view it."
  //       );
  //       setClaimingNft(false);
  //       dispatch(fetchData(blockchain.account));
  //     });
  // };

  // const getData = () => {
  //   if (blockchain.account !== "" && blockchain.smartContract !== null) {
  //     dispatch(fetchData(blockchain.account));
  //   }
  // };

  // useEffect(() => {
  //   getData();
  // }, [blockchain.account]);

  return (
    <>
    <Router>

      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SigninPage} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/traits" component={TraitsPage} exact />
      </Switch>
      
    
       {/* <StyledButton
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(connect());
                        getData();
                      }}
                    >
                         CONNECT
                    </StyledButton>
                    <StyledButton
                      disabled={claimingNft ? 1 : 0}
                      onClick={(e) => {
                        e.preventDefault();
                        claimNFTs(1);
                        getData();
                      }}
                    >
                      {claimingNft ? "BUSY" : "BUY 1"}
                    </StyledButton>
                    <p>
                    {data.totalSupply}/1000
                    </p> */}


      {/* <GlobalStyle />
      <Navbar  toggle={toggle}/>
      <Hero slides={SliderData}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/> */}
      {/* <InfoSection {...infoData}/> */}

      </Router>
    
    </>
  );
}

export default App;
