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
`;

const CardTheming = styled.div`
    display: flex;
    flex-flow: row wrap;
    border: beige 5px solid;
`;

export default function CityPage() {

    const params = useParams();

    // Fetch weather data with SWR
    const {data, error} = useSWR(`/api/getWeatherData?city=${params.city}`,
        (url) =>
            fetch(url)
                .then((res) => res.json())
    );


    if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading...</div>;

    
    const weekdays = data?.days || [];

   return (
    <WeatherBackgroundWrapper>
        <NameOfCity>{params.city}</NameOfCity>
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