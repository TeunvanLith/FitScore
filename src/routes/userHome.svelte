<script>
        import { createEventDispatcher } from 'svelte';
        const dispatch = createEventDispatcher();
        export let currentLid;
</script>

<div class="containerProfiel" >
    <img class="profielIcon" alt="profilePicture" src="{ currentLid.profielAfbeelding}">
    
    <p class="gebruikersNaam">{currentLid.voornaam} {currentLid.achternaam}</p>
    <p class="profielNaam">Welkom, {currentLid.gebruikersnaam}</p>
</div>

<div id="backToMain" on:click={ () => {dispatch('toggleMain')}}><i class="fa-solid fa-circle-chevron-left"></i></div>

<style>

    #backToMain {
        position: absolute;
        right: 50px;
        top: 800px;
        height: 100px;
        width: 100px;
        border-radius: 10px;
        text-align: center;
        color: white;
        line-height: 60px;
        font-size: 100px;
    }

    #backToMain:hover {
        color: orange;
    }

    .containerProfiel {
            width: 200px;
            height: 200px;
            background: linear-gradient(90deg, rgb(32, 32, 32) 0%, rgb(24, 24, 24) 100%);
            color: white;
            box-shadow: 4px 4px 4px -4px #000000;
            box-shadow: inset 4px 4px 4px -4px #000000;
            border-radius: 0 0 10px 10px;
            display: flex;
            justify-content: center;
            flex-direction: column;
            font-weight: 500;
            margin: auto;	
            transition: 0.4s ease-in-out;
            position: relative;
        }

        .profielIcon {
            box-sizing: border-box;
            width: 100px;
            height: 100px;
            margin: 0 auto;
            border-radius: 50px;
            border: 2px solid rgb(190, 130, 0);
        }

        .profielNaam,
        .gebruikersNaam {
            margin-top: 10px;
            text-align: center;
        }

        .gebruikersNaam {
            font-size: 10px;
            text-transform: italic;
        }
</style>