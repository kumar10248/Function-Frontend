import { useState, useEffect} from 'react';
import './App.css'
import abi from '../artifacts/contracts/Frontend.sol/Frontend.json'

function App() {
  const [currentAccount, setCurrentAccount] = useState("");
  const connectWallet = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
        
      });
      setCurrentAccount(accounts[0]);
  
      console.log("Connected:", currentAccount);
      // ethereum.on('chainChanged', (_chainId: string) => window.location.reload());
      // setCorrectNetwork(true);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(()=>{
    connectWallet();
  },[])
  return (
    <div className='home'>
      <h1>Function Frontend</h1>
      <p>
        This is a project to demonstrate the use of blockchain technology.
        </p>
        <h3>{currentAccount}</h3>
        <div className='button-div'>
          <div className='operator'>-</div>
          <div className='operator'>0</div>
          <div className='operator'>+</div>
        </div>
    </div>
  )
}

export default App
