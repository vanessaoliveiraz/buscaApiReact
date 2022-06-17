import styled from 'styled-components';

export const DivPersonalizada = styled.div`
    width: ${props => props.width } ;
    border-radius: 20px;
    padding: 50px;
    top: ${props => props.top} ; 
    left: ${props => props.left} ;
    transform: translate(-50%, -50%);
    color: ${props => props.color} ;
    background: ${props => props.background} ; 
    position: absolute;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
   
    h1 {
        color: plum;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 40px;
        text-align: center;
        margin-top: 15px;
        padding: 10px;
        margin-bottom: 30px;
    }

    .esqueci-senha {
        text-align: right;
        color: plum;
        font-size: 12px;
        font-style: italic;
    }

    .esqueci-senha>a{
        text-decoration:none;
    }

`;
    export const NavBar = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #f0ffff;
    

    li {
        float: left;

        :last-child {
            float: right
        }
    }

    li a {
        display: block;
        color: black;
        padding: 15px 17px;
        text-decoration: none;
        text-align: center;
        font-size: 20px;
        font-family: Arial, Helvetica, sans-serif;


        :hover{
            background-color: plum;
        }
    }
    
 `;
