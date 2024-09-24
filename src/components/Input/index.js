import { InputContainer } from "./styles";

const Input = ({ placeholder, value, onChange }) => {
    return (
        <InputContainer>
        <input
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
        </InputContainer>
    );
};

export default Input;