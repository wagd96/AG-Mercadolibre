<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import ProductService from '../services/product.service'

export default {
  name: "HelloWorld",
  data(){
    return {
      msg: "Welcome to Your Vue.js App"
    }    
  },
  created(){
    ProductService.getProducts("huawe")
      .then(response => {
        console.log(response.data.results)
      })
      .catch(error => {
        console.log(error.response.data)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
