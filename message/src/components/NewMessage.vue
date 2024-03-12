<template>
    <h3>Add new message</h3>
    <form @submit.prevent="submit">
        <div class="mb-3">
            <label for="message" class="form-label">Your Message</label>
            <input type="text" class="form-control" id="message" v-model="msgbody">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</template>

<script>
import axios from "axios";
export default {
    data(){
        return {
            msgbody: ''
        }
    },
    methods:{
        submit(){
            axios.post('http://localhost:3000/messages', {
                body: this.msgbody
            })
            .then(response => {
                console.log('Message submitted successfully:', response.data);
                this.msgbody = '';
            })
            .catch(error => {
                console.error('Error submitting message:', error);
            });
        }
    }
}
</script>
