const baseHost = 'https://wedev-api.sky.pro/api/kanban';
const userHost = 'https://wedev-api.sky.pro/api/user';


// Получить список задач:
export async function getTodos({ token }) {
    const response = await fetch(baseHost, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });

    if (response.status === !201) {
        throw new Error('Ошибка');
    }

    const data = await response.json();
    return data;
}

// Добавить новую задачу:
export async function postTodo({ user, title, topic, status, description, date }) {

    return fetch(baseHost, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({
        title: title,
        topic: topic,
        status: status,
        description: description,
        date: date,
      })
    });
}

// Изменить задачу:
export async function editTodo({ id, user, title, topic, status, description, date }) {
    const response = await fetch(`https://wedev-api.sky.pro/api/kanban/${id}`, {
        headers: {
            Authorization: `Bearer ${user.token}`,
        },
        method: 'PUT',
        body: JSON.stringify({
            title: title,
            topic: topic,
            status: status,
            description: description,
            date: date,
        })
    });

    if (response.status === !201) {
        throw new Error('Ошибка');
    }

    const data = await response.json();
    return data;
}

// Удалить задачу:
export async function deleteTodo({ id, user }) {
    const response = await fetch(`https://wedev-api.sky.pro/api/kanban/${id}`, {
        headers: {
            Authorization: `Bearer ${user.token}`,
        },
        method: 'DELETE',
    });

    if (response.status === !201) {
        throw new Error('Ошибка');
    }

    const data = await response.json();
    return data;
}


// Зарегистрироваться:
export function register({ login, name, password }) {
    return fetch(userHost, {
        method: 'POST',
        body: JSON.stringify({
            login,
            name,            
            password,
        })
    }).then((response) => {
        if (response.status === 400) {  
            throw new Error('Пользователь уже существует');                                             
        } else if (response.status === 500) {  
            throw new Error('Ошибка сервера');                                             
        }

        return response.json();

    }).catch((error) => {
        if (error.message === 'Пользователь уже существует') {
            alert('Кажется, у вас уже есть аккаунт, войдите в него')
        } else if (error.message === 'Ошибка сервера') {  
            alert('Что-то пошло не так, уже чиним')                                            
        }
    })
}

// Войти:
export function login({ login, password }) {
    return fetch(userHost + '/login', {
        method: 'POST',
        body: JSON.stringify({
            login,
            password,
        })

    }).then((response) => {
        if (response.status === 400) {  
            throw new Error('Неверный логин или пароль');                                             
        } else if (response.status === 500) {  
            throw new Error('Ошибка сервера');                                             
        }

        return response.json();

    }).catch((error) => {
        if (error.message === 'Неверный логин или пароль') {
            alert('Неверный логин или пароль')
        } else if (error.message === 'Ошибка сервера') {  
            alert('Что-то пошло не так, уже чиним')                                            
        }
    })
}