import React, { useState } from "react";
import "antd/dist/antd.css";
import "./App.css";
import { Input, Button } from "antd";
import styled from "styled-components";
import TextareaAutosize from "react-textarea-autosize";
import ReactTooltip from "react-tooltip";
import { TabletTwoTone} from "@ant-design/icons";

const { TextArea } = Input;

const App = () => {
  const [text, setText] = useState("");
  const [editPosition, setEdit] = useState(0);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const columnData_21 = () => text.slice(0, Math.round(text.length / 2));
  const columnData_22 = () =>
    text.slice(Math.round(text.length / 2), text.length);
  const columnData_31 = () => text.slice(0, Math.round(text.length / 3));
  const columnData_32 = () =>
    text.slice(Math.round(text.length / 3), Math.round((2 * text.length) / 3));
  const columnData_33 = () =>
    text.slice(Math.round((2 * text.length) / 3), Math.round(text.length));

  return (
    <StyledDiv className="App">
      {!editPosition ? (
        <div>
          <h1>Text Layout</h1>
          <div key={5} data-for="button" data-tip="Minimum 50 characters">
            <TextArea
              placeholder="Please, enter your text here. Minimum 50 characters"
              autoSize={{ minRows: 3, maxRows: 15 }}
              value={text}
              onChange={handleChange}
              style={{ marginBottom: "20px" }}
            />
            {text.length < 50 ? (
              <ReactTooltip type="warning" id="button" />
            ) : null}
          </div>
          <Button
            disabled={text.length < 50}
            onClick={() => setEdit(1)}
            type="primary"
          >
            LAYOUT
          </Button>
        </div>
      ) : (
        <div>
          <Button style={{float: 'left', marginLeft: '20px'}} onClick={() => setEdit(0)}>Back</Button><h1>Layout page</h1>
          {editPosition === 1 ? (
            <div>
              <h2>You see 1 column here</h2>
              <div className="single">
                <TextareaAutosize key={11} onChange={handleChange}>
                  {text}
                </TextareaAutosize>
              </div>
            </div>
          ) : editPosition === 2 ? (
            <div>
              <h2>You see 2 columns here</h2>

              <div className="multiple">
                <TextareaAutosize
                  onBlur={(e) => setText(e.target.value + columnData_22())}
                  key={21}
                >
                  {columnData_21()}
                </TextareaAutosize>
                <TextareaAutosize
                  onBlur={(e) => setText(columnData_21() + e.target.value)}
                  key={22}
                >
                  {columnData_22()}
                </TextareaAutosize>
              </div>
            </div>
          ) : (
            <div>
              <h2>You see 3 columns here</h2>
              <div className="multiple">
                <TextareaAutosize
                  onBlur={(e) =>
                    setText(e.target.value + columnData_32() + columnData_33())
                  }
                  key={31}
                >
                  {columnData_31()}
                </TextareaAutosize>
                <TextareaAutosize
                  onBlur={(e) =>
                    setText(columnData_31() + e.target.value + columnData_33())
                  }
                  key={32}
                >
                  {columnData_32()}
                </TextareaAutosize>
                <TextareaAutosize
                  onBlur={(e) =>
                    setText(columnData_31() + columnData_32() + e.target.value)
                  }
                  key={33}
                >
                  {columnData_33()}
                </TextareaAutosize>
              </div>
            </div>
          )}
          <Button
            data-for="col1"
            data-tip="Format text to 1 column"
            onClick={() => setEdit(1)}
            ghost
            type="primary"
          >
            <TabletTwoTone />
          </Button>
          <ReactTooltip type="info" id="col1" />
          <Button
            data-for="col2"
            data-tip="Format text to 2 columns"
            onClick={() => setEdit(2)}
            type="primary"
          >
            <TabletTwoTone /> <TabletTwoTone />
          </Button>
          <ReactTooltip type="info" id="col2" />
          <Button
            data-for="col3"
            data-tip="Format text to 3 columns"
            onClick={() => setEdit(3)}
            type="danger"
          >
            <TabletTwoTone /> <TabletTwoTone /> <TabletTwoTone />
          </Button>
          <ReactTooltip type="info" id="col3" />
        </div>
      )}
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  width: 1080px;
  margin: 30px auto;
  textarea {
    text-align: justify;
    padding: 10px 20px;
    width: 100%;
    margin-bottom: 10px;
    &:focus {
      outline: 0;
    }
  }

  .single {
    width: 100%;
    textarea {
      border: 0;
      resize: none;
      overflow: hidden;
    }
  }

  .multiple {
    display: flex;
    textarea {
      width: 50%;
      border: 0;
      resize: none;
      overflow: hidden;
    }
  }
  button {
    margin: 5px;
  }
  h1 {
    display: inline-block;
  }
  h2 {
    color: white;
    background: #1890ff;
    margin: 10px 20px;
  }
`;

export default App;
