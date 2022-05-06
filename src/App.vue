<template>
  <div class="example">{{ msg }}</div>
</template>

<script>
import axios from "axios"
export default {
  data() {
    return {
      msg: 'Hello world! 133333331',
    }
  },
  created() {
      axios.get('/api/users').then((res)=>{
          console.log(res.data)
      })
  }
}
</script>

<style>
.example {
  color: orange;
}
</style>