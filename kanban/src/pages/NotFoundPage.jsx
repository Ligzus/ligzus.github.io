import { useNavigate } from "react-router-dom";

function NotFoundPage() {
    let navigate = useNavigate();

    setTimeout(() => navigate('/'), 2000);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'center', height: '100vh' }}>
            <img src="https://www.bordur32.ru/upload/editor/error-404.jpg" alt="Страница не найдена" style={{ width: '60%' }} />
            <p>Возвращаемся на главную...</p>
        </div>
    );
}

export default NotFoundPage;