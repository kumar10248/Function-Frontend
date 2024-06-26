import { useState, useEffect } from "react";
import "./App.css";
import abi from "../artifacts/contracts/Frontend.sol/Frontend.json";
import { ethers } from "ethers";

function App() {
  const [currentAccount, setCurrentAccount] = useState("");
  const [value, setValue] = useState(0);
  const ContractAddress = "0xf823ff35ED5093A06bF3211383974FE85D5b13d7";

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
      console.log("Connected:", accounts[0]);
      getValue(); // Fetch value after connecting wallet
    } catch (error) {
      console.log(error);
    }
  };

  const increment = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.BrowserProvider(ethereum);
        const signer = await provider.getSigner();
        const abiContract = new ethers.Contract(
          ContractAddress,
          abi.abi,
          signer
        );

        let tx = await abiContract.increment();
        await tx.wait();
        getValue(); // Update the value after increment
      } else {
        console.log("Ethereum object not found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const decrement = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.BrowserProvider(ethereum);
        const signer = await provider.getSigner();
        const abiContract = new ethers.Contract(
          ContractAddress,
          abi.abi,
          signer
        );

        let tx = await abiContract.decrement();
        await tx.wait();
        getValue(); // Update the value after decrement
      } else {
        console.log("Ethereum object not found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getValue = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.BrowserProvider(ethereum);
        const signer = await provider.getSigner();
        const abiContract = new ethers.Contract(
          ContractAddress,
          abi.abi,
          signer
        );

        let tx = await abiContract.get();
        setValue(Number(tx)); // Assuming the returned value is a BigNumber
        console.log(Number(tx));
      } else {
        console.log("Ethereum object not found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (currentAccount) {
      getValue();
    }
  }, [currentAccount, increment, decrement]);

  return (
    <div className="home">
      <h1>Function Frontend</h1>
      <p>This is a project to demonstrate the use of blockchain technology.</p>
      {!currentAccount && (
        <button className="but" onClick={connectWallet}>
          Connect To Wallet
        </button>
      )}
      {currentAccount && (
        <div>
          <h3>{currentAccount}</h3>
          <div className="button-div">
            <button className="operator" onClick={decrement}>
              -
            </button>
            <div className="value">{value}</div>
            <button className="operator" onClick={increment}>
              +
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
