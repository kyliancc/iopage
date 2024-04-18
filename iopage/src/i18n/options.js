const enMessages = {
    page: {
        home: 'Home',
        about: 'About',
        feature: 'Feature',
        note: 'Note'
    },
    home: {
        title: {
            title1: 'Welcome,',
            title2Front: 'this is ',
            title2End: '\'s',
            title3: 'personal page.'
        },
        aboutSite: {
            title: 'About this site..',
            home: 'The home page.',
            about: 'Something about me.',
            feature: 'Some features I\'ve made.',
            note: 'Some notes I\'ve written.'
        },
        aboutMe: {
            title: 'About me..',
            about1: 'Born in 2008.',
            about2: 'Computer Science and Automation enthusiast.',
            about3: 'Active in Central South University.',
            about4: 'I\'m a lazy guy, maybe..',
            about5: 'I mainly do Artificial Intelligence.',
            about6: 'Also do something about Web Frontend/Backend, even Embedded.',
            viewMore: 'View More..'
        }
    },
    about: {
        title: {
            title1: 'About',
            title2: 'me..'
        },
        intro: {
            title: 'Introduction',
            intro1: 'Hiiii, I\'m kyliancc.',
            intro2: 'A 16-year-old high school student.',
            intro3: 'Computer Science & Automation enthusiast.',
            intro4: 'Now Active in Central South University.',
            intro5: 'Mainly do Artificial Intelligence.',
        },
        basic: {
            title: 'Basic Information',
            basic1: 'Gender: Male.',
            basic2: 'Pronoun: He/Him.',
            basic3: 'Birthday: March 27th, 2008.',
            basic4: 'Country: China.',
            basic5: '16Personality: INTP-A.',
        },
        comment: {
            title: 'Comments',
            comment1: 'I\'m the guy who learns via the interest lol.',
            comment2: 'Sometimes I play piano and draw something.',
            comment3: 'I play galgames and rhythm games. (even almost no time to play)',
            comment4: 'I like discovering and creating.',
            comment5: 'I\'m a bit introverted, casual, and rebellious. XD',
            comment6: 'I\'m trying to learn social sciences like Economics recently.'
        },
        label: {
            title: 'My Labels',
        },
        personality: {
            title: '16Personality',
            job: 'Logician'
        }
    }
};

const zhCNMessages = {
    page: {
        home: '主页',
        about: '关于',
        feature: '功能',
        note: '笔记'
    },
    home: {
        title: {
            title1: '欢迎，',
            title2Front: '这里是',
            title2End: '的',
            title3: '个人页面.'
        },
        aboutSite: {
            title: '关于本网站..',
            home: '主页面.',
            about: '我的个人信息.',
            feature: '我制作的一些功能.',
            note: '我写的一些笔记.'
        },
        aboutMe: {
            title: '关于我..',
            about1: '2008年生人.',
            about2: '计算机科学与自动化爱好者.',
            about3: '活跃于中南大学.',
            about4: '我比较懒，大概..',
            about5: '我主要做人工智能相关的工作.',
            about6: '也会做一些前后端，甚至是嵌入式.',
            viewMore: '查看更多..'
        }
    },
    about: {
        title: {
            title1: '关于',
            title2: '我..'
        },
        intro: {
            title: '简介',
            intro1: '哈喽, 我是 kyliancc.',
            intro2: '16岁高中生.',
            intro3: '计算机科学与自动化爱好者.',
            intro4: '目前活跃于中南大学.',
            intro5: '主要做人工智能相关的工作.',
        },
        basic: {
            title: '基本信息',
            basic1: '性别: 男.',
            basic2: '称谓: 他.',
            basic3: '生日: 2008年3月27日.',
            basic4: '国籍: 中国.',
            basic5: '16人格: INTP-A.',
        },
        comment: {
            title: '留言',
            comment1: '我依照我的兴趣学习.',
            comment2: '偶尔我会弹点钢琴画点画.',
            comment3: '我玩 galgame 和音乐游戏. (即使没什么时间玩)',
            comment4: '比较爱好探索性和创造性的工作.',
            comment5: '性格内向随性叛逆. XD',
            comment6: '最近在了解一些社科，如经济学.'
        },
        label: {
            title: '我的标签',
        },
        personality: {
            title: '16人格',
            job: '逻辑学家'
        }
    }
};

const jaMessages = {
    page: {
        home: 'ホーム',
        about: 'アバウト',
        feature: 'フィーチャ',
        note: 'ノート'
    },
    home: {
        title: {
            title1: 'ようこそ',
            title2Front: 'これは',
            title2End: 'の',
            title3: '個人ページ.'
        }
    },
}

const i18nOptions = {
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
        en: enMessages,
        'zh-CN': zhCNMessages,
        ja: jaMessages
    }
}

export default i18nOptions
