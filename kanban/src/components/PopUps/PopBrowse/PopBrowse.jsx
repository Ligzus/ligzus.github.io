import React, { useState, useEffect } from 'react';
import Calendar from '../../Calendar/Calendar';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {
  PopBrowseWrapper,
  PopBrowseContainer,
  PopBrowseBlock,
  PopBrowseContent,
  PopBrowseTopBlock,
  PopBrowseTitle,
  CategoriesThemeTop,
  Status,
  StatusText,
  StatusThemes,
  StatusTheme,
  StatusThemeText,
  PopBrowseWrap,
  FormBrowse,
  FormBrowseBlock,
  TextArea,
  CalendarWrapper,
  CalendarTitle,
  PopBrowseBtnBrowse,
  BtnBrowseEdit,
  BtnBrowseDelete,
  BtnBrowseClose,
  Descrbtion,
  BtnGroup,
  BtnBrowseCancel,
  BtnBrowseDel,
  BtnBrowseSave,
  EditInput,
  EditTextArea,
  ErrorText,
  ErrorTitleText,
} from './PopBrowse.styled';
import { useTasks } from '../../../hooks/useTasks';
import { format } from 'date-fns';
import { deleteTodo, editTodo } from '../../../api';
import { useUser } from '../../../hooks/useUser';

const PopBrowse = () => {
  let { id } = useParams();
  const { tasks, setTasks } = useTasks();
  const task = tasks.find(task => task._id === id);
  const [isEditMode, setIsEditMode] = useState(false);
  const [currentStatus, setCurrentStatus] = useState(task?.status || "Без статуса");
  const [title, setTitle] = useState(task?.title || "");
  const [description, setDescription] = useState(task?.description || "");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { user } = useUser();

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
      setCurrentStatus(task.status);
    }
  }, [task]);

  if (!task) {
    return null;
  }

  const validateFields = () => {
    const errors = {};
    if (!title.trim()) errors.title = <ErrorTitleText>Название задачи не может быть пустым</ErrorTitleText>;
    if (!description.trim()) errors.description = <ErrorText>Описание задачи не может быть пустым</ErrorText>;
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleCancelClick = () => {
    setIsEditMode(false);
    setTitle(task.title);
    setDescription(task.description);
    setCurrentStatus(task.status); 
    setErrors({});
  };

  const handleStatusClick = (status) => {
    setCurrentStatus(status);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleDeleteClick = async () => {
    try {
      const updatedTasks = await deleteTodo({
        id: task._id,
        user
      });
      setTasks(updatedTasks.tasks);
      navigate('/'); 
    } catch (error) {
      console.error('Ошибка при удалении задачи:', error);
    }
  };

  const handleSaveClick = async () => {
    if (!validateFields()) return;

    try {
      const updatedTasks = await editTodo({
        id: task._id,
        user,
        title,
        topic: task.topic,
        status: currentStatus,
        description,
        date: task.date
      });
      setTasks(updatedTasks.tasks);
      setIsEditMode(false);
    } catch (error) {
      console.error('Ошибка при редактировании задачи:', error);
    }
  };

  return (
    <PopBrowseWrapper id="popBrowse">
      <PopBrowseContainer>
        <PopBrowseBlock>
          <PopBrowseContent>
            <PopBrowseTopBlock>
              {isEditMode ? (
                <>
                  <EditInput
                    placeholder="Введите название задачи..."
                    type="text"
                    value={title}
                    onChange={handleTitleChange}
                  />
                  {errors.title && <span>{errors.title}</span>}
                </>
              ) : (
                <PopBrowseTitle>{task.title}</PopBrowseTitle>
              )}
              <CategoriesThemeTop
                className={`
                  ${task.topic === 'Research' ? '_green' : ''}
                  ${task.topic === 'Web Design' ? '_orange' : ''}
                  ${task.topic === 'Copywriting' ? '_purple' : ''}
                  ${task.topic === 'Без категории' ? '_gray' : ''}
                `}
              >
                <p>{task.topic}</p>
              </CategoriesThemeTop>
            </PopBrowseTopBlock>
            <Status>
              <StatusText className="subttl">Статус</StatusText>
              <StatusThemes>
                {isEditMode ? (
                  ["Без статуса", "Нужно сделать", "В работе", "Тестирование", "Готово"].map((status) => (
                    <StatusTheme
                      key={status}
                      className={currentStatus === status ? "_gray" : ""}
                      onClick={() => handleStatusClick(status)}
                    >
                      <StatusThemeText>{status}</StatusThemeText>
                    </StatusTheme>
                  ))
                ) : (
                  <StatusTheme className="_gray">
                    <StatusThemeText>{currentStatus}</StatusThemeText>
                  </StatusTheme>
                )}
              </StatusThemes>
            </Status>
            <PopBrowseWrap>
              <FormBrowse id="formBrowseCard" action="#">
                <FormBrowseBlock>
                  <Descrbtion htmlFor="textArea01">Описание задачи</Descrbtion>
                  {isEditMode ? (
                    <>
                      <EditTextArea
                        placeholder="Введите описание задачи..."
                        value={description}
                        onChange={handleDescriptionChange}
                      />
                      {errors.description && <span>{errors.description}</span>}
                    </>
                  ) : (
                    <TextArea id="textArea01" readOnly value={description}></TextArea>
                  )}
                </FormBrowseBlock>
              </FormBrowse>
              <CalendarWrapper>
                <CalendarTitle>Даты</CalendarTitle>
                <Calendar date={task.date} setSelected={() => {}} readOnly={!isEditMode} />
                <p>Срок исполнения: <span>{format(new Date(task.date), 'dd.MM.yyyy')}</span></p>
              </CalendarWrapper>
            </PopBrowseWrap>

            <PopBrowseBtnBrowse>
              <BtnGroup>
                {isEditMode ? (
                  <div className='editButtons'>
                    <BtnBrowseSave className="_btn-bg _hover01" onClick={handleSaveClick}>Сохранить</BtnBrowseSave>
                    <BtnBrowseCancel className="_btn-bor _hover03" onClick={handleCancelClick}>Отменить</BtnBrowseCancel>
                    <BtnBrowseDel className="_btn-bor _hover03" onClick={handleDeleteClick}>Удалить задачу</BtnBrowseDel>
                  </div>
                ) : (
                  <div className='mainButtons'>
                    <BtnBrowseEdit className="_btn-bor _hover03" onClick={handleEditClick}>Редактировать</BtnBrowseEdit>
                    <BtnBrowseDelete className="_btn-bg _hover01" onClick={handleDeleteClick}>Удалить</BtnBrowseDelete>
                  </div>
                )}
              </BtnGroup>
              <BtnBrowseClose className="_btn-bor _hover03">
                <Link to="/">Закрыть</Link>
              </BtnBrowseClose>
            </PopBrowseBtnBrowse>
          </PopBrowseContent>
        </PopBrowseBlock>
      </PopBrowseContainer>
    </PopBrowseWrapper>
  );
};

export default PopBrowse;