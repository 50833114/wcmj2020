var tipuesearch = {"pages": [{'title': '關於 About', 'text': '這是50833114網際內容管理課程的網頁 \n 50833114FB連結( 點我 ) \n 總共使用兩套網際內容管理系統: \n https://github.com/mdecourse/cmsimde \n https://www.blogger.com/ \n 50833114 : \n Repository (倉儲):  https://github.com/50833114/wcmj2020 \n Blog (網誌):  https://50833114.blogspot.com/ \n 期末報告影片: \n \n \n', 'tags': '', 'url': '關於 About.html'}, {'title': '網管筆記', 'text': '', 'tags': '', 'url': '網管筆記.html'}, {'title': 'W2', 'text': '建網站 \n 此內容管理系統以\xa0 https:..github.com.mdecourse.cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n \n 在 github 建立倉儲, git clone 到近端 \n 參考 https:..github.com.mdecourse.newcms , 加入除了 cmsimde 目錄外的所有內容 \n \n 以 git submodule add\xa0 https:..github.com.mdecourse.cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n \n 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n \n git clone --recurse-submodules\xa0 https:..github.com.mdecourse.newcms.git \n', 'tags': '', 'url': 'W2.html'}, {'title': 'W3', 'text': '筆記 \n terminology 專業術語、particular 特別、technical 技術、application 應用、 \n software 軟體、hardware 硬體、firmwarre 韌體、machine language 機器語言、 \n URL:Uniform Resourse Locator\xa0 統一資源定位、command wundow 命令視窗、submodule 子模組 \n 程式令: \n Y:←指y槽 Y:\\\xa0 \xa0←表示Y槽的root根目錄 > 為回應符號(prormptsign)\xa0 \\ 為blackslash 反斜線 dir為顯示目錄內容的指令 cd tmp 表示change directory 到指定的目錄 git為分散式版次管理的指令名稱 git clone表示要使用git對遠端的倉儲進行clone。 \n', 'tags': '', 'url': 'W3.html'}, {'title': 'W4', 'text': 'portable 可攜、Assembly 執行機器速度快但對硬體的相容性差、objective -c \n →開發iphone的前一代程式、compile 編譯、interpret 解譯、unix電腦系統的一種、shell 殼、graphics 圖形、device 物件、interface 介面 \n ps.c++ →加入物件功能的C \n', 'tags': '', 'url': 'W4.html'}, {'title': 'W5', 'text': '掃墓放假 \n', 'tags': '', 'url': 'W5.html'}, {'title': 'W6', 'text': '大致講解↓的用法和規格 \n portable obs\xa0→直播軟體 \n meet.google.com →google 的視訊軟體 \n \xa0 \n', 'tags': '', 'url': 'W6.html'}, {'title': 'W7', 'text': 'abunta→遠端操控電腦、asscii 美國標準交換資訊碼。\xa0 \n tmp>wcmj2020>init.py\xa0 \xa0更改網頁標題 \n', 'tags': '', 'url': 'W7.html'}, {'title': 'W8', 'text': '網站push的步驟 \n 1.先把網站切成靜態Home \n 2.git add空格.\xa0 \xa0→意思是跟電腦說現在要讀的東西 \n 3.git comit -m"add w□" →跟電腦說你要讀的東西是什麼 \n 4.git push →推上動態網頁 \n 讓我們實作一次分組，弄 meet.google.com 的實際操作。好讓下次上課可以線上上課。 \n \xa0 \n School IPV6 : [2001:288:6004:17::53]:3128(42.17.7.4) \n Port : 140.130.17.53:3128 \n inter-net == inter - national \n (inter network) \n protocol 協定 \n tcp/ip == transmision control protocol / internet protocol \n transmit 傳輸 \n edition 版本(瞬時) \n Version 版本(較大的修改) \n router 路由器 \n route 路徑 \n remote login 遠端登入 \n client <-> server \n \xa0 \xa0 \xa0 \xa0 \xa0 www \n browser <-> www server \n HTTP \n sttp client <-> sttp server \n 中華電信 DNS Server \n 2001:b000:168::1 \n Type of computer \n 1.Super computer \n 2.Mainframe \n 3.Server \n 4.Personal Computer \n 5.Microcontroler \n 6.Mobile phone \n tele 遠 \n macro 巨大 (比原子atom大) \n', 'tags': '', 'url': 'W8.html'}, {'title': 'W9', 'text': '電腦硬體架構 \n 主機螢幕周邊 \n 主機: \n 主機板 MB \n 處理器 CPU \n 記憶體 RAM \n 顯示卡 GPU \n 電源供應器 PSU \n 硬碟 HDD,SSD \n 電腦的種類 \n Types Of Computer \n Super Computer 超級電腦 \n MainFrame 伺服器主機 \n Server 伺服器 \n PC 個人電腦 \n Microcontroler 微控制器 \n Mobile Phone 智慧型手機 \n', 'tags': '', 'url': 'W9.html'}, {'title': 'w10-w11', 'text': '以 SSH 維護倉儲 \n 由於在電腦教室時採用純 IPv6 協定上網, 因此為了能夠在近端將倉儲改版資料推送到目前只接受 IPv4 協定連線的 github, 以下除了將原本以 https 對 github 連線, 改為以 ssh 協定連線外, 在 Windows 環境下必須利用 putty 與 plink, 設定 putty 格式的 .ppk 以及能夠同時支援 IPv4 與 IPv6 的代理主機. \n 設定步驟如下: \n 1. 下載 Putty 工具組 \n 從\xa0 https://www.chiark.greenend.org.uk/~sgtatham/putty/ \xa0 下載一般版, 或從 \xa0 http://jakub.kotrla.net/putty/ \xa0 下載特殊的可攜版本. \n 2. 利用 y:\\portablegit\\bin\\sh.exe 進入 shell 命令環境後, 以\xa0 \n \n \n \n \n \n \n 1 \n \n \n \n ssh-keygen -t rsa -b 4096 -C  "使用者學號" \n \n \n \n \n \n \n \n 在 /y/home/.ssh 目錄下建立 id_rsa 與 id_rsa.pub 等 private key 與 public key \n 之後以 SciTE 開啟 id_rsa.pub 後, 將此 public key 的內容, 以新增添加到 Github.com 帳號下 personal settings -> SSH and GPG keys 頁面下. \n 3. 接下來要利用 puttygen.exe 將 id_rsa 轉為 Putty 可以解讀的 .ppk 格式, 並修改隨身系統的啟動批次檔案, 指定利用 putty 目錄下的 plink 執行 git 指令的網路代理設定. \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n \n \n \n 修改啟動的 start.bat 加入下列設定: \n \xa0 \n set GIT_HOME=%Disk%:\\portablegit\\bin\\ \n set GIT_SSH=%Disk%:\\putty\\plink.exe \n \n \n \n \n \n \n \n 4. 利用 puttygen.exe 載入第二步驟所建立的 private key, 也就是 id_rsa. \n 開啟 puttygen 之後, 以右下方的 load 載入 id_rsa, 成功載入後, 利用 save private key 按鈕, 將已經轉為 putty 格式的 .ppk 存檔. 此一 .ppk 檔案必須在設定 putty 中 github.com session 時, 在 Connection->SSH->Auth 項目下, 將轉檔後的 .ppk 指向 private key file for authentication 欄位.\xa0 \n 並在 Connection->Proxy 項目下, 指定 Proxy type: HTTP, 並將 IPv6 代理主機設為 ::53 或 ::42 埠號設為 3128. \n 5. 之後確定 home 下的 .ssh 目錄中的 config 設定檔案為: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n \n \n \n # no proxy at home \n #ProxyCommand y:/PortableGit/mingw64/bin/connect.exe -H proxy.mde.nfu.edu.tw:3128 %h %p \n # set git_ssh=y:/putty/plink.exe with auth under putty github.com session setup \n ProxyCommand y:/putty/plink.exe github.com %h %p \n \xa0 \xa0 \n Host github.com \n \xa0\xa0\xa0\xa0 User git \n \xa0\xa0\xa0\xa0 Port 22 \n \xa0\xa0\xa0\xa0 Hostname github.com \n \xa0\xa0\xa0\xa0 \xa0 \n \xa0\xa0\xa0\xa0 # for connect.exe need openssh key format \n \xa0\xa0\xa0\xa0 #IdentityFile "y:\\home\\.ssh\\id_rsa_mdecourse" \n \xa0\xa0\xa0\xa0 # for plink.exe need rsa key format but set under putty github.com session \n \xa0\xa0\xa0\xa0 # plink.exe do not need the following setting \n \xa0\xa0\xa0\xa0 #IdentityFile "y:\\home\\.ssh\\mdecourse_putty_private.ppk" \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0 TCPKeepAlive yes \n \xa0\xa0\xa0\xa0 IdentitiesOnly yes \n \n \n \n \n \n \n \n 6. 最後再將 wcmj2020 倉儲中 .git 目錄下的 config 檔案中的連線協定, 由 https 改為採 ssh 連線: 範例如下: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n \n \n \n [core] \n \xa0\xa0\xa0\xa0 repositoryformatversion = 0 \n \xa0\xa0\xa0\xa0 filemode =  false \n \xa0\xa0\xa0\xa0 bare =  false \n \xa0\xa0\xa0\xa0 logallrefupdates =  true \n \xa0\xa0\xa0\xa0 symlinks =  false \n \xa0\xa0\xa0\xa0 ignorecase =  true \n [submodule] \n \xa0\xa0\xa0\xa0 active = . \n [remote  "origin" ] \n \xa0\xa0\xa0\xa0 #url = https://github.com/mdecourse/wcmj2020.git \n \xa0\xa0\xa0\xa0 url = git@github.com:mdecourse/wcmj2020.git \n \xa0\xa0\xa0\xa0 fetch = +refs/heads/*:refs/remotes/origin/* \n [branch  "master" ] \n \xa0\xa0\xa0\xa0 remote = origin \n \xa0\xa0\xa0\xa0 merge = refs/heads/master \n [submodule  "cmsimde" ] \n \xa0\xa0\xa0\xa0 url = https: //github.com/mdecourse/cmsimde.git \n \n \n \n \n \n \n \n 之後就可以透過近端的 .ppk private key 與 Github.com 上的 public key 對應, 無需輸入帳號密碼就可以進行 git push. \n \n', 'tags': '', 'url': 'w10-w11.html'}, {'title': 'W12-W13', 'text': '', 'tags': '', 'url': 'W12-W13.html'}, {'title': 'Blogger API', 'text': '基本概念: \n 1. 這裡所指的 Blogger API 為: \xa0 https://developers.google.com/blogger/docs/3.0/using \n 2. 將 CMSiMDE 中的 Pelican Blog 內容同步到 Google Blogger 的目的, 在讓網際內容管理系統中的網誌原始資料修改過程具備版次, 而且可同時將網誌出版在 Github Pages 與 Google Blogger 中, 讓網際內容的保存較具有永續性. \n 3. Google Blogger 中的網誌系統各有獨立 ID, 這裡稱為 blog_id, 而網誌中的每一篇文章各有獨立 ID, 這裡稱為 post_id. \n 4. Google Blogger 管理者登入後, 在 Settings - Permissions 項下, 允許 invite more authors, 而且在 Settings - Permissions - Blog admins and Authors 項下, 允許將所邀請共同寫作的 Author 提升為 Admin 管理者. \n 5. Google 的每一個 API 都允許使用者建立以 Oauth2 為基礎的登入使用授權憑證, 配合所啟動的各種 API 程式庫, 一旦啟用並登入後, 可以透過程式方法, 呼叫程式庫功能, 對各種 Google 所提供的服務 (Blogger, Drive, Gmail, Calendar 等) 新增內容. 以 Blogger 而言, 只要使用者被設為某一網誌的共同作者, 即擁有在該網誌新增或編輯自己所發布的網誌文章權限. \n 6. 使用者登入 Google 帳號後, 在 \xa0 https://console.developers.google.com \xa0 中所建立的 Oauth2 client ID, 可以下載存為 client_secrets.json 檔案. \n 7. client_secrets.json 檔案則可以透過下列程式, 轉換為 credential_token.dat, 使用者針對特定啟用的 API 程式庫, 可以在讀取 credential_token.dat 的情況下, 取得與登入 Gmail 帳號相同的使用授權, 直接在擁有權限的 blog_id 中新增特定的文章 (並以特定的 post_id 辨識). \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n 19 \n 20 \n 21 \n 22 \n 23 \n 24 \n \n \n \n @language   python \n # https://developers.google.com/blogger/docs/3.0/using \n # under Mac command + b to execute \n import   pickle \n import   os \n from   googleapiclient.discovery  import   build \n from   google_auth_oauthlib.flow  import   InstalledAppFlow \n \xa0 \n \xa0 \n SCOPES  =   [ \'https://www.googleapis.com/auth/blogger\' , ] \n \xa0 \n # we check if the file tBo store the credentials exists \n if   not   os.path.exists( \'./../../yen_gm_blogger_token.dat\' ): \n \xa0 \n \xa0\xa0\xa0\xa0 flow  =   InstalledAppFlow.from_client_secrets_file( \'./../../yen_gm_blogger_secrets.json\' , SCOPES) \n \xa0\xa0\xa0\xa0 credentials  =   flow.run_local_server() \n \xa0 \n \xa0\xa0\xa0\xa0 with  open ( \'./../../yen_gm_blogger_token.dat\' ,  \'wb\' ) as credentials_dat: \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 pickle.dump(credentials, credentials_dat) \n else : \n \xa0\xa0\xa0\xa0 with  open ( \'./../../yen_gm_blogger_token.dat\' ,  \'rb\' ) as credentials_dat: \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 credentials  =   pickle.load(credentials_dat) \n service  =   build( \'blogger\' ,  \'v3\' , credentials = credentials) \n g.es(service) \n \n \n \n \n \n \n \n W12 \n Leo Editor 與 Pelican blog 使用說明影片 \n W13 \n Pelican Blog 內容與 Google Blogger 同步 \n W13\xa0 利用 Leo Editor 按鈕處理同步說明影片 \n 利用 Windows 10 設定 -> 選擇預設網頁瀏覽器, 使用 Google Chrome 作為預設瀏覽器. \n 隨身程式系統必須安裝\xa0 google-api-python-client 與 oauth2client pip install google-api-python-client oauth2client OAuth 2.0 client IDs 程式類別可以選擇 other 使用者完成 client_secrets.json 設定後, 必須將檔案存在倉儲目錄外部 \n add_to_blogger 按鈕內容: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n 19 \n 20 \n 21 \n 22 \n 23 \n 24 \n 25 \n 26 \n 27 \n 28 \n 29 \n 30 \n 31 \n 32 \n 33 \n 34 \n 35 \n 36 \n 37 \n 38 \n 39 \n 40 \n 41 \n 42 \n 43 \n 44 \n 45 \n 46 \n 47 \n 48 \n 49 \n 50 \n 51 \n 52 \n 53 \n 54 \n 55 \n 56 \n 57 \n 58 \n 59 \n 60 \n 61 \n 62 \n 63 \n 64 \n 65 \n 66 \n 67 \n 68 \n 69 \n 70 \n 71 \n 72 \n 73 \n 74 \n 75 \n 76 \n 77 \n 78 \n 79 \n 80 \n 81 \n 82 \n 83 \n 84 \n 85 \n 86 \n 87 \n 88 \n 89 \n 90 \n 91 \n 92 \n 93 \n 94 \n 95 \n 96 \n \n \n \n from   markdown  import   markdown \n from   oauth2client  import   client \n from   googleapiclient  import   sample_tools \n import   os \n \xa0 \n os.environ[ \'TZ\' ]  =   \'Asia/Taipei\' \n argv  =   "" \n # 認證並建立服務 \n # name of the api is "blogger", version is "v3" \n # description of the api is __doc__ \n # file name of the application: location of client_secrets.json \n service, flags  =   sample_tools.init( \n \xa0\xa0 argv,  \'blogger\' ,  \'v3\' , __doc__,  "./../../client_secrets.json" , \n \xa0\xa0 scope = \'https://www.googleapis.com/auth/blogger\' ) \n \xa0 \n \xa0 \n def   get_cat_tag_content(data): \n \xa0\xa0\xa0\xa0 # 請注意, 因為 data 來自 .md 的檔案 內容, 第1行為 --- \n \xa0\xa0\xa0\xa0 # 用跳行符號分割 \n \xa0\xa0\xa0\xa0 data_list  =   data.split( "\\n" ) \n \xa0\xa0\xa0\xa0 #第 2 行為 title \n \xa0\xa0\xa0\xa0 title =   data_list[ 1 ] \n \xa0\xa0\xa0\xa0 #第 4 行為 category \n \xa0\xa0\xa0\xa0 category  =   data_list[ 3 ] \n \xa0\xa0\xa0\xa0 #第 5 行為 tags \n \xa0\xa0\xa0\xa0 tags  =   data_list[ 4 ] \n \xa0\xa0\xa0\xa0 # 有多項資料的 content 型別為數列 \n \xa0\xa0\xa0\xa0 # 再將第 9 行之後的資料數列串回成以跳行隔開的資料 \n \xa0\xa0\xa0\xa0 content  =   "\\n" .join(data_list[ 8 :]) \n \xa0\xa0\xa0\xa0 # 先將截斷摘要與內文的 pelican md 檔按符號, 換成 Blogger 的 <!--more--> \n \xa0\xa0\xa0\xa0 content  =   content.replace( \'<!-- PELICAN_END_SUMMARY -->\' ,  \'<!--more-->\' ) \n \xa0\xa0\xa0\xa0 # 接著若內容有 ~~~python 與 ~~~ 則換成 Wordpress 格式 \n \xa0\xa0\xa0\xa0 #content = content.replace(\'~~~python\', \'[code lang="python"]\') \n \xa0\xa0\xa0\xa0 #content = content.replace(\'~~~\', \'[/code]\') \n \xa0\xa0\xa0\xa0 return   title, category, tags, content \n \xa0 \n # 從目前所在節點的 body pan 中取出類別, tags 以及文章內容 \n # p.h 為 @clean filename.md \n # 因為要使用 @clean 節點掛上為後的 blogger post_id, 因此改為讀 .md 檔案 \n md_filename  =   p.h.split( " " )[ 1 ] \n with  open (md_filename,  \'r\' , encoding = "utf-8" ) as content_file: \n \xa0\xa0\xa0\xa0 md_content  =   content_file.read() \n # title_str, category_str, tags_str, content = get_cat_tag_content(p.b) \n title_str, category_str, tags_str, content  =   get_cat_tag_content(md_content) \n category  =   category_str.split( ":" )[ 1 ] \n tags  =   tags_str.split( ":" )[ 1 ].split( "," ) \n tags.append(category) \n # title 是一個單獨的字串 \n title  =   title_str.split( ":" )[ 1 ] \n # 將 markdown 格式 content 轉為 html \n content  =   markdown(content) \n # 以下處理 content 的 <h2> 標題 \n content  =   content.replace( "<h2>" ,  "<h2><font size=\'4\'>" ) \n content  =   content.replace( "</h2>" ,  "</font></h2>" ) \n # g.es(content) \n \xa0 \n try : \n \xa0\xa0\xa0\xa0 \'\'\' \n \xa0\xa0\xa0\xa0 users = service.users() \n \xa0\xa0\xa0\xa0 # 取得使用者 profile 資料 \n \xa0\xa0\xa0\xa0 user = users.get(userId=\'self\').execute() \n \xa0\xa0\xa0\xa0 print(\'網誌名稱: %s\' % user[\'displayName\']) \n \xa0\xa0\xa0\xa0 \'\'\' \n \xa0\xa0\xa0\xa0 blogs  =   service.blogs() \n \xa0\xa0\xa0\xa0 # 取得使用者所建立網誌名稱 \n \xa0\xa0\xa0\xa0 blogs  =   blogs.listByUser(userId = \'self\' ).execute() \n \xa0\xa0\xa0\xa0 # post_id is now blogs["items"][0]["id"] \n \xa0\xa0\xa0\xa0 blog_id  =   blogs[ "items" ][ 0 ][ "id" ] \n \xa0\xa0\xa0\xa0 #for blog in blogs[\'items\']: \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 #print(blog[\'name\'], blog[\'url\']) \n \xa0\xa0\xa0\xa0 posts  =   service.posts() \n \xa0\xa0\xa0\xa0 # 新增網誌 post 時, 需要 post_id \n \xa0\xa0\xa0\xa0 body  =   { \n \xa0\xa0\xa0\xa0 "kind" :  "blogger#post" , \n \xa0\xa0\xa0\xa0 "id" : blog_id, \n \xa0\xa0\xa0\xa0 "title" : title, \n \xa0\xa0\xa0\xa0 # 利用 markdown 函式, 將 .md 的內文轉為 html, 作為 Blogger 的文章內容 \n \xa0\xa0\xa0\xa0 "content" : content, \n \xa0\xa0\xa0\xa0 "labels" : tags \n \xa0\xa0\xa0\xa0 } \n \xa0\xa0\xa0\xa0 insert  =   posts.insert(blogId = blog_id, body = body) \n \xa0\xa0\xa0\xa0 posts_doc  =   insert.execute() \n \xa0\xa0\xa0\xa0 post_id  =   posts_doc[ "id" ] \n \xa0\xa0\xa0\xa0 #print(posts_doc) \n \xa0\xa0\xa0\xa0 os.remove( "blogger.dat" ) \n \xa0\xa0\xa0\xa0 # 利用最後的 child 節點來儲存 post_id \n \xa0\xa0\xa0\xa0 to_save_post_id  =   p.insertAsLastChild()\xa0\xa0  \n \xa0\xa0\xa0\xa0 # 改為內文為空的節點, id 直接標在 head 標題  \n \xa0\xa0\xa0\xa0 to_save_post_id.b  =   "" \n \xa0\xa0\xa0\xa0 to_save_post_id.h  =   post_id \n \xa0\xa0\xa0\xa0 # 因為新增節點, commander 必須 redraw \n \xa0\xa0\xa0\xa0 c.redraw() \n \xa0\xa0\xa0\xa0 g.es( "post_id 為" , post_id) \n \xa0\xa0\xa0\xa0 g.es( "已經將資料送往 Blogger!" ) \n except (client.AccessTokenRefreshError): \n \xa0\xa0\xa0\xa0 g.es( "error" ) \n \n \n \n \n \n \n \n edit_to_blogger 按鈕內容: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n 19 \n 20 \n 21 \n 22 \n 23 \n 24 \n 25 \n 26 \n 27 \n 28 \n 29 \n 30 \n 31 \n 32 \n 33 \n 34 \n 35 \n 36 \n 37 \n 38 \n 39 \n 40 \n 41 \n 42 \n 43 \n 44 \n 45 \n 46 \n 47 \n 48 \n 49 \n 50 \n 51 \n 52 \n 53 \n 54 \n 55 \n 56 \n 57 \n 58 \n 59 \n 60 \n 61 \n 62 \n 63 \n 64 \n 65 \n 66 \n 67 \n 68 \n 69 \n 70 \n 71 \n 72 \n 73 \n 74 \n 75 \n 76 \n 77 \n 78 \n 79 \n 80 \n \n \n \n from   markdown  import   markdown \n from   oauth2client  import   client \n from   googleapiclient  import   sample_tools \n import   os \n \xa0 \n os.environ[ \'TZ\' ]  =   \'Asia/Taipei\' \n argv  =   "" \n # 認證並建立服務 \n # name of the api is "blogger", version is "v3" \n # description of the api is __doc__ \n # file name of the application: location of client_secrets.json \n service, flags  =   sample_tools.init( \n \xa0\xa0 argv,  \'blogger\' ,  \'v3\' , __doc__,  "./../../client_secrets.json" , \n \xa0\xa0 scope = \'https://www.googleapis.com/auth/blogger\' ) \n \xa0 \n \xa0 \n def   get_cat_tag_content(data): \n \xa0\xa0\xa0\xa0 # 請注意, 因為 data 來自 .md 的檔案 內容, 第1行為 --- \n \xa0\xa0\xa0\xa0 # 用跳行符號分割 \n \xa0\xa0\xa0\xa0 data_list  =   data.split( "\\n" ) \n \xa0\xa0\xa0\xa0 #第 2 行為 title \n \xa0\xa0\xa0\xa0 title =   data_list[ 1 ] \n \xa0\xa0\xa0\xa0 #第 4 行為 category \n \xa0\xa0\xa0\xa0 category  =   data_list[ 3 ] \n \xa0\xa0\xa0\xa0 #第 5 行為 tags \n \xa0\xa0\xa0\xa0 tags  =   data_list[ 4 ] \n \xa0\xa0\xa0\xa0 # 有多項資料的 content 型別為數列 \n \xa0\xa0\xa0\xa0 # 再將第 9 行之後的資料數列串回成以跳行隔開的資料 \n \xa0\xa0\xa0\xa0 content  =   "\\n" .join(data_list[ 8 :]) \n \xa0\xa0\xa0\xa0 # 先將截斷摘要與內文的 pelican md 檔按符號, 換成 Blogger 的 <!--more--> \n \xa0\xa0\xa0\xa0 content  =   content.replace( \'<!-- PELICAN_END_SUMMARY -->\' ,  \'<!--more-->\' ) \n \xa0\xa0\xa0\xa0 # 接著若內容有 ~~~python 與 ~~~ 則換成 Wordpress 格式 \n \xa0\xa0\xa0\xa0 #content = content.replace(\'~~~python\', \'[code lang="python"]\') \n \xa0\xa0\xa0\xa0 #content = content.replace(\'~~~\', \'[/code]\') \n \xa0\xa0\xa0\xa0 return   title, category, tags, content \n \xa0 \n # 從目前所在節點的 body pan 中取出類別, tags 以及文章內容 \n # p.h 為 @clean filename.md \n # 因為要使用 @clean 節點掛上為後的 blogger post_id, 因此改為讀 .md 檔案 \n md_filename  =   p.h.split( " " )[ 1 ] \n with  open (md_filename,  \'r\' , encoding = "utf-8" ) as content_file: \n \xa0\xa0\xa0\xa0 md_content  =   content_file.read() \n # title_str, category_str, tags_str, content = get_cat_tag_content(p.b) \n title_str, category_str, tags_str, content  =   get_cat_tag_content(md_content) \n category  =   category_str.split( ":" )[ 1 ] \n tags  =   tags_str.split( ":" )[ 1 ].split( "," ) \n tags.append(category) \n # title 是一個單獨的字串 \n title  =   title_str.split( ":" )[ 1 ] \n # 將 markdown 格式 content 轉為 html \n content  =   markdown(content) \n # 以下處理 content 的 <h2> 標題 \n content  =   content.replace( "<h2>" ,  "<h2><font size=\'4\'>" ) \n content  =   content.replace( "</h2>" ,  "</font></h2>" ) \n # g.es(content) \n \xa0 \n try : \n \xa0\xa0\xa0\xa0 blogs  =   service.blogs() \n \xa0\xa0\xa0\xa0 # 取得使用者所建立網誌名稱 \n \xa0\xa0\xa0\xa0 blogs  =   blogs.listByUser(userId = \'self\' ).execute() \n \xa0\xa0\xa0\xa0 blog_id  =   blogs[ "items" ][ 0 ][ "id" ] \n \xa0\xa0\xa0\xa0 # 設法取得原 post 的 id \n \xa0\xa0\xa0\xa0 postid_outline  =   p.getLastChild() \n \xa0\xa0\xa0\xa0 # 直接從標題取得 post 的 id 號碼 \n \xa0\xa0\xa0\xa0 post_id  =   postid_outline.h \n \xa0\xa0\xa0\xa0 posts  =   service.posts() \n \xa0\xa0\xa0\xa0 # 更新網誌文章時的 body \n \xa0\xa0\xa0\xa0 body  =   { \n \xa0\xa0\xa0\xa0 "kind" :  "blogger#post" , \n \xa0\xa0\xa0\xa0 "title" : title, \n \xa0\xa0\xa0\xa0 "content" : content \n \xa0\xa0\xa0\xa0 } \n \xa0\xa0\xa0\xa0 # need to save postId to outline head \n \xa0\xa0\xa0\xa0 update  =   posts.update(blogId = blog_id, postId = post_id, body = body, publish = True ) \n \xa0\xa0\xa0\xa0 update_doc  =   update.execute() \n \xa0\xa0\xa0\xa0 os.remove( "blogger.dat" ) \n \xa0\xa0\xa0\xa0 g.es( "post_id 為" , post_id) \n \xa0\xa0\xa0\xa0 g.es( "已經將更新資料送往 Blogger!" ) \n except (client.AccessTokenRefreshError): \n \xa0\xa0\xa0\xa0 g.es( "error" ) \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'Blogger API.html'}, {'title': 'W14', 'text': '從 \xa0 https://2019wcm.blogspot.com/2019/03/posted-via-python.html \xa0取得Google Blogger Python API 程式, 修改後執行, 測試是否可以讀取設定的 client_secrets.json, 在各自的 Blogger ID 與 Post ID 中新增或修改網誌文章. \n 以 Blogger Python API 程式修改文章的教學影片 \xa0 (for @gm users only) \n \n 直接在操作系統建立網際內容管理合用系統 \n Windows 10 64 位元操作系統 \n 安裝 Python 3.8.3 與 pip \n 至\xa0 https://www.python.org/downloads/windows/ \xa0下載 Python 3.8.3 \xa0 Windows x86-64 executable installer \n 可以直接選擇安裝 pip 與所有選項內容 \n 安裝 Git \n 利用\xa0 64-bit Git for Windows Setup \xa0安裝 Git 工具. \n 安裝 CMSiMDE 所需模組 \n 利用 cmd 開啟命令列視窗, 以 pip 安裝 flask flask_cors lxml bs4 markdown pelican leo 等模組 \n pip install\xa0 \xa0flask flask_cors lxml bs4 markdown pelican leo \n Ubuntu 20.04 操作系統 (請下載 \xa0 W12 Virtualbox 虛擬主機檔案 ) \n Ubuntu 20.04 同時存在 Python 2.7 與 Python 3.8.2,\xa0 CMSiMDE 只相容於 Python 3.8.2, 因此啟動指令必須使用: \n python3 wsgi.py \n 與\xa0 \n pip3 install\xa0 \xa0flask flask_cors lxml bs4 markdown pelican leo \n Mac OS X 操作系統 \n 與 Ubuntu 20.04 類似. \n', 'tags': '', 'url': 'W14.html'}, {'title': '新增 blogger 文章', 'text': 'w14_blogger_add_1.py \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n 19 \n 20 \n 21 \n 22 \n 23 \n 24 \n 25 \n 26 \n 27 \n 28 \n 29 \n 30 \n 31 \n 32 \n 33 \n 34 \n 35 \n 36 \n 37 \n 38 \n 39 \n 40 \n 41 \n 42 \n 43 \n 44 \n 45 \n 46 \n 47 \n 48 \n 49 \n 50 \n 51 \n 52 \n 53 \n 54 \n 55 \n \n \n \n \'\'\' \n 用來測試 Google Blogger Python API 新增文章程式 \n \xa0 \n pip install google-api-python-client oauth2client \n \xa0 \n \'\'\' \n \xa0 \n import   sys \n from   oauth2client  import   client \n from   googleapiclient  import   sample_tools \n \xa0 \n argv  =   "" \n # 認證並建立服務 \n service, flags  =   sample_tools.init( \n \xa0\xa0 argv,  \'blogger\' ,  \'v3\' , __doc__,  \'./client_secrets.json\' , \n \xa0\xa0 scope = \'https://www.googleapis.com/auth/blogger\' ) \n \xa0 \n try : \n \xa0\xa0\xa0\xa0 users  =   service.users() \n \xa0\xa0\xa0\xa0 # 取得使用者 profile 資料 \n \xa0\xa0\xa0\xa0 user  =   users.get(userId = \'self\' ).execute() \n \xa0\xa0\xa0\xa0 print ( \'網誌名稱: %s\'   %   user[ \'displayName\' ]) \n \xa0\xa0\xa0\xa0 blogs  =   service.blogs() \n \xa0\xa0\xa0\xa0 # 取得使用者所建立網誌名稱 \n \xa0\xa0\xa0\xa0 blogs  =   blogs.listByUser(userId = \'self\' ).execute() \n \xa0\xa0\xa0\xa0 for   blog  in   blogs[ \'items\' ]: \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 print (blog[ \'name\' ], blog[ \'url\' ]) \n \xa0\xa0\xa0\xa0 posts  =   service.posts() \n \xa0\xa0\xa0\xa0 # 新增網誌 post 時, 需要 blog id \n \xa0 \n \xa0\xa0\xa0\xa0 body  =   { \n \xa0\xa0\xa0\xa0 "kind" :  "blogger#post" , \n \xa0\xa0\xa0\xa0 "id" :  "123" , \n \xa0\xa0\xa0\xa0 "title" :  "透過 Python 程式新增網誌文章1" , \n \xa0\xa0\xa0\xa0 "content" : "使用 Google Blogger API 可以利用程式新增網誌文章內容1" \n \xa0\xa0\xa0\xa0 } \n \xa0\xa0\xa0\xa0 \xa0 \n \xa0\xa0\xa0\xa0 insert  =   posts.insert(blogId = \'123\' , body = body) \n \xa0\xa0\xa0\xa0 posts_doc  =   insert.execute() \n \xa0\xa0\xa0\xa0 print (posts_doc) \n \xa0\xa0\xa0\xa0 \xa0 \n \xa0\xa0\xa0\xa0 \'\'\' \n \xa0\xa0\xa0\xa0 # 更新網誌文章時的 body \n \xa0\xa0\xa0\xa0 body = { \n \xa0\xa0\xa0\xa0 "kind": "blogger#post", \n \xa0\xa0\xa0\xa0 "title": "透過 Python 程式修改網誌文章2", \n \xa0\xa0\xa0\xa0 "content": "使用 Google Blogger API 可以利用程式修改網誌文章內容. http://mde.tw/cd2019" \n \xa0\xa0\xa0\xa0 } \n \xa0\xa0\xa0\xa0 \xa0 \n \xa0\xa0\xa0\xa0 update = posts.update(blogId="123", postId="456", body=body, publish=True) \n \xa0\xa0\xa0\xa0 update_doc = update.execute() \n \xa0\xa0\xa0\xa0 print(update_doc) \n \xa0\xa0\xa0\xa0 \'\'\' \n except (client.AccessTokenRefreshError): \n \xa0\xa0\xa0\xa0 print ( "error" ) \n \n \n \n \n \n \n \n', 'tags': '', 'url': '新增 blogger 文章.html'}, {'title': '編輯 Blogger 文章', 'text': 'w14_blogger_edit_1.py \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n 19 \n 20 \n 21 \n 22 \n 23 \n 24 \n 25 \n 26 \n 27 \n 28 \n 29 \n 30 \n 31 \n 32 \n 33 \n 34 \n 35 \n 36 \n 37 \n 38 \n 39 \n 40 \n 41 \n 42 \n 43 \n 44 \n 45 \n 46 \n 47 \n 48 \n 49 \n 50 \n 51 \n 52 \n 53 \n 54 \n 55 \n 56 \n \n \n \n \'\'\' \n 用來測試 Google Blogger Python API 編輯文章程式 \n \xa0 \n pip install google-api-python-client oauth2client \n \xa0 \n \'\'\' \n \xa0 \n import   sys \n from   oauth2client  import   client \n from   googleapiclient  import   sample_tools \n \xa0 \n argv  =   "" \n # 認證並建立服務 \n service, flags  =   sample_tools.init( \n \xa0\xa0 argv,  \'blogger\' ,  \'v3\' , __doc__,  \'./client_secrets.json\' , \n \xa0\xa0 scope = \'https://www.googleapis.com/auth/blogger\' ) \n \xa0 \n try : \n \xa0\xa0\xa0\xa0 users  =   service.users() \n \xa0\xa0\xa0\xa0 # 取得使用者 profile 資料 \n \xa0\xa0\xa0\xa0 user  =   users.get(userId = \'self\' ).execute() \n \xa0\xa0\xa0\xa0 print ( \'網誌名稱: %s\'   %   user[ \'displayName\' ]) \n \xa0\xa0\xa0\xa0 blogs  =   service.blogs() \n \xa0\xa0\xa0\xa0 # 取得使用者所建立網誌名稱 \n \xa0\xa0\xa0\xa0 blogs  =   blogs.listByUser(userId = \'self\' ).execute() \n \xa0\xa0\xa0\xa0 for   blog  in   blogs[ \'items\' ]: \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 print (blog[ \'name\' ], blog[ \'url\' ]) \n \xa0\xa0\xa0\xa0 posts  =   service.posts() \n \xa0\xa0\xa0\xa0 # 新增網誌 post 時, 需要 blog id \n \xa0 \n \xa0\xa0\xa0\xa0 \'\'\' \n \xa0\xa0\xa0\xa0 body = { \n \xa0\xa0\xa0\xa0 "kind": "blogger#post", \n \xa0\xa0\xa0\xa0 "id": "123", \n \xa0\xa0\xa0\xa0 "title": "透過 Python 程式新增網誌文章1", \n \xa0\xa0\xa0\xa0 "content":"使用 Google Blogger API 可以利用程式新增網誌文章內容1" \n \xa0\xa0\xa0\xa0 } \n \xa0\xa0\xa0\xa0 \xa0 \n \xa0\xa0\xa0\xa0 insert = posts.insert(blogId=\'123\', body=body) \n \xa0\xa0\xa0\xa0 posts_doc = insert.execute() \n \xa0\xa0\xa0\xa0 print(posts_doc) \n \xa0\xa0\xa0\xa0 \'\'\' \n \xa0 \n \xa0\xa0\xa0\xa0 # 更新網誌文章時的 body \n \xa0\xa0\xa0\xa0 body  =   { \n \xa0\xa0\xa0\xa0 "kind" :  "blogger#post" , \n \xa0\xa0\xa0\xa0 "title" :  "透過 Python 程式修改網誌文章2" , \n \xa0\xa0\xa0\xa0 "content" :  "使用 Google Blogger API 可以利用程式修改網誌文章內容. http://mde.tw/cd2019" \n \xa0\xa0\xa0\xa0 } \n \xa0\xa0\xa0\xa0 \xa0 \n \xa0\xa0\xa0\xa0 update  =   posts.update(blogId = "123" , postId = "456" , body = body, publish = True ) \n \xa0\xa0\xa0\xa0 update_doc  =   update.execute() \n \xa0\xa0\xa0\xa0 print (update_doc) \n \xa0 \n except (client.AccessTokenRefreshError): \n \xa0\xa0\xa0\xa0 print ( "error" ) \n \n \n \n \n \n \n \n', 'tags': '', 'url': '編輯 Blogger 文章.html'}, {'title': 'MacBook 操作指南', 'text': '參考資料: \n Mac OS X for Absolute Beginners.pdf \xa0 (for @gm users only) \n Learn C on the Mac.pdf \xa0 (for @gm users only) \n 這裡以 MacBook Air 2012 年出廠, 硬體規格: \n macOS Catalina Version 10.15.4 \n 1.8 GHz Dual-Core Intel Core i5 \n Memory $GB 1600 MHz DDR3 \n Graphics Intel HD Graphics 4000 1536 MB \n 的操作為例, 如何存活在機械設計工程系與精密機械工程科的網際內容管理課程. \n 由於網際內容管理課程主要以 Ｗindows 10 64 位元操作系統中的 Python 3 可攜程式環境使用為主. \n 從官方網站下載安裝 Python3 \n 因此 Catalina 系統中的首要任務, 便是安裝 Python 3: \n 在 2020.05.15 從 \xa0 https://www.python.org/downloads/mac-osx/ \xa0 可以下載安裝最新的 Python 3.8.3 解譯環境. \n 安裝 pip3 \n 有了 python 3 環境之後, 就可以從 Lanuchpad -> Other -> Terminal 開啟終端機, 並從 get-pip.py 下載用來安裝 pip3 的程式碼, 以終端機上的指令進行安裝: \n \n \n \n \n \n \n 1 \n \n \n \n sudo python3 get-pip.py \n \n \n \n \n \n \n \n 安裝 pip3 之後, 可以安裝 CMSiMDE 所需的 flask, flask_cors, lxml, bs4, markdown, pelican 以及 leo: \n \n \n \n \n \n \n 1 \n \n \n \n sudo pip3 install flask flask_cors lxml bs4 markdown pelican leo \n \n \n \n \n \n \n \n 安裝 XQuartz \n 之後, 就可以安裝 \xa0 XQuartz , 以便使用 xterm 替代 terminal. \n 接下來假如要使用 SciTE 作為文字編輯器, 建議透過 \xa0 https://www.macports.org/install.php \xa0 先根據 Catalina 操作系統版本安裝 Macports 之後, 再利用: \n \n \n \n \n \n \n 1 \n \n \n \n sudo port install scite \n \n \n \n \n \n \n \n 安裝 SciTE 文字編輯器. \n 至此, 再加上 Catalina 原有的 git 指令, 使用者已經可以在 MacBook 上執行與 Windows 10 64 位元操作系統上相同的: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n \n \n \n git clone --recurse-submodules \n \xa0 \n git add . \n \xa0 \n git commit -m  "commit message" \n \xa0 \n git push \n \xa0 \n git pull \n \xa0 \n git submodule add \n \xa0 \n git remote add \n \xa0 \n git branch \n \xa0 \n git merge \n \n \n \n \n \n \n \n 等指令, 只是在執行 python 程式時, 必須使用: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n \n \n \n python3 wsgi.py \n \xa0 \n pip3 install certain_module \n \n \n \n \n \n \n \n 否則直接使用 python 執行, 將會用 Python 2.7 環境執行而產生錯誤. \n 其他建議安裝套件 \n Microsoft Remote Desktop \n Firefox \n OBS \n Visual Studio Code \n Visual Studio Code Distilled.pdf \xa0 (for @gm users only) \n Flutter (Dart) \n 其他提示 \n Command + Shift + . (toggle hidden folders and files) \n \n', 'tags': '', 'url': 'MacBook 操作指南.html'}, {'title': 'W15-W18', 'text': '各分組除了必須將 W1-W14 週的所有上課內容, 以圖文及影音資料加以整理在個人及分組倉儲、網站及簡報外. \n 可以自選另一主題, 將分組協同的過程與內容整理在個人與分組的倉儲資料中. \n', 'tags': '', 'url': 'W15-W18.html'}, {'title': '佛經', 'text': '好經專區，多聽多訟有益身心靈健康 \n \n', 'tags': '', 'url': '佛經.html'}, {'title': '心經', 'text': '觀自在菩薩，行深般若波羅蜜多時，照見五蘊皆空，度一切苦厄。舍利子，色不異空，空不異色，色即是空，空即是色，受想行識，亦復如是。舍利子，是諸法空相，不生不滅，不垢不淨，不增不減，是故空中無色，無受想行識，無眼耳鼻舌身意，無色聲香味觸法，無眼界乃至無意識界，無無明亦無無明盡，乃至無老死亦無老死盡。無苦集滅道，無智亦無得，以無所得故，菩提薩埵，依般若波羅蜜多故，心無罣礙，無罣礙故，無有恐怖，遠離顛倒夢想，究竟涅槃。三世諸佛依般若波羅蜜多故，得阿耨多羅三藐三菩提，故知般若波羅蜜多，是大神咒，是大明咒，是無上咒，是無等等咒，能除一切苦，真實不虛。故說般若波羅蜜多咒，即說咒曰：揭諦，揭諦，波羅揭諦，波羅僧揭諦，菩提薩婆訶。 \n \n', 'tags': '', 'url': '心經.html'}, {'title': '兒歌好多首', 'text': '很多有意智力發展的好歌 \n', 'tags': '', 'url': '兒歌好多首.html'}, {'title': '小星星', 'text': '一閃一閃亮晶晶\u3000滿天都是小星星 掛在天上放光明\u3000好像許多小眼睛 一閃一閃亮晶晶\u3000滿天都是小星星 \n \n', 'tags': '', 'url': '小星星.html'}, {'title': '小蜜蜂', 'text': '嗡嗡嗡，嗡嗡嗡 大家一起勤做工 來匆匆，去匆匆 做工興味濃 天暖花好不做工 將來哪裏好過冬 嗡嗡嗡，嗡嗡嗡 別學懶惰蟲 嗡嗡嗡，嗡嗡嗡 大家一起勤做工 來匆匆，去匆匆 做工興味濃 天暖花好不做工 將來哪裏好過冬 嗡嗡嗡，嗡嗡嗡 別學懶惰蟲 嗡嗡嗡，嗡嗡嗡 大家一起勤做工 來匆匆，去匆匆 做工興味濃 天暖花好不做工 將來哪裏好過冬 嗡嗡嗡，嗡嗡嗡 別學懶惰蟲 嗡嗡嗡，嗡嗡嗡 大家一起勤做工 來匆匆，去匆匆 做工興味濃 天暖花好不做工 將來哪裏好過冬 嗡嗡嗡，嗡嗡嗡 別學懶惰蟲 \n', 'tags': '', 'url': '小蜜蜂.html'}]};