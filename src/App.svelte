<script>
  import ListDays from "./components/list-days.svelte";
  import Header from "./components/header.svelte";
  import Footer from "./components/footer.svelte";

  export let days;
</script>

<style>
  main {
    text-align: center;
    max-width: 240px;
    margin: 0 auto;
  }
 
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<Header />
<main>
  <ListDays {days} />
</main>
<Footer />
