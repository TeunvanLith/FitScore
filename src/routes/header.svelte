<script>
    
</script>

<div class="containerNav">
    <div class="addUser" on:click><p>Nieuwe account</p></div>
</div>

<style>
    .containerNav {
        position: fixed;
		width: 100%;
		height: 50px;
		background-color: rgba(34, 34, 34);
		color: white;
		padding: 0;
		margin: 0;
        bottom: 0px;
        text-align: center;
        display: flex;
        justify-content: space-around;
		border-top: 3px solid rgb(196, 96, 3);
	}

    .addUser {
        border: 0px;
        height: 100%;
        width: 160px;
        text-align: center;
        line-height: 50px;
        cursor: pointer;
        background-color: #555;
    }

    .addUser:hover {
        background-color:rgb(196, 96, 3);
    }

    .addUser:visited {
        background-color:rgb(196, 96, 3);
    }
</style>