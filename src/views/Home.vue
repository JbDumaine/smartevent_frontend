<template>
  <div class="home">
    <Carousel/>
    <div id="page-content">
      <h1>YOUR LAST EVENTS</h1>
      <div id="card-wrapper">

        <div v-for="event in events" :key="event.id" class="mt-3">
          <b-card
            :title="event.name"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Event Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2">
            <div class="adr_container">
              <img src="../../public/img/icons/icons8-marker-50.png" alt="">
              <b-card-text class="event-adr">
                {{ event.location}}
              </b-card-text>
            </div>
            <b-button class="event-btn" variant="primary" @click="goToEventDetail(event.id)">ACCESS</b-button>
          </b-card>
        </div>

      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from "@/components/Carousel.vue"
import Footer from "@/components/Footer.vue"

export default {
  name: `Home`,
  components: {
    Carousel,
    Footer
  },
  data() { return { // tableau d'événements de tests
    events : [
      {
        id: 0,
        name: "Anniv JP",
        location: "32 rue du ruisseau 75000 Paris"
      },
      {
        id:1,
        name: "Halloween",
        location: "47 rue du midi 31400 Toulouse"
      }
    ]
  }},
  methods : {
    goToEventDetail: function(id) {
      this.$router.push(`eventDetail/${id}`);
    },
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user
    }
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push(`/welcome`)
    }
    this.$store.dispatch('user/getEvents');
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@200;300&display=swap');
h1,h2,h3,h4,h5,h6,p,span,button,a{
  font-family: 'Work Sans', sans-serif;
}

#page-content{
  padding: 2%;
}

#card-wrapper{
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.event-btn{
  background: $green !important;
  border: none;
  position: absolute;
  bottom: 0px;
  width: 100%;
  left: 0px;
  border-radius: 0px;
}

.adr_container{
  display: flex;
  align-items: center;
}

.adr_container > img{
  width: 20px;
  height: 20px;
  margin-bottom: 2rem;
  margin-right: 10px;
}

.event-adr{
  margin-bottom: 2rem !important;
}
</style>
