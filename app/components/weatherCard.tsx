import styled from "styled-components";
import {Weather} from "@/app/interfaces/weather";

const WeatherCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    border: 1px solid black;
    margin: 1rem;
    width: 200px;
    border-radius: 10px;
    background-color: #1a1a1a;
`;
const Timeofday = styled.h2`
    color: cyan;
    font-size: 1rem;
    margin-bottom: 0.25rem;
`;

const Conditions = styled.p`
    color: white;
    font-weight: bold;
    margin-bottom: 0.25rem;
`;

const Details = styled.p`
    color: darkgray;
    font-size: 0.85rem;
    margin-bottom: 0.25rem;
`;

const TempRow = styled.p`
    color: salmon;
    margin-bottom: 0.25rem;
`;

const FeelsLike = styled.p`
    color: orange;
    margin-bottom: 0.25rem;
`;

const Precip = styled.p`
    color: cornflowerblue;
    margin-bottom: 0.25rem;
`;


export default function WeatherCard(props: Weather){
    return(
        <WeatherCardWrapper className="weather-card">
            <Timeofday>{props.datetime}</Timeofday>
            <Conditions>{props.conditions}</Conditions>
            <Details>{props.description}</Details>
            <TempRow>🌡 {props.tempmin}° - {props.tempmax}°</TempRow>
            <FeelsLike>🤔 Feels like {props.feelslike}°</FeelsLike>
            <Precip>🌧 {props.precipprob}% chance · {props.precip} in</Precip>
        </WeatherCardWrapper>
    )
}
