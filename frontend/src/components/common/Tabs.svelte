<script lang="ts">
  import { createEventDispatcher } from "svelte"
  import logo from "../../assets/logo.svg"
  import mlLogo from "../../assets/ml4nets_logo.svg"
  import { selectedMenuItem } from "../../stores"
  import { MenuItem } from "../../definitions/menuItem"
  import { getAuth } from "firebase/auth"
  import { authUserStore } from "../../stores"

  let isLoggedIn: boolean = false
  $: isLoggedIn = $authUserStore !== undefined && getAuth().currentUser !== null

  let menuItemsLogin: MenuItem[] = [
    MenuItem.HOME,
    MenuItem.NETWORKS,
    MenuItem.PLOT,
    MenuItem.EXPERIMENTS,
    MenuItem.REPORTS,
    MenuItem.PROFILE,
    // MenuItem.FROM_WEB,
    // MenuItem.TEST,
  ]
  let menuItemsLogout: MenuItem[] = [
    MenuItem.HOME,
    MenuItem.LOGIN,
    MenuItem.REGISTER,
  ]
</script>

<div class="tabs">
  <li class="image">
    <img src={logo} class="logo" alt="logo" />
    <img src={mlLogo} class="mlLogo" alt="logo" />
  </li>
  <ul style="background-color: whitesmoke;">
    {#if isLoggedIn}
      {#each menuItemsLogin as item}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <li class="menuItem" on:click={() => ($selectedMenuItem = item)}>
          <div class:active={item === $selectedMenuItem}>{item} |</div>
        </li>
      {/each}
    {:else}
      {#each menuItemsLogout as item}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <li class="menuItem" on:click={() => ($selectedMenuItem = item)}>
          <div class:active={item === $selectedMenuItem}>{item} |</div>
        </li>
      {/each}
    {/if}
  </ul>
</div>

<style>
  .tabs {
    background-color: whitesmoke;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.5);
    display: flex;
    align-content: center;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0; /* Adjust the position according to your needs */
    left: 0; /* Adjust the position according to your needs */
    width: 100%;
    z-index: 1000; /* Optional: Ensures the InfoBox is on top of other elements */
    
  }
  .image {
    display: flex;
    justify-content: left;
    padding: 0.1%;
    list-style-type: none;
  }
  ul {
    display: flex;
    justify-content: right;
    padding: 0%;
    list-style-type: none;
    flex-wrap: wrap;
    align-content: center;
    flex-direction: row;
    width: -webkit-fill-available;
  }
  .menuItem {
    margin: 1% 1%;
    font-size: 120%;
    font-weight: 600;
    /*color: #4a4a56;*/
    color: #4a4a56;
    cursor: pointer;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
  }

  .active {
    /*color: #bf0a30;*/
    color: var(--wueblue);
    padding-bottom: 20%;
    font-weight: 800;
  }
  img {
    max-width: 30%;
    height: 30%;
  }
  a {
    display: flex;
    justify-content: left;
    padding: 0%;
    list-style-type: none;
    max-width: 100%;
    height: 100%;
    cursor: pointer;
    color: #063d79;
  }
  .mlLogo {
    width: 47px;
    padding-left: 4%;
  }
</style>
