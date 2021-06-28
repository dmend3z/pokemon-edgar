import React from "react";
import { useDispatch } from "react-redux";
import * as actions from "../redux/actions";
import { selectAllTypes }  from "../redux/selectors";
import { useSelector } from "react-redux";


const Dropdown = (props) => {
    const dispatch = useDispatch();
    
    const types = useSelector(selectAllTypes);

    const handleChange = (type) => {
      dispatch(actions.selectType(type))  
    };



  const { label, selected, name } = props;

  return (
    <>
      <label>
        <b>{label}</b>
      </label>
      <div>
        <select
          name={name}
          value={selected}
          onChange={(event) => {
            handleChange(event.target.value);
          }}
        >
          {types.map((element, key) => (
            <option key={key} value={element}>
              {element.charAt(0).toUpperCase() + element.slice(1)}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Dropdown;
