<template>
  <div id="app">
    <b-container>
      <h1>AG-Mercadolibre</h1>
      <button v-on:click="fetch">Consultar</button>
      <div v-for="product of products" v-bind:key="product.id">
        <b-row class="justify-content-md-center">
          <b-col>
            <b-card
              v-bind:title="product.title"
              v-bind:img-src="product.thumbnail"
              img-alt="Image"
              img-left
              tag="article"
              class="mb-4"
            >
              <b-card-text>${{product.price}}</b-card-text>
            </b-card>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  data: function() {
    return {
      products: []
    };
  },
  methods: {
    fetch() {
      let baseUrl = "https://api.mercadolibre.com/sites/MCO";
      let article = "huawei";
      let result = axios
        .get(`${baseUrl}/search?q=${article}`)
        .then(res => {
          this.products = res.data.results;
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
