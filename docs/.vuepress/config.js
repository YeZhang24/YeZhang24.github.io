
module.exports =  {
    title: '小红花的',
    description: '简单生活',
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: '/', // 这是部署到github相关的配置 下面会讲
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        nav: [
            { text: '前端算法', link: '/algorithm/' }, // 内部链接 以docs为根目录
            { text: '博客', link: 'http://obkoro1.com/' }, // 外部链接
            // 下拉列表
            {
                text: 'GitHub',
                items: [
                    { text: 'GitHub地址', link: 'https://github.com/OBKoro1' },
                    {
                        text: '算法仓库',
                        link: 'https://github.com/OBKoro1/Brush_algorithm'
                    }
                ]
            }
        ],
        sidebar: [
            // docs文件夹下面的guide文件夹 文档中md文件 书写的位置(命名随意)
            {
                title: '导航栏',
                path: '/',
                collapsable: false, // 不折叠
                children: [
                    { title: "学前必读", path: "/" }
                ]
            },
            {
                title: "文章导航",
                path: '/guide/markdown', // 默认激活的选项
                collapsable: false, // 不折叠
                children: [
                    { title: "第一篇", path: "/guide/markdown" },
                    { title: "第二篇", path: "/guide/encrypt" }
                ],
            }
        ],
    }
};
