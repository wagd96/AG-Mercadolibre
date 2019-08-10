<template>
  <div id="app">
    <div class="hero has-background-warning is-gradient is-bold">
      <div class="hero-body is-flex" style="display:inline-grid!important; align-self:center; margin-bottom:10px">
        <h1 class="title is-1">
          <span class="has-text-black is-1">AlejandroGallego</span>
          <span class="subtitle has-text-link is-2">MercadoLibre</span>
        </h1>

        <div class="field has-addons is-pulled-right" style="justify-content:center">
          <div class="control">
            <input v-model="search" type="text" class="input is-rounded" v-on:keyup.enter="searchProducts">
          </div>
        
          <div class="control">
          <button class="button is-rounded is-link" v-on:click="searchProducts">Consultar</button>
          </div>
        </div>

      </div>
    </div>

    <div class="container">
      <div class="columns is-desktop is-mobile is-tablet is-multiline is-centered">
        <product v-for="product of products" v-bind:key="product.id" v-bind:product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Product from "./components/product";
import productService from "./services/product.service"

export default {
  name: "App",
  components: {
    Product
  },
  data: function() {
    return {
      products: [],
      search: ""
    };
  },
  methods: {


    searchProducts() {
      let baseUrl = "https://api.mercadolibre.com/sites/MCO";
      let search = this.search;
      let results= axios
        .get(`${baseUrl}/search?q=${search}`)
        .then(res => {
          this.products = res.data.results;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
