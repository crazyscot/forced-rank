<script setup lang="ts">
import { RouterLink } from 'vue-router'
import Button from 'primevue/button'
const version = import.meta.env.VITE_APP_VERSION

defineProps<{
  showHowItWorks: false
}>()
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
    <div>
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
    <p>Let's use some animals as an example. The result might look like this:</p>
    <ol class="example-result">
      <li>Puppies</li>
      <li>Kittens</li>
      <li>Pandas</li>
      <li>Guinea pigs</li>
      <li>Rabbits</li>
    </ol>
    <h3>Why would I need this?</h3>
    <p>
      It's good to know that you really like certain things... but sometimes it's important to know
      which you like the <em>most</em>, and to put them into priority order.
    </p>
    <p>
      Maybe you want to set up a daily picture of your favourite animal but want to show more of
      your most favourite. You need to put them in order. This can be really hard!
    </p>

    <h2>How do I use it?</h2>
    <ol>
      <li>
        Enter a list of items to rank.
        <ul>
          <li>
            If you want to have a play to see how it works, there's a Demo Mode button which
            pre-fills it with some types of animal. Press it more than once, if you dare.
          </li>
        </ul>
      </li>
      <li>
        When you're ready, press
        <Button severity="contrast"
          >Let's go! <font-awesome-icon :icon="['fa', 'arrow-right']"
        /></Button>
      </li>
      <li>
        We will show you a pair of items and ask which wins. It looks like this:
        <div class="example-question">
          <h2>Which wins?</h2>
          <table class="question">
            <tbody>
              <tr class="question">
                <td>puppies</td>
              </tr>
              <tr>
                <td class="or">or</td>
              </tr>
              <tr class="question">
                <td>kittens</td>
              </tr>
            </tbody>
          </table>
        </div>
      </li>
      <li>Click or tap on the winner.</li>
      <li>We will keep showing you pairs until you've answered for every possible pairing.</li>
      <li>Then we show the results.</li>
    </ol>
    <p>
      <strong>Don't press Reload or Back.</strong> (You'll have to start over if you do.) This is a
      single-page application with no persistent storage. Deep links won't work either.
    </p>
    <h2>I made a mistake! How do I undo?</h2>
    <p>Sorry, there is no undo short of starting over.</p>
    <h2>How do I save the results?</h2>
    <p>Copy and paste? Take a screenshot?</p>
    <h2>How does it work?</h2>
    <p><RouterLink to="/about_more">Some nerdy detail about how this works.</RouterLink></p>
    <h2>What happens to the data I enter?</h2>
    <p>
      Not much! It stays within your web browser. We don't send it anywhere, not even back to the
      server.
    </p>
    <p>
      We do not know (nor do we care) what you are ranking. The only information that the server
      sees is that you loaded the app; the standard stuff that all web servers see (date, time, IP
      address).
    </p>

    <h2>Who made this, what are the legals?</h2>
    <p>This app is copyright &copy; 2025 Ross Younger.</p>
    <p class="bold">
      This is a prototype web toy. It may change its behaviour or be taken down at no notice.
    </p>
    <p>
      This tool is made available in the hope that it will be useful, but without any warranty;
      without even the implied warranty of merchantability or fitness for a particular purpose.
    </p>
    <p>By using this tool, you signify your acceptance of these limitations.</p>
    <p>
      Please send any feedback to webcontact@crazyscot.com (or, if you were already in touch with
      me, feel free to use some other email address or means of contact).
    </p>
    <p>
      The <a href="https://github.com/crazyscot/forced-rank">source code for this tool</a> is
      available on GitHub under the
      <a href="https://github.com/crazyscot/forced-rank/blob/main/LICENSE">AGPL license</a>. Issue
      reports, suggestions and PRs are welcome.
    </p>

    <br height="2ex" />
    <h3>
      Ready?
      <RouterLink to="/setup"
        >Let's get started! &nbsp;
        <Button severity="contrast"
          >Start <font-awesome-icon :icon="['fa', 'arrow-right']" /></Button
      ></RouterLink>
    </h3>
    <br />
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
  font-size: 150%;
}

.example-result {
  background-color: var(--color-background-mute);
  color: var(--color-highlight);
  margin: 1ex 4em;
}

.example-question {
  display: flex;
  flex-direction: column;
  margin: 1ex 3em;
  padding: 1ex 1em;
  align-content: center;
  background-color: var(--color-background-mute);
}

h2 {
  margin: 1ex 0 0.5ex 0;
}
p,
ol,
ul,
img {
  margin-bottom: 1ex;
}
</style>
