import React, { useState } from 'react';
import * as S from './Header.styled';
import { Link } from 'react-router-dom';
import { useUser } from '../../hooks/useUser';

const Header = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const { user } = useUser();

  const toggleModal = () => {
    setModalVisible(prevModalVisible => !prevModalVisible);
  };

  return (
    <S.Header>
      <S.Container>
        <S.Block>
          <div className="header__logo _show _light">
            <a href="" target="_self">
              <S.HeaderLogo src="/images/logo.png" alt="logo" />
            </a>
          </div>
          <S.Nav>
            <S.CreateTaskBtn id="btnMainNew">
              <Link to={'/newcard'}>Создать новую задачу</Link>
            </S.CreateTaskBtn>

            <S.UserLink href="#user-set-target" className="header__user _hover02" onClick={toggleModal}>{user.name}</S.UserLink>

            <S.UserPopup id="user-set-target" className={modalVisible ? 'visible' : ''}>
              <S.UserName>{user.name}</S.UserName>
              <S.UserEmail>{user.login}</S.UserEmail>

              <S.LogoutButton type="button" className="_hover03">
                <Link to={'/exit'}>Выйти</Link>
              </S.LogoutButton>
            </S.UserPopup>
          </S.Nav>
        </S.Block>
      </S.Container>
    </S.Header>
  );
};

export default Header;