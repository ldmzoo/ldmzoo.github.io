export default {
    theme: 'blog',
    srcDir: 'src',
    outDir: 'public',
    plugins: ['blog'],
    title: '李大猫动物园',
    description: '欢迎来到李大猫动物园',
    blog: {
        root: '/posts/',
        social: {
          github: 'ldmzoo',
        },
    },
    nav: [
        {
          text: '首页',
          link: '/index.html',
          icon: 'czs-home-l',
        },
        {
          text: '分类',
          link: '/categories/index.html',
          icon: 'czs-category-l',
        },
        {
          text: '标签',
          link: '/tags/index.html',
          icon: 'czs-tag-l',
        },
        {
          text: '关于',
          link: '/about/index.html',
          icon: 'czs-about-l',
        },
        {
          text: '归档',
          link: '/archives/index.html',
          icon: 'czs-box-l',
        },
        // {
        //   text: '友情链接',
        //   link: '/links/index.html',
        //   icon: 'czs-link-l',
        // },
    ],
};
