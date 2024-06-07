import { DayPicker } from "react-day-picker";
import styled from "styled-components";

export const CalendarCustom = styled(DayPicker)`
    font-size: 10px;

    --rdp-cell-size: 25px;
    --rdp-caption-font-size: 14px;
    
    .rdp {
        margin: 0;
    }

    .rdp-caption{
        height: 30px;
        color: #94A6BE;
    }

    .rdp-nav_button {
        background: none;
        border: none;
        cursor: pointer;
        padding: 7px;
        color: #94A6BE;
    }

    .rdp-day, .rdp-head_row {
        color: #94A6BE;
    }

    .rdp-day_today {
        background-color: #EAEEF6;;
    }

    .rdp-day_selected:not([disabled]) {
        background-color: #94A6BE;;
        color: white;
    }

    @media screen and (max-width: 660px) {
        font-size: 10px;
    }
`;