<template>
  <div class="column is-10-mobile is-4-desktop is-5-tablet" v-bind:key="product.id">
    <div class="card">
      <div class="card-header has-background-link is-centered">
        <h1 class="title has-text-white is-5">{{product.title}}</h1>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <img v-bind:src="product.thumbnail" alt="Product image" />
          </div>
          <div class="media-content">
            <div>
              <span class="title is-5">Vendedor:</span>
              <span class="is-6">{{seller}}</span>
            </div>
            <div>
              <span class="title is-5">Precio:</span>
              <span class="is-6">{{product.price | currency }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
    name: "l",
    props:['product'],
    data: function() {
    return {
      seller:'',
      
    };
  },
  created: function(){
    this.getSeller()
  },
  methods: {
    getSeller() {
      let baseUrl = "https://api.mercadolibre.com/";
      let search = this.search;
      let results= axios
        .get(`${baseUrl}/users/${this.product.seller.id}`)
        .then(res => {
          this.seller = res.data.nickname;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
}
</script>