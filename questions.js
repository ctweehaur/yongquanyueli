// ==========================================================================
// 📝 《涌泉跃鲤》综合练习题库数据集 (questions.js) - 画线字醒目下划线修复版
// ==========================================================================

const U = (text) => `<span class="proper-noun">${text}</span>`;
const PT = (pts) => `<span style="display:inline-block; background:var(--primary-color); color:#fff; font-size:11px; font-weight:800; padding:0 5px; margin:0 3px; border-radius:4px;">[${pts}分]</span>`;
const KW = (text) => `<span style="background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.3); padding:0 4px; border-radius:4px; font-weight:800;">[${text}]✓</span>`;
const HL = (text) => `<u style="text-decoration:underline; text-decoration-thickness:2px; text-underline-offset:4px; color:var(--primary-color); font-weight:800;">${text}</u>`;

// 一、 10道客观选择题数据集
const quizDataList = [
    {
        id: 1,
        question: `在第1段“${U("汉")}${U("姜诗")}，事母至孝”中，“事”与“至”两个字的意思分别是什么？`,
        options: [
            "A 事情；到达某种程度",
            "B 侍奉；极、最（程度副词）",
            "C 从事；以至于、直到",
            "D 故事；平生最为看重"
        ],
        answer: "B",
        teacherAnalysis: `【实词与虚词释义题】详见第1段。“事”在文言中作动词，意为“侍奉、奉养”；“至”作程度副词，意为“极、最”。整句意为：${U("汉")}朝的${U("姜诗")}，侍奉母亲极其孝顺。`
    },
    {
        id: 2,
        question: `第1段“妻${U("庞氏")}，奉姑尤谨”中的“姑”和“谨”，在文中分别指什么？`,
        options: [
            "A 小姑子；性格拘谨内向",
            "B 姑妈；说话小心翼翼",
            "C 婆婆（夫之母）；恭敬周到",
            "D 邻家老妇；做事勤俭节约"
        ],
        answer: "C",
        teacherAnalysis: "【古今异义题】详见第1段。古汉语中妻子称丈夫的母亲为“姑”（即婆婆）；“尤谨”指尤为恭敬谨慎、细致周到。"
    },
    {
        id: 3,
        question: "在第1段“母性好饮江水，去舍六七里”中，“好”与“去”的正确读音和释义是？",
        options: [
            "A hǎo（优良）；离开家门",
            "B hào（喜爱）；距离房屋",
            "C hǎo（习惯）；前往江边",
            "D hào（渴望）；去掉杂质"
        ],
        answer: "B",
        teacherAnalysis: "【破音字与古今异义题】详见第1段。“好”读作 hào，意为“喜爱、偏好”；“去”在古文中表空间距离，意为“距离（房屋有六七里远）”。"
    },
    {
        id: 4,
        question: "第1段“妻出汲以奉之”中，“汲”字的意思和句末代词“之”指代的对象分别是？",
        options: [
            "A 烧开水；指代清澈的江水",
            "B 过滤水；指代丈夫姜诗",
            "C 打水（取水）；指代婆婆",
            "D 挑水桶；指代邻家的老母"
        ],
        answer: "C",
        teacherAnalysis: `【实词与代词指代题】详见第1段。“汲（jí）”指从江河或井里打水、取水；“以奉之”的“之”是第三人称代词，指代前文好饮江水的婆婆（${U("姜诗")}之母）。`
    },
    {
        id: 5,
        question: `根据第1段“又嗜鱼脍，夫妇常作”，${U("姜诗")}的母亲在饮食上还有什么喜好？`,
        options: [
            "A 爱喝鲜鱼熬成的浓汤",
            "B 爱吃切细的鱼肉佳肴",
            "C 爱吃用江水清蒸的鲤鱼",
            "D 爱吃晒干腌制的咸鱼干"
        ],
        answer: "B",
        teacherAnalysis: `【内容理解题】详见第1段。“嗜（shì）”意为特别喜爱吃；“鱼脍（kuài）”指切得很细的鱼肉料理。因为母亲爱吃，${U("姜诗")}夫妇便经常动手为她烹制。`
    },
    {
        id: 6,
        question: "第1段“又不能独食，召邻母共食”是典型的文言省略句，这两分句省略的主语依次是谁？",
        options: [
            "A 姜诗的母亲；邻居的老母",
            "B 姜诗的母亲；姜诗夫妇俩",
            "C 妻子庞氏；姜诗的母亲",
            "D 姜诗夫妇俩；邻居的老母"
        ],
        answer: "B",
        teacherAnalysis: `【文言省略句式题】详见第1段。此句存在“暗换主语”现象：“（母）又不能独食”承前省略主语“母亲”；而“（夫妇）召邻母共食”则省略了主语“${U("姜诗")}夫妇”。`
    },
    {
        id: 7,
        question: "第1段“舍侧忽有涌泉，味如江水，日跃双鲤”中的“日”字，在这里是什么用法与意思？",
        options: [
            "A 名词；太阳升起的时候",
            "B 代词；指代某一个日子",
            "C 名词作状语；每天、每日",
            "D 形容词；如白昼般明亮"
        ],
        answer: "C",
        teacherAnalysis: "【词类活用题】详见第1段。“日”在此处属于“名词作时间状语”，修饰动词“跃”，意为“每天、每日”。"
    },
    {
        id: 8,
        question: "第1段末尾“舍侧忽有涌泉，味如江水，日跃双鲤”，这两大奇景与前文哪些情节严密呼应？",
        options: [
            "A 呼应姜诗博学多才，且庞氏擅长捕鱼",
            "B 呼应房屋靠近江边，且地下暗河相通",
            "C 呼应母好饮江水，且嗜鱼脍并邀邻母共食",
            "D 呼应天旱缺乏饮水，且村中百姓饥饿"
        ],
        answer: "C",
        teacherAnalysis: "【结构照应题】详见第1段。“涌泉味如江水”精准回应了前文“母性好饮江水，去舍六七里”；“日跃双鲤（两条鲤鱼）”则精准回应了“又嗜鱼脍”且与“邻母共食”（两位老人刚好一人一条）。"
    },
    {
        id: 9,
        question: "下列对第1段中句子的现代汉语翻译（括号内为补全的省略成分），完全正确的一项是？",
        options: [
            "A 去舍六七里：（母亲）离开家门走了六七里路",
            "B 奉姑尤谨：侍奉（丈夫的）小姑子格外拘谨",
            "C 又不能独食：（妻子）又不能够独自一人做饭吃",
            "D 取以供：（夫妇俩）取用（泉水与双鲤）来供养（母亲）"
        ],
        answer: "D",
        teacherAnalysis: "【文言翻译题】详见第1段。A项省略主语应为“江水/江边”，“去”译为“距离”；B项“姑”指婆婆，“谨”指恭敬周到；C项省略主语为“母亲”，“独食”指独自吃饭；D项遵循“留、补、换”原则，准确补出主语与宾语，完全正确。"
    },
    {
        id: 10,
        question: "综合第1段全文，《涌泉跃鲤》这则故事最核心的主旨与表现手法是什么？",
        options: [
            "A 借景抒情；赞美大自然涌泉与锦鲤的奇异景观",
            "B 记叙写实；记录汉代四川地区独特的地理水文",
            "C 孝感天地；褒扬夫妇至诚行孝、体贴入微的美德",
            "D 对比讽刺；批评邻家子女没有好好奉养自己母亲"
        ],
        answer: "C",
        teacherAnalysis: `【中心思想题】详见第1段。故事通过${U("姜诗")}与${U("庞氏")}不辞辛劳汲江水、制鱼脍、请邻母伴食的事迹，借“涌泉跃鲤”的奇幻瑞象，颂扬了夫妻同心、至诚至孝的传统美德。`
    }
];

