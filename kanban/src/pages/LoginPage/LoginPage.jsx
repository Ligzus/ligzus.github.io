import { useState, useEffect } from "react";
import { ContainerSignin, LoginInput, LoginInputPassword, Modal, ModalBlock, ModalBtnEnter, ModalBtnEnterLink, ModalFormGroup, ModalFormGroupText, ModalFormLogin, ModalTtl, Wrapper, ModalFormGroupLink } from "./Login.styled";
import { useNavigate } from 'react-router-dom';
import { login } from "../../api";
import { useUser } from "../../hooks/useUser";

function LoginPage() {
    let navigate = useNavigate();
    const { loginUser } = useUser();

    const [formValues, setFormValues] = useState({
        login: '',
        password: '',
    });   

    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        const checkFormValidity = () => {
            const isLoginValid = formValues.login.trim() !== '';
            const isPasswordValid = formValues.password.trim() !== '';
            setIsFormValid(isLoginValid && isPasswordValid);
        };

        checkFormValidity();
    }, [formValues]);

    const onInputChange = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const onLogin = async (event) => {
        event.preventDefault();

        const response = await login({
            login: formValues.login,
            password: formValues.password,
        });   

        if (response?.user) {
           loginUser(response.user); 
        }         
    };
    
    return (        
        <Wrapper>
            <ContainerSignin>
                <Modal>
                    <ModalBlock>
                        <div className="modal__ttl">
                            <ModalTtl>Вход</ModalTtl>
                        </div>
                        <ModalFormLogin id="formLogIn" action="#" onSubmit={onLogin}>
                            <LoginInput 
                                type="email" 
                                name="login" 
                                id="formlogin" 
                                placeholder="Эл. почта"
                                value={formValues.login}
                                onChange={onInputChange}
                                required
                            />

                            <LoginInputPassword 
                                type="password" 
                                name="password" 
                                id="formpassword" 
                                placeholder="Пароль"
                                value={formValues.password}
                                onChange={onInputChange}
                                required
                            />                

                            <ModalBtnEnter 
                                id="btnEnter" 
                                type="submit" 
                                style={{ opacity: isFormValid ? 1 : 0.5 }} 
                                disabled={!isFormValid}
                            >
                                <ModalBtnEnterLink>Войти</ModalBtnEnterLink>
                            </ModalBtnEnter>                      

                            <ModalFormGroup>
                                <ModalFormGroupText>Нужно зарегистрироваться?</ModalFormGroupText>
                                <ModalFormGroupLink onClick={() => navigate('/register')}>Регистрируйтесь здесь</ModalFormGroupLink>
                            </ModalFormGroup>
                        </ModalFormLogin>
                    </ModalBlock>
                </Modal>
            </ContainerSignin>
        </Wrapper>
    )
};

export default LoginPage;