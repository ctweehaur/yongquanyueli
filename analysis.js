// ==========================================================================
// 📖 《涌泉跃鲤》深度文本赏析数据库 (analysis.js) - 古今异义上下双行对比版
// ==========================================================================

const U_TAG = (text) => `<span class="proper-noun">${text}</span>`;

const OMISSION_TAG = (role, text) => 
    `<span style="display:inline-block; background:var(--wrong-bg); color:var(--wrong-text); border:1px dashed var(--wrong-border); padding:0 6px; margin:0 2px; border-radius:4px; font-size:12.5px; font-weight:800;" title="文言省略句采分点：原文省略了${role}，考场翻译时必须补出">＋${role}：${text}</span>`;

const GRAMMAR_TAG = (type, text) => 
    `<span style="display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.22); padding:2px 8px; margin:2px 4px 2px 0; border-radius:5px; font-size:12px; font-weight:800; vertical-align:top;">${type}：${text}</span>`;

// 🏛️ 古今异义上下双行对比小卡片
const ANCIENT_MODERN_TAG = (word, ancient, modern) => 
    `<div style="display:inline-flex; flex-direction:column; background:var(--notebook-bg); border:1px solid rgba(43,76,101,0.22); padding:5px 10px; margin:3px 6px 3px 0; border-radius:6px; font-size:12px; line-height:1.55; vertical-align:middle;">` +
        `<div style="color:var(--primary-color); font-weight:800;">🔹 【${word}】古义：${ancient}</div>` +
        `<div style="color:var(--text-muted); font-weight:600; border-top:1px dashed var(--input-border); margin-top:2px; padding-top:2px;">🔸 【${word}】今义：${modern}</div>` +
    `</div>`;

const CARET = `<span style="color:var(--wrong-color); font-weight:800; padding:0 2px;" title="此处省略了句子成分">‸</span>`;

