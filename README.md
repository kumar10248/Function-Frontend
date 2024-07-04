# EVM Course Project

This project is a comprehensive Ethereum Virtual Machine (EVM) course example, showcasing the integration of Solidity smart contracts with a React frontend, managed through Hardhat.

## Features

- **Smart Contract Development**: Utilizes Solidity for the smart contract ([`Frontend.sol`](contracts/Frontend.sol)) with a simple increment functionality.
- **Frontend Integration**: React-based frontend to interact with the smart contract.
- **Development Environment**: Configured with Hardhat for compiling, deploying, and testing the smart contracts.
- **Testing**: Includes tests for smart contracts using Hardhat's testing framework.

## Prerequisites

Before you begin, ensure you have installed:

- [Node.js](https://nodejs.org/) (version 14 or later)
- [npm](https://www.npmjs.com/)

## Installation

Clone the repository and install the dependencies:

```sh
git clone <repository-url>
cd evm-course-2
npm install

To update your [`README.md`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FC%3A%2FUsers%2Fkumar%2FContacts%2FDesktop%2FEVM_Course-2%2FREADME.md%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "c:\Users\kumar\Contacts\Desktop\EVM_Course-2\README.md") file with an image from your own URL, you can follow the template below. Replace `<your-image-url>` with the actual URL of the image you want to include:

```md
# EVM Course Project

This project is a comprehensive Ethereum Virtual Machine (EVM) course example, showcasing the integration of Solidity smart contracts with a React frontend, managed through Hardhat.

## Features

- **Smart Contract Development**: Utilizes Solidity for the smart contract ([`Frontend.sol`](contracts/Frontend.sol)) with a simple increment functionality.
- **Frontend Integration**: React-based frontend to interact with the smart contract.
- **Development Environment**: Configured with Hardhat for compiling, deploying, and testing the smart contracts.
- **Testing**: Includes tests for smart contracts using Hardhat's testing framework.

## Prerequisites

Before you begin, ensure you have installed:

- [Node.js](https://nodejs.org/) (version 14 or later)
- [npm](https://www.npmjs.com/)

## Installation

Clone the repository and install the dependencies:

```sh
git clone <https://github.com/kumar10248/Function-Frontend.git>
cd evm-course-2
npm install
```

## Running the Project

### Start Hardhat Network

First, start a local Hardhat node:

```sh
npx hardhat node
```

This command starts a local Ethereum network for development.

### Deploy Smart Contracts

With the local network running, deploy the smart contracts to it:

```sh
npx hardhat run --network localhost scripts/deploy.js
```

This script deploys the [`Frontend`](command:_github.copilot.openSymbolFromReferences?%5B%7B%22%24mid%22%3A1%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fkumar%2FContacts%2FDesktop%2FEVM_Course-2%2Fartifacts%2Fcontracts%2FFrontend.sol%2FFrontend.json%22%2C%22scheme%22%3A%22file%22%7D%2C%7B%22line%22%3A0%2C%22character%22%3A0%7D%5D "artifacts/contracts/Frontend.sol/Frontend.json") contract to the local network.

### Start the Frontend

To run the frontend in development mode:

```sh
npm run dev
```

This command starts the React application in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Frontend Screenshot

Below is a screenshot of the frontend application:


## Contributing![Screenshot 202![Screenshot 2024-07-04 194907](https://github.com/kumar10248/Function-Frontend/assets/142513742/dcd43954-cc21-4dd2-91be-a90cebe1959e)
4-07-04 194820](https://github.com/kumar10248/Function-Frontend/assets/142513742/b03be530-b805-4553-99e4-e5dab58e4036)


Contributions are welcome! Please feel free to submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```
