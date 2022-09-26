import React, {useEffect, useState} from "react";
import axios from "axios";
import {Container} from './style';

export default function Home() {

    const [dog, setDog] = useState([]);

    useEffect(() => {
        function getDog() {
            axios.get('https://dog.ceo/api/breeds/image/random')
            .then((response) => {
                setDog(response.data.message);
            })
        }

        getDog();
    }, [])

    return(
        <Container>
            <div>
                <img src={dog} alt={`dog random`}/>
            </div>
        </Container>
    )
}