<template>
  <div>
    <ul v-bind:class="itemsClasses">
      <li v-for="item in items" v-bind:key="item.id">
        {{ item.name }}
        <button
          v-on:click="buy(item)"
          v-bind:disabled="!item.active">
          Comprar ${{ item.price }}
        </button>
      </li>
    </ul>

    <items-list></items-list>
  </div>
</template>

<script>
import ItemsList from "./ItemsList"

export default {
  components: {
    ItemsList
  },
  data() {
    return {
      items: [
        { id: 1, name: "iPhone 7", price: 4000, active: true },
        { id: 2, name: "iPhone 8", price: 5500, active: false },
        { id: 3, name: "iPhone X", price: 6000, active: true }
      ],
      cart: []
    };
  },
  computed: {
    itemsClasses() {
      if (this.items.length > 4) return "items-group--green";
      else return "items-group--red";
    }
  },
  watch: {
    cart(newCart, oldCart) {
      newCart.forEach(cartItem => {
        let itemFound = this.items.find(item => item.id === cartItem.id);
        if (Boolean(itemFound)) itemFound.active = false;
      });
    }
  },
  methods: {
    buy(item) {
      this.cart.push(item);
    }
  }
};
</script>

<style>
.items-group--green {
  color: green;
}
.items-group--red {
  color: red;
}
</style>