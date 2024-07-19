import "./App.css";
import InputComponent from "./Components/InputComp/Input/InputComp";
import InputNumberComp from "./Components/InputComp/InputNumber/InputNumberComp";
import SelectComp from "./Components/Select/SelectComp";
import TextAreaComp from "./Components/InputComp/TextArea/TextAreaComp";
import SearchComp from "./Components/Search/SearchComp";
import LogoComp from "./Components/Logo/LogoComp";
import TabsComp from "./Components/Tabs/TabsComp";

function App() {

  const options = [
    { value: 'jack', label: 'Jack' },
    { value: 'lucy', label: 'Lucy' },
    { value: 'yiminghe', label: 'Yiminghe' },
  ];

  const items = [
    {
        key: '1',
        label: 'TAB#1',
        children: 'Content of Tab Pane 1',
    },
    {
        key: '2',
        label: 'TAB#2',
        children: 'Content of Tab Pane 2',
    },
    {
        key: '3',
        label: 'TAB#3',
        children: 'Content of Tab Pane 3',
    },
];

  return (
    <>
      <div className="test">
        <InputComponent placeholder="Placeholder"/>
        <br />
        <br />
        <TextAreaComp placeholder="Placeholder"/>
        <br />
        <br />
        <SelectComp
          placeholder = "ăgagwg"
          options={options}
        />
        <br />
        <br />
        <InputNumberComp unit="%"/>
        <br />
        <SearchComp placeholder="Keyword"/>
        <br />
        <div className="flex">
          <LogoComp size="small" />
          <LogoComp size="medium" />
          <LogoComp size="large" />
        </div>
        <br />
        <TabsComp items={items}/>
      </div>
    </>
  );
}

export default App;
