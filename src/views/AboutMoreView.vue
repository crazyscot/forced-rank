<script setup lang="ts">
import { RouterLink } from 'vue-router'
import ToggleSwitch from 'primevue/toggleswitch'
</script>

<template>
  <div class="about">
    <nav>
      <div>
        <RouterLink to="/"> <font-awesome-icon :icon="['fa', 'arrow-left']" /> Go Back </RouterLink>
        :
        <RouterLink to="/setup">
          Set up <font-awesome-icon :icon="['fa', 'arrow-right']"
        /></RouterLink>
      </div>
    </nav>
    <h1 class="highlight">How forced ranking works</h1>

    <h2>How does it work?</h2>
    <p>Statistics.</p>
    <p>This is a sort of <em>round-robin battle royale</em>, but without the violence.</p>
    <h2>OK, how does it <em>really</em> work?</h2>
    <p>
      Every question we ask (every battle) is worth one point to the winner. Add up the points and
      sort by score. Simple? Maybe not so simple if there is a tie, but we do our best and will
      highlight any ties.
    </p>
    <h2>How many questions do I have to answer?</h2>
    <p>It's the number of unique pairs within the number of items you are ranking.</p>
    <table class="pairings">
      <tbody>
        <tr class="row1">
          <th>Items</th>
          <td>&nbsp;</td>
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
          <td>&nbsp;</td>
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
    <br />
    <p>
      Mathematicians will recognise these as <em><q>n choose 2</q></em
      >: these are
      <a href="https://en.wikipedia.org/wiki/Binomial_coefficient">binomial coefficients</a>
      with the formula
      <math>
        <mfrac>
          <mrow><mi>n</mi><mo> (</mo><mi>n</mi><mo>&minus;</mo><mn>1</mn><mo>)</mo></mrow>
          <mrow><mn>2</mn></mrow>
        </mfrac> </math
      >.
    </p>
    <p>
      There's a limit of 15 items at present. There's no intrinsic reason for this, but answering
      even 105 pairings is going to take you some time.
    </p>
    <h2>How do I know you added it up correctly?</h2>
    <p>
      I'm glad you asked. There are a couple of toggle switches on the results page which show the
      detail. You can see the scores for each item, and the complete <em>response matrix</em>:
    </p>
    <div class="done">
      <table class="options">
        <tbody>
          <tr>
            <td>Show scores</td>
            <td><ToggleSwitch /></td>
          </tr>
          <tr>
            <td>Show response matrix</td>
            <td><ToggleSwitch /></td>
          </tr>
        </tbody>
      </table>
    </div>
    <br />
    <h3>What's a response matrix?</h3>
    <p>A compact representation of all the information you provided. This is what it looks like:</p>
    <div class="done">
      <img src="@/assets/sample-response-matrix.png" />
    </div>
    <p>
      In this example, the user really loves puppies (4 points) and guinea pigs (3 points). Kittens,
      pandas and rabbits are tied with 1 point each.
    </p>
    <h3>Why is the matrix half blacked out?</h3>
    <p>Because we only ask each pairing once. (If it wasn't, we'd ask everything twice.)</p>
    <h3>Why is there no column 5 in the matrix?</h3>
    <p>
      All the responses for item 5 (rabbits) are in row 5, so there was no point in including that
      column.
    </p>
    <h3>But why then do you show row 1, if there are no responses?</h3>
    <p>It looked better this way, with all the item names on the left of the table.</p>

    <h2>How come you don't send anything back to the server?</h2>
    <p>We don't need to. It's all done locally, in Javascript.</p>
    <p>
      The downside of this is that there's no way to store your progress and come back later. But
      maybe that's good for your privacy?
    </p>
    <p>The upside is, it makes the app really simple as there's no back-end logic.</p>

    <h2>Do I get a reward for reading all this?</h2>
    <p>Sure ☺️</p>
    <p>There's a hidden menu. Click or tap on the app logo (top right of the window) 5 times.</p>
    <p>
      You can turn on debug mode, which shows you a bunch of internals (including the results
      matrix) as you're answering the questions. I don't recommend this as your previous responses
      might influence your thinking. Every pairing should be independent of the others!
    </p>
    <p>
      You can also turn off shuffle mode, if you prefer to answer the questions in order. I also
      don't recommend this as I think it is another source of cognitive bias.
    </p>
  </div>
  <br />
  <nav>
    <div>
      <RouterLink to="/"> <font-awesome-icon :icon="['fa', 'arrow-left']" /> Go Back </RouterLink>
      :
      <RouterLink to="/setup">
        Set up <font-awesome-icon :icon="['fa', 'arrow-right']"
      /></RouterLink>
    </div>
  </nav>
</template>
