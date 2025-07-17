<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div>
    <div class="greetings">
      <h1 class="green">The force-ranker prototype</h1>
    </div>

    <p><RouterLink to="/setup">(Been here before? Jump right in!)</RouterLink></p>

    <h2>What is this?</h2>
    <p>
      This is a prototype web toy that helps you create a <em>forced ranking order</em> of some
      items.
    </p>
    <h2>How do I know if I need it?</h2>
    <p>
      Do you have a number of items that you wish to put in priority order, but you find it hard to
      do so? You love all of them, perhaps, but want to figure out which you love <em>most</em>?
    </p>
    <h2>How does it work?</h2>
    <p>We invite you to consider each pair of items in turn. For each pairing, which wins?</p>
    <p>When you have answered all of the pairings, we show you the results.</p>
    <h2>OK, how does it <em>really</em> work?</h2>
    <p>This is a sort of <em>round-robin battle royale</em>, but without the violence.</p>
    <p>Every battle is worth one point to the winner. We keep score.</p>
    <h2>What might go wrong?</h2>
    <p>There might be dead heats between items.</p>
    <p>If your preferences are circular, things might get messy.</p>
    <h2>Who made this?</h2>
    <p><a href="https://www.chiark.greenend.org.uk/~ryounger/">Ross Younger</a></p>
    <h2>Ready?</h2>
    <p><RouterLink to="/setup">Let's get started!</RouterLink></p>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
