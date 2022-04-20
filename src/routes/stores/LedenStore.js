import { writable } from 'svelte/store';

const LedenStore = writable([
    {
    voornaam: 'Teun',
    achternaam: 'van Lith',
    gebruikersnaam: 'Teuntje101',
    profielAfbeelding: 'https://i.ibb.co/NNWbLYr/Avatar-Male-01.jpg',
    },
    {
    voornaam: 'Pim',
    achternaam: 'van Deks',
    gebruikersnaam: 'dfda',
    profielAfbeelding: 'https://i.ibb.co/NNWbLYr/Avatar-Male-01.jpg',
    }, 
    {
    voornaam: 'Boes',
    achternaam: 'van Tor',
    gebruikersnaam: 'T9je101',
    profielAfbeelding: 'https://i.ibb.co/NNWbLYr/Avatar-Male-01.jpg',
    },   
]);

export default LedenStore;