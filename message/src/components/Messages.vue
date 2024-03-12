<template>
    <h3>Liste des Messages</h3>
 <ul class="list-group" v-for="message in messages">
  <li class="list-group-item">{{ message }}</li>
</ul>

</template>
<script>
import axios from "axios";
export default {
    data(){
        return {
            messages:[]
        }
    },
    async created(){
        try {
            const response = await axios.get('http://localhost:3000/messages');
            this.messages = response.data; 
        } catch (error) {
            console.error("Erreur lors de la récupération des messages :", error);
        }
    }    }

</script>