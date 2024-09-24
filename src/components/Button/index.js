import { ButtonContainer } from "./styles";

const Button = ({ label, className, onClick }) => {
    return (
        <ButtonContainer>
            <button className={className} onClick={onClick}>{label}</button>
        </ButtonContainer>
    );
}

export default Button;