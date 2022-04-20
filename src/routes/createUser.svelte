<script>
        import LedenStore from "./stores/LedenStore";
        import {createEventDispatcher} from 'svelte';
        
        let dispatch = createEventDispatcher();
        let errors = {voornaam: '', achternaam: '', gebruikersnaam: ''};
        let voornaam;
        let achternaam;
        let gebruikersnaam;
        let profielAfbeelding;
        export let showCreate;

        const accountToevoegen = () => {
       
        let valid = true;

        if (voornaam.trim().length <= 2) {
            valid = false;
            errors.voornaam = "De voornaam moet langer zijn dan 3 letters.";
            console.log(errors.voornaam, valid);
        } else {
            errors.voornaam = 'Test';
        }
        if (achternaam.trim().length <= 3) {
            valid = false;
            errors.achternaam = "De achternaam moet langer zijn dan 4 letters.";
            console.log(errors.achternaam, valid);
        }  else {
            errors.achternaam = '';
        }
        if (gebruikersnaam.trim().length <= 4) {
            valid = false;
            errors.gebruikersnaam = "De gebruikersnaam moet langer zijn dan 4 letters.";
            console.log(errors.gebruikersnaam, valid);
        } else {
            errors.gebruikersnaam ='';
        }

        console.log(valid)
        if (valid == true) {
        const lid = {
            voornaam,
            achternaam,
            gebruikersnaam,
            profielAfbeelding,
            id: Math.random()
        }

        LedenStore.update(leden => {
            return [lid, ...leden];
        })

        dispatch('close');

    }
    }

</script>

{#if showCreate}

    <h2 class="titleCreateUser">Maak nieuw account aan!</h2>

<form on:submit|preventDefault={ () => {accountToevoegen()}}>

    <input type="text" placeholder="Voornaam" name="voornaam" required bind:value={voornaam}>
    <div class="errors">{ errors.voornaam }</div>
    <input type="text" placeholder="Achternaam" name="achternaam" required bind:value={achternaam}>
    <div class="errors">{ errors.achternaam }</div>
    <input type="text" placeholder="Gebruikersnaam"name="gebruikersnaam" required bind:value={gebruikersnaam}><br>
    <div class="errors">{ errors.gebruikersnaam }</div>
    
    <h2 class="h2Icon"> Kies pictogram: </h2>
    <div class="containerIcon">
        
        <div class="containerRadio">
        <input type="radio" id="icon1" name="icon1" bind:group={profielAfbeelding} value="https://i.ibb.co/C8G1QH9/Avatar-Female-03.jpg" ><br>
        <label for="icon1">Female</label>
        <div class="iconImg"><img src="https://i.ibb.co/C8G1QH9/Avatar-Female-03.jpg"  alt="Female" /></div>
        </div>
        
        <div class="containerRadio">
        <input type="radio" id="icon2" name="icon2" bind:group={profielAfbeelding} value="https://i.ibb.co/NNWbLYr/Avatar-Male-01.jpg">
        <label for="icon2">Male</label>
        <div class="iconImg"><img src="https://i.ibb.co/NNWbLYr/Avatar-Male-01.jpg" alt="Male" /></div>
        </div>

        <div class="containerRadio">
        <input type="radio" id="icon3" name="icon3" bind:group={profielAfbeelding} value="https://i.ibb.co/XWKYVLb/Avatar-Female-01.jpg">
        <label for="icon3">Female</label>
        <div class="iconImg"><img src="https://i.ibb.co/XWKYVLb/Avatar-Female-01.jpg" alt="Female" /></div>
        </div>

        <div class="containerRadio">
        <input type="radio" id="icon4" name="icon4" bind:group={profielAfbeelding} value="https://i.ibb.co/98PFGhp/Avatar-Male-02.jpg">
        <label for="icon4">Male</label>
        <div class="iconImg"><img src="https://i.ibb.co/98PFGhp/Avatar-Male-02.jpg" alt="Male" />></div>
        </div>

        <div class="containerRadio">
        <input type="radio" id="icon5" name="icon5" bind:group={profielAfbeelding} value="https://i.ibb.co/y8y1mNb/Avatar-Female-02.jpg">
        <label for="icon5">Female</label>
        <div class="iconImg"><img src="https://i.ibb.co/y8y1mNb/Avatar-Female-02.jpg" alt="Female" /></div>
        </div>

        <div class="containerRadio">
        <input type="radio" id="icon6" name="icon6" bind:group={profielAfbeelding} value="https://i.ibb.co/P6t6fj8/Avatar-Male-03.jpg">
        <label for="icon6">Male</label>
        <div class="iconImg"><img src="https://i.ibb.co/P6t6fj8/Avatar-Male-03.jpg" alt="Male" /></div>
        </div>

    </div>
    <div id="containerButton">
    <button>Toevoegen</button>
</div>
</form>
{/if}

<style> 
    
    .errors {
        background-color: rgb(184, 23, 23);
        width: 60%;
        border-radius: 5px;
        margin: 5px auto 10px;
        line-height: 1.5em;
        font-weight: 600;
        font-size: 12px;
    }
    .iconImg {
        position: absolute;
        top: 5px;
        left: 0;
    }

    .iconImg,
    .iconImg img {
        width: 75px;
        height: 75px;
        border-radius: 100%;
    }
    .h2Icon {
        margin: 20px 0 0 0;
    }
    .containerIcon {
        width: 70%;
        position: relative;
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin: 20px auto;
    }

    .containerIcon input[type=radio]{
        position: absolute;
        opacity: 0;
        margin: 0 auto;
    }

    .containerRadio {
        position: relative;
        display: flex;
        width: 100%;
        height: 85px;
    }

    .containerRadio label {
        height: 20px;
        width: 80px;
        border-radius: 10px;     
        border: 1px solid rgb(196, 96, 3);
        cursor: pointer;
        padding: 10px;
        margin-left: 90px;
        margin-top: 25px;
    }
   
    .containerIcon label:hover {
        background-color: rgb(196, 96, 3);
    }

    input {
        background-color: #444;
        border: 1px solid rgb(196, 96, 3);
        border-radius: 3px;
        width: 60%;
        height: 50px;
        text-align: center;
        color: white;
        -webkit-text-fill-color: white;
    }

    input::placeholder {
        color: white;
    }

    input:hover {
        border-color: white;
    }
    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus, 
    input:-webkit-autofill:active{
    -webkit-box-shadow: 0 0 0 30px #444 inset !important;
    box-shadow:  0 0 0 30px #444 inset !important;
    color: white !important;
    }
    
    input[type="radio"]:checked ~ label {
        background-color: rgb(196, 96, 3);
        transform: scale(1.1);
    }

    form {
        margin-top: 40px;
    }

    #containerButton {
        display: flex;
        flex-direction: column;
    }
    button {
        margin: 0 auto;
        width: 30%;
        height: 50px;
        border-radius: 3px;
        color: white;
        background-color: rgb(196, 96, 3);
        border: none;
    }

    button:hover {
        background-color: rgb(128, 62, 0);
    }
</style>
