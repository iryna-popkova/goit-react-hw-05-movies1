import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const MovieDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px;
  border: 1px solid grey;
  border-radius: 10px;
  overflow: hidden;
`;

export const MovieImg = styled.img`
  width: 250px;
  height: auto;
  display: block;
`;

export const MovieInfoDiv = styled.div`
  padding: 20px;
`;

export const MovieTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
  color: tomato;
`;

export const UserScore = styled.p`
  font-size: 10px;
  font-weight: 500;
  color: darkblue;
  margin-bottom: 15px;
`;

export const Overview = styled.p`
  font-size: 16px;
  margin-bottom: 15px;
  color: blueviolet;
`;

export const Genres = styled.p`
  font-size: 16px;
  margin-bottom: 15px;
  color: aquamarine;
  font-weight: bold;
`;

export const GenresList = styled.ul`
  padding: 0;
  margin: 0;
`;

export const GenresItem = styled.li`
  font-size: 10px;
  margin-right: 10px;
  color: green;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 15px;
  margin-top: 100px;
`;

export const MovieLink = styled(NavLink)`
  padding: 8px;
  border-radius: 4px;
  color: navy;
  font-weight: bold;
  }
`;

export const BackPageLink = styled(Link)`
  background-color: aqua;
  color: navy;
  padding: 10px 20px;
  border-radius: 10px;
  text-decoration: none;
  display: inline-block;
  margin-top: 20px;
  margin-left: 30px;
`;
