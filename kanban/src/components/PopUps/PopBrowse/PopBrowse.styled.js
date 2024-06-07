import styled from 'styled-components';

export const PopBrowseWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;

  @media screen and (max-width: 660px) {
    top: 70px;
  }
`;

export const PopBrowseContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);

  @media screen and (max-width: 660px) {
    padding: 0;
    justify-content: flex-start;
  }
`;

export const PopBrowseBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #FFFFFF;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid #D4DBE5;
  position: relative;

  @media screen and (max-width: 660px) {
    border-radius: 0;
  }

  @media screen and (max-width: 495px) {
    padding: 20px 16px 32px;
  }
`;

export const PopBrowseContent = styled.div`
  display: block;
  text-align: left;

  @media screen and (max-width: 495px) {
    margin-bottom: 20px;
  }
`;

export const PopBrowseTopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const PopBrowseTitle = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

export const EditInput = styled.input`
  width: 370px;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin: 20px 0;
  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94A6BE;
    letter-spacing: -0.14px;
  }

  @media screen and (max-width: 495px) {
    max-width: 100%;
    height: 37px;
  }

`;

export const CategoriesThemeTop = styled.div`
  background-color: '';
  color: '';
  border-radius: 4px;
  padding: 8px 20px;
  opacity: 1;
  
  &._orange {
  background-color: #FFE4C2;
  color: #FF6D00;
  }

  &._green {
    background-color: #B4FDD1;
    color: #06B16E;
  }

  &._purple {
    background-color: #E9D4FF;
    color: #9A48F1;
  }

  &._gray {
    background: #94A6BE;
    color: #FFFFFF;
  }

  &._active-category {
    opacity: 1 !important;
  }
`;

export const Status = styled.div`
  margin-bottom: 11px;
`;

export const StatusText = styled.p`
  margin-bottom: 14px;
`;

export const StatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const StatusTheme = styled.div`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  color: #94A6BE;
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
  cursor: pointer;

  &._hide {
    display: none;
  }

  &._gray {
    background: #94A6BE;
    color: #FFFFFF;
  }
`;

export const StatusThemeText = styled.p`
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
`;

export const PopBrowseWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media screen and (max-width: 660px) {
    display: block;
  }
`;

export const FormBrowse = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
`;

export const FormBrowseBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Descrbtion = styled.label`
    color: #000;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;  
`;

export const TextArea = styled.textarea`
  max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: #EAEEF6;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94A6BE;
    letter-spacing: -0.14px;
  }

  @media screen and (max-width: 495px) {
    max-width: 100%;
  }
`;

export const EditTextArea = styled.textarea`
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;
  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94A6BE;
    letter-spacing: -0.14px;
  }
`;

export const CalendarWrapper = styled.div`
  width: 182px;
  margin-bottom: 20px;

  @media screen and (max-width: 660px) {
    max-width: 340px;
    width: 100%;
  }

  p {
    font-size: 10px;
    padding-left: 15px;
    color: #94A6BE;

    @media screen and (max-width: 660px) {
      font-size: 14px;
    }
  }

  p span {
    color: #000000;
  }

  @media screen and (max-width: 495px) {
    max-width: 100%;
  }
`;

export const CalendarTitle = styled.p`
  margin-bottom: 14px;
  padding: 0 7px;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const ThemeDownCategories = styled.div`
  display: none;
  margin-bottom: 20px;
`;

export const CategoriesText = styled.p`
  margin-bottom: 14px;
`;

export const CategoriesTheme = styled.div`
  background-color: #FFE4C2;
  color: #FF6D00;
  border-radius: 4px;
  padding: 8px 20px;
  opacity: 1;
`;

export const PopBrowseBtnBrowse = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;

  @media screen and (max-width: 495px) {
    display: block;
  }

  button {
    height: 30px;
    margin-bottom: 10px;
    padding: 0 14px;

    @media screen and (max-width: 495px) {
      width: 100%;
      height: 40px;
    }
  }

  .btn-group {
    button {
      margin-right: 8px;
    }

    @media screen and (max-width: 495px) {
      margin-right: 0px;
    }
  }
`;

export const BtnGroup = styled.div`
  margin-right: 8px;

  
`;

export const Button = styled.button`
  border-radius: 4px;
  outline: none;

  &._btn-bor {
    border: 0.7px solid #565EEF;
    background: transparent;
    color: #565EEF;

    a {
      color: #565EEF;
    }
  }

  &._btn-bg {
    background: #565EEF;
    border: none;
    color: #FFFFFF;

    a {
      color: #FFFFFF;
    }
  }

  &._hover01:hover {
    background-color: #33399b;
  }

  &._hover03:hover {
    background-color: #33399b;
    color: #FFFFFF;

    a {
      color: #FFFFFF;
    }
  }
`;

export const BtnBrowseEdit = styled(Button)`
  &._btn-bor {
    margin-right: 8px;

    @media screen and (max-width: 495px) {
      margin-right: 0px;
    }
  }
`;

export const BtnBrowseCancel = styled(Button)`
  &._btn-bor {
    margin-left: 8px;

    @media screen and (max-width: 495px) {
      margin-left: 0px;      
    }
  }
`

export const BtnBrowseDel = styled(Button)`
  &._btn-bor {
    margin-left: 8px;

    @media screen and (max-width: 495px) {
      margin-left: 0px;
    }
  }
`

export const BtnBrowseSave = styled(Button)``;

export const BtnBrowseDelete = styled(Button)``;

export const BtnBrowseClose = styled(Button)`
  a {
    text-decoration: none;
  }
`;


export const BtnEditGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;

  @media screen and (max-width: 495px) {
    display: block;
  }

  button {
    height: 30px;
    margin-bottom: 10px;
    padding: 0 14px;
  }

  .btn-group {
    button {
      margin-right: 8px;
    }
  }
`;

export const BtnEditEdit = styled(Button)`
  &._btn-bg {
    margin-right: 8px;
  }
`;

export const BtnEditDelete = styled(Button)``;

export const BtnEditClose = styled(Button)``;

export const ErrorText = styled.p`
  color: red;
  font-size: 12px;
  margin-top: 5px;
  margin-left: 5px;
  display: block;
`;

export const ErrorTitleText = styled.p`
  color: red;
  position: absolute;
  font-size: 12px;
  top: 110px;
  left: 35px;
`;