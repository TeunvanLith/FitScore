<script>
	import CreateUserModal from './createUserModal.svelte';
	import Header from './header.svelte';
	import CardUser from './cardUser.svelte';
	import CreateUser from './createUser.svelte';
	import AdjustUser from './adjustUser.svelte';
	import UserHome from './userHome.svelte';
	import '../routes/styles/global.css';

	let showAdjust = false;
	let showCreate = true;
	let showModal = false;
	let lidToAdjust;
	let main = true;
	let uHome = false;
	let currentLid;

	const openAdjust = (e) => {
		  showCreate = false;
		  showAdjust = true;
		  showModal = true;
		  lidToAdjust = e.detail;
	}

	const toggleModal = () => {
		  showModal = !showModal;
	}

	const toggleUserHome = (e) => {
		main= false;
		uHome = true;
		currentLid = e.detail;
	}

	const toggleMain = () => { 
		main = true;
		uHome = false;
	}
</script>
	
<main>

	{#if main}
	<Header on:click={ () => {toggleModal(); showCreate = true;}} />

    <CreateUserModal {showModal} on:click={ () => {toggleModal(); showCreate = false; showAdjust = false;}}>
		<CreateUser {showCreate} on:close={toggleModal}/>
		<AdjustUser {showAdjust} {lidToAdjust} on:close={toggleModal}/>
	</CreateUserModal>

	<CardUser on:test={openAdjust} on:toggleModal={toggleModal} on:goToUserHome={toggleUserHome}/>
	{/if}

	{#if uHome}
	<UserHome {currentLid} on:toggleMain={toggleMain}/>
	{/if}

</main>

<style>
	
	main {
		margin: 0;
		padding: 0;
	}


</style>