import styled from "styled-components";

const HideScrollBar = styled.div`
    &::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
`;
export { HideScrollBar };