import React, { useState } from "react";
import DatePicker from "react-datepicker";
import styled from "styled-components";
import "react-datepicker/dist/react-datepicker.css";

const StyledDatePicker = styled(DatePicker)`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 10px;
    height: 35px;
    outline: none;
    border-radius: 3px;
    border: 1px solid #ccc;
    transition: all 0.2s ease-in-out;
    &:hover {
        border-color: #00acef;
    }
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const DateContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    `;

interface AvailabilityProps {
    startDate: Date,
    endDate: Date,
    setStartDate: Function,
    setEndDate: Function,
}

const Availability = (props: AvailabilityProps) => {

    const checkEndDate = (date: Date) => {
        date.getTime() > props.startDate.getTime()
            ? props.setEndDate(date)
            : props.setEndDate(props.startDate)
    }

    return (
        <Container>
            <DateContainer>
                Start Date
                <StyledDatePicker
                    selected={props.startDate}
                    onChange={(date: Date) => props.setStartDate(date)}
                />
            </DateContainer>
            <DateContainer>
                End Date
                <StyledDatePicker
                    selected={props.endDate}
                    onChange={(date: Date) => checkEndDate(date)}
                />
            </DateContainer>
        </Container>

    );
};


export default Availability;