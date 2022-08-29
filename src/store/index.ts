// 引入
import { defineStore } from 'pinia'


// 定义一个Store，并暴露
/**
 * defineStore(p1,p2)
 * p1：唯一 id，必需的
 * p2：配置项
 */
export const useMainStore = defineStore('main', {
    /**
     *  state(状态)
     * 1.必须是函数：为了在服务端渲染时避免交叉请求导致数据污染
     * 2.推荐使用箭头函数：为了更好的 TS 类型推导
     */
    state: () => {
        return {
            count:10
        }
    },

    /** 
     * getters：类似计算属性
     * 1.推荐使用箭头函数，函数第一个参数是 state
     * 2.函数中中可通过 this 可获取当前store实例的数据，但必须定义返回的类型(在 TypeScript 中)
     */
    getters: {
        // 自动将返回类型推断为数字
        doubleCount: (state) => state.count * 2,
    },


    /**
     * actions：类似于 methods
     * 方法中可通过 this 可获取当前store实例的数据
     */
    actions: {
        increment(params:any) {
            this.count++
            console.log(params);    // 传过来的参数
        }
    }
})