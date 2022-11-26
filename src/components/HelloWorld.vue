<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>

      <menu>
        <li>
          <a href="mailto:jrhaben@gmail.com" target="_blank" rel="noopener">
            <font-awesome-icon icon="fa-solid fa-envelope" size="lg" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/jackhaben" target="_blank" rel="noopener">
            <font-awesome-icon icon="fa-brands fa-linkedin" size="lg" />
          </a>
        </li>
        <li>
          <a href="https://github.com/jHaben" target="_blank" rel="noopener">
            <font-awesome-icon icon="fa-brands fa-github" size="lg" />
          </a>
        </li>
      </menu>

    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;


}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {

  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}




menu {
  list-style-type: none;
  display: flex;

}

menu li {
  float: left;
  flex: 1 0 auto;

}
</style>
