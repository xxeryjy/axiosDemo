<template>
    <div class="axios">
        <ul>
            <li v-for="item in items">
                <p>{{item.code}}</p>
                <p>{{item.description}}</p>
                <p>{{item.rate}}</p>
            </li>
        </ul>
    </div>
</template>
<script>
    import axios from 'axios'
    let URL = 'https://api.coindesk.com/v1/bpi/currentprice.json'
    export default {
        name: 'Axios',
        data(){
          return{
              items:[]
          }
        },
        mounted() {
            axios
            .get(URL)
            .then(res => this.items = res.data.bpi)
        }
    }
</script>
<style lang="scss">

</style>