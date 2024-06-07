import React from 'react';
import { Link } from 'react-router-dom';
import {
  PopExitWrapper,
  PopExitContainer,
  PopExitBlock,
  PopExitTitle,
  PopExitForm,
  PopExitFormGroup,
  PopExitButtonYes,
  PopExitButtonNo
} from './PopExit.styled';

import { useUser } from '../../../hooks/useUser';

const PopExit = () => {

  const {logoutUser} = useUser();

  return (
    <PopExitWrapper id="popExit">
      <PopExitContainer>
        <PopExitBlock>
          <PopExitTitle>
            <h2>Выйти из аккаунта?</h2>
          </PopExitTitle>
          <PopExitForm id="formExit" action="#">
            <PopExitFormGroup>
              <PopExitButtonYes>
                <a onClick={logoutUser}>Да, выйти</a>
              </PopExitButtonYes>
              <PopExitButtonNo>
                <Link to={'/'}>Нет, остаться</Link>
              </PopExitButtonNo>
            </PopExitFormGroup>
          </PopExitForm>
        </PopExitBlock>
      </PopExitContainer>
    </PopExitWrapper>
  );
};

export default PopExit;