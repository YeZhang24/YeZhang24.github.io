module.exports = {
    title: 'Node.js 文档',
    description: 'Node.js 学习文档及小案例展示',
    themeConfig: {

        nav: [
            { text: '首页', link: '/' },
            { text: '实例', link: '' },
            {
                text: '其他',
                items: [
                    { text: 'Github', link: 'https://github.com/MuBaiYang123' },
                    { text: '博客', link: 'https://mubaiyang123.github.io/' }
                ]
            }
        ],
        sidebar: [
            {
                title: '你好',
                path: '/',
            },
            {

                title: '前端基础',
                path: '/web/文章1',
                collapsable: false,
                children: [
                    { title: '介绍', path: '/web/文章1' },
                    { title: '交互器', path: '/web/文章2' }
                ]
            }
        ]

    }
}
