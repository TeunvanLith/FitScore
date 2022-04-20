<script>
	export let showModal;
</script>

{#if showModal}
<div class="backdrop" on:click|self>
    <div class="modal" >
        <button id="terug" on:click>Terug</button>
		<slot close></slot>
    </div>	
</div>
{/if}

<style>
    .modal {
		width: 40%;
		height: 95%;
		border: 3px solid rgb(196, 96, 3);
		background-color: #222;
		border-radius: 10px;
		z-index: 100;
		text-align: center;
		color: white;
		position: relative;
		min-width: 400px;
	}

	.backdrop {
		position: absolute;
		height: 100vh;
		width: 100vw;
		background-color: rgba(34, 34, 34, 0.8);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	#terug {
		position: absolute;
		color: white;
		background-color: rgb(184, 23, 23);
		height: 50px;
		width: 25%;
		bottom: 14px;
		right: 20%;
		cursor: pointer;
		line-height: 25px;
		border-radius: 3px;
		border: none;
	}

	#terug:hover {
		color: white;
		background-color: rgb(124, 4, 4);
	}
</style>