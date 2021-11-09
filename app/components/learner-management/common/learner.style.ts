import styled from 'styled-components';

export const ImageStyle = styled.img`
  height: 100px;
  width: 250px;
`;

export const BoxStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.04);
  padding: 20px;
  margin-top: 0px;
  width: 100%;

  @media (max-width: 800px) {
    width: 95%;
    margin: 5px;
  }
`;

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.04);
  padding: 20px;
  margin-top: 0px;
  width: 33%;

  @media (max-width: 800px) {
    width: 95%;
    margin: 5px;
  }
`;

export const ButtonStyle = styled.button`
  margin: 5px auto 0px auto;
  display: block;
  border-radius: 4px;
  background-color: #6495ed;
  border: none;
  color: white;
  font-weight: 600;
  font-size: 12px;
  padding: 8px 20px;
  cursor: pointer;
  text-align: right;
  display: block;
`;

export const ItemStyle = styled.div`
  display: flex;
  flex-direction: column;
  pedding: 0px 0px;
  text-align: justify;
  display: block;

  .text {
    font-weight: bold;
  }
`;

export const DescriptionStyle = styled.div`
  display: flex;
  flex-direction: column;
  pedding: 0px 0px;
  text-align: justify;
  display: block;
  white-space: pre-line;
  word-break: break-all .text {
    font-weight: bold;
  }
`;

export const ItemsStyle = styled.div`
  border: 1px solid #f3f3f3;
  box-shadow: 1px 1px 1px 0px rgba(0.1, 0.1, 0.1, 0.1);
  border-radius: 5px;
  margin: 5px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  font-size: 12px;

  white-space: nowrap;
  width: 100%;
  overflow: hidden;

  text-overflow: ellipsis;
`;

export const ItemshiddedStyle = styled.div`
  margin: 0px 0;
  display: flex;
  align-items: right;
  justify-content: space-around;
  padding: 10px;
  font-size: 12px;
  white-space: nowrap;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StyledFooter = styled.div`
  font-family: 'Roboto', sans-serif;
  color: #2699fb !important;
  margin: 0px 0;
  display: flex;
  align-items: right;
  padding: 0px;
  font-size: 12px;
`;

export const StyledFooterLeft = styled.div`
  text-align: left;
  margin: 0px 0;
  display: flex;
  align-items: right;
  padding: 0px;
  font-size: 12px;
`;

export const StyledHeader = styled.div`
  color: white;
  margin: 0px 0;
  display: flex;
  align-items: right;
  padding: 0px;
  font-size: 12px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.inside};
  border-radius: 5px;
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.04);
  padding: 20px;
  width: 48%;

  @media (max-width: 800px) {
    width: 95%;
    margin: 5px;
  }
`;

export const Botao = styled.button`
  margin: 15px auto 0px auto;
  display: block;
  border-radius: 20px;
  background-color: #41d3be;
  border: none;
  color: white;
  font-weight: 600;
  font-size: 14px;
  padding: 8px 20px;
  cursor: pointer;
`;

export const Icone = styled.img`
  height: 25px;
  width: 25px;
`;

export const IconeTema = styled(Icone)`
  filter: ${({ theme }) => theme.filter};
`;

export const StyledItems = styled.div`
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin: 2px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  font-size: 12px;
`;
