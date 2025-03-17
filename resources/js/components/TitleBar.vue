<template>
  <section class="section is-title-bar">
    <div class="level">
      <div class="level-left">
        <div class="level-item">
          <ul>
            <li v-if="titleStack == 'patient'">Patient </li>
            <li v-if="titleStack == 'doctor'">Doctor </li>
            <li v-if="titleStack == 'admin'">Admin </li>
            <li>Dashboard</li>
          </ul>
        </div>
      </div>
      <!-- <div class="level-right">
        <div class="level-item">
          <div class="buttons is-right">
            <a href="https://admin-one-laravel.justboil.me/" target="_blank" class="button is-primary">
              <b-icon icon="credit-card" custom-size="default"/>
              <span>Premium Demo</span>
            </a>
          </div>
        </div>
      </div> -->
    </div>
  </section>
</template>

<script>
export default {
  name: 'TitleBar',
  props: {
    titleStack: {
      type: String,
    }
  }
}
</script>
