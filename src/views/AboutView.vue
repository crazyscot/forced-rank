<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="about">
    <nav>
      <RouterLink to="/setup"
        >(Been here before? Jump right in!) <font-awesome-icon :icon="['fa', 'arrow-right']"
      /></RouterLink>
    </nav>
    <div class="greetings">
      <h1 class="highlight">The forced ranker</h1>
    </div>

    <h2>What is this?</h2>
    <p>
      This is a tool that helps you create a <em>forced ranking order</em> of some items. Your
      favourite colours, pets, friends, anything really. Or, for that matter, your
      <em>least</em> favourite.
    </p>
    <h2>Motivation</h2>
    <p>
      It's good to know that you really like certain things... but sometimes it's important to know
      which you like the <em>most</em>, and to put them into priority order. This can be really
      hard!
    </p>
    <h2>How does it work?</h2>
    <p>
      Statistics. This is a sort of <em>round-robin battle royale</em>, but without the violence.
    </p>
    <h2>OK, how does it <em>really</em> work?</h2>
    <p>We show you a pair of your items, chosen at random. Which wins?</p>
    <p>Repeat until you have answered all the possible pairings.</p>
    <p>
      Every battle is worth one point to the winner. Add up the points and sort by score. Simple?
    </p>
    <h2>What might go wrong?</h2>
    <p>There might be dead heats between items.</p>
    <p>
      If your preferences are circular, things might get messy. If there's a tie, the results will
      indicate that.
    </p>
    <h2>What happens to the data I enter?</h2>
    <p>
      This applet sends nothing to its server. We do not know (nor do we care) what you are ranking.
      The only information that the server sees is that you loaded the app. Everything else happens
      within the safety of your web browser.
    </p>
    <h2>How do I save the results?</h2>
    <p>Sorry, that's not implemented. Take a screenshot?</p>
    <h2>Who made this, what are the legals?</h2>
    <p>Copyright (c) 2025 Ross Younger.</p>
    <p>This is a prototype web toy. It may change its behaviour or be taken down at no notice.</p>
    <p>
      This tool is made available in the hope that it will be useful, but without any warranty;
      without even the implied warranty of merchantability or fitness for a particular purpose.
    </p>
    <p>By using it, you signify your acceptance of these limitations.</p>
    <p>
      Please send any feedback to webcontact@crazyscot.com (or, if you were already in touch with
      me, feel free to use some other email address or means of contact).
    </p>

    <br height="2ex" />
    <h3>
      Ready?
      <RouterLink to="/setup"
        >Let's get started! <font-awesome-icon :icon="['fa', 'arrow-right']"
      /></RouterLink>
    </h3>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
}
</style>
