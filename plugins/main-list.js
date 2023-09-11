let handler = async (m, { conn, usedPrefix, command}) => {
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`
let pp = './gmx.jpg'
let more = String.fromCharCode(8206)
let readMore = more.repeat(850) 
let lkr = `❀° ┄──•••───╮
  *🌝Grandmaster X BOT menu🌝*
╰───•••──┄ °❀     
┏━━━ʕ•㉨•ʔ━━━┓
⎪⌲🤖 _${usedPrefix}ping_
⎪⌲🤖 _${usedPrefix}uptime_
⎪⌲🤖 _${usedPrefix}bot_
⎪⌲🤖 _${usedPrefix}owner_
⎪⌲🤖 _${usedPrefix}info_
⎪⌲🤖 _${usedPrefix}runtime_
⎪⌲🤖 _${usedPrefix}infobot_
⎪⌲🤖 _${usedPrefix}donate_
⎪⌲🤖 _${usedPrefix}groups_
⎪⌲🤖 _${usedPrefix}blocklist_
⎪⌲🤖 _${usedPrefix}listprem_
⎪⌲🤖    *GMX Robo*
┗━━━ʕ•㉨•ʔ━━━┛

❀° ┄──•••───╮
*ARJU's MENU*  
╰───•••──┄ °❀     
┏━━━ʕ•㉨•ʔ━━━┓
⎪⌲🌟  _${usedPrefix}banchat_
⎪⌲🌟 _${usedPrefix}unbanchat_
⎪⌲🌟 _${usedPrefix}banuser_
⎪⌲🌟  _${usedPrefix}unbanuser_
⎪⌲🌟 _${usedPrefix}Broadcast_
⎪⌲🌟 _${usedPrefix}Broadcastgc_
⎪⌲🌟 _${usedPrefix}join_
⎪⌲🌟 _${usedPrefix}setppbot_
⎪⌲🌟 _${usedPrefix}setprefix_
⎪⌲🌟 _${usedPrefix}resetprefix_
⎪⌲🌟 _${usedPrefix}getfile_
⎪⌲🌟 _${usedPrefix}getplugin_
┗━━━ʕ•㉨•ʔ━━━┛

❀° ┄──•••───╮
 𝙂𝙍𝙊𝙐𝙋 𝙈𝙀𝙉𝙐 
╰───•••──┄ °❀     
┏━━━ʕ•㉨•ʔ━━━┓
⎪⌲💎_${usedPrefix}kick *<@tag>*_
⎪⌲💎_${usedPrefix}promote *<@tag>*_
⎪⌲💎 _${usedPrefix}demote *<@tag>*_
⎪⌲💎 _${usedPrefix}infogroup_
⎪⌲💎 _${usedPrefix}resetlink_
⎪⌲💎 _${usedPrefix}link_
⎪⌲💎 _${usedPrefix}enable antilink_
⎪⌲💎 _${usedPrefix}setpp *<image>*_
⎪⌲💎 _${usedPrefix}setname *<text>*_
⎪⌲💎 _${usedPrefix}setdesc *<text>*_
⎪⌲💎 _${usedPrefix}setwelcome *<text>*_
⎪⌲💎 _${usedPrefix}setbye *<text>*_
⎪⌲💎 _${usedPrefix}hidetag *<text/image/audio/vid>*_
⎪⌲💎 _${usedPrefix}warn *<@tag>*_
⎪⌲💎 _${usedPrefix}unwarn *<@tag>*_
⎪⌲💎 _${usedPrefix}group *<open/close>*_
⎪⌲💎 _${usedPrefix}enable
┗━━━ʕ•㉨•ʔ━━━┛

❀° ┄──•••───╮
   𝘿𝙇 𝙈𝙀𝙉𝙐 
╰───•••──┄ °❀     
┏━━━ʕ•㉨•ʔ━━━┓
⎪⌲💎_${usedPrefix}play_
⎪⌲💎_${usedPrefix}song_
⎪⌲💎 _${usedPrefix}yta <link>_
⎪⌲💎 _${usedPrefix}ytv <link>_
⎪⌲💎 _${usedPrefix}ytmp3 <link>_
⎪⌲💎 _${usedPrefix}ytmp4 <link>_
⎪⌲💎 _${usedPrefix}gimage_
⎪⌲💎 _${usedPrefix}pinterest_
⎪⌲💎 _${usedPrefix}mediafire <link>_
⎪⌲💎 _${usedPrefix}gdrive <link>_
⎪⌲💎 _${usedPrefix}gitclone <link>_
⎪⌲💎 _${usedPrefix}twitter <link>_
⎪⌲💎 _${usedPrefix}tiktok <link>_
⎪⌲💎 _${usedPrefix}tiktokstalk_
⎪⌲💎 _${usedPrefix}instagram <link>_
⎪⌲💎 _${usedPrefix}spotify_
⎪⌲💎 _${usedPrefix}facebook <link>_
┗━━━ʕ•㉨•ʔ━━━┛

❀° ┄──•••───╮
   𝙀𝘾𝙊𝙉𝙊𝙈𝙔 
╰───•••──┄ °❀     
┏━━━ʕ•㉨•ʔ━━━┓
⎪⌲👑 _${usedPrefix}claim/daily_
⎪⌲👑 _${usedPrefix}weekly_
⎪⌲👑 _${usedPrefix}monthly_
⎪⌲👑 _${usedPrefix}leaderboard_
⎪⌲👑 _${usedPrefix}bet_
⎪⌲👑 _${usedPrefix}heal_
⎪⌲👑 _${usedPrefix}craft_
⎪⌲👑 _${usedPrefix}balance_
⎪⌲👑 _${usedPrefix}shop_
⎪⌲👑 _${usedPrefix}sell_
⎪⌲👑 _${usedPrefix}adventure_
⎪⌲👑 _${usedPrefix}opencrate_
⎪⌲👑 _${usedPrefix}mine_
⎪⌲👑 _${usedPrefix}work_
⎪⌲👑 _${usedPrefix}transfer_
⎪⌲👑 _${usedPrefix}todiamond_
⎪⌲👑 _${usedPrefix}tomoney_
┗━━━ʕ•㉨•ʔ━━━┛

❀° ┄──•••───╮
  𝙁𝙐𝙉 𝙈𝙀𝙉𝙐
╰───•••──┄ °❀     
┏━━━ʕ•㉨•ʔ━━━┓
⎪⌲🎭 _${usedPrefix}character_
⎪⌲🎭 _${usedPrefix}truth_
⎪⌲🎭 _${usedPrefix}dare_
⎪⌲🎭 _${usedPrefix}flirt_
⎪⌲🎭 _${usedPrefix}gay_
⎪⌲🎭 _${usedPrefix}shayeri_
⎪⌲🎭 _${usedPrefix}ship_
⎪⌲🎭 _${usedPrefix}waste_
⎪⌲🎭 _${usedPrefix}simpcard_
⎪⌲🎭 _${usedPrefix}hornycard_
⎪⌲🎭 _${usedPrefix}ytcomment_
⎪⌲🎭 _${usedPrefix}stupid_
⎪⌲🎭 _${usedPrefix}lolicon_
┗━━━ʕ•㉨•ʔ━━━┛

❀° ┄──•••───╮
 𝐴𝑁𝐼𝑀𝐸 𝑀𝐸𝑁𝑈
╰───•••──┄ °❀     
┏━━━ʕ•㉨•ʔ━━━┓
⎪⌲🔮 _${usedPrefix}waifu_
⎪⌲🔮 _${usedPrefix}neko_
⎪⌲🔮 _${usedPrefix}loli_
⎪⌲🔮 _${usedPrefix}couplepp_
⎪⌲🔮 _${usedPrefix}toanime_
⎪⌲🔮 _${usedPrefix}naruto_
⎪⌲🔮 _${usedPrefix}itachi_
⎪⌲🔮 _${usedPrefix}akira_
⎪⌲🔮 _${usedPrefix}asuna_
⎪⌲🔮 _${usedPrefix}akiyama_
⎪⌲🔮 _${usedPrefix}boruto_
⎪⌲🔮 _${usedPrefix}hornycard_
⎪⌲🔮 _${usedPrefix}ayuzawa_
⎪⌲🔮 _${usedPrefix}anna_
⎪⌲🔮 _${usedPrefix}chiho_
⎪⌲🔮 _${usedPrefix}chitoge_
⎪⌲🔮 _${usedPrefix}deidara_
⎪⌲🔮 _${usedPrefix}erza_
⎪⌲🔮 _${usedPrefix}elaina_
⎪⌲🔮 _${usedPrefix}emilia_
⎪⌲🔮 _${usedPrefix}hestia_
⎪⌲🔮 _${usedPrefix}hinata_
⎪⌲🔮 _${usedPrefix}inori_
⎪⌲🔮 _${usedPrefix}isuzu_
⎪⌲🔮 _${usedPrefix}kagura_
⎪⌲🔮 _${usedPrefix}kaori_
⎪⌲🔮 _${usedPrefix}keneki_
⎪⌲🔮 _${usedPrefix}kurumi_
⎪⌲🔮 _${usedPrefix}madara_
⎪⌲🔮 _${usedPrefix}mikasa_
⎪⌲🔮 _${usedPrefix}miku_
⎪⌲🔮 _${usedPrefix}minato_
⎪-🔮 _${usedPrefix}nezuko_
⎪⌲🔮 _${usedPrefix}sagiri_
⎪⌲🔮 _${usedPrefix}sasuke_
\🔮 _${usedPrefix}sakura_
⎪⌲🔮 _${usedPrefix}kotori_
┗━━━ʕ•㉨•ʔ━━━┛

❀° ┄──•••───╮
 𝙂𝘼𝙈𝙀 𝙈𝙀𝙉𝙐 
╰───•••──┄ °❀     
┏━━━ʕ•㉨•ʔ━━━┓
⎪⌲👑 _${usedPrefix}tictactoe_
⎪⌲👑 _${usedPrefix}delttt_
⎪⌲👑 _${usedPrefix}math_
⎪⌲👑 _${usedPrefix}math answer_
⎪⌲👑 _${usedPrefix}ppt_
⎪⌲👑 _${usedPrefix}slot_
⎪⌲👑 _${usedPrefix}casino_
⎪⌲👑 _${usedPrefix}yourmom_
⎪⌲👑 _${usedPrefix}teri mummy_
┗━━━ʕ•㉨•ʔ━━━┛

❀° ┄──•••───╮
 𝙎𝙏𝙄𝘾𝙆𝙀𝙍 𝙈𝙀𝙉𝙐
╰───•••──┄ °❀     
┏━━━ʕ•㉨•ʔ━━━┓
⎪⌲👑 _${usedPrefix}sticker_
⎪⌲👑 _${usedPrefix}take_
⎪⌲👑 _${usedPrefix}scircle_
⎪⌲👑 _${usedPrefix}smaker_
⎪⌲👑 _${usedPrefix}sremovebg_
⎪⌲👑 _${usedPrefix}getsticker_
⎪⌲👑 _${usedPrefix}emojimix_
⎪⌲👑 _${usedPrefix}toimg_
⎪⌲👑 _${usedPrefix}tovid_
⎪⌲👑 _${usedPrefix}ttp_
⎪⌲👑 _${usedPrefix}telesticker_
⎪⌲👑 _${usedPrefix}attp_
⎪⌲👑 _${usedPrefix}attp2_
⎪⌲👑 _${usedPrefix}attp3_
┗━━━ʕ•㉨•ʔ━━━┛

❀° ┄──•••───╮
 𝙏𝙊𝙊𝙇𝙎 𝙈𝙀𝙉𝙐
╰───•••──┄ °❀     
┏━━━ʕ•㉨•ʔ━━━┓
⎪⌲👑 _${usedPrefix}autosticker_
⎪⌲👑 _${usedPrefix}pdf_
⎪⌲👑 _${usedPrefix}whatmusic_
⎪⌲👑 _${usedPrefix}calc_
⎪⌲👑 _${usedPrefix}google_
⎪⌲👑 _${usedPrefix}lyrics_
⎪⌲👑 _${usedPrefix}readmore_
⎪⌲👑 _${usedPrefix}ssweb_
⎪⌲👑 _${usedPrefix}tts_
⎪⌲👑 _${usedPrefix}translate_
⎪⌲👑 _${usedPrefix}tourl_
⎪⌲👑 _${usedPrefix}wikipedia_
⎪⌲👑 _${usedPrefix}nowa_
⎪⌲👑 _${usedPrefix}qrmaker_
⎪⌲👑 _${usedPrefix}readqr_
⎪⌲👑 _${usedPrefix}fancy_
⎪⌲👑 _${usedPrefix}weather_
⎪⌲👑 _${usedPrefix}siri_
⎪⌲👑 _${usedPrefix}alexa_
⎪⌲👑 _${usedPrefix}dalle_
⎪⌲👑 _${usedPrefix}tocartoon_
⎪⌲👑 _${usedPrefix}quote_
⎪⌲👑 _${usedPrefix}technews_
⎪⌲👑 _${usedPrefix}define_
⎪⌲👑 _${usedPrefix}pokedex_
⎪⌲👑 _${usedPrefix}removebg_
⎪⌲👑 _${usedPrefix}apk_
⎪⌲👑 _${usedPrefix}tinyurl/shorturl_
⎪⌲👑 _${usedPrefix}readvo_
⎪⌲👑 _${usedPrefix}true_
┗━━━ʕ•㉨•ʔ━━━┛

❀° ┄──•••───╮
  𝗡𝗦𝗙𝗪 𝗠𝗘𝗡𝗨
╰───•••──┄ °❀
*See the last menus*
      🔞😋
❀° ┄──•••───╮
  𝙇𝙊𝙂𝙊 𝙈𝙀𝙉𝙐
╰───•••──┄ °❀
┏━━━ʕ•㉨•ʔ━━━┓
° 📝 .logo seametal
° 📝 .logo Americanflag
° 📝 .logo scifi
° 📝 .logo calligraphy
° 📝 .logo 3D-water-pipe
° 📝 .logo Halloween-skeleton
° 📝 .logo a-spooky-Halloween
° 📝 .logo a-cinematic-horror
° 📝 .logo a-sketch
° 📝 .logo blue-circuit-style
° 📝 .logo space
° 📝 .logo a-metallic
° 📝 .logo Creat-glossy-metalic
° 📝 .logo a-Captain-America
° 📝 .logo science-fiction
° 📝 .logo Video-game-classic-8-bit
° 📝 .logo green-horror-style
° 📝 .logo a-transformer
° 📝 .logo berry
° 📝 .logo layered
° 📝 .logo Online-thunder--generator
° 📝 .logo a-magma-hot
° 📝 .logo 3D-stone-cracked-cool
° 📝 .logo 3D-neon-light
° 📝 .logo impressive-glitch
° 📝 .logo a-glitch
° 📝 .logo Harry-Potter
° 📝 .logo embossed--on-cracked-surface
° 📝 .logo Broken-glass
° 📝 .logo art-paper-cut
° 📝 .logo artistic-black-and-white-status-and-quote-with-your-photos
° 📝 .logo Online-3D-gradient--generator
° 📝 .logo a-3D-glossy-metal
° 📝 .logo 3D-realistic--on-the-beach
° 📝 .logo a-watercolor
° 📝 .logo Online-multicolor-3D-paper-cut
° 📝 .logo Write-text-on-foggy-window
° 📝 .logo neon-devil-wings
° 📝 .logo 3D-underwater--generator
° 📝 .logo Online-black-and-white-bear-mascot-logo-creation
° 📝 .logo wonderful-graffiti-art
° 📝 .logo a-cool-graffiti-text-on-the-wall
° 📝 .logo cool-wall-graffiti
° 📝 .logo a-christmas-holiday-snow
° 📝 .logo a-futuristic-technology-neon-light
° 📝 .logo snow--for-winter-holidays
° 📝 .logo a-cloud--on-the-sky
° 📝 .logo 3D-luxury-gold
° 📝 .logo 3D-gradient
° 📝 .logo Blackpink-logo-style
° 📝 .logo realistic-vintage-style-light-bulb
° 📝 .logo realistic-cloud
° 📝 .logo a-cloud--in-the-sky
° 📝 .logo Write-in-Sand-Summer-Beach
° 📝 .logo Sand-Writing
° 📝 .logo Sand-engraved-3d
° 📝 .logo a-summery-sand-writing
° 📝 .logo Foil-Balloon--For-Birthday
° 📝 .logo 3d-glue--with-realistic-style
° 📝 .logo space-3D
° 📝 .logo Metal-Dark-Gold
° 📝 .logo Glitch--Style-Tik-Tok
° 📝 .logo a-Stone
° 📝 .logo Neon-Light--With-Galaxy-Style
° 📝 .logo 1917-Style
° 📝 .logo 80's-Retro-Neon
° 📝 .logo Minion--3D
° 📝 .logo Pornhub-Style-Logo
° 📝 .logo Double-Exposure--Black-&-White
° 📝 .logo Holographic-3D
° 📝 .logo avenger
° 📝 .logo Metal-Purple-Dual-Effect
° 📝 .logo metamarvel
° 📝 .logo marvel
° 📝 .logo Silver
° 📝 .logo Color-Full-Luxury-Metal
° 📝 .logo Glossy-Blue-Metal
° 📝 .logo Deluxe-Gold
° 📝 .logo Glossy-Carbon
° 📝 .logo Fabric
° 📝 .logo Neon
° 📝 .logo New-Year-Cards-3D-By-Name
° 📝 .logo Happ-new-year-card-firework-gif
° 📝 .logo Fullcolor-Balloon
° 📝 .logo Text-Logo-3D-Metal
° 📝 .logo avatar
° 📝 .logo Text-Logo-3D-Metal-Silver
° 📝 .logo Text-Logo-3D-Metal-Rose-Gold
° 📝 .logo Text-Logo-3D-Metal-Gold
° 📝 .logo Text-Logo-3D-Metal-Galaxy
° 📝 .logo Xmas-Cards-3D
° 📝 .logo Blood-Text-On-The-Frosted-Glass
° 📝 .logo Halloween-Fire
° 📝 .logo Metal-Dark-Gold
° 📝 .logo Lion-Logo-Mascot
° 📝 .logo Wolf-Logo-Black-&-White
° 📝 .logo Wolf-Logo-Galaxy
° 📝 .logo Ninja
° 📝 .logo Joker
° 📝 .logo Wicker
° 📝 .logo NaturalLeaves
° 📝 .logo Sparkle
° 📝 .logo Skeleton
° 📝 .logo RedBalloon
° 📝 .logo PurpleBalloon
° 📝 .logo PinkBalloon
° 📝 .logo GreenBalloon
° 📝 .logo CyanBalloon
° 📝 .logo BlueBalloon
° 📝 .logo GoldBalloon
° 📝 .logo Steel
° 📝 .logo UltraGloss
° 📝 .logo Denim
° 📝 .logo DecorateGreen
° 📝 .logo DecoratePurple
° 📝 .logo PeridotStone
° 📝 .logo Rock
° 📝 .logo Lava
° 📝 .logo YellowGlass
° 📝 .logo PurpleGlass
° 📝 .logo OrangeGlass
° 📝 .logo Green-Glass
° 📝 .logo CyanGlass
° 📝 .logo BlueGlass
° 📝 .logo RedGlass
° 📝 .logo PurpleShiny-Glass
° 📝 .logo CaptainAmerica
° 📝 .logo Robot
° 📝 .logo RainbowEqualizer
° 📝 .logo Toxic
° 📝 .logo Pink-Sparkling-Jewelry
° 📝 .logo Blue-Sparkling-Jewelry
° 📝 .logo Green-Sparkling-Jewelry
° 📝 .logo Purple-Sparkling-Jewelry
° 📝 .logo Gold-Sparkling-Jewelry
° 📝 .logo Red-Sparkling-Jewelry
° 📝 .logo Cyan-Sparkling-Jewelry
° 📝 .logo Purple-Glass
° 📝 .logo Decorative-Glass
° 📝 .logo Chocolate-Cake
° 📝 .logo Strawberry
° 📝 .logo Koi-Fish
° 📝 .logo Bread
° 📝 .logo Matrix-Style
° 📝 .logo Horror-Blood
° 📝 .logo Neon-Light
° 📝 .logo Thunder
° 📝 .logo 3D-Box
° 📝 .logo Neon
° 📝 .logo Road-Warning
° 📝 .logo 3D-Steel
° 📝 .logo Bokeh
° 📝 .logo Green-Neon
° 📝 .logo Free-Advanced-Glow
° 📝 .logo Dropwater
° 📝 .logo Break-Wall
° 📝 .logo Chrismast-Gift
° 📝 .logo Honey
° 📝 .logo Plastic-Bag-Drug
° 📝 .logo Horror-Gift
° 📝 .logo Marble-Slabs
° 📝 .logo Marble
° 📝 .logo Ice-Cold
° 📝 .logo Fruit-Juice
° 📝 .logo Rusty-Metal
° 📝 .logo Abstra-Gold
° 📝 .logo Biscuit
° 📝 .logo Bagel
° 📝 .logo Wood
° 📝 .logo SCI---Fi
° 📝 .logo Metal-Rainbow
° 📝 .logo Purple-Gem
° 📝 .logo Shiny-Metal
° 📝 .logo Yellow-Jewelry
° 📝 .logo Silver-Jewelry
° 📝 .logo Red-Jewelry
° 📝 .logo Purple-Jewelry
° 📝 .logo Orange-Jewelry
° 📝 .logo Green-Jewelry
° 📝 .logo Cyan-Jewelry
° 📝 .logo Blue-Jewelry
° 📝 .logo Hot-Metal
° 📝 .logo Hexa-Golden
° 📝 .logo Blue-Glitter
° 📝 .logo Purple-Glitter
° 📝 .logo Pink-Glitter
° 📝 .logo Green-Glitter
° 📝 .logo Silver-Glitter
° 📝 .logo Gold-Glitter
° 📝 .logo Bronze-Glitter
° 📝 .logo Eroded-Metal
° 📝 .logo Carbon
° 📝 .logo Pink-Candy
° 📝 .logo Blue-Metal
° 📝 .logo Blue-Gem
° 📝 .logo Black-Metal
° 📝 .logo 3D-Glowing-Metal
°📝 .logo 3D-Chrome

*Brother i have 300+ features but I'm lazy to write all those fuckkkking menus*

*There are some odd commands*

-----  -----  -----  -----  -----
 *CREATER ARJU-SONWANI*
 *WA ME 919131652091*
 😙
 PARTNER : *AMAN*
-----  -----  -----  -----  -----
  ≡ *ALL MENU LIST*

┌─⊷ *ABOUT*
▢ .blocklist
▢ .info
▢ .owner
▢ .donate
▢ .gpguru
▢ .listprem
▢ .help
▢ .audios
▢ .ping
▢ .runtime
└───────────

┌─⊷ *GAMES*
▢ .dado
▢ .delttt
▢ .Math <mode>
▢ .ppt <stone/paper/scissors>
▢ .slot <gamble>
▢ .tictactoe <tag Someone>
└───────────

┌─⊷ *LEVELS AND ECO*
▢ .adddi <@user>
▢ .addxp <@user>
▢ .balance
▢ .daily
▢ .leaderboard
▢ .levelup
▢ .mine
▢ .rob
▢ .buy
▢ .buyall
▢ .transfer [tip] [amount] [@tag]
▢ .work
└───────────

┌─⊷ *REGISTER*
▢ .reg <name.age>
▢ .mysn
▢ .unreg <Num Serie>
└───────────

┌─⊷ *STICKER*
▢ .attp <text>
▢ .emojimix <emoji+emoji> (ⓓ)
▢ .getsticker (ⓓ)
▢ .smaker (ⓓ)
▢ .sticker
▢ .toimg <sticker>
▢ .tovid
▢ .trigger <@user>
▢ .ttp <text>
▢ .take <name>|<author>
└───────────

┌─⊷ *IMAGE*
▢ .tvid (ⓓ)
▢ .imagen (ⓓ)
▢ .girl (ⓓ)
▢ .meme (ⓓ)
▢ .pinterest
▢ .wallpaper (ⓓ)
└───────────

┌─⊷ *MAKER*
▢ .logololi (ⓓ)
▢ .neon (ⓓ)
▢ .devil (ⓓ)
▢ .wolf (ⓓ)
▢ .phlogo (ⓓ)
└───────────

┌─⊷ *PREMIUM*
▢ .gdrive (ⓓ) (Ⓟ)
▢ .mediafire <url> (ⓓ)
▢ .xvid (ⓓ) (Ⓟ)
▢ .xnxx (ⓓ) (Ⓟ)
└───────────

┌─⊷ *GROUP*
▢ .add *(warning don't use this cmd)*
▢ .delete
▢ .delwarn @user
▢ .demote (@tag)
▢ .infogp
▢ .hidetag
▢ .invite <913xxx>
▢ .kick @user
▢ .link
▢ .poll <gmx|piro|xd>
▢ .perfil
▢ .promote
▢ .resetlink
▢ .setbye <text>
▢ .group *open/close*
▢ .setwelcome <text>
▢ .simulate <event> @user
▢ .staff
▢ .tagall
▢ .totag
▢ .warn @user
▢ .warns
▢ .checkexpired
└───────────

┌─⊷ *EN/DISABLE OPTIONS*
▢ .enable <option>
▢ .disable <option>
└───────────

┌─⊷ *ANIME*
▢ .waifu (ⓓ)
▢ .neko (ⓓ)
▢ .megumin (ⓓ)
▢ .loli (ⓓ)
└───────────

┌─⊷ *ANIME REACTIONS*
▢ .kill @tag (ⓓ)
▢ .kiss @tag (ⓓ)
▢ .pat @tag (ⓓ)
▢ .slap @tag (ⓓ)
└───────────

┌─⊷ *DOWNLOADERS*
▢ .facebook <url> (ⓓ)
▢ .gdrive (ⓓ) (Ⓟ)
▢ .gitclone <url> (ⓓ)
▢ .igstalk
▢ .instagram <link ig> (ⓓ)
▢ .mediafire <url> (ⓓ)
▢ .play
▢ .play2
▢ .tiktok (ⓓ)
▢ .tiktokstalk
▢ .twitter <url> (ⓓ)
▢ .ytmp3 <url> (ⓓ)
▢ .ytsearch
▢ .ytmp4 <link yt> (ⓓ)
└───────────

┌─⊷ *TOOLS*
▢ .cal <equation>
▢ .google (ⓓ)
▢ .lyrics
▢ .readmore <text1>|<text2>
▢ .ssweb <url> (ⓓ)
▢ .tourl
▢ .trad <leng> <text>
▢ .tts <lang> <teXTSs>
▢ .wikipedia
└───────────

┌─⊷ *FUN*
▢ .afk <razon>
▢ .tomp3
▢ .toav
▢ .gay @user
▢ .pregunta
▢ .bot
└───────────

┌─⊷ *DATABASE*
▢ .listcmd
▢ .setcmd <txt>
└───────────

┌─⊷ *NSFW +18*
▢ .xwaifu (ⓓ)
▢ .xneko (ⓓ)
▢ .blowjob (ⓓ)
▢ .ass (ⓓ)
▢ .boobs (ⓓ)
▢ .lesbian (ⓓ)
▢ .pussy (ⓓ)
▢ .pack (ⓓ)
▢ .chut (ⓓ)
▢ .gand (ⓓ)
└───────────

┌─⊷ *OWNER*
▢ .expired <days>
▢ .addprem <@tag>
▢ .banchat
▢ .listban
▢ .ban @user
▢ .tx
▢ .cleartmp
▢ .delexpired
▢ .delprem @user
▢ .getplugin <name file>
▢ .getfile <name file>
▢ .join <chat.whatsapp.com> <dias>
▢ .reset <54xxx>
▢ .restart
▢ .unbanchat
▢ .unban @user
▢ .update
└───────────

┌─⊷ *ADVANCED*
▢ >
▢ =>
▢ $
└───────────                           

*There are 18+ nsfw and hentai commands* 
🔞 /genshin
🔞 /swimsuit 
🔞 /schoolswimsuit
🔞 /white
🔞 /barefoot
🔞 /touhou
🔞 /gamecg
🔞 /hololive
🔞 /uncensored 
🔞 /sunglasses 
🔞 /glasses 
🔞 /weapon 
🔞 /shirtlift
🔞 /chain
🔞 /fingering 
🔞 /flatchesst
🔞 /torncloth
🔞 /bondage
🔞 /demon
🔞 /wet
🔞 /pantypull
🔞 /headdress 
🔞 /headphone 
🔞 /tie
🔞 /anusview
🔞 /shorts
🔞 /stokings
🔞 /topless
🔞 /beach 
🔞 /bunnygirl
🔞 /bunnyear
🔞 /idol
🔞 /vampire 
🔞 /gun
🔞 /maid 
🔞 /bra
🔞 /nobra
🔞 /bikini
🔞 /whitehair
🔞 /blonde
🔞 /pinkhair
🔞 /bed
🔞 /ponytail
🔞 /nude
🔞 /dress 
🔞 /underwear 
🔞 /foxgirl
🔞 /uniform 
🔞 /skirt 
🔞 /sex
🔞 /sex2
🔞 /sex3
🔞 /breast
🔞 /twintail
🔞 /spreadpussy
🔞 /tears 
🔞 /seethrough
🔞 /breasthold
🔞 /drunk
🔞 /fateseries
🔞 /spreadlegs
🔞 /openshirt
🔞 /headband
🔞 /food
🔞 /close 
🔞 /tree
🔞 /nipples 
🔞 /erectnipples
🔞 /horns
🔞 /greenhair
🔞 /wolfgirl
🔞 /catgirl

*Please don't use hentai commands more than 50*

┗━━━ʕ•🇮🇳GMX🇮🇳•ʔ━━━┛`
conn.sendFile(m.chat, pp, 'perfil.jpg', lkr, m, false, { mentions: [who] })
m.react(done)
}
handler.help = ['allmenu']
handler.tags = ['main']
handler.command = ['list', 'all menu'] 

export default handler
