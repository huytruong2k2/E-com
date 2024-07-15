import styled from "styled-components";
import { Button } from 'antd'

export const WrapperTypeProduct = styled.div`
        display: flex;
        align-items: center;
        gap:24px;
        justify-content: flex-start;
        border-bottom: 1px solid red;
        height: 44px;
`

export const WrapperButton = styled(Button)`
    & :hover {
        
        }
    }
`

export const WrapperProducts = styled.div`
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top:20px;
    flex-wrap: wrap;
`