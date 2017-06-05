<template>
  <div class='container'>
    <app-header></app-header>
      <div class="row">
        <div class="col-xs-12">
          <transition mode="out-in" name="slide">
            <router-view></router-view>
          </transition>
        </div>
      </div>
  </div>
</template> 

<script>
import Header from "./components/Header.vue";

export default {
  data(){
    return {
     
    }
  },
  components : {
    appHeader : Header
  },
  created(){
    console.log(this.$store)
    this.$store.dispatch("initStocks");
  }
}

</script>

<style>
  .slide-enter-active {
    animation: slide-in 250ms ease-out forwards;
  }

  .slide-enter-leave {
    animation: slide-out 250ms ease-out forwards;
  }

  @keyframes slide-in {
    from {
      transform: translateY(-20px);
      opacity: 0;
    }

    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-out {
    from {
      transform: translateY(0);
      opacity: 1;
    }

    to {
      transform: translateY(-20px);
      opacity: 0;
    }
  }
</style>
