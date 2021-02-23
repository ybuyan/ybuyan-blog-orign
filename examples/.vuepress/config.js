module.exports = {
    title: '不言',
    description: 'Just stop thinking ,worring, looking over your shoulder.Just do it',
    base: '/',
    dest: 'dist/',
    theme: require.resolve('../../'),
    themeConfig: {
        // defaultTheme: { dark: [19, 6] },
        useVssue: true,
        showThemeButton: false,
        cover: '/cover.jpg',
        logo: '/logo.png',
        search: true,
        backgroundImage: true,
        pageGroup: 5,
        // postTime: {
        //     createTime: 'Create Time',
        //     lastUpdated: 'Last Updated',
        //     options: {
        //         dateStyle: 'full',
        //         timeStyle: 'short',
        //         hour12: false,
        //         weekday: 'long'
        //     }
        // },
        nav: [
            { text: '主页', link: '/' },
            { text: '帖子', link: '/posts/' },
            { text: '文章', link: '/doc/' },
            { text: '标签', link: '/tag/' },
            { text: '分类', link: '/category/' },
            { text: '关于我', link: '/about/' }
        ],
        footer: [
            { text: 'Github', link: 'https://github.com/ybuyan' }
        ]
    },
    // postcss: {
    //     plugins: [
    //         require('css-prefers-color-scheme/postcss'),
    //         require('autoprefixer')
    //     ]
    // }
    plugins: {
        '@vssue/vuepress-plugin-vssue': {
            // 设置 `platform` 而不是 `api`
            platform: 'github',
            // 其他的 Vssue 配置
            owner: 'OWNER_OF_REPO',
            repo: 'NAME_OF_REPO',
            clientId: 'YOUR_CLIENT_ID',
            clientSecret: 'YOUR_CLIENT_SECRET',
        },
    },
}