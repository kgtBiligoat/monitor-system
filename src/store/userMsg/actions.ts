import request from '@/api/index.ts'

const actions = {
    async signUp(context: any, payload: any) {
        let params = { ...payload }
        let resPayload = await request({
            method: 'post',
            url: '/signUp',
            data: params
        })
        context.commit('setUserInfo', resPayload.data)
        return resPayload.data
    },

    async signIn(context: any, payload: any) {
        let params = { 
            username: payload.username,
            password: payload.password
        }
        let resPayload = await request({
            method: 'post',
            url: '/signIn',
            data: params
        })
        context.commit('setUserInfo', resPayload.data)
        return resPayload.data
    }
}

export default actions