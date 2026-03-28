
export type Weather={
    datetime: string;
    conditions: string;
    description: string;
    tempmin: number;
    tempmax: number;

    //shows the real feal numbers
    feelslike: number;      
    


    //shows the precipiation
    precip: number;         
    precipprob: number;     
}