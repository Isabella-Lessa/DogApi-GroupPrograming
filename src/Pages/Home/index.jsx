import React, {useEffect, useState} from "react";
import axios from "axios";
import * as S from './style'

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
        <S.Container>
            <S.CardDog>
                <S.BoxImg src={dog} alt={`dog random`}/>
            </S.CardDog>
        </S.Container>
    )
}