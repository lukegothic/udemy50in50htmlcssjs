import styled from 'styled-components';

export const PhotoCarousel = styled.div`
  display: flex;
  gap: 10px;
`;

// Pseudo-classes   => :  (eg: focus)
// Pseudo-selector  => :: (eg: after)

// TODO: intentar dar estilos al props.children, por ahora agua

export const Photo = styled.div`
  background: url(${props => props.background});
  width: ${props => props.active ? "800px" : "50px"};
  height: 600px;
  border-radius: 10px;
  transition: all 250ms ease-in-out;
  cursor: ${props => props.active ? "auto" : "pointer" };
  position: relative;
  &::after {
    content: '${props => props.caption}';
    color: #fff;
    font-weight: bold;
    opacity: ${props => props.active ? "1" : "0" };
    transition: opacity 250ms ease-in-out;
    position: absolute;
    bottom: 10px;
    left: 10px;
  }
  $ ${props => props.children} {
    color: #fff;
  }
`;