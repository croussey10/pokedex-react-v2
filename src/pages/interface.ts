export interface Pokemon {
    id: number;
    name: string;
    abilities: {
        ability: {
            name: string
        }
    }[];
    sprites: {
        other: {
            "official-artwork": {
                front_default: string
            }
        }
    };
    cries: {
        latest: string
    };
    stats: {
        stat: {
            name: string
        }
        base_stat: number
    }[]
}