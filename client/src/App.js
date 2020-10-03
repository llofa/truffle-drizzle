import React from "react";
import Greeter from "./abis/Greeter.json";
import { DrizzleProvider } from "@drizzle/react-plugin";
import {
  LoadingContainer,
  AccountData,
  ContractData,
  ContractForm,
} from "@drizzle/react-components";

const drizzleOptions = {
  contracts: [Greeter],
};

function App() {
  return (
    <DrizzleProvider options={drizzleOptions}>
      <LoadingContainer>
        <div>
          <h4>Your Account</h4>
          <AccountData accountIndex={0} units={"ether"} precision={2} />
          <h5>Current Greeting:</h5>
          <ContractData contract="Greeter" method="get" />
          <h5>Set Greeting</h5>
          <ContractForm contract="Greeter" method="set" />
        </div>
      </LoadingContainer>
    </DrizzleProvider>
  );
}

export default App;
