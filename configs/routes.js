module.exports = {
    HOME:[
        {method:'get', path:'/',endpoint:'index'}
    ],
    AUTH:[
        {method:'get', path:'/fetch',endpoint:'fetch'},
        {method:'post', path:'/login', endpoint:'login'},
        {method:'post', path:'/register', endpoint:'register'},
    ]

}