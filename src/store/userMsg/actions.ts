import request from '@/api/index.ts'

const actions = {
    async signUp(context: any, payload: any) {
        let params = { ...payload }
        let resPayload = request({
            method: 'post',
            url: '/signUp',
            params: params
        })
        context.commit('setUserInfo', resPayload)
    },

    async signIn(context: any, payload: any) {
        let params = { 
            username: payload.username,
            password: payload.password
        }
        let resPayload = request({
            method: 'post',
            url: '/signIn',
            params: params
        })
        context.commit('setUserInfo', resPayload)
    }
}

export default actions