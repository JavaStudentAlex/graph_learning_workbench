<script>
  export let type = "primary";
  export let flat = false;
  export let inverse = false;
  export let disabled = false;
  export let fontsize = 120;
</script>


<button class:flat class:inverse class={type} class:disabled on:click style="font-size: {fontsize + '%'}">
  <slot />
</button>

<style>
  button {
    border: 0;
    cursor: pointer;
    border-radius: 10px;
    padding: 8px 12px;
    font-weight: bold;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  }
  .flat {
    box-shadow: none;
  }
  .primary {
    background: whitesmoke;
    color: white;
  }
  .secondary {
    background: var(--wueblue);
    color: white;
  }
  .delete {
    background: var(--customred);
    color: white;
  }
  .primary.inverse {
    color: var(--wueblue);
    background: whitesmoke;
    border: 2px solid var(--wueblue);
  }
  .secondary.inverse {
    color: var(--wueblue);
    background: white;
    border: 2px solid var(--wueblue);
  }
  .delete.inverse {
    color: var(--customred);
    background: white;
    border: 2px solid var(--customred);
  }
  .primary.disabled {
    pointer-events: none;
    background-color: whitesmoke;
    color: var(--lightgray);
  }
  .secondary.disabled {
    pointer-events: none;
    background-color: whitesmoke;
    color: var(--lightgray);
  }
</style>
