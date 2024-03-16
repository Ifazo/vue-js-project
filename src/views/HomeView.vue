<template>
  <div>
    <TheHeader />
    <h1 class="text-3xl font-bold underline">
      Hello world!
    </h1>
    <TheFooter />
  </div>
</template>

<script>
// @ is an alias to /src
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'

export default {
  name: 'HomeView',
  components: {
    TheHeader,
    TheFooter
  }
}
</script>
