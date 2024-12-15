import {defineConfig} from 'vitepress'

export const en = defineConfig({
    lang: "en-US",
    title: "Marsho AI",
    description: "Kawaii, Intelligent and Easy to Extend",
    themeConfig: {
        docFooter: {
            prev: 'Prev',
            next: 'Next'
        },
        nav: [
            {text: 'Home', link: '/en'},
            {text: 'Usage', link: '/en/start/install'},
            {text: 'Develop', link: '/en/dev/extension'},
        ],
        langMenuLabel: 'Language',
        returnToTopLabel: 'To top',
        sidebarMenuLabel: 'Option',
        darkModeSwitchLabel: 'Theme',
        lightModeSwitchTitle: 'Light',
        darkModeSwitchTitle: 'Dark',
    },
})