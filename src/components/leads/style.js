import styled from "styled-components";

export const LeadsContainer = styled.div`
    background: #EFEEF8;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 130px;
`;

export const LeadsNavbar = styled.div`
    display: flex;
    gap: 12px;
    margin-bottom: 40px;    
    width: 850px;
    height: 44px;
`;

export const MenuWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    width: 128px;
`;

export const Menu = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${(props) => props.$vmenu ? "6px 0 0 6px" : "0 6px 6px 0"};
    border: 1px solid #2C2669;
    min-width: 50%;
    height: 100%;
    cursor: pointer;
    border-right: ${(props) => props.$vmenu ? "none" : ""};
    background: ${(props) => props.active ? '#2C2669' : 'transparent'};
    color: ${(props) => props.active ? 'white' : 'black'};
    &:focus {
        outline: none;
    }
`;

export const Icon = styled.img`
    width: 20px;
    height: 20px;
    filter: ${(props) => props.active ? 'invert(0)' : 'invert(1)'};
`;

export const SearchStudent = styled.div`
    min-width: 200px;
    height: 100%;
    border-radius: 8px;
    border: 1px solid var(--300, #BFBAE3);
    background: var(--Color-7, #FFF);
    display: flex;
    align-items: center;
    gap: 4px;
    margin: 0 12px;
    padding: 12px;
    input {
        width: 100%;
        height: 20px;
        border: none;
        &:focus {
            outline: none;
        }
    }
`

export const SearchSection = styled.select`
    border-radius: 8px;
    border: 1px solid var(--300, #BFBAE3);
    background: var(--Color-7, #FFF);
    min-width: 200px;
    height: 100%;
    padding: 12px;
    cursor: pointer;
`

export const SearchSectionOption = styled.option``

export const ResetFilter = styled.button`
    height: 100%;
    min-width: 125px;
    border-radius: 8px;
    border: 1px solid var(--300, #BFBAE3);
    background: var(--Color-7, #FFF);

    display: flex;
    align-items: center;
    padding: 12px;
    gap: 8px;
    cursor: pointer;

    color: var(--300, #BFBAE3);
    font-family: "Public Sans";
    font-size: 14px;
    margin-right: 14px;
`

export const AddLead = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    min-width: 162px;
    height: 100%;
    border-radius: 6px;
    background: var(--600, linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), #2C2669);
    gap: 8px;
    color: white;
    border: none;
    cursor: pointer;
`