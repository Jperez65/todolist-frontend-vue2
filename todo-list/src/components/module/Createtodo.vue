<template>
<div>
    <div class="column">
        <label for="itemName">To do: </label>
    </div>
        <b-form-input v-model="form.name" placeholder="Enter your name"></b-form-input><br>
    <div class="column">
        <label for="itemName">Instruction: </label>
    </div>
        <b-form-textarea
        id="textarea"
        v-model="form.instructions"
        placeholder="Enter something..."
        rows="3"
        max-rows="3"
        >
        </b-form-textarea><br>
        <b-field label="Select datetime">
            <b-datetimepicker
                v-model="form.date"
                placeholder="Type or select a date..."
                icon="calendar-today"
                :locale="locale"
                editable>
            </b-datetimepicker>
        </b-field>
    <b-button @click='createItem'>Submit</b-button>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Todo',
  data() {
    return {
        showWeekNumber: false,
        enableSeconds: false,
        hourFormat: undefined, 
        locale: undefined, 
        form: {
            name: null,
            instructions: null,
            date: null,
        }
    }
  },
  methods: {
    createItem() {
      console.log('Form data', this.form);
      axios.post(`http://localhost:5000/api/todolist/create`, { 
        name: this.form.name,
        instructions: this.form.instructions,
        execDate: this.form.date.toString(), 
      }).then((response) =>{
        console.log(response);
        this.form.name = null;
        this.form.instructions = null;
        this.form.date = null;
      }).catch((error) => {
          console.log(error);
      });
    },
    clearDateTime(){
      this.form.date=null;
    }


  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

input[type=text]{
  width: 50%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

textarea[type=text]{
    width:50%;
    padding: 12px 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

div {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}

label{
    padding: 6px 6px 6px 0;
  display: inline-block;
}




</style>