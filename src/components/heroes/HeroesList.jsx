import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

export const HeroesList = ({ publisher }) => {

    // const heroes = getHeroesByPublisher(publisher);

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

    return (
        <div className='card-columns animate__animated animate__fadeIn'>
            <div className='row'>
                {
                    heroes.map(hero => (
                        <HeroCard
                            key={hero.id}
                            isFullScreen="true"
                            {...hero}
                        />

                    ))
                }
            </div>
        </div>
    )
}
