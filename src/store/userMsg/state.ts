export interface UserMsg {
    username: String
    password: String
    phone: Number
    email: String
    sex: String
}

export let state: UserMsg = {
    username: '',
    password: '',
    phone: -1,
    email: '',
    sex: ''
} 