import React,{useEffect,useState} from 'react'
import { 
    Container, 
   
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormButton,
    Text,
    Text2

} from './MintingPageElements'
import { fetchData } from "../../redux/data/dataActions";
import {Button} from '../ButtonElement'
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../../redux/blockchain/blockchainActions";
import logo from '../../images/logo.png'

const MintingPage = ({claimNFTs}) => {
  const data = useSelector((state) => state.data);
    const dispatch = useDispatch();
    const blockchain = useSelector((state) => state.blockchain);
    const [totalNFTS, setTotalNFTs] = useState(1);


    const getData = () => {
        if (blockchain.account !== "" && blockchain.smartContract !== null) {
          dispatch(fetchData(blockchain.account));
        }
      };
    
      useEffect(() => {
        getData();
    
      }, [blockchain.account]);


    return (
        <>
        <Container>
            <FormWrap>
                <Icon to="/">
                  
                <img style={{height:"150px", width:"200px"}} src={logo}/> 
                
                </Icon>
                <FormContent>
                    <Form action='#'>
                        <FormH1>Mint Your RKONS</FormH1>
                        <Text2>25 LIMIT PER TRANSACTION</Text2>
                        <FormInput 
                        type="number"
                        value={totalNFTS}
                        onChange={e=>{
                          if(e.target.value > 0){
                            setTotalNFTs(e.target.value)
                          }
                          console.log(totalNFTS)
                          
                        }}
                        />
                        <Text2>0.3 ETH</Text2>
                        {blockchain.account === "" ||
                     blockchain.smartContract === null ? (
                   
                        <Button type="submit"
                        onClick={(e) => {
                            e.preventDefault();
                            dispatch(connect());
                            getData();
                          }}
                        >Connect</Button>
                        
                      
                  ):
                    ( <Button type="submit"
                    onClick={(e) => {
                        e.preventDefault();
                        claimNFTs(totalNFTS);
                        getData();
                      }}
                    >Mint</Button>
                       
                    )}
                      
                    </Form>
                   
                        <Text>{data.totalSupply}/5000</Text>
                </FormContent>
            </FormWrap>
        </Container>
        </>
    )           
}

export default  MintingPage
