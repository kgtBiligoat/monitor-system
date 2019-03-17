const mutations = {
    setUserInfo: (state: any, payload: any) => {
        if(payload.data) {
            Object.keys(payload.data).forEach((item: string) => {
                state[item] = payload.data[item]
            })            
        }
    },
    logout: (state: any) => {
        state = {}   
    }

}

export default mutations