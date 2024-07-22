import ButtonComponent from "./components/Button/ButtonComponent";
import UploadFile from "./components/UploadFile/UploadFile";
import DatePickercomponents from "./components/DatePicker/DatePicker";
import MultipleSelect from "./components/MultipleSelect/MultipleSelect";
import Modalcomponents from "./components/Modal/ModalComponent";
import InputComponent from "./components/InputComp/Input/InputComp";
import InputNumberComp from "./components/InputComp/InputNumber/InputNumberComp";
import SelectComp from "./components/Select/SelectComp";
import TextAreaComp from "./components/InputComp/TextArea/TextAreaComp";
import SearchComp from "./components/Search/SearchComp";
import LogoComp from "./components/Logo/LogoComp";
import TabsComp from "./components/Tabs/TabsComp";
import SubmitProjectPage from "./pages/Organisms/SubmitProjectPage";
function App() {
  const options1 = [
    { value: "jack", label: "Jack" },
    { value: "lucy", label: "Lucy" },
    { value: "yiminghe", label: "Yiminghe" },
  ];

  const items = [
    {
      key: "1",
      label: "TAB#1",
      children: "Content of Tab Pane 1",
    },
    {
      key: "2",
      label: "TAB#2",
      children: "Content of Tab Pane 2",
    },
    {
      key: "3",
      label: "TAB#3",
      children: "Content of Tab Pane 3",
    },
  ];
  return (
    <>
      <div className="bg">
        <div className="m-5 space-y-2 ">
          <div>
            <SubmitProjectPage />
          </div>
          <div>
            <ButtonComponent
              background_color="Gradient"
              button_content="Button Text"
              arrow_icon={true}
              width={"150px"}
            />
          </div>

          <div>
            <UploadFile
              width="137px"
              height="137px"
              label="Drag and drop an image file here or click"
            />
          </div>

          <div>
            <DatePickercomponents />
          </div>

          <div>
            <MultipleSelect />
          </div>

          <div>
            <Modalcomponents />
          </div>
        </div>
        <div className="test">
          <InputComponent placeholder="Placeholder" />
          <br />
          <br />
          <TextAreaComp placeholder="Placeholder" />
          <br />
          <br />
          <SelectComp placeholder="ăgagwg" options={options1} />
          <br />
          <br />
          <InputNumberComp unit="%" />
          <br />
          <SearchComp placeholder="Keyword" />
          <br />
          <div className="flex">
            <LogoComp size="small" />
            <LogoComp size="medium" />
            <LogoComp size="large" />
          </div>
          <br />
          <TabsComp items={items} />
        </div>
      </div>
    </>
  );
}
export default App;
