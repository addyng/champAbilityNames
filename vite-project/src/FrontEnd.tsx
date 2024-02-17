import { useState } from 'react';
import {Champion} from './Champion.tsx'
// import AatroxImage from '../../dragontail-14.3.1/img/champion/tiles/Aatrox_0.jpg'
// import Aatrox from '../../dragontail-14.3.1/14.3.1/data/en_US/champion/Aatrox.json';

function FrontPage() {
    const [champion, setChampion] = useState<Champion[]>([]);
    const [championNames, setChampionNames] = useState<string[]>([]);
    const [imagePaths, setImagePaths] = useState<string[]>([]);

    const loadChampion = async (championName) => {
        try {
            const championData = await import(`../../dragontail-14.3.1/14.3.1/data/en_US/champion/${championName}.json`);
            const champImage = await import(`../../dragontail-14.3.1/img/champion/tiles/${championName}_0.jpg`);
            // prevNames & prevChampions are arrow functions
            // use await here so it preserves the order as user input when outputting
            // need to await because async does things simultaneously so whichever is faster, will be first
            setChampion(prevChampions => [...prevChampions, championData.default]);
            setChampionNames(prevNames => [...prevNames, championName]);
            setImagePaths(prevPaths => [...prevPaths, champImage.default]);
        } catch (error) {
            console.log(`failed to load champion data`);
        }
    }
    
    const handleInput = (event) => {
        if (event.key == 'Enter') {
            setChampion([]);
            setChampionNames([]);
            setImagePaths([]);
            const championNamesList = event.target.value.split(',');
            championNamesList.forEach(async champName => {
                await loadChampion(champName.trim());
            })
        }
    }

    return(
        <div id="rootElement">
            <input type="text" onKeyDown={handleInput}></input>
            {/* data[championNames[0]] works because data is an object with keys of type string and since we used dynamic [], need to do championNames[0] */}
            {/* <div>{champion[0] ? JSON.stringify(champion[0].data[championNames[0]].spells[0].id) : 'loool'}</div> */}
            {/* <div>{champion[1] ? JSON.stringify(champion[1].data[championNames[1]].spells) : 'loool'}</div> */}
            {/* <div>{champion[2] ? JSON.stringify(champion[2].data[championNames[2]].spells) : 'loool'}</div> */}
            {/* <div>{champion[0] ? champion[0].data[championNames[0]].spells[0].id : 'loool'}</div> */}


            {/* <div>{champion ? JSON.stringify(champion.data.Aatrox.spells[0].name) : ''}</div> */}
            {/* <div>{qSpell ? JSON.stringify(qSpell) : ''}</div> */}
            <div>
                {champion.map((champ, index) => (
                    <div key={index}>
                        {/* <div>{championNames[index]}</div> */}
                        {/* <div>{imagePaths[index]}</div> */}
                        <img src={imagePaths[index]} style={{ width: '250px', height: '250px' }}></img>
                        {champ.data[championNames[index]].spells.map((spell, spellIndex) => (
                            <div key={spellIndex}>
                                {/* <div>{spell.id}: {spell.name}: {spell.description}</div>  */}
                                <div>{spell.id}: {spell.name}</div> 

                            </div>
                        ))}
                        <div>Passive: {champ.data[championNames[index]].passive.name}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FrontPage