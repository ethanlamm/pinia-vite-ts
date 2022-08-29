import { defineStore } from 'pinia'


export const useCountStore = defineStore('count', {
    state: () => {
        return {
            count: 10
        }
    },

    getters: {

        doubleCount(state) {
            return state.count*2
        },
        fourTimes(): number {
            return this.doubleCount * 2
        }

    },


    actions: {
        increment(params: number) {
            this.count += params
        }
    }
})