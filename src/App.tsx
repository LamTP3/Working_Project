import React from "react";
import SubmitProjectPage from "./pages/SubmitProjectPage/index";
import Table from "./components/CommonPageSection/Table/Table";
import { Toaster } from "sonner";
const App: React.FC = () => {
  return (
    <>
      <Toaster
        position="top-right"
        richColors
        expand
        duration={1000}
        closeButton
      />
      <SubmitProjectPage />
      <Table />
    </>
  );
};

export default App;
