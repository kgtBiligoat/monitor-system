export interface UserMsg {
    _id: String
    username: String
    password: String
    phone: Number
    email: String
    sex: String
    identity: String
    address: String
}

export let state: UserMsg = {
    _id: '',
    username: '',
    password: '',
    phone: -1,
    email: '',
    sex: '',
    identity: '',
    address: ''
} 