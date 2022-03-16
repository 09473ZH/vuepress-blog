import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
    // 站点配置
    lang: 'en-zh',
    title: '笨笨博客',
    description: '✋会者不难',

    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: 'https://vuejs.org/images/logo.png',
        repo: 'vuejs/vuepress',
        navbar: [
            // NavbarItem
            {
                text: 'Foo',
                link: '/foo/',
            },
            // NavbarGroup
            {
                text: 'Group',
                children: ['/group/foo.md', '/group/bar.md'],
            },
            // 字符串 - 页面文件路径
            '/bar/README.md',
        ],
        sidebar: [
            // SidebarItem
            {
                text: 'Foo',
                link: '/foo/',
                children: [
                    // SidebarItem
                    {
                        text: 'github',
                        link: 'https://github.com',
                        children: [],
                    },
                    // 字符串 - 页面文件路径
                    '/foo/bar.md',
                ],
            },
            // 字符串 - 页面文件路径
            '/bar/README.md',
        ],
    },
})
