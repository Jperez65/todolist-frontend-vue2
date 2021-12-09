import {shallowMount} from '@vue/test-utils';
import Todo from '@/components/Todo.vue';


const DATA = {
    data() {
        return {
            data: ['some data'],
            columns: [
                {
                    field: 'id',
                    label: 'ID',
                    thClass: 'text-right',
                    sortable: true,
                },
                {
                    field: 'name',
                    label: 'Name',
                    thClass: 'text-right',
                    sortable: false,
                },
                {
                  field: 'instructions',
                  label: 'Instructions',
                  thClass: 'text-right',
                  sortable: false,
                },
                {
                  field: 'delete',
                  key: 'delete',
                  label: 'Delete',
                },
            ],
            mocks:{
                axios:{
                    get:jest.fn(() => Promis.resolve({
                        data:['some data'],
                    })),
                }
            } 
        };
    },
    stubs:['b-table', 'b-button'],
}



describe('Test Todo component mounted method', () => {
  it('Makes the vue render to the DOM', () =>{
    const wrapper = shallowMount(Todo, DATA);
    expect(wrapper.findComponent(Todo).exists()).toBe(true);
  });
});

describe('Test Todo component method getToDoList', () => {
    it('Makes the vue render to the DOM', () => {
      const wrapper = shallowMount(Todo, DATA);
      wrapper.vm.getToDoList();
      expect(wrapper.vm.$data.data).toEqual(['some data']);
    });
  });

