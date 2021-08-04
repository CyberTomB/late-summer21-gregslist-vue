<template>
  <header>
    <nav class="navbar navbar-expand-sm navbar-dark bg-primary">
      <router-link :to="{name: 'Cars'}" class="navbar-brand">Gregslist</router-link>
      <button
        class="navbar-toggler d-lg-none"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavId">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item active">
            <router-link class="nav-link" :to="{name: 'Cars'}"
              >Cars <span class="sr-only">(current)</span></router-link
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Jobs</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Houses</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  <main>
    <router-view />
  </main>
  <footer class="container-fluid bg-primary">
    <div class="row">
      <div class="col text-center p-3 text-light">
        <p>Made with <img class="logo" src="./assets/logo.png" /> by Codeworks</p>
      </div>
    </div>
  </footer>
</template>



<style lang="scss">
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
main {
  flex-grow: 1;
  align-items: center;
  display: flex;
}
.logo {
  height: 1rem;
}

//NOTE Style Debugger:
// body .container,
// body .container-fluid {
//     outline: 2px double blue;
//     outline-offset: -2px;
// }

// body .row {
//     outline: 2px dashed red;
//     outline-offset: -2px;
// }

// body [class*="col-"] {
//     outline: 2px dotted forestgreen;
//     outline-offset: -3px;
// }

</style>
