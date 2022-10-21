import styled from 'styled-components';

export const Main = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  height:100vh;
  overflow:hidden;
  margin:0;
  background-image: linear-gradient(90deg, #7d5fff, #7158e2);
`;
// TODO: explorar la posibilidad de hacer nesting de components para poder usar ${props => props.active} desde el padre
export const SearchSurprise = styled.div`
  position: relative;
`;

// .attrs permite definir que tipo de input es, por ejemplo checkbox, radio, search etc.
export const SearchBox = styled.input.attrs({ type: "search" })`
  background-color: #fff;
  border: 0;
  font-size: 18px;
  height:50px;
  width: ${props => props.active ? "200px": "50px"};
  transition: width 250ms ease-in-out;
  padding-left: 10px;
  &:focus {
    outline: none;
  }
`;

export const SearchButton = styled.button`
  background-color: #fff;
  border: 0;
  cursor: pointer;
  font-size: 24px;
  position: absolute;
  top: 0;
  left: 0;
  height: 50px;
  width: 50px;
  transition: transform 250ms ease-in-out;
  ${props => props.active ? "transform: translateX(198px);": null}
  &:focus {
    outline: none;
  }
`;
