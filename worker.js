<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>高中全科 + 高考日语</title>
<style>
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:-apple-system,"PingFang SC","Microsoft YaHei",sans-serif;background:#f5f7fb;color:#1a2032;line-height:1.7;font-size:15px;padding-bottom:70px}
.wrap{max-width:760px;margin:0 auto;padding:16px}
h1{font-size:19px;text-align:center;padding:20px 0;background:linear-gradient(135deg,#3b6ef6,#7c4dff);color:#fff;margin:-16px -16px 16px}
.grid{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.card{background:#fff;border:1px solid #e6e9f2;border-radius:12px;padding:14px 12px;text-align:left;cursor:pointer;font-family:inherit;font-size:14px;color:#1a2032;border-top:3px solid var(--c);transition:.15s}
.card:active{transform:scale(.97);background:#f7f9ff}
.card b{display:block;font-size:15px;margin-top:2px}
.card small{color:#6b7280;font-size:12px}
.ico{font-size:18px;font-weight:800;color:var(--c)}
.panel{background:#fff;border:1px solid #e6e9f2;border-radius:12px;padding:16px;margin-bottom:12px}
.q{font-size:16px;font-weight:600;margin-bottom:14px;line-height:1.6}
.opt{display:block;width:100%;text-align:left;border:1px solid #e6e9f2;background:#fff;border-radius:10px;padding:13px 14px;font-size:15px;font-family:inherit;margin-bottom:8px;cursor:pointer;color:#1a2032;line-height:1.5}
.opt:active{background:#f7f9ff}
.opt.ok{border-color:#9ee0b4;background:#f0fdf4}
.opt.no{border-color:#f5b5b5;background:#fef2f2}
.exp{margin-top:10px;padding:12px;border-radius:10px;background:#f7f9ff;font-size:14px;border:1px solid #e3e9fa}
.exp.ok{background:#f0fdf4;border-color:#bbf0cc}
.exp.no{background:#fff7f7;border-color:#f8d4d4}
.exp b{display:block;margin-bottom:4px}
.btn{display:inline-block;border:1px solid #e6e9f2;background:#fff;border-radius:10px;padding:10px 16px;font-size:14px;font-family:inherit;cursor:pointer;margin:0 8px 8px 0;color:#1a2032;min-height:42px}
.btn:active{background:#f0f4ff}
.btn.p{background:#3b6ef6;color:#fff;border-color:#3b6ef6}
.btn.d{color:#dc2626;border-color:#f5c9c9}
.muted{color:#6b7280;font-size:13px}
.pill{display:inline-block;padding:2px 10px;border-radius:999px;font-size:12px;background:var(--c);color:#fff;margin-right:6px}
.tag{display:inline-block;font-size:11px;padding:2px 8px;border-radius:999px;background:#eef2fb;color:#5a6b96;margin-right:4px}
.bar{position:fixed;left:0;right:0;bottom:0;background:#fff;border-top:1px solid #e6e9f2;display:flex;z-index:10}
.bar button{flex:1;border:0;background:none;padding:10px 0;font-size:12px;font-family:inherit;color:#6b7280;cursor:pointer}
.bar button.on{color:#3b6ef6}
.row{display:flex;gap:8px;flex-wrap:wrap;align-items:center}
.loading{text-align:center;padding:20px;color:#6b7280}
.spinner{display:inline-block;width:18px;height:18px;border:3px solid #d9e3fa;border-top-color:#3b6ef6;border-radius:50%;animation:spin .8s linear infinite;vertical-align:middle;margin-right:6px}
@keyframes spin{to{transform:rotate(360deg)}}
</style>
</head>
<body>
<div class="wrap">
<h1>高中全科 + 高考日语</h1>
<div id="app"></div>
</div>
<div class="bar">
<button id="t-home" onclick="go('home')">🏠 首页</button>
<button id="t-quiz" onclick="go('quiz')">📝 刷题</button>
<button id="t-wrong" onclick="go('wrong')">📕 错题</button>
<button id="t-more" onclick="go('more')">⋯ 更多</button>
</div>
<script>
var WORKER_URL='https://rough-grass-fa3a.diqitian191.workers.dev';
var SUBJ={
chinese:{n:'语文',i:'语',c:'#e0565b'},
math:{n:'数学',i:'数',c:'#3b6ef6'},
english:{n:'英语',i:'英',c:'#7c4dff'},
physics:{n:'物理',i:'物',c:'#0ea5e9'},
chemistry:{n:'化学',i:'化',c:'#10b981'},
biology:{n:'生物',i:'生',c:'#65a30d'},
politics:{n:'政治',i:'政',c:'#f59e0b'},
history:{n:'历史',i:'史',c:'#b45309'},
geography:{n:'地理',i:'地',c:'#0891b2'},
japanese:{n:'高考日语',i:'日',c:'#ec4899'}};

var BANK={
chinese:[
{q:'“落霞与孤鹜齐飞，秋水共长天一色”出自？',o:['岳阳楼记','滕王阁序','醉翁亭记','赤壁赋'],a:1,e:'王勃《滕王阁序》。'},
{q:'“齐国虽褊小，吾何爱一牛”中“爱”的意思是？',o:['喜爱','吝惜','爱护','隐藏'],a:1,e:'吝惜、舍不得。'},
{q:'“无边落木萧萧下”下一句是？',o:['不尽长江滚滚来','长使英雄泪满襟','潦倒新停浊酒杯','百年多病独登台'],a:0,e:'杜甫《登高》。'},
{q:'《红楼梦》的作者是？',o:['罗贯中','施耐庵','曹雪芹','吴承恩'],a:2,e:'曹雪芹。'},
{q:'“采菊东篱下，悠然见南山”作者是？',o:['王维','孟浩然','陶渊明','谢灵运'],a:2,e:'陶渊明《饮酒》。'},
{q:'“青，取之于蓝，而青于蓝”出自？',o:['论语','孟子','荀子劝学','庄子'],a:2,e:'荀子劝学。'},
{q:'“先天下之忧而忧”作者是？',o:['欧阳修','范仲淹','王安石','苏轼'],a:1,e:'范仲淹《岳阳楼记》。'},
{q:'“六王毕，四海一”出自？',o:['阿房宫赋','过秦论','六国论','岳阳楼记'],a:0,e:'杜牧《阿房宫赋》。'},
{q:'“山重水复疑无路”作者是？',o:['苏轼','陆游','辛弃疾','李清照'],a:1,e:'陆游《游山西村》。'},
{q:'“大江东去”出自？',o:['念奴娇赤壁怀古','水调歌头','江城子','定风波'],a:0,e:'苏轼《念奴娇》。'},
{q:'“路漫漫其修远兮”出自？',o:['诗经','离骚','九歌','天问'],a:1,e:'屈原《离骚》。'},
{q:'“同是天涯沦落人”出自？',o:['长恨歌','琵琶行','卖炭翁','蜀道难'],a:1,e:'白居易《琵琶行》。'},
{q:'“但愿人长久”中“婵娟”指？',o:['美女','月亮','嫦娥','星星'],a:1,e:'月亮。'},
{q:'下列没有错别字的是？',o:['一如既往','一愁莫展','迫不急待','穿流不息'],a:0,e:'其余为一筹莫展、迫不及待、川流不息。'},
{q:'“出师未捷身先死”写的是谁？',o:['刘备','关羽','诸葛亮','曹操'],a:2,e:'杜甫《蜀相》。'}
],
math:[
{q:'A={-2,-1,0,1,2}，B={x|(x-1)(x+2)<0}，A∩B=?',o:['{-1,0}','{0,1}','{-1,0,1}','{0,1,2}'],a:0,e:'B={x|-2<x<1}。'},
{q:'(1+i)平方等于？',o:['2','2i','-2','1+i'],a:1,e:'等于2i。'},
{q:'等差 a1=2，d=3，a10=?',o:['26','27','29','32'],a:2,e:'2+9x3=29。'},
{q:'f(x)=x方-2x+3 最小值？',o:['1','2','3','4'],a:1,e:'配方(x-1)方+2。'},
{q:'sin30+cos60=?',o:['1/2','1','√2/2','√3/2'],a:1,e:'=1。'},
{q:'y=2x+1 斜率？',o:['1','2','-1','1/2'],a:1,e:'k=2。'},
{q:'log2(8)=?',o:['2','3','4','8'],a:1,e:'2的3次方=8。'},
{q:'等比 a1=1，q=2，a5=?',o:['8','16','32','64'],a:1,e:'2的4次方=16。'},
{q:'x方+y方=25 半径？',o:['5','10','25','√5'],a:0,e:'r=5。'},
{q:'a=(1,2),b=(3,4)，a·b=?',o:['7','10','11','12'],a:2,e:'3+8=11。'},
{q:'|x-1|<2 解集？',o:['(-1,3)','(-2,2)','(1,3)','(-3,1)'],a:0,e:'-1<x<3。'},
{q:'y方=4x 焦点？',o:['(1,0)','(0,1)','(2,0)','(0,2)'],a:0,e:'p=2。'},
{q:'C(5,2)=?',o:['10','15','20','25'],a:0,e:'=10。'},
{q:'y=sin x 最小正周期？',o:['π/2','π','2π','4π'],a:2,e:'2π。'},
{q:'1+2+...+100=?',o:['4950','5000','5050','5100'],a:2,e:'=5050。'}
],
english:[
{q:'He ______ to school every day.',o:['go','goes','going','gone'],a:1,e:'三单goes。'},
{q:'If I ______ you, I would accept.',o:['am','was','were','be'],a:2,e:'虚拟语气were。'},
{q:'The book ______ I bought is good.',o:['who','whose','which','what'],a:2,e:'which。'},
{q:'abandon 意为？',o:['增加','放弃','原谅','修理'],a:1,e:'放弃。'},
{q:'She is good ______ piano.',o:['at','in','on','for'],a:0,e:'be good at。'},
{q:'look forward to ______',o:['hear','hearing','heard','hears'],a:1,e:'to是介词。'},
{q:'The meeting ______ yesterday.',o:['held','was held','is held','holds'],a:1,e:'过去被动。'},
{q:'indispensable 意为？',o:['可有可无','必不可少','独立','依赖'],a:1,e:'必不可少。'},
{q:'It is important that he ______.',o:['follows','follow','followed','following'],a:1,e:'should+原形。'},
{q:'ambiguous 意为？',o:['明确','模糊','雄心','矛盾'],a:1,e:'模糊。'},
{q:'Not only ______ English.',o:['she speaks','does she speak','she spoke','did spoke'],a:1,e:'部分倒装。'},
{q:'The number of students ______ increasing.',o:['are','is','were','have'],a:1,e:'单数。'},
{q:'It is no use ______ over spilt milk.',o:['cry','crying','to cry','cried'],a:1,e:'It is no use doing。'},
{q:'单词 feasible 意为？',o:['可行的','昂贵的','危险的','复杂的'],a:0,e:'可行的。'},
{q:'单词 prudent 意为？',o:['鲁莽的','谨慎的','慷慨的','固执的'],a:1,e:'谨慎的。'}
],
physics:[
{q:'匀加速启动，动能与？',o:['v 成正比','v方 成正比','t 成正比','t方 成正比'],a:1,e:'Ek=1/2mv方。'},
{q:'4欧与4欧并联，总电阻？',o:['8欧','4欧','2欧','0.5欧'],a:2,e:'=2欧。'},
{q:'g=10，2s 落体高度？',o:['10 m','20 m','30 m','40 m'],a:1,e:'1/2gt方=20。'},
{q:'电场强度单位？',o:['V','N/C','J','A'],a:1,e:'N/C。'},
{q:'匀速圆周向心力方向？',o:['切向','指向圆心','背离','竖直'],a:1,e:'指向圆心。'},
{q:'光速约？',o:['3x10的6','3x10的8','3x10的10','3x10的5'],a:1,e:'3x10的8 m/s。'},
{q:'3N 与 4N 垂直，合力？',o:['5N','7N','1N','12N'],a:0,e:'=5N。'},
{q:'功率单位？',o:['J','W','N','Pa'],a:1,e:'W。'},
{q:'光电效应说明光具有？',o:['波动性','粒子性','干涉','衍射'],a:1,e:'粒子性。'},
{q:'简谐运动回复力？',o:['-kx','kx','-k/x','k/x'],a:0,e:'F=-kx。'},
{q:'磁场对运动电荷的力叫？',o:['安培力','洛伦兹力','库仑力','万有引力'],a:1,e:'洛伦兹力。'},
{q:'E=mc方 是？',o:['动量','质能方程','动能','势能'],a:1,e:'质能方程。'},
{q:'原子核由什么组成？',o:['质子和电子','质子和中子','中子和电子','质子和光子'],a:1,e:'质子+中子。'},
{q:'全反射条件？',o:['光疏到光密','光密到光疏且角大于临界角','垂直入射','真空射入'],a:1,e:'光密到光疏，角大于临界角。'},
{q:'半衰期由什么决定？',o:['温度','压强','核内部因素','化学状态'],a:2,e:'核内部因素。'}
],
chemistry:[
{q:'CuSO4 能否用于饮用水消毒？',o:['能','不能，铜离子有害','只能工业','加热后能'],a:1,e:'铜离子有害。'},
{q:'乙醇结构简式？',o:['CH3CHO','CH3CH2OH','CH3OCH3','CH3COOH'],a:1,e:'CH3CH2OH。'},
{q:'化合价升高，该元素？',o:['被还原','被氧化','作氧化剂','作还原剂'],a:1,e:'被氧化。'},
{q:'H2O 摩尔质量？',o:['16','18','20','18g'],a:1,e:'18 g/mol。'},
{q:'Na 投入水中现象？',o:['浮熔游响红','沉熔游响红','浮不熔游响','浮熔静响红'],a:0,e:'浮熔游响红。'},
{q:'苯环碳碳键？',o:['单双交替','独特键','全单键','全双键'],a:1,e:'独特键。'},
{q:'同周期从左到右原子半径？',o:['增大','减小','不变','先增后减'],a:1,e:'减小。'},
{q:'pH=7 是？',o:['酸','中','碱','无法判断'],a:1,e:'中性。'},
{q:'阿伏加德罗常数约为？',o:['6.02x10的23','6.02x10的22','3.01x10的23','1.5x10的23'],a:0,e:'6.02x10的23。'},
{q:'强电解质是？',o:['醋酸','氨水','NaCl','蔗糖'],a:2,e:'NaCl。'},
{q:'Fe 在 O2 中燃烧产物？',o:['FeO','Fe2O3','Fe3O4','Fe(OH)3'],a:2,e:'Fe3O4。'},
{q:'乙烯使溴水褪色是？',o:['取代','加成','氧化','聚合'],a:1,e:'加成。'},
{q:'蛋白质基本单位？',o:['葡萄糖','氨基酸','核苷酸','脂肪酸'],a:1,e:'氨基酸。'},
{q:'下列属于取代反应？',o:['乙烯与溴','甲烷与氯气光照','乙烯聚合','乙醇燃烧'],a:1,e:'甲烷与氯气光照。'},
{q:'下列不能导电？',o:['铜','石墨','NaCl溶液','蔗糖溶液'],a:3,e:'蔗糖是非电解质。'}
],
biology:[
{q:'合成 ATP 主要场所？',o:['细胞核','线粒体','核糖体','高尔基体'],a:1,e:'线粒体。'},
{q:'Aa x Aa 显性比例？',o:['1/2','1/4','3/4','1'],a:2,e:'3/4。'},
{q:'光合作用场所？',o:['线粒体','叶绿体','核糖体','液泡'],a:1,e:'叶绿体。'},
{q:'减数分裂后染色体数？',o:['不变','加倍','减半','随机'],a:2,e:'减半。'},
{q:'蛋白质基本单位？',o:['葡萄糖','氨基酸','核苷酸','脂肪酸'],a:1,e:'氨基酸。'},
{q:'DNA 基本单位？',o:['脱氧核苷酸','核糖核苷酸','氨基酸','葡萄糖'],a:0,e:'脱氧核苷酸。'},
{q:'流动镶嵌模型提出者？',o:['达尔文','辛格和尼科尔森','孟德尔','沃森'],a:1,e:'辛格和尼科尔森。'},
{q:'有氧呼吸场所？',o:['细胞质基质和线粒体','叶绿体','核糖体','高尔基体'],a:0,e:'前两阶段在线粒体。'},
{q:'分离定律提出者？',o:['达尔文','孟德尔','摩尔根','沃森'],a:1,e:'孟德尔。'},
{q:'内环境不包括？',o:['血浆','组织液','淋巴','细胞内液'],a:3,e:'细胞内液。'},
{q:'神经调节基本方式？',o:['反射','反射弧','兴奋','传导'],a:0,e:'反射。'},
{q:'能量流动特点？',o:['循环','单向逐级递减','双向','递增'],a:1,e:'单向递减。'},
{q:'种群最基本的数量特征？',o:['种群密度','出生率','死亡率','年龄组成'],a:0,e:'种群密度。'},
{q:'人体细胞含量最多的化合物？',o:['蛋白质','水','糖类','脂质'],a:1,e:'水。'},
{q:'原核生物是？',o:['酵母菌','蓝细菌','蘑菇','草履虫'],a:1,e:'蓝细菌。'}
],
politics:[
{q:'我国根本政治制度？',o:['人民代表大会制度','多党合作制','民族区域自治','基层自治'],a:0,e:'人大制度。'},
{q:'价值规律内容是？',o:['个别劳动时间','社会必要劳动时间','价格=价值','供求决定'],a:1,e:'社会必要时间。'},
{q:'矛盾特殊性要求？',o:['一分为二','具体问题具体分析','抓主要矛盾','统筹兼顾'],a:1,e:'具体分析。'},
{q:'社会主义经济制度基础？',o:['公有制','非公','混合','个体'],a:0,e:'公有制。'},
{q:'实践是认识的基础表现在？',o:['来源','动力','检验标准','以上都是'],a:3,e:'都是。'},
{q:'社会意识具有？',o:['独立性','相对独立性','绝对独立','完全依赖'],a:1,e:'相对独立性。'},
{q:'我国国家性质？',o:['人民民主专政','资本主义','君主立宪','联邦'],a:0,e:'人民民主专政。'},
{q:'党的宗旨？',o:['为人民服务','实现共产主义','发展生产力','改革开放'],a:0,e:'为人民服务。'},
{q:'文化创新根本途径？',o:['继承传统','社会实践','面向世界','推陈出新'],a:1,e:'社会实践。'},
{q:'民族精神核心？',o:['爱国主义','勤劳勇敢','自强不息','团结统一'],a:0,e:'爱国主义。'},
{q:'唯物辩证法总特征？',o:['联系和发展','矛盾','质量互变','否定之否定'],a:0,e:'联系发展。'},
{q:'矛盾基本属性？',o:['同一性和斗争性','普遍性和特殊性','主次','内外因'],a:0,e:'同一斗争。'},
{q:'真理最基本属性？',o:['客观性','主观性','相对性','条件性'],a:0,e:'客观性。'},
{q:'人的价值在于？',o:['索取','奉献','享受','占有'],a:1,e:'奉献。'},
{q:'新发展理念？',o:['创新协调绿色开放共享','高速增长','效率优先','GDP至上'],a:0,e:'创新协调绿色开放共享。'}
],
history:[
{q:'秦统一六国时间？',o:['前230','前221','前207','前202'],a:1,e:'前221年。'},
{q:'鸦片战争爆发？',o:['1839','1840','1842','1856'],a:1,e:'1840年。'},
{q:'五四运动？',o:['1911','1915','1919','1921'],a:2,e:'1919年。'},
{q:'新中国成立于？',o:['1945','1949','1950','1954'],a:1,e:'1949年。'},
{q:'辛亥革命？',o:['1905','1911','1912','1919'],a:1,e:'1911年。'},
{q:'中共成立？',o:['1919','1921','1927','1931'],a:1,e:'1921年。'},
{q:'全面抗战爆发标志？',o:['九一八','七七事变','西安事变','南京大屠杀'],a:1,e:'七七事变。'},
{q:'第一部宪法颁布？',o:['1949','1952','1954','1956'],a:2,e:'1954年。'},
{q:'改革开放开始？',o:['八大','十一届三中全会','十二大','十三大'],a:1,e:'十一届三中全会。'},
{q:'一战爆发？',o:['1912','1914','1918','1939'],a:1,e:'1914年。'},
{q:'文艺复兴核心？',o:['人文主义','理性主义','禁欲','重商'],a:0,e:'人文主义。'},
{q:'工业革命首先在？',o:['法国','英国','德国','美国'],a:1,e:'英国。'},
{q:'南京条约签订于？',o:['1840','1842','1856','1860'],a:1,e:'1842年。'},
{q:'中美建交于？',o:['1971','1972','1978','1979'],a:3,e:'1979年。'},
{q:'科举制创立于？',o:['汉朝','隋朝','唐朝','宋朝'],a:1,e:'隋朝。'}
],
geography:[
{q:'地球自转真正周期？',o:['太阳日24h','恒星日23h56m','恒星年','回归年'],a:1,e:'恒星日。'},
{q:'我国最大盆地？',o:['准噶尔','塔里木','柴达木','四川'],a:1,e:'塔里木。'},
{q:'地中海气候特征？',o:['全年多雨','夏干冬雨','夏雨冬干','全年温和'],a:1,e:'夏干冬雨。'},
{q:'五带划分依据？',o:['纬度','太阳辐射分布不均','海陆','地形'],a:1,e:'太阳辐射。'},
{q:'向东度数增大为？',o:['东经','西经','北纬','南纬'],a:0,e:'东经。'},
{q:'地球公转周期？',o:['恒星日','太阳日','恒星年','回归年'],a:2,e:'恒星年。'},
{q:'我国最大岛屿？',o:['海南岛','台湾岛','崇明岛','舟山岛'],a:1,e:'台湾岛。'},
{q:'世界最高高原？',o:['巴西','青藏','东非','蒙古'],a:1,e:'青藏。'},
{q:'我国最长河流？',o:['黄河','长江','珠江','黑龙江'],a:1,e:'长江。'},
{q:'世界最大沙漠？',o:['塔克拉玛干','撒哈拉','戈壁','阿拉伯'],a:1,e:'撒哈拉。'},
{q:'南北方分界？',o:['秦岭淮河','长江','黄河','南岭'],a:0,e:'秦岭淮河。'},
{q:'全球几大板块？',o:['4','5','6','7'],a:2,e:'6大板块。'},
{q:'城市化问题不包括？',o:['交通拥堵','环境污染','住房紧张','人口减少'],a:3,e:'城市化人口增加。'},
{q:'辽中南工业基地以什么为主？',o:['轻工业','重工业','高新技术','服务业'],a:1,e:'重工业。'},
{q:'季风气候形成主因？',o:['海陆热力差异','地形','纬度','洋流'],a:0,e:'海陆热力差异。'}
],
japanese:[
{q:'古い橋___通って、町へ行きます。',o:['で','を','に','から'],a:1,e:'经过地点用を。'},
{q:'食材が新鮮___人気があります。',o:['から','ので','で','より'],a:1,e:'客观因果ので。'},
{q:'「行く」的て形？',o:['行きて','行って','行くて','行いた'],a:1,e:'行って。'},
{q:'これは私___書いた本です。',o:['を','が','に','で'],a:1,e:'定语从句用が。'},
{q:'教室___勉強します。',o:['に','で','を','が'],a:1,e:'动作场所用で。'},
{q:'「食べる」的ます形？',o:['食べます','食べります','食ます','食べります'],a:0,e:'一段动词。'},
{q:'「高い」的否定？',o:['高くない','高いない','高ない','高くありません'],a:0,e:'い→くない。'},
{q:'「する」的て形？',o:['して','すて','しって','するて'],a:0,e:'して。'},
{q:'「ている」表示？',o:['进行','过去','将来','否定'],a:0,e:'进行。'},
{q:'「たことがある」表示？',o:['曾经','正在','将来','不想'],a:0,e:'曾经。'},
{q:'「なければならない」？',o:['不必','必须','可以','禁止'],a:1,e:'必须。'},
{q:'「お～になる」是？',o:['尊敬语','谦让语','郑重语','普通'],a:0,e:'尊敬语。'},
{q:'「～たら」表示？',o:['如果','因为','所以','但是'],a:0,e:'假定。'},
{q:'「～ので」表示？',o:['主观原因','客观原因','结果','转折'],a:1,e:'客观。'},
{q:'「～ために」表示？',o:['为了或因为','正在','但是','如果'],a:0,e:'目的或原因。'}
]
};

var view='home';
var currentSubj='math';
var qs=null;

function lsGet(k,d){try{var v=JSON.parse(localStorage.getItem(k));return v===null?d:v}catch(e){return d}}
function lsSet(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'})[c]})}
function shuf(a){a=a.slice();for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=a[i];a[i]=a[j];a[j]=t}return a}

function go(v){view=v;render();window.scrollTo(0,0)}

function render(){
var tabs=document.querySelectorAll('.bar button');
for(var i=0;i<tabs.length;i++){tabs[i].className=tabs[i].id==='t-'+view?'on':''}
if(view==='home')renderHome();
else if(view==='subject')renderSubject();
else if(view==='quiz')renderQuiz();
else if(view==='wrong')renderWrong();
else if(view==='more')renderMore();
}

function renderHome(){
var html='<div class="grid">';
for(var k in SUBJ){
var s=SUBJ[k];var cnt=BANK[k]?BANK[k].length:0;
html+='<button class="card" style="--c:'+s.c+'" onclick="openSubject(\''+k+'\')"><span class="ico">'+s.i+'</span><b>'+s.n+'</b><small>'+cnt+' 题 · 知识手册</small></button>';
}
html+='</div>';
document.getElementById('app').innerHTML=html;
}

function openSubject(k){currentSubj=k;view='subject';render()}

function renderSubject(){
var s=SUBJ[currentSubj];var bank=BANK[currentSubj]||[];
var html='<button class="btn" onclick="go(\'home\')">← 返回</button>';
html+='<div class="panel"><h2>'+s.n+'</h2><p class="muted">'+bank.length+' 道题 · 支持小测与 AI 分析</p>';
html+='<button class="btn p" onclick="startQuiz()">小测 5 题</button></div>';
document.getElementById('app').innerHTML=html;
}

function startQuiz(){
var bank=BANK[currentSubj]||[];
var list=shuf(bank).slice(0,5);
qs={subj:currentSubj,list:list,idx:0,pick:null,correct:0,fin:false};
view='quiz';render();
}

function renderQuiz(){
if(!qs){document.getElementById('app').innerHTML='<div class="panel">请先选学科</div>';return}
var s=SUBJ[qs.subj];
if(qs.fin){
var r=Math.round(qs.correct/qs.list.length*100);
document.getElementById('app').innerHTML='<div class="panel"><h2>结果</h2><p style="font-size:28px;color:#3b6ef6;font-weight:800">'+qs.correct+' / '+qs.list.length+'</p><p class="muted">正确率 '+r+'%</p><button class="btn p" onclick="startQuiz()">再来一组</button><button class="btn" onclick="go(\'home\')">返回首页</button><button class="btn" onclick="go(\'wrong\')">查看错题</button></div>';
return;
}
var q=qs.list[qs.idx];var picked=qs.pick;
var html='<div class="panel"><p class="muted">'+s.n+' · 第 '+(qs.idx+1)+'/'+qs.list.length+' 题</p>';
html+='<div class="q">'+esc(q.q)+'</div>';
for(var i=0;i<q.o.length;i++){
var cls='opt';
if(picked!==null){if(i===q.a)cls+=' ok';else if(i===picked)cls+=' no'}
html+='<button class="'+cls+'"'+(picked!==null?' disabled':'')+' onclick="pickAns('+i+')">'+'ABCD'[i]+'. '+esc(q.o[i])+'</button>';
}
if(picked!==null){
var okFlag=picked===q.a;
html+='<div class="exp '+(okFlag?'ok':'no')+'"><b>'+(okFlag?'✅ 正确':'❌ 错误，正确答案 '+String.fromCharCode(65+q.a))+'</b><p>'+esc(q.e)+'</p></div>';
html+='<button class="btn p" onclick="nextQ()">'+(qs.idx+1<qs.list.length?'下一题':'查看结果')+'</button>';
}
html+='</div>';
document.getElementById('app').innerHTML=html;
}

function pickAns(i){
if(qs.pick!==null)return;
qs.pick=i;
var q=qs.list[qs.idx];
if(i===q.a)qs.correct++;
else{
var wb=lsGet('hs_wrong',[]);
wb.unshift({subj:qs.subj,q:q.q,o:q.o,a:q.a,e:q.e,pick:i,t:Date.now()});
lsSet('hs_wrong',wb);
}
renderQuiz();
}

function nextQ(){
if(qs.idx+1<qs.list.length){qs.idx++;qs.pick=null;renderQuiz()}
else{qs.fin=true;renderQuiz()}
}

function renderWrong(){
var wb=lsGet('hs_wrong',[]);
if(!wb.length){document.getElementById('app').innerHTML='<div class="panel"><p>错题本为空，去刷题吧。</p></div>';return}
var html='<div class="panel"><h2>错题本（'+wb.length+'）</h2>';
html+='<button class="btn p" onclick="doAI()">🤖 AI 分析</button>';
html+='<button class="btn" onclick="retryWrong()">错题重练</button>';
html+='<button class="btn d" onclick="clearWrong()">清空</button>';
html+='<div id="aiResult"></div></div>';
for(var i=0;i<wb.length;i++){
var x=wb[i];var s=SUBJ[x.subj]||{n:'未知',c:'#888'};
html+='<div class="panel" style="border-left:4px solid '+s.c+'"><p class="muted"><span class="pill" style="--c:'+s.c+'">'+s.n+'</span></p>';
html+='<div class="q">'+esc(x.q)+'</div>';
html+='<p>你的答案：<b style="color:#dc2626">'+'ABCD'[x.pick]+'. '+esc(x.o[x.pick])+'</b></p>';
html+='<p>正确答案：<b style="color:#16a34a">'+'ABCD'[x.a]+'. '+esc(x.o[x.a])+'</b></p>';
if(x.point)html+='<span class="tag">知识点：'+esc(x.point)+'</span>';
if(x.reason)html+='<span class="tag">错因：'+esc(x.reason)+'</span>';
html+='<div class="exp">'+esc(x.e)+'</div>';
if(x.similar&&x.similar.q){
html+='<div class="exp" style="background:#fffdf5;border-color:#f3e3b6"><b>同类变式</b><p>'+esc(x.similar.q)+'</p><p class="muted" style="margin-top:4px">答案：'+esc(x.similar.o[x.similar.a])+'</p></div>';
}
html+='<button class="btn d" onclick="delWrong('+i+')">删除</button></div>';
}
document.getElementById('app').innerHTML=html;
}

function delWrong(i){var wb=lsGet('hs_wrong',[]);wb.splice(i,1);lsSet('hs_wrong',wb);renderWrong()}
function clearWrong(){if(!confirm('清空错题本？'))return;lsSet('hs_wrong',[]);renderWrong()}

function retryWrong(){
var wb=lsGet('hs_wrong',[]);
if(!wb.length){alert('错题本为空');return}
var picked=shuf(wb).slice(0,5);
var list=picked.map(function(x){return{q:x.q,o:x.o,a:x.a,e:x.e}});
qs={subj:picked[0].subj,list:list,idx:0,pick:null,correct:0,fin:false};
view='quiz';render();
}

async function callAI(messages){
if(!WORKER_URL||WORKER_URL.indexOf('你的')>=0)throw new Error('Worker 未配置');
var res=await fetch(WORKER_URL,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({messages:messages})});
if(!res.ok){var t=await res.text();throw new Error('服务器错误 '+res.status)}
var data=await res.json();
if(data.error)throw new Error(data.error);
if(!data.choices||!data.choices[0])throw new Error('AI 返回格式异常');
return data.choices[0].message.content||'';
}

function extractJSON(text){
if(!text)return null;
var m=text.match(/```(?:json)?\s*([\s\S]*?)```/);
if(m)text=m[1];
var s=text.indexOf('['),e=text.lastIndexOf(']');
if(s>=0&&e>s){try{return JSON.parse(text.slice(s,e+1))}catch(err){}}
var s2=text.indexOf('{'),e2=text.lastIndexOf('}');
if(s2>=0&&e2>s2){try{return [JSON.parse(text.slice(s2,e2+1))]}catch(err){}}
return null;
}

async function doAI(){
var wb=lsGet('hs_wrong',[]);
if(!wb.length){alert('错题本为空');return}
var box=document.getElementById('aiResult');
if(box)box.innerHTML='<div class="loading"><span class="spinner"></span>AI 正在分析，请稍候…</div>';
var batches=[];
for(var i=0;i<wb.length;i+=8)batches.push(wb.slice(i,i+8));
var sys='你是高中全科老师。用户给你一批错题 JSON。为每道题补充字段并返回 JSON 数组，元素结构：{"id":"原题题干与输入 q 一字不差","point":"知识点标签10字以内","d":1或2或3,"reason":"错因15字以内","e":"详细解析80字以内","similar":{"q":"同类变式题","o":["A","B","C","D"],"a":0,"e":"解析"}}。严格只返回 JSON 数组，不要其他文字。';
var all=[];
try{
for(var b=0;b<batches.length;b++){
if(box)box.innerHTML='<div class="loading"><span class="spinner"></span>正在分析第 '+(b+1)+' / '+batches.length+' 批…</div>';
var batch=batches[b].map(function(x){return{q:x.q,o:x.o,a:x.a,chosen:x.pick}});
var content=await callAI([{role:'system',content:sys},{role:'user',content:JSON.stringify(batch)}]);
var parsed=extractJSON(content);
if(parsed&&Array.isArray(parsed))all=all.concat(parsed);
if(b<batches.length-1)await new Promise(function(r){setTimeout(r,600)});
}
var map={};
wb.forEach(function(x){map[x.q]=x});
var updated=0;
all.forEach(function(a){
var key=a.id||a.q;if(!key)return;
var x=map[key];
if(!x){var k2=key.replace(/\s+/g,'');for(var i=0;i<wb.length;i++){if(wb[i].q.replace(/\s+/g,'')===k2){x=wb[i];break}}}
if(!x)return;
if(a.point)x.point=String(a.point).slice(0,30);
if(a.d)x.d=a.d;
if(a.reason)x.reason=String(a.reason).slice(0,40);
if(a.e)x.e=String(a.e).slice(0,300);
if(a.similar&&a.similar.q)x.similar=a.similar;
updated++;
});
lsSet('hs_wrong',wb);
if(box)box.innerHTML='<div class="exp ok">✅ 已更新 '+updated+' / '+wb.length+' 条</div>';
setTimeout(renderWrong,800);
}catch(e){
if(box)box.innerHTML='<div class="exp no">❌ '+(e.message||'分析失败')+'</div>';
}
}

function renderMore(){
document.getElementById('app').innerHTML='<div class="panel"><h2>更多</h2><p class="muted">学习工具</p><button class="btn" onclick="go(\'wrong\')">错题本</button><button class="btn" onclick="window.print()">打印当前页</button></div><div class="panel"><h2>关于</h2><p class="muted">高中全科 + 高考日语学习助手<br>刷题 · 错题本 · AI 分析</p></div>';
}

go('home');
</script>
</body>
</html>
