<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
	import LedenStore from "./stores/LedenStore";
	
    const handleDelete = (gebruikersnaam) => {
		LedenStore.update(leden => {
		return leden.filter(lid => lid.gebruikersnaam != gebruikersnaam);
		
	});

}
</script>

<div class="containerItems">
    {#each $LedenStore as lid}
    <div class="containerProfiel" >
       <img class="profielIcon" alt="profilePicture" src="{ lid.profielAfbeelding}">
       
       <p class="gebruikersNaam">{lid.gebruikersnaam}</p>
       <p class="profielNaam">{lid.voornaam} {lid.achternaam}</p>

	   <div id="containerTools">
       <div id="updateGebruiker" on:click={ ( )=> { dispatch('test', lid)}} ><i class="fa-solid fa-pen"></i></div>
	   <div id="selecteer" on:click={ () => { dispatch('goToUserHome', lid)}}><i class="fa-solid fa-arrow-up-right-dots"></i></div>
       <div id="verwijderGebruiker" on:click={handleDelete(lid.gebruikersnaam)} ><i class="fa-solid fa-user-xmark"></i></div>
       </div>
   </div>
    {/each}
</div>

<style>

    #containerTools {
		display: flex;
		align-items: center;
		justify-content: space-around;
		width: 60%;
		margin: 5px auto 10px;
	}

	#verwijderGebruiker,
	#updateGebruiker {
		width: 30px;
		height: 30px;
		border-radius: 5px;
		text-align: center;
		line-height: 30px;
		padding: 5px;
	}

	#selecteer {
		height: 50px;
		width: 100px;
		margin: 10px 5px;
		text-align: center;
		background-color:rgb(190, 130, 0);
		border: 3px solid rgb(115, 78, 0);
		border-radius: 3px;
		line-height: 50px;
	}

	#selecteer:hover {
		background-color: rgb(115, 78, 0);
	}

	#updateGebruiker {
		background-color: green;
		border: 3px solid rgb(11, 95, 11);
	}
	
	#updateGebruiker:hover {
		background-color: rgb(11, 95, 11);
	}

	#verwijderGebruiker {
		background-color: red;
		border: 3px solid rgb(153, 3, 3);
	}

	#verwijderGebruiker:hover {
		background-color: rgb(153, 3, 3);
	}

	.containerItems {
		width: 1500px;
		margin: 0px auto;
		display: grid;
		grid-template-columns: 20% 20% 20% 20%;
		column-gap: 40px;
		row-gap: 40px;
		justify-content: center;
	}
	
    .containerProfiel {
		width: 200px;
		height: 280px;
        background: linear-gradient(90deg, rgb(32, 32, 32) 0%, rgb(24, 24, 24) 100%);
		color: white;
		box-shadow: 4px 4px 4px -4px #000000;
		box-shadow: inset 4px 4px 4px -4px #000000;
		border-radius: 10px;
		display: flex;
		border: rgb(190, 130, 0) 2px solid;
		justify-content: center;
		flex-direction: column;
		margin: 50px auto 0 auto;
		font-weight: 500;		
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

</style>
