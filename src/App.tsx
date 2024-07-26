import React from "react";
import SubmitProjectPage from "./pages/SubmitProjectPage/index";
import Table from "./components/CommonPageSection/Table/Table";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App: React.FC = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Bounce}
        theme="light"
      />
      <SubmitProjectPage />
      <Table />
    </>
  );
};

export default App;
