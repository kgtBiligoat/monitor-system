const mutations = {
    setUserInfo: (state: any, payload: any) => {
        Object.keys(payload.data).forEach((item: string) => {
            state[item] = payload.data[item]
        })
    }
}

export default mutations