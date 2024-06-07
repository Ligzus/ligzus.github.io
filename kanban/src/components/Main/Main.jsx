import { statusList } from "../../data";
import Column from "../Column/Column";
import { MainBlock, MainContainer, MainContent, MainDiv } from "./Main.styled";

const Main = ({ cards }) => {
  

  return (
    <MainDiv>
      <MainContainer>
        <MainBlock>
          <MainContent>{statusList.map((status) => (
            <Column
              key={status}
              title={status}
              cardList={cards.filter((card) => card.status === status)}
            />               
            ))}
          </MainContent>
        </MainBlock>
      </MainContainer>
    </MainDiv>
  );
};

export default Main;

