import Card from "../Card/Card";
import { Cards, ColumnTitle, ColumnTitleText, MainColumn } from "./Column.styled";
import { format } from 'date-fns'

const Column = ({ title, cardList }) => {
  return (
      <MainColumn>

        <ColumnTitle>
          <ColumnTitleText>{title}</ColumnTitleText>
        </ColumnTitle> 

        <Cards>
          {cardList.map((card) => {
            const formattedDate = format(new Date(card.date), 'dd.MM.yyyy');

            return (
              <Card 
                key={card._id}
                id={card._id}
                userId={card.userId}
                topic={card.topic} 
                title={card.title}
                date={formattedDate}
                description={card.description}
                status={card.status}
              />
            )})
          }   
        </Cards>             
        
      </MainColumn>
    )
}

export default Column;