import { UserMsg } from '@/store/userMsg/state.ts'

const mutations = {
    setUserInfo: (state: UserMsg, payload: UserMsg) => {
        state = { ...payload }
        console.log(state) /** test */
    }
}

export default mutations