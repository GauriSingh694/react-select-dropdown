import React from "react";
// import axios from "axios";
import Select, { components } from "react-select";
import styled from "styled-components";
import { Box, Flex, Image, Heading } from "rebass";
import green_tick from "../Image/green_tick.png";
import users from "../Data/db.json";

const Wrapper = styled.section`
  background: linear-gradient(to bottom, #ffcccc 0%, #ffffff 100%);
  height: 98vh;
  font-family: "Times New Roman", sans-serif;
  font-size: 15px;
  font-size-adjust: 0.55;
  white-space: pre-wrap;
  text-align: center;
`;

const getStyles = {
  control: (provided) => ({
    ...provided,
    marginTop: "15%",
  }),
};

const singleValue = ({ data }) => {
  const { sortCode, accountName, accountNumber, accountType } = data.value;
  return (
    <div>
      <div>{`${sortCode} ${""} ${""} ${accountNumber} \n ${accountType} ${""} ${""} ${accountName}`}</div>
    </div>
  );
};

const selectedOption = (props) => {
  return props.isSelected ? (
    <div>
      <label>{props.label}</label>
      &nbsp; &nbsp;
      <Image src={green_tick} sx={{ width: ["3%"] }}></Image>
    </div>
  ) : (
    <components.Option {...props} />
  );
};

const options = users.map((d) => ({
  value: d,
  label: `${d.sortCode} ${d.accountNumber} ${d.accountType} ${d.accountName}`,
}));

// const getOptions = () => {
//   const [users, setUsers] = useState({ selectOptions: [] });
//   const urlJson = "http://localhost:5000/users";

//   useEffect(() => {
//     const fetchData = async () => {
//       const { data } = await axios(urlJson);
//       setUsers({ selectOptions: data });
//     };
//     fetchData();
//   }, [setUsers]);

//   return (
//     <div>
//       {users.selectOptions.map((d) => ({
//         value: d,
//         label: `${d.sortCode} ${d.accountNumber} ${d.accountType} ${d.accountName}`,
//       }))}
//     </div>
//   );
// };

export default function CustomSelect() {
  return (
    <>
      <Wrapper>
        <div>
          <Flex flexWrap="wrap" mx={-5}>
            <Box
              p={5}
              width={[1, 1, 1 / 2]}
              fontSize={3}
              sx={{ px: 3, mx: "auto" }}
            >
              <Heading fontSize={40} color="blue" textAlign="center">
                React Select Dropdown
              </Heading>
              <Select
                components={{
                  Option: selectedOption,
                  SingleValue: singleValue,
                }}
                styles={getStyles}
                options={options}
                onChange={(e) => {}}
              />
            </Box>
          </Flex>
        </div>
      </Wrapper>
    </>
  );
}
