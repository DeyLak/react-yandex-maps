import React from 'react'
import { Link, Route } from 'react-router-dom'

import styled from 'styled-components'

const List = styled.ul`
  width: 200px;
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 14px;
`

const NavHeader = styled.li`
  padding: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, .1);
  cursor: pointer;

  &:hover {
    background-color: #f6f5f3;
  }
`

const NavItem = styled.li`
  padding: 10px 10px 10px 30px;
  font-size: 13px;

  &:last-child {
    border-bottom: 1px solid rgba(0, 0, 0, .1);
  }

  &:hover {
    background-color: #f6f5f3;
  }
`

const Navigation = ({path, name, id, onClick, routes, active}) =>
  <Route path={path}>
    {(props) =>
      <List>
        <NavHeader
          id={id}
          onClick={onClick}
        >
          {name}
        </NavHeader>

        {active && routes.map((route) =>
          <NavItem key={route.name}>
            <Link to={path + route.to}>{route.name}</Link>
          </NavItem>
        )}

      </List>
    }
  </Route>

export default Navigation
