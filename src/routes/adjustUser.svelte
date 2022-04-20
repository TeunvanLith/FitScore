<script>
	import LedenStore from "./stores/LedenStore";
	import {createEventDispatcher} from 'svelte';
	
	let dispatch = createEventDispatcher();
	let errors = {voornaam: '', achternaam: '', gebruikersnaam: ''};
	let voornaam;
	let achternaam;
	let gebruikersnaam;
	let profielAfbeelding;
	export let showAdjust;
	export let lidToAdjust;

	const accountWijzigen = (lid) => {
   	let valid = true;
	if (voornaam.trim().length <= 3) {
		valid = false;
		errors.voornaam = "De voornaam moet langer zijn dan 3 letters.";
		console.log(errors.voornaam);
	} else {
		errors.voornaam = '';
	}
	if (achternaam.trim().length <= 4) {
		valid = false;
		errors.achternaam = "De achternaam moet langer zijn dan 4 letters.";
		console.log(errors.achternaam);
	}  else {
		errors.achternaam = '';
	}
	if (gebruikersnaam.trim().length <= 4) {
		valid = false;
		errors.gebruikersnaam = "De gebruikersnaam moet langer zijn dan 4 letters.";
		console.log(errors.gebruikersnaam);
	} else {
		errors.gebruikersnaam ='';
	}

	if (valid == true) {

	LedenStore.update(leden => {
		let copyLeden = [...leden];
		let changeLid = copyLeden.find((lid) => lid.gebruikersnaam == lidToAdjust.gebruikersnaam);

		changeLid.voornaam = voornaam;
		changeLid.achternaam = achternaam;
		changeLid.gebruikersnaam = gebruikersnaam;
		changeLid.profielAfbeelding = profielAfbeelding;

		return copyLeden;

	})

	dispatch('close');

	}

}

</script>

		{#if showAdjust}
		<h2 class="titleCreateUser">Hallo {lidToAdjust.gebruikersnaam}!</h2>

		<form on:submit|preventDefault={ () => {accountWijzigen(lidToAdjust.gebruikersnaam)}}>

		<div class="containerAdjust">
		<div class="titleAdjust">Huidig</div>
		<div class="titleAdjust">Nieuw</div>
		</div>

		<div class="containerAdjust">
		<div class="beforeText">{lidToAdjust.voornaam}</div>
		<input type="text" placeholder="Voornaam" name="voornaam" bind:value={voornaam}>
		</div>
		<div class="errors">{ errors.voornaam }</div>

		<div class="containerAdjust">
		<div class="beforeText">{lidToAdjust.achternaam}</div>
		<input type="text" placeholder="Achternaam" name="achternaam" bind:value={achternaam}>
		</div>
		<div class="errors">{ errors.achternaam }</div>

		<div class="containerAdjust">
		<div class="beforeText">{lidToAdjust.gebruikersnaam}</div>
		<input type="text" placeholder="Gebruikersnaam" name="gebruikersnaam" bind:value={gebruikersnaam}>
		</div>
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

.containerAdjust {
	display: flex;
	margin: auto;
	width: 70%;
	justify-content: space-around;
}

.titleAdjust {
	color: white;
	margin-bottom: 10px;
	border-bottom: 3px solid rgb(196, 96, 3);
}

.beforeText {
	width: 40%;
	background-color: rgb(50, 50, 50);
	border: 1px solid rgb(196, 96, 3);
	border-radius: 3px;
	height: 48px;
	text-align: center;
	color: white;
	line-height: 50px;
}

input {
	background-color: #444;
	border: 1px solid rgb(196, 96, 3);
	border-radius: 3px;
	width: 40%;
	height: 50px;
	text-align: center;
	color: white;
	-webkit-text-fill-color: white;
}

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
