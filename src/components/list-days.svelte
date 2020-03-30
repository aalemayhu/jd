<script>
  export let days;
</script>

<div class:days>
  {#each days as day}
    <div class:day>
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

<style>
 .day {
    font-size: 2rem;
    border-bottom: 1px solid gray;
  }


  ruby {
      border-right: 1px solid gray;
  }
</style>