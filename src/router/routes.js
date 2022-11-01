export default [
    {
        path: '/auth/register',
        name: 'Register',
        component: () => import('@/views/auth/Register')
    },
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home')
    },
    {
        path: '*',
        redirect: '/'
    },
    {
        path: '/auth/login',
        name: 'Login',
        component: () => import('@/views/auth/Login')
    },
    // EditUsers
    {
        path: '/users/1/edit',
        component: () => import('@/views/users/Edit.vue'),
        children: [
            {
                path: '',
                name: 'EditProfile',
                component: () => import('@/views/users/Profile.vue'),
                meta: { auth: true }
            },
            // EditAvatar
            {
                path: '/users/1/edit_avatar',
                name: "EditAvatar",
                component: () => import('@/views/users/Avatar.vue'),
                meta: { auth: true }
            },
            // EditPassword
            {
                path: '/users/1/edit_password',
                name: 'EditPassword',
                component: () => import('@/views/users/Password.vue'),
                meta: { auth: true }
            }
        ]
    },
    // Create
    {
        path: '/articles/create',
        name: 'Create',
        component: () => import('@/views/articles/Create'),
        meta: { auth: true }
    }
]