const lessonTeacherAnalysis = {
    overview: "<strong>【全文白话译文（含省略成分补全）】</strong><br>" +
        "<span style='font-weight:500; display:inline-block; margin-top:6px; line-height:1.95;'>" +
        U_TAG("东汉") + "人" + U_TAG("姜诗") + "，侍奉母亲极其孝顺。" +
        OMISSION_TAG("定语", "他的") + "妻子" + U_TAG("庞氏") + "，侍奉婆婆更是恭敬周到。母亲生性喜欢喝江水，" +
        OMISSION_TAG("主语", "江边") + "距离房屋有六七里远，妻子" + U_TAG("庞氏") + "便常常出门去江边打" +
        OMISSION_TAG("宾语", "江水") + "回来奉养婆婆。" +
        OMISSION_TAG("主语", "母亲") + "又特别爱吃切细的鱼肉（鱼脍），" + U_TAG("姜诗") + "夫妇就经常动手烹制" +
        OMISSION_TAG("宾语", "鱼脍") + "。" +
        OMISSION_TAG("主语", "母亲") + "又不习惯独自一人享用美食，" +
        OMISSION_TAG("主语", "夫妇俩") + "便邀请邻居家的老母亲过来" +
        OMISSION_TAG("状语", "陪母亲") + "一起进餐。后来，房屋旁边突然涌出一眼泉水，" +
        OMISSION_TAG("主语", "泉水") + "味道就像江水一样甘美，而且" +
        OMISSION_TAG("状语", "泉中") + "每天都会跃出两条鲤鱼，" + U_TAG("姜诗") + "夫妇便取用" +
        OMISSION_TAG("宾语", "泉水与双鲤") + "来供养" +
        OMISSION_TAG("宾语", "母亲") + "。" +
        "</span><br><br>" +
        "<strong>【作品出处与主旨】</strong><br>" +
        "<span style='font-weight:500; display:inline-block; margin-top:4px;'>《涌泉跃鲤》选自" + U_TAG("元代") + U_TAG("郭居敬") + "编录的《二十四孝》（故事原型出自《后汉书·列女传》）。全文仅61字，密集运用了文言文典型的<strong>“承前省略（省主语、省宾语）”</strong>手法，颂扬了夫妻同心、孝亲睦邻的传统美德。</span>",

    paragraphs: {
        1: "<strong>【逐句白话直译与考场采分点对照（上文下译）】</strong>" +
           "<div style='font-size:12.5px; color:var(--wrong-text); background:var(--wrong-bg); border:1px dashed var(--wrong-border); padding:6px 12px; border-radius:6px; margin-top:8px; font-weight:600;'>" +
               "💡 <strong>考场翻译图例：</strong>原文 <strong>‸</strong> 为省略位；译文中 <span style='border:1px dashed var(--wrong-border); padding:0 4px; border-radius:3px;'>＋主语/宾语</span> 为必补省略成分；下方双行卡片直观对比 <strong>古义 vs 今义</strong>。" +
           "</div>" +
           "<div style='margin-top:10px; display:flex; flex-direction:column; gap:12px;'>" +

               // 第 1 句对照卡片
               "<div style='padding:12px 15px; background:var(--card-bg); border:1px solid var(--input-border); border-radius:8px; line-height:1.8;'>" +
                   "<div style='color:var(--text-color); font-weight:800;'>" +
                       "<span style='display:inline-block; background:var(--primary-color); color:#fff; font-size:11px; padding:1px 6px; border-radius:4px; margin-right:8px;'>原</span>" +
                       U_TAG("汉") + U_TAG("姜诗") + "，事母至孝。" + CARET + "妻" + U_TAG("庞氏") + "，奉姑尤谨。" +
                   "</div>" +
                   "<div style='color:var(--primary-color); font-weight:500; margin-top:6px;'>" +
                       "<span style='display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.25); font-size:11px; font-weight:800; padding:0 6px; border-radius:4px; margin-right:8px;'>译</span>" +
                       U_TAG("东汉") + "人" + U_TAG("姜诗") + "，侍奉母亲最为孝顺。" + OMISSION_TAG("定语", "他的") + "妻子" + U_TAG("庞氏") + "，侍奉婆婆更加恭敬谨慎。" +
                   "</div>" +
                   "<div style='margin-top:8px; padding-top:6px; border-top:1px dashed var(--input-border);'>" +
                       ANCIENT_MODERN_TAG("姑", "婆婆（丈夫的母亲）", "姑妈（父亲的姐妹）") +
                       ANCIENT_MODERN_TAG("事", "侍奉、奉养（动词）", "事情、事务（名词）") +
                       ANCIENT_MODERN_TAG("至", "极、最（程度副词）", "到、至于") +
                   "</div>" +
               "</div>" +

               // 第 2 句对照卡片
               "<div style='padding:12px 15px; background:var(--card-bg); border:1px solid var(--input-border); border-radius:8px; line-height:1.8;'>" +
                   "<div style='color:var(--text-color); font-weight:800;'>" +
                       "<span style='display:inline-block; background:var(--primary-color); color:#fff; font-size:11px; padding:1px 6px; border-radius:4px; margin-right:8px;'>原</span>" +
                       "母性好饮江水，" + CARET + "去舍六七里，妻出汲" + CARET + "以奉之。" +
                   "</div>" +
                   "<div style='color:var(--primary-color); font-weight:500; margin-top:6px;'>" +
                       "<span style='display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.25); font-size:11px; font-weight:800; padding:0 6px; border-radius:4px; margin-right:8px;'>译</span>" +
                       "母亲天性喜爱喝江水，" + OMISSION_TAG("主语", "江边") + "距离家中房屋有六七里路，妻子" + U_TAG("庞氏") + "便出门去打" + OMISSION_TAG("宾语", "江水") + "回来奉养她（婆婆）。" +
                   "</div>" +
                   "<div style='margin-top:8px; padding-top:6px; border-top:1px dashed var(--input-border);'>" +
                       ANCIENT_MODERN_TAG("去", "距离、相距", "前往、到某处去") +
                       ANCIENT_MODERN_TAG("舍", "房屋、住家（读 shè）", "舍弃、放弃（读 shě）") +
                       GRAMMAR_TAG("破音字", "好(hào)＝喜爱") +
                       GRAMMAR_TAG("实词/代词", "汲＝打水 ／ 之＝她（婆婆）") +
                   "</div>" +
               "</div>" +

               // 第 3 句对照卡片
               "<div style='padding:12px 15px; background:var(--card-bg); border:1px solid var(--input-border); border-radius:8px; line-height:1.8;'>" +
                   "<div style='color:var(--text-color); font-weight:800;'>" +
                       "<span style='display:inline-block; background:var(--primary-color); color:#fff; font-size:11px; padding:1px 6px; border-radius:4px; margin-right:8px;'>原</span>" +
                       CARET + "又嗜鱼脍，夫妇常作" + CARET + "。" + CARET + "又不能独食，" + CARET + "召邻母共食。" +
                   "</div>" +
                   "<div style='color:var(--primary-color); font-weight:500; margin-top:6px;'>" +
                       "<span style='display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.25); font-size:11px; font-weight:800; padding:0 6px; border-radius:4px; margin-right:8px;'>译</span>" +
                       OMISSION_TAG("主语", "母亲") + "又酷爱吃切细的鱼肉，夫妻俩便经常烹制" + OMISSION_TAG("宾语", "鱼脍") + "。" + OMISSION_TAG("主语", "母亲") + "又不习惯独自用餐，" + OMISSION_TAG("主语", "夫妻俩") + "就邀请邻家的老母亲一起来陪她吃。" +
                   "</div>" +
                   "<div style='margin-top:8px; padding-top:6px; border-top:1px dashed var(--input-border);'>" +
                       ANCIENT_MODERN_TAG("不能", "不习惯、不忍心", "没有能力做到") +
                       GRAMMAR_TAG("高频陷阱", "暗换主语（母 → 夫妇 → 母 → 夫妇）") +
                       GRAMMAR_TAG("实词", "嗜＝酷爱 ／ 鱼脍＝切细的鱼肉 ／ 召＝邀请") +
                   "</div>" +
               "</div>" +

               // 第 4 句对照卡片
               "<div style='padding:12px 15px; background:var(--card-bg); border:1px solid var(--input-border); border-radius:8px; line-height:1.8;'>" +
                   "<div style='color:var(--text-color); font-weight:800;'>" +
                       "<span style='display:inline-block; background:var(--primary-color); color:#fff; font-size:11px; padding:1px 6px; border-radius:4px; margin-right:8px;'>原</span>" +
                       "舍侧忽有涌泉，" + CARET + "味如江水，" + CARET + "日跃双鲤，" + CARET + "取" + CARET + "以供" + CARET + "。" +
                   "</div>" +
                   "<div style='color:var(--primary-color); font-weight:500; margin-top:6px;'>" +
                       "<span style='display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.25); font-size:11px; font-weight:800; padding:0 6px; border-radius:4px; margin-right:8px;'>译</span>" +
                       "房屋旁边忽然冒出一眼涌泉，" + OMISSION_TAG("主语", "泉水") + "味道如同江水一般，" + OMISSION_TAG("状语", "泉中") + "每天还会跳出两条鲤鱼，" + OMISSION_TAG("主语", "夫妻俩") + "便取来" + OMISSION_TAG("宾语", "泉水与双鲤") + "用以供养" + OMISSION_TAG("宾语", "母亲") + "。" +
                   "</div>" +
                   "<div style='margin-top:8px; padding-top:6px; border-top:1px dashed var(--input-border);'>" +
                       ANCIENT_MODERN_TAG("日", "每天、每日（名词作状语）", "太阳、日子（普通名词）") +
                       GRAMMAR_TAG("破音字", "供(gōng)＝供给、奉养") +
                   "</div>" +
               "</div>" +

           "</div>" +
           "<div style='margin-top:16px;'><strong>【文言手法与考点精析】</strong><br><span style='font-weight:500;'>• <strong>开篇立骨，夫妻同心：</strong>“事母至孝”与“奉姑尤谨”对仗工整，“至（极）”与“尤（更加）”二字递进，仅用14字便立起夫妻同心行孝的形象。<br>• <strong>三桩孝行，由身及心：</strong>从不辞劳苦远途打水（劳力之孝）、常作鱼脍（劳心之孝），到体察母亲怕孤单而“召邻母共食”（养志之孝），将孝道从物质奉养升华至精神体贴。<br>• <strong>奇景收束，丝丝入扣：</strong>结尾“味如江水”精准照应前文“好饮江水、去舍六七里”；“日跃双鲤”巧妙照应“嗜鱼脍”与两位老人共食（一人一条），言简义丰，滴水不漏。</span></div>"
    }
};
