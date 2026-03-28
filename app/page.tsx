"use client";

import styled from "styled-components";

import {useState} from "react";
import Link from "next/link";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: linear-gradient(135deg, darkslategray, teal, steelblue);
    font-family: 'Georgia';
    gap: 1.2rem;
`;

const Title = styled.h1`
    font-size: 2.5rem;
    color: lightcyan;
    letter-spacing: -0.02em;
    margin-top: 0;
    margin-bottom: 0;
    text-shadow: 0 0 20px cornflowerblue;
`;

const Subtext = styled.p`
    color: lightsteelblue;
    font-size: 1rem;
    margin-top: 0;
    margin-bottom: 0;
    letter-spacing: 0.03em;
`;

export default function Home() {

    const [city, setCity] = useState("");

    return (
        <StyledDiv>
            <Title>Find the Weather in any city!</Title>
            <Subtext>Enter a city name below to get the current weather</Subtext>
            <input type="text" value={city} placeholder="City name" onChange={(e) => setCity(e.target.value)}/>
            <Link href={`/${city}`}>Get Weather</Link>
        </StyledDiv>
    );
}
