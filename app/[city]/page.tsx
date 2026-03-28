"use client";

import {useParams} from "next/navigation";
import useSWR from "swr";
import WeatherCard from "../components/weatherCard";
import styled from "styled-components";
import {Weather} from "@/app/interfaces/weather";

const WeatherBackgroundWrapper = styled.main`
    width: 80vw;
    margin: auto;
    background-color: skyblue;
    padding: 2rem;
`;

const NameOfCity = styled.h1`
    color: blueviolet;
    font-size: 3rem;
    text-align: center;
    text-transform: capitalize;
`;

const Subtitle = styled.p`
    text-align: center;
    color: darkslateblue;
    font-size: 3rem;
    margin-bottom: 1.5rem;
`;

const CardTheming = styled.div`
    display: flex;
    flex-flow: row wrap;
    border: beige 5px solid;
    background-color: beige;
    border-radius: 12px;
    padding: 1rem;
    gap: 0.5rem;
`;

const LoadingMessage = styled.div`
    text-align: center;
    font-size: 1.5rem;
    color: darkslateblue;
    padding: 3rem;
`;

const ErrorMessage = styled.div`
    text-align: center;
    font-size: 1.5rem;
    color: red;
    padding: 3rem;
`;

const Divider = styled.hr`
    border: none;
    border-top: 2px solid lavender;
    margin-bottom: 1.5rem;
`;

export default function CityPage() {

    const params = useParams();

    const {data, error} = useSWR(`/api/getWeatherData?city=${params.city}`,
        (url) =>
            fetch(url)
                .then((res) => res.json())
    );

    if (error) return <ErrorMessage>Failed to load</ErrorMessage>;
    if (!data) return <LoadingMessage>Loading...</LoadingMessage>;

    const weekdays = data?.days || [];

    return (
        <WeatherBackgroundWrapper>
            <NameOfCity>{params.city}</NameOfCity>
            <Subtitle>Bidipta's Awesomeazing 7-day weather forecast</Subtitle>
            <Divider />
            <CardTheming>
                {
                    weekdays.map((weather: Weather, i: number) =>
                        (
                            <WeatherCard
                                key={i}
                                datetime={weather.datetime}
                                conditions={weather.conditions}
                                description={weather.description}
                                tempmin={weather.tempmin}
                                tempmax={weather.tempmax}
                                feelslike={weather.feelslike}
                                precip={weather.precip}
                                precipprob={weather.precipprob}
                            />
                        )
                    )
                }
            </CardTheming>
        </WeatherBackgroundWrapper>
    );
}