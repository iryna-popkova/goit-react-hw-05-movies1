import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;

export const NavLink = styled.li`
  color: darkblue;
  border: solid grey;

  &.active {
    color: purple;
    font-weight: bold;
  }
`;
