import Button from "../Button";
import { ItemContainer, TextContainer } from "./style";

const ItemRepo = ({nome, fullname, onClick, url}) => {
    return(
        <ItemContainer>
            <TextContainer className="text">
                <h2>{nome}</h2>
                <a href={url} target="_blank" rel="noreferrer">{fullname}</a>
            </TextContainer>
            <Button label="Remove" className="remove" onClick={onClick}/>
        </ItemContainer>
    )
}

export default ItemRepo;