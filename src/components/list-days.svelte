<script>
  export let days;
</script>

<div class="p-4 bg-gray-200 flex flex-col items-center">
  {#each days as day}
    <div class="md:text-5xl sm:text-lg flex border p-2 w-2/4">
      <span>
        <ruby>
          {day.kanji}
          <rp>(</rp>
          <rt>{day.furigana}</rt>
          <rp>)</rp>
        </ruby>
      </span>
      <span>{day.emoji}</span>
      <span class="name">{day.name}</span>
    </div>
  {/each}
</div>