// 二、 5道主观简答题数据集（融合《中二华文》课本第29页“理解与探究”原题 & UASA 15分标准）
const essayDataList = [
    {
        id: 1,
        question: `（一）结合上下文，判断第1段中下列两个文言副词“${HL("又")}”在句中的意思： <span style="color:var(--primary-color);">[2分]</span><br>` +
                  `<div style="font-weight:500; margin-top:6px; line-height:1.85;">` +
                  `a. ${HL("又")}嗜鱼脍<br>` +
                  `b. ${HL("又")}不能独食` +
                  `</div>`,
        sampleAnswer: `a. <strong>又</strong>：表示并列或补充关系，意为<strong>“此外、而且（除好饮江水外，还……）”</strong>${PT(1)}。<br>b. <strong>又</strong>：表示更进一层的转折或补充，意为<strong>“再者、加上（虽然爱吃鱼脍，却又……）”</strong>${PT(1)}。`,
        teacherAnalysis: "<strong>【课本原题：文言虚词辨析题】</strong>对应课本第29页第1题。第一个“又”连接母亲的第二个饮食喜好（好饮江水 → 又嗜鱼脍）；第二个“又”补充说明母亲进食时的特殊习惯（不能独食）。"
    },
    {
        id: 2,
        question: `（二）${U("姜诗")}和妻子${U("庞氏")}如何孝敬母亲？试结合全文用自己的话简要说明。 <span style="color:var(--primary-color);">[4分]</span>`,
        sampleAnswer: `① 母亲生性喜欢喝江水，虽然江边距离住家有六七里远，妻子${U("庞氏")}仍天天不辞劳苦亲自去江边打水回来奉养婆婆${PT(1)}；<br>② 母亲特别爱吃切细的鱼肉（鱼脍），${U("姜诗")}夫妇就经常动手为她烹调${PT(1)}；<br>③ 母亲不习惯独自一人用餐，夫妇俩便主动邀请邻居家的老母亲过来陪母亲一起进餐${PT(1)}；<br>④ 后来屋旁涌出泉水并每天跃出两条鲤鱼，夫妇俩便取用泉水与双鲤来供养母亲${PT(1)}。`,
        teacherAnalysis: "<strong>【课本原题：内容归纳题】</strong>对应课本第29页第2题。按事情发展顺序归纳四点孝行（每点1分），须用现代白话作答。"
    },
    {
        id: 3,
        question: `（三）故事结尾写“舍侧忽有涌泉，味如江水，日跃双鲤”。你认为这个故事的情节符合现实逻辑吗？作者这样安排的目的是什么？<span style="background:var(--primary-color); color:#fff; font-size:11px; padding:1px 6px; border-radius:4px; margin-left:4px;">KBAT</span> <span style="color:var(--primary-color);">[5分]</span>`,
        sampleAnswer: `<strong>不符合现实科学逻辑（或：带有神话巧合色彩）</strong>${PT(1)}。因为在现实自然界中，房屋旁很难恰好因行孝就突然冒出味道如江水的泉水，更不可能每天精准跳出两条鲤鱼${PT(2)}。<br>作者这样安排的目的：是为了体现“精诚所至，金石为开”（至孝感动天地）的思想，借神奇的祥瑞之象大力赞美${U("姜诗")}夫妇的至孝美德，并宣扬尊老敬老的孝文化思想，劝勉世人行孝${PT(2)}。`,
        teacherAnalysis: "<strong>【课本原题：高阶思维 KBAT 逻辑评价与创作意图题】</strong>对应课本第27页页边批注及第29页第3题。先判断现实逻辑性并说明理由（3分），再点出宣扬孝道、褒扬孝子的写作目的（2分）。"
    },
    {
        id: 4,
        question: `（四）试解释第1段中下列画线字的意思： <span style="color:var(--primary-color);">[2分]</span><br>` +
                  `<div style="font-weight:500; margin-top:6px; line-height:1.85;">` +
                  `a. 妻${U("庞氏")}，奉${HL("姑")}尤谨<br>` +
                  `b. ${HL("去")}舍六七里` +
                  `</div>`,
        sampleAnswer: `a. <strong>姑</strong>：婆婆（丈夫的母亲）${PT(1)}<br>b. <strong>去</strong>：距离 / 相距${PT(1)}`,
        teacherAnalysis: "<strong>【文言实词释义题】</strong>对应课本第27页注释4、6。重点考查古今异义词。"
    },
    {
        id: 5,
        question: `（五）将下面的文言句子译为现代汉语： <span style="color:var(--primary-color);">[4分]</span><br><span style="font-family:'KaiTi',serif; font-size:17px;">“母[性][好]饮江水，[去][舍]六七里，妻出[汲]以[奉][之]。”</span>`,
        sampleAnswer: `母亲${KW("天性/生性")}${KW("喜欢/喜爱")}喝江水，（江边）${KW("距离")}${KW("房屋/住处")}有六七里远，妻子出门${KW("去江边取水/打水")}来${KW("奉养/供奉")}${KW("她（婆婆）")}。<br>` +
                      `<div style="margin-top:8px; padding:6px 10px; background:var(--card-bg); border:1px dashed var(--input-border); border-radius:6px; font-size:12.5px; color:var(--text-muted);">` +
                      `📊 <strong>UASA 翻译评分折算表（共 7 个采分点）：</strong><br>` +
                      `✓ 1 个 ＝ <strong>1分</strong> &nbsp;｜&nbsp; ✓ 2–3 个 ＝ <strong>2分</strong> &nbsp;｜&nbsp; ✓ 4–5 个 ＝ <strong>3分</strong> &nbsp;｜&nbsp; ✓ 6–7 个 ＝ <strong>4分</strong>` +
                      `</div>`,
        teacherAnalysis: "<strong>【文言翻译题】</strong>采用“留、补、删、换、调”五字法。7 个加框关键词翻译准确、补出省略主语“江边”且语句通顺，即可得满分 4 分。"
    }
];
