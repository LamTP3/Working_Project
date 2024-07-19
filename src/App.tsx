import ButtonComponent from "./components/Button/ButtonComponent";
import UploadFile from "./components/UploadFile/UploadFile";
import DatePickerComponents from "./components/DatePicker/DatePicker";
import MultipleSelect from "./components/MultipleSelect/MultipleSelect";
import CheckboxComponent from "./components/Checkbox/Checkbox";
import ModalComponents from "./components/Modal/ModalComponents";
import Section from "./pages/CreatePage/Section/Section";
function App() {
  const options = [
    { label: "Apple", value: "Apple1" },
    { label: "Pear", value: "Pear1" },
    { label: "Orange", value: "Orange1" },
  ];
  return (
    <>
      <div className="bg">
        <div className="m-5 space-y-2 ">
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
            <DatePickerComponents />
          </div>

          <div>
            <MultipleSelect />
          </div>
          <div>
            <CheckboxComponent optionsData={options} useCricle={true} />
          </div>
          <div>
            <CheckboxComponent optionsData={options} useCricle={false} />
          </div>
          <div>
            <ModalComponents />
          </div>
          <div>
            <Section title="Link" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
