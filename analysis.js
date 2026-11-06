// ==========================================================================
// 📖 《涌泉跃鲤》深度文本赏析数据库 (analysis.js) - 马来西亚本地教材标准终极版
// ==========================================================================

const U_TAG = (text) => `<span class="proper-noun">${text}</span>`;

const OMISSION_TAG = (role, text) => 
    `<span style="display:inline-block; background:var(--wrong-bg); color:var(--wrong-text); border:1px dashed var(--wrong-border); padding:0 6px; margin:0 2px; border-radius:4px; font-size:12.5px; font-weight:800;" title="文言省略句补全成分">＋${role}：${text}</span>`;

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
        "<strong>【古代文化常识与阅读提示】</strong><br>" +
        "<span style='font-weight:500; display:inline-block; margin-top:4px;'>《二十四孝》由" + U_TAG("元代") + "学者" + U_TAG("郭居敬") + "编录，辑录了古代二十四个孝顺父母的感人故事（《涌泉跃鲤》原型出自《后汉书·列女传》）。古人常用“鱼脍（kuài）”招待贵客或奉养尊长，即把新鲜鱼肉切成细丝。本文借“泉涌江水、日跃双鲤”的祥瑞之象，说明做儿女的应当同心孝敬长辈、体察父母心意。</span>",

    paragraphs: {
        1: "<strong>【逐句白话直译与 UASA 考场采分点对照（上文下译）】</strong>" +
           "<div style='font-size:12.5px; color:var(--wrong-text); background:var(--wrong-bg); border:1px dashed var(--wrong-border); padding:6px 12px; border-radius:6px; margin-top:8px; font-weight:600;'>" +
               "💡 <strong>翻译五字法提示（留、补、删、换、调）：</strong>专名下划线词保留不译（<strong>留</strong>）；原文 <strong>‸</strong> 处须补出省略成分（<strong>补</strong>）；下方卡片直观对比 <strong>古义 vs 今义</strong>（<strong>换</strong>）。" +
           "</div>" +
           "<div style='margin-top:10px; display:flex; flex-direction:column; gap:12px;'>" +

               // 第 1 句对照卡片
               "<div style='padding:12px 15px; background:var(--card-bg); border:1px solid var(--input-border); border-radius:8px; line-height:1.8;'>" +
                   "<div style='color:var(--text-color); font-weight:800;'>" +
                       "<span style='display:inline-block; background:var(--primary-color); color:#fff; font-size:11px; padding:1px 6px; border-radius:4px; margin-right:8px;'>原</span>" +
                       U_TAG("汉") + U_TAG("姜诗") + "，[事]母[至]孝。" + CARET + "妻" + U_TAG("庞氏") + "，[奉][姑][尤][谨]。" +
                   "</div>" +
                   "<div style='color:var(--primary-color); font-weight:500; margin-top:6px;'>" +
                       "<span style='display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.25); font-size:11px; font-weight:800; padding:0 6px; border-radius:4px; margin-right:8px;'>译</span>" +
                       U_TAG("东汉") + "人" + U_TAG("姜诗") + "，[侍奉]✓母亲[最为]✓孝顺。" + OMISSION_TAG("定语", "他的") + "妻子" + U_TAG("庞氏") + "，[侍奉]✓[婆婆]✓[更加]✓[恭敬谨慎]✓。" +
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
                       "母[性][好]饮江水，" + CARET + "[去][舍]六七里，妻出[汲]以[奉][之]。" +
                   "</div>" +
                   "<div style='color:var(--primary-color); font-weight:500; margin-top:6px;'>" +
                       "<span style='display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.25); font-size:11px; font-weight:800; padding:0 6px; border-radius:4px; margin-right:8px;'>译</span>" +
                       "母亲[天性]✓[喜爱]✓喝江水，" + OMISSION_TAG("主语", "江边") + "[距离]✓[家中房屋]✓有六七里路，妻子" + U_TAG("庞氏") + "便出门去[打]✓" + OMISSION_TAG("宾语", "江水") + "回来[奉养]✓[她（婆婆）]✓。" +
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
                       CARET + "又[嗜][鱼脍]，夫妇[常][作]" + CARET + "。" + CARET + "又[不能][独食]，" + CARET + "[召]邻母[共食]。" +
                   "</div>" +
                   "<div style='color:var(--primary-color); font-weight:500; margin-top:6px;'>" +
                       "<span style='display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.25); font-size:11px; font-weight:800; padding:0 6px; border-radius:4px; margin-right:8px;'>译</span>" +
                       OMISSION_TAG("主语", "母亲") + "又[酷爱]✓吃[切细的鱼肉]✓，夫妻俩便[经常]✓[烹制]✓" + OMISSION_TAG("宾语", "鱼脍") + "。" + OMISSION_TAG("主语", "母亲") + "又[不习惯]✓[独自用餐]✓，" + OMISSION_TAG("主语", "夫妻俩") + "就[邀请]✓邻家的老母亲[一起用餐]✓。" +
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
                       "[舍侧][忽]有涌泉，" + CARET + "味[如]江水，" + CARET + "[日][跃]双鲤，" + CARET + "[取]" + CARET + "以[供]" + CARET + "。" +
                   "</div>" +
                   "<div style='color:var(--primary-color); font-weight:500; margin-top:6px;'>" +
                       "<span style='display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.25); font-size:11px; font-weight:800; padding:0 6px; border-radius:4px; margin-right:8px;'>译</span>" +
                       "[房屋旁边]✓[忽然]✓冒出一眼涌泉，" + OMISSION_TAG("主语", "泉水") + "味道[如同]✓江水一般，" + OMISSION_TAG("状语", "泉中") + "[每天]✓还会[跳出]✓两条鲤鱼，" + OMISSION_TAG("主语", "夫妻俩") + "便[取来]✓" + OMISSION_TAG("宾语", "泉水与双鲤") + "用以[供养]✓" + OMISSION_TAG("宾语", "母亲") + "。" +
                   "</div>" +
                   "<div style='margin-top:8px; padding-top:6px; border-top:1px dashed var(--input-border);'>" +
                       ANCIENT_MODERN_TAG("日", "每天、每日（名词作状语）", "太阳、日子（普通名词）") +
                       GRAMMAR_TAG("破音字", "供(gōng)＝供给、奉养") +
                   "</div>" +
               "</div>" +

           "</div>" +
           "<div style='margin-top:16px;'><strong>【文言解题脉络梳理（何人·何事·结果）】</strong><br><span style='font-weight:500;'>• <strong>人物：</strong>" + U_TAG("姜诗") + "、妻子" + U_TAG("庞氏") + "、母亲、邻母。<br>• <strong>核心事件：</strong>① 母亲爱喝江水，庞氏每日远行六七里打水奉养；② 母亲爱吃鱼脍且不喜独食，夫妇常做鱼脍并请邻母伴食。<br>• <strong>结果与主旨：</strong>至孝感动天地，屋旁涌出味如江水的清泉并日跃双鲤，褒扬了夫妻同心行孝的美德。</span></div>"
    }
};
