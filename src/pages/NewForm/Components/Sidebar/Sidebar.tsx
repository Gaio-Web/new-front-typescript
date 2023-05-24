import React, { useState } from 'react';
import { FaBars, FaHome, FaTimes, FaAngleLeft} from 'react-icons/fa';
import styled from 'styled-components';

import { useNavigate as useHistory } from 'react-router-dom';

import LogoSemFundo from '../../../../assets/Component45.png';
import LogoIcon from '../../../../assets/Component45.png';

import {IoIosFitness } from 'react-icons/io';

const SidebarWrapper = styled.div<{ isCollapsed: boolean }>`
  background-color: #141215;
  height: 100%;
  flex-shrink: 0;
  width: ${props => props.isCollapsed ? '5rem' : '20rem'};
  overflow-x: hidden;
  transition: width 0.5s;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

const SidebarHeader = styled.div<{ isCollapsed: boolean}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 1rem;
  transition: all 0.3s ease-in-out;
  flex-direction: ${props => props.isCollapsed ? 'column-reverse' : 'row'};
  gap: 1rem;
  & img {
    width: 60%;
  }
`;

const SidebarLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SidebarLink = styled.li<{ isCollapsed: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 4rem;
  gap: 1rem;

  a {
    font-weight: normal;
    color: white;

    width: ${props => props.isCollapsed ? '80%' : '100%'};
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: ${props => props.isCollapsed ? 'center' : ''};

    border-radius: ${props => props.isCollapsed ? '8px' : ''};

    gap: 1rem;

    font-size: 1.2rem;

    text-decoration: none;

    cursor: pointer;
    transition: all 0.3s ease;

    & > svg {
    padding-left: ${props => props.isCollapsed ? '' : '1rem'};
    width: 1.3rem;
    height: auto;
    fill: #fff;
  }

  :hover {
    background-color: rgba(255,255,255,0.05);
    font-weight: bold;
    border-left: ${props => props.isCollapsed ? 'none' : '0.3rem solid #c7a465;'};
  }
  }
`;

const ToggleButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 24px;
  color: white;
  cursor: pointer;
`;

function Sidebar(): JSX.Element {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

    const handleToggle = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <SidebarWrapper isCollapsed={isCollapsed}>
            <SidebarHeader isCollapsed={isCollapsed}>
                {isCollapsed ? <img src={LogoIcon} /> : <img src={LogoSemFundo}/>}
                <ToggleButton onClick={handleToggle}>
                    {isCollapsed ? <FaBars /> : <FaAngleLeft />}
                </ToggleButton>
            </SidebarHeader>
            <hr style={{height: '1px', border: 'none', width: '90%', backgroundColor: 'rgba(255,255,255,0.08)'}}/>
            <SidebarLinks>
                <SidebarLink isCollapsed={isCollapsed}>
                    {isCollapsed ? (<a href="/home"><FaHome/></a>) : ( <> <a href="/home"><FaHome/> Home</a> </>)}
                </SidebarLink>
                <SidebarLink isCollapsed={isCollapsed}>
                    {isCollapsed ? (<a href="/fitness"><IoIosFitness/></a>) : ( <> <a href="/fitness"><IoIosFitness/> Fitness</a> </>)}
                </SidebarLink>
            </SidebarLinks>
        </SidebarWrapper>
    );
}

export { Sidebar as NewSidebar};
