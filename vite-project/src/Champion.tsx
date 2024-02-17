export interface Champion {
    type: string;
    format: string;
    version: string;
    data: {
    //Because championName changes depending on champ.Json, we need to use [] for dynamic
        [championName: string]: {
        id: string;
        key: string;
        name: string;
        title: string;
        image: {
            full: string;
            sprite: string;
            group: string;
            x: number;
            y: number;
            w: number;
            h: number;
        };
        skins: {
            id: string;
            num: number;
            name: string;
            chromas: boolean;
        }[];
        lore: string;
        blurb: string;
        allytips: string[];
        enemytips: string[];
        tags: string[];
        partype: string;
        info: {
            attack: number;
            defense: number;
            magic: number;
            difficulty: number;
        };
        stats: {
            hp: number;
            hpperlevel: number;
            mp: number;
            mpperlevel: number;
            movespeed: number;
            armor: number;
            armorperlevel: number;
            spellblock: number;
            spellblockperlevel: number;
            attackrange: number;
            hpregen: number;
            hpregenperlevel: number;
            mpregen: number;
            mpregenperlevel: number;
            crit: number;
            critperlevel: number;
            attackdamage: number;
            attackdamageperlevel: number;
            attackspeedperlevel: number;
            attackspeed: number;
        };
        spells: {
            id: string;
            name: string;
            description: string;
            tooltip: string;
            leveltip: {
            label: string[];
            effect: string[];
            };
            maxrank: number;
            cooldown: number[];
            cooldownBurn: string;
            cost: number[];
            costBurn: string;
            datavalues: any; // Replace with specific type if available
            effect: (number | null)[][];
            effectBurn: (string | null)[];
            vars: any[]; // Replace with specific type if available
            costType: string;
            maxammo: string;
            range: number[];
            rangeBurn: string;
            image: {
            full: string;
            sprite: string;
            group: string;
            x: number;
            y: number;
            w: number;
            h: number;
            };
            resource: string;
        }[];
        passive: {
            name: string;
            description: string;
            image: {
            full: string;
            sprite: string;
            group: string;
            x: number;
            y: number;
            w: number;
            h: number;
            };
        };
        recommended: any[]; // Replace with specific type if available
        };
    };
}

// interface Champion {
//     type: string;
//     format: string;
//     version: string;
//     data: {
//     //Because championName changes depending on champ.Json, we need to use [] for dynamic
//       [championName: string]: {
//         id: string;
//         key: string;
//         name: string;
//         title: string;
//         image: {
//           full: string;
//           sprite: string;
//           group: string;
//           x: number;
//           y: number;
//           w: number;
//           h: number;
//         };
//         skins: {
//           id: string;
//           num: number;
//           name: string;
//           chromas: boolean;
//         }[];
//         lore: string;
//         blurb: string;
//         allytips: string[];
//         enemytips: string[];
//         tags: string[];
//         partype: string;
//         info: {
//           attack: number;
//           defense: number;
//           magic: number;
//           difficulty: number;
//         };
//         stats: {
//           hp: number;
//           hpperlevel: number;
//           mp: number;
//           mpperlevel: number;
//           movespeed: number;
//           armor: number;
//           armorperlevel: number;
//           spellblock: number;
//           spellblockperlevel: number;
//           attackrange: number;
//           hpregen: number;
//           hpregenperlevel: number;
//           mpregen: number;
//           mpregenperlevel: number;
//           crit: number;
//           critperlevel: number;
//           attackdamage: number;
//           attackdamageperlevel: number;
//           attackspeedperlevel: number;
//           attackspeed: number;
//         };
//         spells: {
//           id: string;
//           name: string;
//           description: string;
//           tooltip: string;
//           leveltip: {
//             label: string[];
//             effect: string[];
//           };
//           maxrank: number;
//           cooldown: number[];
//           cooldownBurn: string;
//           cost: number[];
//           costBurn: string;
//           datavalues: any; // Replace with specific type if available
//           effect: (number | null)[][];
//           effectBurn: (string | null)[];
//           vars: any[]; // Replace with specific type if available
//           costType: string;
//           maxammo: string;
//           range: number[];
//           rangeBurn: string;
//           image: {
//             full: string;
//             sprite: string;
//             group: string;
//             x: number;
//             y: number;
//             w: number;
//             h: number;
//           };
//           resource: string;
//         }[];
//         passive: {
//           name: string;
//           description: string;
//           image: {
//             full: string;
//             sprite: string;
//             group: string;
//             x: number;
//             y: number;
//             w: number;
//             h: number;
//           };
//         };
//         recommended: any[]; // Replace with specific type if available
//       };
//     };
//   }