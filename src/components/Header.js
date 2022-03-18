import React, { useState } from 'react';
import styled from "styled-components";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

function Header() {
    const [burgerstatus, setBurgerStatus] = useState(false);

    return (
        <Container>
            <Button>
                <img src="/images/logo.svg" alt="Tesla Logo" />
            </Button>
            <Menu>
                <Button>Model S</Button>
                <Button>Model 3</Button>
                <Button>Model X</Button>
                <Button>Model Y</Button>
                
            </Menu>
            <RightMenu>
                <Button>Shop</Button>
                <Button>Tesla Account</Button>
                <CustomMenu onClick={()=>setBurgerStatus(true)}/>
            </RightMenu>
            <BurgerNav show = { burgerstatus }>
                <CloseWrapper>
                    <CustomClose onClick={()=>setBurgerStatus(false)} />
                </CloseWrapper>
                <li><Button>MODEL S</Button></li>
                <li><Button>MODEL 3</Button></li>
                <li><Button>MODEL X</Button></li>
                <li><Button>MODEL Y</Button></li>
                <li><Button>Existing Inventory</Button></li>
                <li><Button>Used Inventory</Button></li>
                <li><Button>Trade-in</Button></li>
                <li><Button>Cybertruck</Button></li>
                <li><Button>Roadster</Button></li>
            </BurgerNav>

        </Container>            
    );
}

export default Header

const Container = styled.div `
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
`

const Button = styled.div `
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;

    @media(max-width: 768px) {
        display: none;
    }
`

const Menu = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
`
const RightMenu = styled.div `
    display: flex;
    align-items: center;
`

const CustomMenu = styled(MenuIcon) `
    cursor: pointer;
`

const BurgerNav = styled.div `
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: white;
    width: 300px;
    z-index: 16;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.2s;
    li{
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, .2);

        a{
            font-weight: 600;
        }
    }
`

const CustomClose = styled(CloseIcon) `
    cursor: pointer;
`

const CloseWrapper = styled.div `
    display: flex;
    justify-content: flex-end;
`