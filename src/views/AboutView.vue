<script setup lang="ts">
import { RouterLink } from 'vue-router'
import Button from 'primevue/button'
const version = import.meta.env.VITE_APP_VERSION
</script>

<template>
  <div class="about">
    <nav>
      <RouterLink to="/setup"
        >(Been here before? Jump right in!)
        <Button severity="contrast"
          >Start <font-awesome-icon :icon="['fa', 'arrow-right']" /></Button
      ></RouterLink>
    </nav>
    <div class="greetings">
      <h1 class="highlight">The forced ranker</h1>
    </div>
    <p>
      <em>Version: {{ version }}</em>
    </p>

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
    <h2>How many questions do I have to answer?</h2>
    <p>It's the number of unique pairs within the number of items you are ranking.</p>
    <table class="pairings">
      <tbody>
        <tr class="row1">
          <th>Items</th>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td>7</td>
          <td>8</td>
          <td>9</td>
          <td>10</td>
          <td>11</td>
          <td>12</td>
          <td>13</td>
          <td>14</td>
          <td>15</td>
        </tr>
        <tr class="row2">
          <th>Pairs</th>
          <td>3</td>
          <td>6</td>
          <td>10</td>
          <td>15</td>
          <td>21</td>
          <td>28</td>
          <td>36</td>
          <td>45</td>
          <td>55</td>
          <td>66</td>
          <td>78</td>
          <td>91</td>
          <td>105</td>
        </tr>
      </tbody>
    </table>
    <p>
      These are
      <a href="https://en.wikipedia.org/wiki/Binomial_coefficient">binomial coefficients</a>, the
      formula is:
      <math>
        <mrow><mi>n</mi><mo>(</mo><mi>n</mi><mo>-</mo><mn>1</mn><mo>)</mo></mrow
        ><mo>&divide;</mo><mn>2</mn>
      </math>
    </p>
    <h2>What might go wrong?</h2>
    <ul>
      <li>
        If your preferences are circular, things might get messy. If there's a tie, the results will
        indicate that.
      </li>
      <li>Don't press Reload, you'll probably have to start over.</li>
    </ul>
    <p></p>
    <h2>What happens to the data I enter?</h2>
    <p>
      This applet sends nothing to its server. We do not know (nor do we care) what you are ranking.
      The only information that the server sees is that you loaded the app. Everything else happens
      within the relative safety of your web browser.
    </p>
    <h2>How do I save the results?</h2>
    <p>Sorry, that's not implemented. Take a screenshot?</p>
    <h2>Who made this, what are the legals?</h2>
    <p>Copyright (c) 2025 Ross Younger.</p>
    <p class="bold">
      This is a prototype web toy. It may change its behaviour or be taken down at no notice.
    </p>
    <p>
      This tool is made available in the hope that it will be useful, but without any warranty;
      without even the implied warranty of merchantability or fitness for a particular purpose.
    </p>
    <p>By using this tool, you signify your acceptance of these limitations.</p>
    <br />
    <p>
      Please send any feedback to webcontact@crazyscot.com (or, if you were already in touch with
      me, feel free to use some other email address or means of contact).
    </p>
    <br />
    <p>
      The <a href="https://github.com/crazyscot/forced-rank">source code for this tool</a> is
      available on GitHub under the
      <a href="https://github.com/crazyscot/forced-rank/blob/main/LICENSE">AGPL license</a>.
    </p>

    <br height="2ex" />
    <h3>
      Ready?
      <RouterLink to="/setup"
        >Let's get started!
        <Button severity="contrast"
          >Start <font-awesome-icon :icon="['fa', 'arrow-right']" /></Button
      ></RouterLink>
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
  .bold {
    font-weight: bold;
  }
}

table.pairings {
  border-collapse: collapse;
  th {
    font-weight: bold;
    border-right: 1px solid black;
  }
  tr.row1 {
    td,
    th {
      border-bottom: 1px solid black;
    }
  }
  td,
  th {
    text-align: center;
    padding-right: 0.5em;
  }
}

math {
  background-color: var(--color-accent);
}
</style>
