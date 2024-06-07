import { useEffect, useState } from "react";
import { ContainerSignin, LoginInput, LoginInputPassword, Modal, ModalBlock, ModalBtnEnter, ModalBtnEnterLink, ModalFormGroup, ModalFormGroupText, ModalFormGroupLink, ModalFormLogin, ModalTtl, Wrapper } from "../LoginPage/Login.styled";
import { useNavigate } from "react-router-dom";
import { register } from "../../api";
import { useUser } from "../../hooks/useUser";

function RegisterPage() {
    let navigate = useNavigate();
    const { loginUser } = useUser();
    
    function goToLogin() {
        navigate('/login');
    }

    const [formValues, setFormValues] = useState({
        firstName: '',
        login: '',
        password: '',
    });   

    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        const checkFormValidity = () => {
            const isNmaeValid = formValues.firstName.trim() !== '';
            const isLoginValid = formValues.login.trim() !== '';
            const isPasswordValid = formValues.password.trim() !== '';
            setIsFormValid(isLoginValid && isPasswordValid && isNmaeValid);
        };

        checkFormValidity();
    }, [formValues]);

    const onInputChange = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    }

    const onRegister = async (event) => {
        event.preventDefault();

       
        const response = await register({
            name: formValues.firstName,
            login: formValues.login,
            password: formValues.password,
        });   

        if (response?.user) {
            loginUser(response.user)
        }
    }

    return (
        <Wrapper>
            <ContainerSignin>
                <Modal>
                    <ModalBlock>
                        <div className="modal__ttl">
                            <ModalTtl>Регистрация</ModalTtl>
                        </div>
                        <ModalFormLogin id="formLogUp" action="#" onSubmit={onRegister}>

                            <LoginInput 
                                type="text" 
                                name="firstName" 
                                id="first-name" 
                                placeholder="Имя"  
                                value={formValues.firstName}
                                onChange={onInputChange}  
                                required                        
                            />

                            <LoginInput 
                                type="email" 
                                name="login" 
                                id="loginReg" 
                                placeholder="Эл. почта"
                                value={formValues.login}
                                onChange={onInputChange}
                                required
                            />

                            <LoginInputPassword 
                                type="password" 
                                name="password" 
                                id="passwordFirst" 
                                placeholder="Пароль"
                                value={formValues.password}
                                onChange={onInputChange}
                                required
                            />                   

                            <ModalBtnEnter 
                                id="SignUpEnter" 
                                type="submit"
                                style={{ opacity: isFormValid ? 1 : 0.5 }} 
                                disabled={!isFormValid}
                            >
                                <ModalBtnEnterLink>Зарегистрироваться</ModalBtnEnterLink>
                            </ModalBtnEnter>                      

                            <ModalFormGroup>
                                <ModalFormGroupText>Уже есть аккаунт?</ModalFormGroupText>
                                <ModalFormGroupLink onClick={goToLogin}>Войдите здесь</ModalFormGroupLink>
                            </ModalFormGroup>

                        </ModalFormLogin>
                    </ModalBlock>
                </Modal>
            </ContainerSignin>
        </Wrapper>
    )
};

export default RegisterPage;