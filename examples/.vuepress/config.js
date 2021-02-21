module.exports = {
    title: '不言',
    description: 'Just stop thinking ,worring, looking over your shoulder.Just do it',
    base: '/',
    dest: 'dist/',
    theme: require.resolve('../../'),
    themeConfig: {
        // defaultTheme: { dark: [19, 6] },
        showThemeButton: false,
        cover: '/cover.jpg',
        logo: '/logo.png',
        search: true,
        backgroundImage: false,
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
}