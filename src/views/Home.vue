<template>
<div>
<services />
  <doctors />
  <contact />
</div>
</template>

<script>
  import Services from './Services'
  import Doctors from './Doctors'
  import Contact from './Contact'
  export default {
    components: {
      Services,
      Doctors,
      Contact,
    },
  }
</script>

<style>

</style>
