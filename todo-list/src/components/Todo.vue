<template>
<div class="container">
    <b-button
        label="Delete"
        type="is-danger"
        class="field"
        @click="deleteItemId(checkedRows)" />

        <b-table 
        :columns="columns"
        :data="data" 
        :striped="true"
        :checked-rows.sync="checkedRows"
        :checkbox-position="checkboxposition"
        :paginated="isPaginated"
        :per-page="perPage"
        :current-page.sync="currentPage"
        :pagination-simple="isPaginationSimple"
        :pagination-position="paginationPosition"
        :pagination-rounded="isPaginationRounded"

        checkable
        hover
        >

        </b-table>
</div>
</template>

<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                checkboxposition: "left",
                data: [],
                checkedRows: [],
                isPaginated: true,
                isPaginationSimple: false,
                isPaginationRounded: false,
                paginationPosition: 'bottom',
                currentPage: 1,
                perPage: 3,
                columns: [
                    {
                        field: 'id',
                        label: 'ID',
                        key: 'id',
                        sortable: true,
                    },
                    {
                        field: 'name',
                        label: 'Name',
                        key: 'name',
                        sortable: false,
                    },
                    {
                      field: 'instructions',
                      label: 'Instructions',
                      key: 'instruction',
                      sortable: false,
                    },
                    {
                      field: 'execDate',
                      label: 'Date',
                      centered: true,
                    }
                ]
            }
        },
    mounted () {
    this.getToDoList();
    // this gets called on redering of the vue componet
    console.log('functions was called');
  },
  methods: {
    // method to pull data into this.todo list 
    getToDoList() {
      // api call here
      axios.get('http://localhost:5000/getall/').then((response) => {
        console.log('response data ', response);
        this.data = response.data;
      }).catch((error) => {
        console.log(error);
      });
      console.log(this.toDoList);
    },
    deleteItem(name){
      axios.delete(`http://localhost:5000/api/todolist/delete/${name}`).then((response) => {
        console.log(response);
        this.getToDoList();
      }).catch((error) =>  {
        console.log(error);
      });
    },
    deleteItemId(data){
      console.log("starting from here");
      console.log(data);
      console.log(this.checkedRows[0].name)
      for( let i = 0; i< data.length ; i++){
          axios.delete(`http://localhost:5000/api/todolist/delete_id/${this.checkedRows[i].id}`).then((response) => {
              console.log(response);
              this.getToDoList();
            }).catch((error) =>  {
              console.log(error);
            });
          }
        this.checkedRows = [];
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#container {
  text-align: center;
  margin-top: 60px;
}
thead, tbody, tfoot, tr, td, th {
  text-align: left;
}

</style>
