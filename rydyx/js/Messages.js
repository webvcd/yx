/*
 Copyright Unlok, Vaughn Royko 2011-2014
 http://www.unlok.ca

 Credits & Thanks:
 /www.unlok.ca/wiki/wayward/credits-thanks/

 Wayward is a copyrighted and licensed work. Please read the license before attempting to modify:
 /www.unlok.ca/wayward-license/
 */

/**
 * The Messages.js file contains all english messages in Wayward. These will be re-defined with ease for other languages.
 */

/**
 * Takes the string identifier and any variables required and returns a properly formed string in the selected language.
 * @param string
 * @param variables
 * @returns {*}
 */
function makeString(string, variables) {
    var convertedString = Messages[string];
    if (variables) {
        for (var i = 0; i < variables.length; i++) {
            convertedString = convertedString.replace("_" + i + "_", variables[i]);
        }
    }
    return convertedString;
}

var Messages = {
    savedManually: "游戏已经手动存档成功.",
    saved: "游戏已存储.",
    restarted: "游戏已经重新开始.",
    deleteSavedData: "删除所有保存数据。之后请刷新此页.",
    nextSongPlaying: "下一首歌曲即将播放...",
    soundDisabled: "音乐或音效已被禁用.",
    gatheringDisabled: "自动收集已禁用.",
    gatheringEnabled: "自动收集已开启.",
    pickupDisabled: "自动拾取已禁用.",
    pickupEnabled: "自动拾取已开启.",
    hintsDisabled: "提示已禁用.",
    hintsEnabled: "提示已开启.",
    fileNotFound: "文件没有找到!",
    fileNotReadable: "文件不能读取!",
    fileError: "读取该文件出错.",
    modLoaded: "MOD已被载入!",
    notSupported: "你的浏览器不支持此功能.",
    cannotSee: "你不能看到任何东西.",
    youSeeTile: "你看 _0_.",
    youSeeMonster: "你看 _0_.",
    youSeeAberrantMonster: "你看 _0_, 但是看起来不正确.",
    creatureHealthy: "这个生物看起来很健康.",
    creatureUnhealthy: "这个生物看起来不太健康.",
    creatureUnimpaired: "这个生物看起来没受伤.",
    creatureHurt: "这个生物看起来很痛苦.",
    creatureVeryInjured: "这个生物看起来受了很严重的伤.",
    creatureUndamaged: "这个生物很健康，而且没有受伤.",
    creatureBarelyHurt: "这个生物看起来几乎没有受伤.",
    creatureInjured: "这个生物看起来受伤了.",
    creatureDamaged: "这个生物看起来受了非常严重的伤.",
    creatureHealth: "这个生物只有 _0_% 生命.",
    youSeeItems: "你发现 _0_.",
    youSeeContainer: "你发现 _0_.",
    containerItems: "这包括: _0_.",
    youUnequip: "你卸下了 _0_.",
    equipToShoot: '你需要装备它来进行设计!',
    noRoom: '在这里没有下降的空间!',
    inTheWay: "有一些东西放在这里阻碍了道路.",
    waterDrop: '你下降到 _0_ 的伸出.',
    waterStir: '你在深处惊醒了一个生物!',
    fireDrop: '你下降到 _0_ 进入了火中.',
    fireDropAll: '你试图把所有 _0_ 扔进火里.',
    cannotDrop: '你不能把 _0_ 扔在这里!',
    dropAllGround: '你试图把所有 _0_ 扔在地上!',
    dropItem: '你把 _0_ 扔在地上!',
    noRoomContainer: "没有更多的空间来容纳这个物品.",
    containerContainer: "你不能在一个容器中放置另一个容器.",
    dropAllContainer: '你试图把所有的 _0_ 放进容器中!',
    dropContainer: '你把 _0_ 放进容器中.',
    containerBackpack: '你把容器的物品转移到了背包!',
    error: "发生了一个错误.",
    craftsSortedName: "制作物品按名称排序.",
    craftsSortedSkill: "制作物品按技能排序.",
    inventory: "背包",
    container: "容器",
    sortName: "_0_ 按名称排序.",
    sortGroup: "_0_ 按类别排序.",
    sortWeight: "_0_ 按重量排序.",
    sortOldest: "_0_ 按最旧的排序.",
    sortNewest: "_0_ 按最新的排序.",
    gameSavedMB: "你的游戏已存储! 你的游戏存档已占用 _0_MB.",
    cannotSave: "保存失败，因为你的浏览器不支持本地存储.",
    musicMuted: "音乐静音.",
    musicUnmuted: "取消音乐静音.",
    soundsMuted: "全部声音静音.",
    soundsUnmuted: "全部声音取消静音.",
    sounds50: "全部声音设置为 50% 音量.",
    sounds100: "全部声音设置为 100% 音量.",
    fireExtinguished: "火几乎熄灭.",
    fireStruggling: "火努力的燃烧着.",
    fireHealthy: "火非常正常.",
    fireRaging: "火焰很狂暴.",
    plantNotFertile: "这个植物看起来产量不高.",
    plantFertile: "这个植物很高产.",
    plantVeryHealthy: "这个植物非常健康而且高产.",
    awakeContinue: "你醒来后发现自己在你最后离开的地方...",
    awake: "当你清醒过来的时候，你却发现你不再是公司里的原来的那个好员工，你也不在那个精美的航船上. 相反，你却发现你破烂的衣服的口袋内却装满了一些低劣的物品，财宝？......看来你似乎还记得一些关于宝藏的事情.",
    experienceBenefits: "你之前的经验能为你的生存提供益处.",
    endGame: "将财产放回家后, 你又出发了...",
    killed: "你被杀死了!",
    burned: "你被严重烧伤! 你失去了 _0_ 生命!",
    burnedEquipment: "火焰吞噬了你, 但是你的装备令你免收火焰的灼烧.",
    trampleFire: "你把火踩灭了!",
    killedMonster: "你击杀了 _0_!",
    overburdened: "你背了太多东西，太沉了!",
    locked: "这个对象被锁定了.",
    trapInjured: "你因为碰到陷阱而受伤了!",
    trapNoDamage: "你将陷阱解除了，但是它们并没有伤害你.",
    trapNoActivation: "你移动了这些陷阱，但是并没有将它解除!",
    burningPainEnd: "你不再感觉到燃烧产生的疼痛!",
    trampling: "Y你踩坏了 _0_.",
    trampled: "你踩坏了 _0_ 在地上.",
    monsterTrample: "_0_ 踩坏了 _1_ 在地上.",
    destroyed: "_0_ 因为使用已被摧毁.",
    needRepair: "_0_ 需要修复.",
    caveEntrance: "你发现了一个山洞入口!",
    milestoneEarned: "你已经赢得了一个里程碑, _0_! _1_",
    itemCrafted: "你制作了 _0_!",
    itemCooked: "你烹调了 _0_!",
    itemPickup: "你拿起了 _0_.",
    recipeLearned: "你已经了解了如何创造 _0_!",
    itemEnvironmentalRequired: "这一物品需要你面对在 _0_ 手动创造它.",
    cannotCraft: "你不能在这制造.",
    craftFail: "你不能 _0_ _1_.",
    monsterIdol: "这个怪物神像将吸引其他的生物.",
    monsterHit: "_0_ 给你带来了 _1_ 伤害! _2_",
    bleedingStart: "你开始血流不止!",
    poisonedStart: "你已经中毒!",
    monsterMiss: "_0_ 没对你造成任何伤害.",
    monsterTrapHurt: "_0_ 踩到陷阱受到伤害!",
    monsterYourTrapHurt: "_0_ 受到你的陷阱的攻击!",
    starvingStart: "你饿死了!",
    dehydrationStart: "你快死于脱水!",
    automaticSave: "自动保存你的游戏...",
    bleedingEnd: "已经止血了!",
    bleedingDamage: "你快因流血过多而死了! 你失去了 _0_ 生命!",
    poisonEnd: "毒药很自然的发挥了作用!",
    poisonDamage: "你快因中毒而亡了! 你失去了 _0_ 生命!",
    burningDamage: "你感觉到灼痛! 你失去了 _0_ 生命!",
    itemDecay: "你的 _0_ 腐烂了.",
    overEating: "你已经吃太多了! 你失去了 10 耐力.",
    overHydrating: "你喝太多了! 你失去了 10 耐力.",
    gainedHealth: "你获得了 _0_ 生命.",
    lostHealth: "你失去了 _0_ 生命.",
    gainedStamina: "你获得了 _0_ 耐力.",
    lostStamina: "你失去了 _0_ 耐力.",
    gainedHunger: "你获得了 _0_ 饥饿.",
    lostHunger: "你失去了 _0_ 饥饿.",
    gainedThirst: "你获得了 _0_ 口渴.",
    lostThirst: "你失去了 _0_ 口渴.",
    skillGain: "你的技能 _0_ 经验增长效果 _1_%!",
    exhaustion: "你工作到精疲力尽!",
    dexterityGain: "你感觉自己变得更加敏捷了!",
    metabolismGain: "你的新陈代谢变缓了!",
    strengthGain: "你感觉到自己变得更加强壮了!",
    noUse: "你想不到方法来直接使用这个.",
    equipItem: "你装备了 _0_.",
    cantEquipThere: "你不能在这里装备这个!",
    cantEquip: "你不能装备这个!",
    fireAmmoObstacle: "你放火 _0_ 来阻碍它.",
    fireAmmo: "你点燃了 _0_.",
    brokenAmmo: "_0_ 射击时被打破!",
    noAmmo: '你没有任何弹药,武器装备在你的包裹或容器!',
    notEnoughStrength: '你没有足够的力量来投掷这个!',
    throwObstacle: "你投掷 _0_ 来阻碍它.",
    throwItem: "你投掷了 _0_!",
    brokenImpact: '_0_ 打破了影响!',
    immuneMonster: "你用_0_ 似乎没有对 _1_造成伤害.",
    healMonster: "_0_ 从 _1_ 汲取能量!",
    noDamage: "_1_ 没有给 _0_造成伤害! _2_",
    weaponDamagedMonster: "你攻击_0_ 造成 _1_ 伤害利用 _2_! _3_",
    slimeSplit: "_0_ 裂开了.",
    hurtHands: "攻击 _0_ 导致你的手受伤了因为你没有任何武器!",
    missedMonster: "你用 _1_ 攻击 _0_，但是它躲过去了!",
    inWayCarving: "这里有些东西挡住了你的道路!",
    carveCorpse: "你切开并砍碎了尸体.",
    cannotPickupWithItems: "你不能将里面的物品捡起!",
    cannotPickupWhenLit: "你不能当它点燃时将它捡起.",
    nothingToCarve: "这里没有任何东西可以切开!",
    noMap: "这张地图不是这个地区的.",
    guardians: "你召唤出了宝藏的守护者.",
    treasureNet: "你需要一个渔网，才能够得到这件珍宝.",
    treasureShovel: "你需要一把铲子，以便能够挖这个宝藏.",
    treasureBlocked: "你找到了藏宝点，但是它却被堵塞了.",
    decodeMapFull: "你已经完全解锁了全地图.",
    decodeMapPartial: "你已经解锁了部分地图.",
    treasureExact: "你目前正处在宝藏的确切埋藏点.",
    treasureWalking: "你的宝藏点距离你只有几步之遥.",
    treasureFar: "你的宝藏点距离你十分的遥远.",
    treasureNoWhereNear: "你的附近没有藏宝点.",
    cantDecipher: "你不能破译地图.",
    inWayDigging: "这里有一些有关于你挖掘的事情!",
    inWayDiggingCorpse: "这里有一些有关于你挖掘的事情.你必须先切开它.",
    cannotDigState: "你当前不能进行挖掘.",
    cannotDigWithItems: "你不能挖掘里面的物品!",
    cannotDig: "你不能挖这里!",
    itemUse: '你使用了 _0_!',
    curedBleeding: '你已经停止流血!',
    drank: '你喝了 _0_!',
    curedPoison: '你成功解毒!',
    curedBurning: '你燃烧所产生的痛感有所减轻!',
    ate: '你吃了 _0_!',
    noWaterStill: "这里仍然没有水.",
    requiresFireStill: "这仍然需要在开始净化水的时候，在它下面点燃火焰.",
    notEnoughWaterStill: "这里仍然没有足够多的可用纯净水.",
    fireWaitStill: "你必须等到火熄灭时，才能得到可用的纯净水.",
    waterFill: "你装满了 _0_.",
    noWaterToFill: "这里没有任何东西可以填满 _0_.",
    castLineFish: "你把你的线扔到 _0_ .",
    cantFish: "你不能为了_0_钓鱼.",
    inWayFish: "路上有一些东西堵住了去路，你不能通过这里去钓鱼!",
    shadowInWaterFish: "你看见水里出现了一个阴影.",
    seaweedFish: "你把一个黏糊糊的水藻拖出了水面!",
    noWaterFish: "没有水是很难抓到鱼的，试着创造一些水!",
    noFish: "这个位置目前没有鱼!",
    catchFish: '你抓住了一条鱼!',
    failFish: "你不能抓住一条鱼!",
    hurtGathering: "你伤到了你的手，因为你没有用工具便进行采集.",
    fireNoGathering: "你不能从那里进行收集，因为它着火了!",
    requiresFacingFire: "这个物品需要你拿着它面向火源，以光源照亮它.",
    noLockpick: "你不会面对一个锁定的对象.",
    lockpick: "你解锁了木箱，并可以检查里面的内容.",
    lockpickFail: "你不能撬锁将其打开.",
    spyglass: "你这个小望远镜向远方进行窥视，看到了遥远的地平线.",
    spyglassUnderground: "你看不清地下的远处有些什么东西.",
    noSun: "这里十分阴暗，没有太阳可以生火.",
    sunNotBrightEnough: "太阳不够明亮，以至于不足以在这里进行生火!",
    noKindling: "你没有引火物可以生火.",
    noTinder: "你没有易燃物可以生火.",
    noFuellike: "你没有任何可以生火的物品.",
    noWaterPurifyStill: "这水仍然没有被净化!",
    cannotStartFire: "你不能在这里放火!",
    startFire: "你放了火!",
    startFireFail: "你不能放火!",
    bottleOpen: "你在瓶子中发现了 _0_ !",
    bottleMush: "潮湿的纸张被你触摸后变成了浆糊.",
    cannotPlaceFromHere: "你不能把东西安置在这里.",
    inWayOfPlacing: "应该把东西放置在这里.",
    landNeeded: '你应该在放置物品之前在此建立一个水坑.',
    cannotPlace: '你不能在这个地方.',
    waterTravel: "你需要在海中开始你的旅行.",
    cannotTravel: "你需要在户外开始你的旅行.",
    raft: "你开始使用木筏.",
    masterOfCrafts: "你是一个真正的工艺品大师, 卷轴将为你提供任何有用的信息.",
    reinforce: "你强化了这个物品.",
    failReinforce: "你对这个物品的强化失败.",
    cannotReinforce: "这个物品不能被强化.",
    noItemReinforce: "你并没有对有效的物品进行强化.",
    breakRepair: "该物品被摔成了碎片，无法被修复.",
    repair: "你修复了这个道具.",
    failRepair: "你不能修复这个道具.",
    fullyRepair: "这个道具已经被完全修复.",
    cannotRepair: "这个道具不能被修复.",
    noItemRepair: "你不能对一个有效的物品进行修复.",
    cannotRest: "你不能在这里休息.",
    restBegin: "你开始休息...",
    restWarm: "面对火焰，你感到温暖和欣慰.",
    restTurns: "你休息了 _0_ 小时.",
    restInterrupted: "你的休息被中断!",
    feelRested: "你感觉需要休息更长时间.",
    timeMidDay: "似乎到中午了.",
    timeSunSetting: "太阳正在移动.",
    timeDusk: "似乎有些昏暗.",
    timeNight: "似乎到晚上了.",
    timeSunRising: "太阳正在升起.",
    timeDawn: "似乎到黎明了.",
    dayThird: "它目前正处于第三季中的白天.",
    dayFourth: "它目前正处于第四季中的白天.",
    dayFirst: "它目前正处于第一季中的白天.",
    daySecond: "它目前正处于第二季中的白天.",
    nightFirst: "它目前正处于第一季中的晚上.",
    nightSecond: "它目前正处于第二季中的晚上.",
    nightThird: "它目前正处于第三季中的晚上.",
    nightFourth: "它目前正处于第四季中的晚上.",
    transmogrify: "你转变了这个物品.",
    failTransmogrify: "你转变这个物品失败.",
    cannotTransmogrify: "这个物品不能被转变.",
    noItemTransmogrify: "你面对的不是一个有效的转变物品.",
    noTreasure: "你没有足够的财宝可以回家.",
    cannotPlant: '你不能将 _0_ 种植在这里!',
    plantItem: '你将 _0_ 种在地上.',
    failPlant: '你不能把 _0_ 种在地上.',
    stokeFire: "你向火添加了燃料! 火变得更旺盛了.",
    noStokeFire: "这里没有助燃物 _0_ 可以加入火中!",
    noGardenEffect: "土壤会对这种植物没有影响.",
    garden: "你使种植植物的土壤的肥力得到了提高.",
    noGarden: "这个花园里没有任何东西和 _0_ 在这!",
    cannotPlaceThis: '你不能把_0_ 放在这里!',
    buildItem: "你设置了 _0_.",
    noBuild: "你不能在这里建造 _0_ !",
    freshWaterStill: '这种水不需要进行脱盐处理!',
    waterInStill: '这里仍然还有一些水!',
    noWaterEffect: "水会对这种植物没有影响.",
    pourWater: "你把水倒出来.",
    pourWaterStill: "你仍然再把水倒入.",
    pourExtinguish: "你熄灭了火焰.",
    pourFertility: "你用水来提高植物的土壤肥力.",
    removeFromContainer: "删除容器中的物品",
    removeAllFromContainer: "删除容器中的所有物品",
    unEquip: "脱下",
    equipTo: "装备 ",
    removeFromQuickslot: "从快捷栏中移除",
    addToQuickslot: "添加进快捷栏",
    dropInOpenedContainer: "丢弃打开的容器里的东西",
    dropAllInOpenedContainer: "丢弃打开的容器里的全部东西",
    throw: "投掷",
    drop: "丢弃",
    dropAll: "丢弃全部",
    hiddenMilestone: "这个里程碑是隐藏的.",
    invisibleMilestone: "这个里程碑是无形的.",
    health: "生命: _0_",
    stamina: "耐力: _0_",
    hunger: "饥饿: _0_",
    thirst: "口渴: _0_",
    bleeding: "出血, ",
    poisoned: "中毒, ",
    burningPain: "灼痛, ",
    nearDeath: "接近死亡, ",
    exhausted: "疲惫, ",
    starving: "饥饿, ",
    dehydrated: "脱水, ",
    healthy: "健康",
    suicide: "你确定你想要杀死这个角色并失去所有的进度吗?",
    deleteSave: "你确定要永久删除所有保存数据吗?",
    travelAway: "你确定你想远离这片土地去旅行吗?你永远不能回头。一定要带够你所需要的!",
    beta: "测试版",
    begin: "点击/空格键 开始",
    copyright: "任意岛 ? 2014 Unlok.",
    playAtYourOwnRisk: "你正在使用 _0_ _1_. 任何问题由你们自己承担!",
    unknownBrowser: "未知浏览器种类! 任何问题由你们自己承担!",
    browser: "你正在使用 _0_ _1_.",
    win: "你赢了!",
    restart: "点击/空格键 重新开始",
    lost: "你死了!",
    talent: "天赋: _0_",
    turns: "时间: _0_",
    score: "分数: _0_",
    disableHints: "禁用提示",
    previousHint: "之前的提示",
    nextHint: "下一个提示",
    grabAll: "抓起全部",
    yes: "是",
    no: "不",
    clearMessages: "清理信息",
    volume100: "100% 音量",
    volume50: "50% 音量",
    soundOn: "音效 开",
    soundOff: "音效 关",
    musicOn: "音乐 开",
    musicOff: "音乐 关",
    autoGatherOn: "自动收集 开",
    autoGatherOff: "自动收集 关",
    autoPickupOn: "自动拾取 开",
    autoPickupOff: "自动拾取 关",
    enableHints: "启用提示",
    pixelFont: "像素字体",
    alternateFont: "备用字体",
    fullGameSize: "最大游戏尺寸",
    smallGameSize: "816x816 游戏尺寸",
    windowedMode: "窗口模式",
    fullscreen: "全屏",
    animationsOn: "动画 开",
    animationsOff: "动画 关",
    smoothMovementOn: "烟雾平滑处理 开",
    smoothMovementOff: "烟雾平滑处理 关",
    use: "使用:",
    uses: "用途:",
    equip: "装备:",
    rangedDamage: "伤害范围:",
    attack: "攻击",
    defense: "防御",
    notAvailable: "N/A",
    ranged: "射程:",
    range: "范围:",
    rangedAttack: "攻击射程:",
    onEquip: "已装备:",
    grouping: "分组:",
    weight: "重量:",
    maximumWeight: "最大重量:",
    weightReduction: "W减重:",
    durability: "耐久:",
    decay: "腐烂:",
    consumed: "消耗",
    environmentalRequired: "环境需求:",
    skill: "技能:",
    level: "等级:",
    requires: "需求:",
    mainMenu: "主菜单",
    wayward: "任意岛测试版 " + game.release,
    startGame: "开始游戏",
    continueGame: "继续游戏",
    dailyChallengeMode: "日常挑战模式",
    returnToGame: "返回游戏",
    saveAndContinue: "保存并继续",
    saveAndExit: "保存并退出",
    endCurrentGame: "结束当前游戏 (自杀)",
    reset: "删除全部游戏数据",
    skills: "技能",
    milestones: "里程碑",
    filterInventory: "物品过滤",
    equipment: "装备",
    hands: "手",
    head: "头",
    neck: "颈",
    rightHand: "右手 (握住)",
    chest: "胸",
    leftHand: "左手 (握住)",
    belt: "腰带",
    legs: "腿",
    feet: "脚",
    back: "背",
    crafting: "制作",
    filterCrafting: "制作过滤",
    messages: "讯息",
    options: "选项",
    nextSong: "下一首歌",
    gameOptions: "游戏选项",
    zoomIn: "放大 +",
    zoomOut: "缩小 -",
    modding: "模组 (试验)",
    trustedMods: "只载入你信任的模组文件!",
    hints: "提示",
    version: "版本不同",
    versionInfo: '保存内容检测到与此游戏版本不同，无法兼容.如果你想继续玩这个版本的游戏，请您选择新游戏重新开始.<br/><br/>或者, 你可以从 <a href="/www.indiedb.com/games/wayward/downloads">下载一个离线的与你存档版本相同版本的游戏</a> 以便你可以继续你的存档进行游戏. 或许你可以 在<a href="/www.unlok.ca/wayward-mods/">进行修改</a> 以使你可以从备份文件中可以保存或加载你的游戏.<br/><br/>你是否想删除你的旧存档并继续游戏?',
    help: "帮助",
    attackLabel: "攻击:",
    defenseLabel: "防御:",
    talentLabel: "天赋:",
    statusLabel: "状态:",
    tooDamaged: "_0_ 袭击造成了大量损伤对于 _1_.",
    place: "地点",
    build: "建造",
    plant: "种植",
    treasureDig: "你挖到宝藏了.",
    thereIsBadWater: "这里仍然有未净化的水.",
    thereIsGoodWater: "这里仍然有净化过的水.",
    cannotPickupWhenFull: "你不能当它装满水时将它拿起.",
    sound: "音效",
    sort: "分类",
    dropOnGatherOn: "收集掉落物 打开",
    dropOnGatherOff: "收集掉落物 关闭",
    noMaps: "你并没有任何的藏宝图!",
    noTreasureRange: "你不在埋藏宝藏的范围内!",
    raftTravel: "需要在深海才能使用救生筏.",
    raftStop: "你停止使用救生筏.",
    showHiddenMob: "_0_ 出现!",
    code: "代码",
    runCode: "运行代码",
    runningCode: "正在运行代码...",
    actions: "动作",
    inspect: "检查",
    drink: "喝",
    carvingNeeded: "雕刻工具需要获得一具尸体.",
    pickUp: "提取",
    gather: "收集",
    cannotSleep: "你不能在这里睡觉.",
    sleepBegin: "你开始睡觉...",
    sleepTurns: "你睡了 _0_ 小时.",
    sleepInterrupted: "你的睡眠被打断!",
    rest: "休息",
    staminaFull: "你的耐力已经满了,你不需要休息了.",
    slashing: "劈砍",
    blunt: "钝击",
    piercing: "刺穿",
    fire: "火",
    simple: "简单",
    intermediate: "中级",
    advanced: "高级",
    expert: "专家",
    held: "握住",
    filter: "过滤",
    effective: "这似乎是有效的.",
    ineffective: "它似乎是无效的.",
    effectiveIneffective: "这似乎是有效和无效的不同的方式.",
    fist: "你的拳头",
    travel: "你旅行到遥远的土地...",
    youOpenThe: "你打开了 _0_.",
    helpDocumentation: "帮助文档",
    donations: "捐赠",
    removeBlood: "你移除了鲜血.",
    base: "基础: ",
    resists: "抵抗: ",
    vulnerabilities: "缺陷: ",
    with: "with",
    bluntLabel: "钝击抵抗:",
    piercingLabel: "刺穿抵抗:",
    slashingLabel: "劈砍抵抗:",
    fireLabel: "火焰抵抗:",
    defenseParryLabel: "来自于格挡的防御力:",
    defenseBaseLabel: "基础防御力:",
    attackTacticsLabel: "来自战术的攻击力:",
    attackBaseLabel: "基础攻击力:",
    rightHandLabel: "右手攻击力:",
    leftHandLabel: "左手攻击力:",
    resistant: "你的护甲抵抗了攻击伤害.",
    vulnerable: "你的护甲易受到攻击伤害.",
    preserve: "你腌制了食物.",
    failPreserve: "你不能腌制食物.",
    cannotPreserve: "这个物品不能被腌制.",
    noItemPreserve: "你面对的不是一个可腌制的食物.",
    alreadyPreserve: "这个食物已经腌制的很好了."
};
