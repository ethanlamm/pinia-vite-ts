import { defineStore } from 'pinia';

// 引入其他store
import { useCountStore } from './count';
import { useUserStore } from './user';

// 不能这样写
// const count = useCountStore()
// const user = useUserStore()

// 模块嵌套

// 方法一：
// 注意：
// 1.若使用该方法，则 mainStore 不是真正的store，因此解构用reactive
// 2.若使用该方法，则pinia持久化存储只能是各自存储
// export const useMainStore = function() {
//     return {
//         count: useCountStore(),
//         user: useUserStore()
//     }
// }

// 注意：有bug，vite不太稳定，使用pinia-plugin-persist插件，使用方法二有时候会报错！！！！！
// 方法二：
// 注意：
// 1.若使用该方法，则 mainStore 是真正的store，因此解构用storeToRefs
// 2.解构出来的 count、user 需要用 .value 取值
// 3.若使用该方法，可以在mianStore中定义存储哪个store
// 4.若没有写 path，则默认存储 mainStore (当前store)，即count、user都会存储
// 5.使用pinia-plugin-persist插件，会存储 state 和 getters
export const useMainStore = defineStore('main', {
    state: () => {
        return {
            count: useCountStore(),
            user: useUserStore()
        }
    },

    persist: {
        enabled: true,
        strategies: [
            {
                key: 'count',
                storage: localStorage,
                paths:['count']
            }
        ]
    }
})