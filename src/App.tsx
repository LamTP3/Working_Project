import SubmitProjectPage from "./pages/Organisms/SubmitProjectPage";
import Table from "./pages/Organisms/Table/Table";
function App() {
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
}
export default App;
