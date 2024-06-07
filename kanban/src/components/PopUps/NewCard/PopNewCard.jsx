import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Calendar from '../../Calendar/Calendar';
import { PopNewCardClose, PopNewCardContainer, PopNewCardBlock, PopNewCardContent, PopNewCardTitle, PopNewCardWrap, PopNewCardForm, FormNewBlock, FormNewInput, FormNewArea, CalendarContainer, CalendarTitle, Categories, CategoryTitle, CategoriesThemes, CategoryTheme, FormNewCreateButton, PopNewCards, SubTtl } from './PopNewCard.styled';
import { useTasks } from '../../../hooks/useTasks';
import { postTodo } from '../../../api';
import { useUser } from '../../../hooks/useUser';

const PopNewCard = () => {
  const { setTasks } = useTasks();
  const navigate = useNavigate();
  const { user } = useUser();

  const [formData, setFormData] = useState({
    title: "",
    topic: "",
    description: "",
    date: "",
    status: "Без статуса"
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        const checkFormValidity = () => {
            const isTitleValid = formData.title.trim() !== '';
            const isDescriptionValid = formData.description.trim() !== '';
            const isTopicValid = formData.topic;
            const isDateValid = formData.date;
            setIsFormValid(isTitleValid && isDescriptionValid && isTopicValid && isDateValid);
        };

        checkFormValidity();
    }, [formData]);

  const addCard = async () => {
    
    const newTask = {
      title: formData.title,
      topic: formData.topic,
      status: formData.status,
      description: formData.description,
      date: formData.date,
    };

    const response = await postTodo({ 
      user, 
      title: newTask.title, 
      topic: newTask.topic, 
      status: newTask.status, 
      description: newTask.description, 
      date: newTask.date,
    });

    if (response.ok) {
      const updatedTasks = await response.json();
      setTasks(updatedTasks.tasks); 
      navigate('/');
    } else {
      alert('Что-то пошло не так, попробуйте снова...')
    }
    
  };

  const handleCloseBtn = () => {
    navigate('/');
  };

  return (
    <PopNewCards>
      <PopNewCardContainer>
        <PopNewCardBlock>
          <PopNewCardContent>
            <PopNewCardTitle>Создание задачи</PopNewCardTitle>
            <PopNewCardClose onClick={handleCloseBtn}>&#10006;</PopNewCardClose>
            <PopNewCardWrap>
              <PopNewCardForm id="formNewCard" action="#">
                <FormNewBlock>
                  <SubTtl htmlFor="formTitle">Название задачи</SubTtl>
                  <FormNewInput
                    type="text"
                    name="title"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                    value={formData.title}
                    onChange={handleInputChange}
                  />
                </FormNewBlock>
                <FormNewBlock>
                  <SubTtl htmlFor="textArea">Описание задачи</SubTtl>
                  <FormNewArea
                    name="description"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    value={formData.description}
                    onChange={handleInputChange}
                  />
                </FormNewBlock>
              </PopNewCardForm>
              <CalendarContainer>
                <CalendarTitle>Даты</CalendarTitle>
                <Calendar 
                  date={formData.date}
                  setSelected={(date) => setFormData({ ...formData, date: date })}

                />
              </CalendarContainer>
            </PopNewCardWrap>
            <Categories>
              <CategoryTitle>Категория</CategoryTitle>
              <CategoriesThemes>
                <CategoryTheme 
                  className={`_orange ${formData.topic === 'Web Design' ? '_active-topic' : ''}`}
                  onClick={() => setFormData({ ...formData, topic: 'Web Design' })}
                >
                  <p className="_orange">Web Design</p>
                </CategoryTheme>
                <CategoryTheme 
                  className={`_green ${formData.topic === 'Research' ? '_active-topic' : ''}`}
                  onClick={() => setFormData({ ...formData, topic: 'Research' })}
                >
                  <p className="_green">Research</p>
                </CategoryTheme>
                <CategoryTheme 
                  className={`_purple ${formData.topic === 'Copywriting' ? '_active-topic' : ''}`}
                  onClick={() => setFormData({ ...formData, topic: 'Copywriting' })}
                >
                  <p className="_purple">Copywriting</p>
                </CategoryTheme>
              </CategoriesThemes>
            </Categories>
            <FormNewCreateButton 
              id="btnCreate" 
              onClick={addCard} 
              style={{ opacity: isFormValid ? 1 : 0.5 }}                                 
              disabled={!isFormValid}
            >Создать задачу</FormNewCreateButton>
          </PopNewCardContent>
        </PopNewCardBlock>
      </PopNewCardContainer>
    </PopNewCards>
  );
};

export default PopNewCard;