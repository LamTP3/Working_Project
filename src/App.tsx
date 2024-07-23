import React from "react";
import SubmitProjectPage from "./pages/Organisms/SubmitProjectPage";
import Table from "./pages/Organisms/Table/Table";

const App: React.FC = () => {
  return (
    <>
      <div className="bg">
        <div className="m-5 space-y-2 ">
          <div>
            <SubmitProjectPage />
          </div>
          <div>
            <Table />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
