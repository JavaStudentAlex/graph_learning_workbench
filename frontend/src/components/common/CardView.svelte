<script lang="ts">
  export let id: string = undefined
  export let title: string = undefined
</script>

<div class="CardView" {id} data-title={title}>
  <slot name="header" />
  <hr />
  <slot name="body" />
  <hr />
  <slot name="footer" />
</div>

<style lang="scss">
  .CardView {
    position: center;
    width: 90%;
    margin-left: 5%;
    margin-top: 1%;
    margin-bottom: 3%;
    border-radius: 5px;
    box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.2);
    background-color: whitesmoke;
  }

  hr {
    display: block;
    margin: 1em;
    width: 80%;
    height: 1%;
    margin-left: 10%;
    background-color: whitesmoke;
  }
</style>
