import { useContext, useEffect, useState } from "react";
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header.jsx';
import Main from '../../components/Main/Main.jsx';
import { Loader } from '../../style/shared/Loader.styled.js';
import { getTodos } from '../../api.js';
import { UserContext } from '../../contexts/user.jsx';
import { useTasks } from '../../hooks/useTasks.jsx';
import { Wrapper } from "./HomePage.styled.js";

function HomePage() {
    const { user } = useContext(UserContext); // Получаем пользователя из контекста
    const [isLoading, setIsLoading] = useState(true);
    const { tasks, setTasks } = useTasks(); // Используем хук useTasks

    useEffect(() => {
        const fetchTasks = async () => {
            if (user && user.token) { // Проверяем наличие токена
                try {
                    const response = await getTodos({ token: user.token });
                    setTasks(response.tasks);
                } catch (error) {
                    alert('Что-то пошло не так. Попробуйте снова.');
                } finally {
                    setIsLoading(false);
                }
            } else {
                alert('Пользователь не авторизован.');
                setIsLoading(false);
            }
        };

        fetchTasks();
    }, [user]);

    return (
        <Wrapper>
            <Header />
            {isLoading ? <Loader>Загружаю задачи ...</Loader> : <Main cards={tasks} />}
            <Outlet />
        </Wrapper>
    );
};

export default HomePage;
