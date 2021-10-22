import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: '' },
    'pagePath': "posts/test.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/test.html",
    'title': "A-SOUL",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>A-SOUL</h1>\n<p>A-SOUL是乐华娱乐与字节跳动合作成立的虚拟女子组合。目前共有五名成员，分别是贝拉、嘉然、乃琳、珈乐和向晚，目前成员们的扮演者未被公布。</p>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@17.0.2/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@17.0.2/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'footer': React.createElement("footer", null,
        "Powered by\u00A0",
        React.createElement("a", { href: "https://github.com/xcatliu/pagic", target: "_blank" }, "Pagic")),
    'contentTitle': React.createElement("h1", { key: "0" }, "A-SOUL"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>A-SOUL是乐华娱乐与字节跳动合作成立的虚拟女子组合。目前共有五名成员，分别是贝拉、嘉然、乃琳、珈乐和向晚，目前成员们的扮演者未被公布。</p>'
        } }),
    'toc': null,
    'author': undefined,
    'contributors': [],
    'date': "2021-10-22T11:27:59.156Z",
    'updated': null,
    'excerpt': "A-SOUL是乐华娱乐与字节跳动合作成立的虚拟女子组合。目前共有五名成员，分别是贝拉、嘉然、乃琳、珈乐和向晚，目前成员们的扮演者未被公布。",
    'cover': undefined,
    'categories': [
        "编程世界"
    ],
    'tags': [
        "代码质量",
        "代码复杂度"
    ],
    'blog': {
        "isPost": true,
        "posts": [
            {
                "pagePath": "posts/test.md",
                "title": "A-SOUL",
                "link": "posts/test.html",
                "date": "2021-10-22T11:27:59.156Z",
                "updated": null,
                "contributors": [],
                "categories": [
                    "编程世界"
                ],
                "tags": [
                    "代码质量",
                    "代码复杂度"
                ],
                "excerpt": "A-SOUL是乐华娱乐与字节跳动合作成立的虚拟女子组合。目前共有五名成员，分别是贝拉、嘉然、乃琳、珈乐和向晚，目前成员们的扮演者未被公布。"
            }
        ],
        "categories": [
            {
                "name": "编程世界",
                "count": 1
            }
        ],
        "tags": [
            {
                "name": "代码复杂度",
                "count": 1
            },
            {
                "name": "代码质量",
                "count": 1
            }
        ]
    }
};
