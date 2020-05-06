<script>
  import ListDays from "./components/list-days.svelte";
  import Header from "./components/header.svelte";
  import Footer from "./components/footer.svelte";

  export let days;
</script>

<Header />
<main>
  <p class="p-4 md:text-lg">
    This static site is for myself so I can practice remembering the days in
    Japanese. The emojis are just mnemonics I am using 😉
  </p>
  <ListDays {days} />
</main>
<Footer />
