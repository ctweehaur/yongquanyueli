// ==========================================================================
// 📖 《涌泉跃鲤》深度文本赏析数据库 (analysis.js) - 省略句采分点可视化精修版
// ==========================================================================

// 🔖 辅助样式常量：用于在译文中高亮“补全的省略成分”（虚线框+暖褐底+语法标签）
const OMISSION_TAG = (role, text) => 
    `<span style="display:inline-block; background:var(--wrong-bg); color:var(--wrong-text); border:1px dashed var(--wrong-border); padding:0 6px; margin:0 2px; border-radius:4px; font-size:13px; font-weight:800;" title="文言省略句采分点：原文省略了${role}，翻译时必须补出">＋${role}：${text}</span>`;

// 🔖 辅助样式常量：用于在文言原文中标示省略位置的小插入符
const CARET = `<span style="color:var(--wrong-color); font-weight:800; padding:0 2px;" title="此处省略了句子成分">‸</span>`;

const lessonTeacherAnalysis = {
    overview: "<strong>【全文白话译文（含省略成分补全）】</strong><br>" +
        "<span style='font-weight:500; display:inline-block; margin-top:6px; line-height:1.95;'>" +
        "<u style='text-underline-offset:4px;'>东汉</u>人<u style='text-underline-offset:4px;'>姜诗</u>，侍奉母亲极其孝顺。" +
        OMISSION_TAG("定语", "他的") + "妻子<u style='text-underline-offset:4px;'>庞氏</u>，侍奉婆婆更是恭敬周到。母亲生性喜欢喝江水，" +
        OMISSION_TAG("主语", "江水") + "距离房屋有六七里远，妻子<u style='text-underline-offset:4px;'>庞氏</u>便常常出门去江边打水回来奉养婆婆。" +
        OMISSION_TAG("主语", "母亲") + "又特别爱吃切细的鱼肉（鱼脍），<u style='text-underline-offset:4px;'>姜诗</u>夫妇就经常动手" +
        OMISSION_TAG("状语/宾语", "为她（烹制）鱼脍") + "。" +
        OMISSION_TAG("主语", "母亲") + "又不习惯独自一人享用美食，" +
        OMISSION_TAG("主语", "夫妇俩") + "便邀请邻居家的老母亲过来" +
        OMISSION_TAG("状语", "陪母亲") + "一起进餐。后来，房屋旁边突然涌出一眼泉水，" +
        OMISSION_TAG("主语", "泉水的") + "味道就像江水一样甘美，而且" +
        OMISSION_TAG("状语", "泉中") + "每天都会跃出两条鲤鱼，<u style='text-underline-offset:4px;'>姜诗</u>夫妇便取用" +
        OMISSION_TAG("宾语", "泉水与双鲤") + "来供养" +
        OMISSION_TAG("宾语", "母亲") + "。" +
        "</span><br><br>" +
        "<strong>【作品出处与主旨】</strong><br>" +
        "<span style='font-weight:500; display:inline-block; margin-top:4px;'>《涌泉跃鲤》选自<u style='text-underline-offset:4px;'>元代</u><u style='text-underline-offset:4px;'>郭居敬</u>编录的《二十四孝》（故事原型出自《后汉书·列女传》）。全文仅61字，却密集运用了文言文典型的<strong>“承前省略（省主语、省宾语）”</strong>手法，言简义丰，颂扬了夫妻同心、孝亲睦邻的传统美德。</span>",

    paragraphs: {
        1: "<strong>【逐句白话直译与省略句采分点对照】</strong>" +
           "<div style='font-size:12.5px; color:var(--wrong-text); background:var(--wrong-bg); border:1px dashed var(--wrong-border); padding:6px 12px; border-radius:6px; margin-top:8px; font-weight:600;'>" +
               "💡 <strong>大考翻译提示：</strong>文言原文中标有 <strong>‸</strong> 处为省略成分；译文中虚线框 <span style='border:1px dashed var(--wrong-border); padding:0 4px; border-radius:3px;'>＋主语/宾语</span> 为考场作答时必须补出的采分点！" +
           "</div>" +
           "<div style='margin-top:10px; display:flex; flex-direction:column; gap:12px;'>" +

               // 第 1 句对照卡片
               "<div style='padding:12px 15px; background:var(--card-bg); border:1px solid var(--input-border); border-radius:8px; line-height:1.8;'>" +
                   "<div style='color:var(--text-color); font-weight:800;'>" +
                       "<span style='display:inline-block; background:var(--primary-color); color:#fff; font-size:11px; padding:1px 6px; border-radius:4px; margin-right:8px;'>原</span>" +
                       "<u style='text-underline-offset:4px;'>汉</u><u style='text-underline-offset:4px;'>姜诗</u>，事母至孝。" + CARET + "妻<u style='text-underline-offset:4px;'>庞氏</u>，奉姑尤谨。" +
                   "</div>" +
                   "<div style='color:var(--primary-color); font-weight:500; margin-top:6px;'>" +
                       "<span style='display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.25); font-size:11px; font-weight:800; padding:0 6px; border-radius:4px; margin-right:8px;'>译</span>" +
                       "<u style='text-underline-offset:4px;'>东汉</u>人<u style='text-underline-offset:4px;'>姜诗</u>，侍奉母亲最为孝顺。" + OMISSION_TAG("定语", "他的") + "妻子<u style='text-underline-offset:4px;'>庞氏</u>，侍奉婆婆（姑）更加恭敬谨慎。" +
                   "</div>" +
                   "<div style='font-size:12px; color:var(--text-muted); margin-top:6px; padding-top:5px; border-top:1px dashed var(--input-border); font-weight:600;'>" +
                       "📌 <strong>字词与句式：</strong>“事（侍奉）”、“至（极/最）”、“姑（婆婆）”、“尤（更加）”；后半句“妻”前承前省略了定语“其（他的）”。" +
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
                       "母亲天性喜爱喝江水，" + OMISSION_TAG("主语", "江边/取水处") + "距离家中房屋有六七里路，妻子<u style='text-underline-offset:4px;'>庞氏</u>便出门去打" + OMISSION_TAG("宾语", "江水") + "回来奉养她（婆婆）。" +
                   "</div>" +
                   "<div style='font-size:12px; color:var(--text-muted); margin-top:6px; padding-top:5px; border-top:1px dashed var(--input-border); font-weight:600;'>" +
                       "📌 <strong>省略采分点：</strong>“去舍六七里”前承前省略了主语<strong>“江（江边）”</strong>；“出汲”后省略了宾语<strong>“水（江水）”</strong>；句末“之”代指婆婆。" +
                   "</div>" +
               "</div>" +

               // 第 3 句对照卡片（核心省略句）
               "<div style='padding:12px 15px; background:var(--card-bg); border:1px solid var(--input-border); border-radius:8px; line-height:1.8;'>" +
                   "<div style='color:var(--text-color); font-weight:800;'>" +
                       "<span style='display:inline-block; background:var(--primary-color); color:#fff; font-size:11px; padding:1px 6px; border-radius:4px; margin-right:8px;'>原</span>" +
                       CARET + "又嗜鱼脍，夫妇常作" + CARET + "。" + CARET + "又不能独食，" + CARET + "召邻母共食。" +
                   "</div>" +
                   "<div style='color:var(--primary-color); font-weight:500; margin-top:6px;'>" +
                       "<span style='display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.25); font-size:11px; font-weight:800; padding:0 6px; border-radius:4px; margin-right:8px;'>译</span>" +
                       OMISSION_TAG("主语", "母亲") + "又酷爱吃切细的鱼肉，夫妻俩便经常烹制" + OMISSION_TAG("宾语", "鱼脍") + "。" + OMISSION_TAG("主语", "母亲") + "又不习惯独自用餐，" + OMISSION_TAG("主语", "夫妻俩") + "就邀请邻家的老母亲一起来陪她吃。" +
                   "</div>" +
                   "<div style='font-size:12px; color:var(--text-muted); margin-top:6px; padding-top:5px; border-top:1px dashed var(--input-border); font-weight:600;'>" +
                       "📌 <strong>省略采分点（高频易错）：</strong>本段连续更换主语！“又嗜鱼脍”与“又不能独食”省略的主语是<strong>“母亲”</strong>；而“召邻母共食”省略的主语则是<strong>“姜诗夫妇”</strong>，且“常作”后省略了宾语<strong>“之（鱼脍）”</strong>。" +
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
                   "<div style='font-size:12px; color:var(--text-muted); margin-top:6px; padding-top:5px; border-top:1px dashed var(--input-border); font-weight:600;'>" +
                       "📌 <strong>省略采分点：</strong>末句“取以供”仅三个字，却浓缩了主语<strong>“夫妇”</strong>、动词“取”的宾语<strong>“泉水与双鲤”</strong>，以及动词“供”的宾语<strong>“母（母亲）”</strong>，考场翻译时务必全部补齐！" +
                   "</div>" +
               "</div>" +

           "</div>" +
           "<div style='margin-top:16px;'><strong>【文言手法与考点精析】</strong><br><span style='font-weight:500;'>• <strong>开篇立骨，夫妻同心：</strong>“事母至孝”与“奉姑尤谨”对仗工整，“至（极）”与“尤（更加）”二字递进，仅用14字便立起夫妻同心行孝的形象。<br>• <strong>三桩孝行，由身及心：</strong>从不辞劳苦远途打水（劳力之孝）、常作鱼脍（劳心之孝），到体察母亲怕孤单而“召邻母共食”（养志之孝），将孝道从物质奉养升华至精神体贴。<br>• <strong>奇景收束，丝丝入扣：</strong>结尾“味如江水”精准照应前文“好饮江水、去舍六七里”；“日跃双鲤”巧妙照应“嗜鱼脍”与两位老人共食（一人一条），言简义丰，滴水不漏。</span></div>"
    }
};
