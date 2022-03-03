module.exports = {
    title: '不言',
    description: 'Just stop thinking ,worring, looking over your shoulder.Just do it',
    head: [
        ['meta', { name: 'keywords', content: '前端' }],
        ['link', { rel: 'icon', href: `favicon.ico` }]
    ],
    base: '/',
    dest: 'dist/',
    theme: require.resolve('../../'),
    themeConfig: {
        // defaultTheme: { dark: [19, 6] },
        useVssue: false,
        showThemeButton: false,
        cover: '/cover.jpg',
        logo: '/logo.png',
        search: true,
        backgroundImage: true,
        pageGroup: 5,
        // postTime: {
        //     createTime: '创建时间',
        //     lastUpdated: '最近更新',
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
    plugins: [
        [
            '@vuepress/register-components',
            {
                componentsDir: './components'
            }
        ],
        [
            'copyright',
            {
                // noCopy: true, // 选中的文字将无法被复制
                // minLength: 100,
                noSelect: true,
                disabled: true
            },
        ],
    ]
}