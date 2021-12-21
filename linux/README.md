
#### Linux

1. Linux 系统应用广泛
* Android系统底层是修改过的Linux内核，IOS/MacOS底层是修改过的Unix(类linux)，微软在Windows系统中引入了WSL(Windows Subsystem for Linux).

2. 认识 Linux（os -> operating system）
* motherboard/mainboard 主板
* 启动界面（主板显示） -> 操作系统 -> 其他软件操作
* 多个操作系统:  
  启动界面 -> Bootloader(eg: GRUB) -> 选择 Linux/windows  
  windows软件是不能在linux系统上运行的, 反之亦然。
* 历史：  
a. 1984年，微软发布了自己第一个操作系统 MS-DOS(实际是西雅图一计算机产品公司开发), 除了DOS系统还有很多其他操作系统，如 Unix(1970年诞生，操作系统更为复杂，一般为专业人士使用)。  
b. GNU项目和Linux：GNU项目为Richard Stallman在1984年创立，GNU是'Linux is not Unix'的递归缩写，当时创立GUN项目的首要目的是创建一个类Unix的操作系统(因为Unix过于昂贵，并操作复杂).  
Linux内核为芬兰一名大学生Linus业余时间编写，Linux是‘Linux is not Unix’的递归缩写。  
GNU和Linux是互补的，Linux只是一个类Unix的内核(内核主要提供如文件管理，虚拟内存，设备I/O等系统服务)，截止1991年，GNU项目已经编写了很多操作系统外围软件，包括cp命令,rm命令,Emacs,GCC,GDB等。GNU+Linux内核才是一个完整的操作系统。
* 各操作系统关系，MacOS和Linux的设计理念都是基于Unix(只是复刻其运行模式，源代码不同)，目前大部分windows操作系统都是基于革命性的Windows NT内核。
* Linux 的主要不同发行版：  
a. Red Hat: 性能稳定，Linux操作系统老牌发行版。收费版: RHEL: Red Hat Enterprise Linux。
b. Fedoral: Red Hat的社区免费后继版。  
c. CentOs: Community Enterprice Operation System, RHEL的克隆版，结合了 Red Hat和RHEL的特性。  
d. Deepin: 中国发行，主要对一些优秀产品进行集成和配置。
e. Debian: 1993创立，迄今为止最遵循GNU规范的linux发行版。
f. Ubuntu: Debian操作系统的后继或一个分支。  
* Linux 操作系统的两种界面：命令行界面(类DOS系统)，图形界面(类Windows系统).  
主流的桌面管理器有：Gnome(CentOs默认的图形界面桌面管理器),XDE,XFCE  
Gnome,KDE,Unity这些桌面管理器都是基于 X SERVER 这个底层软件来显示图形界面的。

3. 虚拟技术和虚拟机
* 虚拟技术: 一种通过组合或分区现有计算机资源(如CPU,内存,磁盘空间等)来使这些资源表现为一个或多个操作环境,从而提供优于原有资源配置的技术。
* 常用的虚拟机: Virtual Box, VMware

4. Linux 基础知识和命令
a. 命令行  
* [hallie@localhost~]$: [用户名@主机名 所在目录]权限, $ 普通用户权限, # 超级用户权限
* whoami: 查看用户名username
* hostname: 查看主机名hostname
* sudo su: 用于切换为超级用户 -> exit返回普通用户
* date: 打印日期
* ls 命令, -a 参数, ., .., .隐藏文件
b. 常用快捷键

5. Linux目录介绍(Linux中一切皆文件,Linux只有一个根目录 /)
* ls /
* boot: 系统启动所需要的一些文件
* dev: 接外设备所需的部分文件
* bin: 一些binary文件
* etc: et cetera,系统配置的一些文件 
* home: 所有用户私人目录文件
* lib: library 被程序所调用的一些库文件
* media: 通过其子目录文件访问外部设备
* mnt: mount 用于临时挂载一些装置
* opt: 用于安装一些软件和插件
* root: 超级用户的home目录
* sbin: system binary 系统二进制文件
* srv: service 网络服务启动后缩写的一些文件
* temp: 普通用户和程序临时存放文件的位置
* usr: unix software resoures
* var: 通常存放一些程序数据,如 log 文件

6. 常用的命令
* pwd命令: 当前所在工作目录
* which命令: 命令可执行文件的位置,eg: which hostname
* ls命令:  
-a: 列出所有文件,包括隐藏文件(以.开头)  
-l: 列出文件详细信息, 文件权限 - 文件链接数目 - 文件所有者 - 文件所在群组 - 文件字节大小 - 最近一次修改时间 - 文件名称    
-h: human readable, 文件字节大小转为1k/1M 这种形式  
-t: 按最近一次修改时间排序
* cd命令 = cd ~ 回到当前用户的home目录
* du命令: disk usage 显示当前文件夹下所有目录的大小(包括文件夹内部的目录)  
-s: summary,当前文件夹下所有文件总大小,eg: du -s  
-h: human readable  
-a: 显示当前文件夹下所有文件和目录  
* cat命令:  一次显示所有内容, concatenate    
-n: 加上行标记  
-cat -n file1 file2 => 合并file1 file2显示  
* less命令: 分页显示内容  
-空格:下一页  
-回车:下一行   
-u: 上半页  
-d: 下半页  
-q: 退出  
-h: 帮助  
-/: 查找  
-=: 当前行文件信息  
* head 命令, 显示文件头部,默认前10行  
-n: 显示几行参数
* tail命令: 显示文件结尾, 默认10行  
-n:显示几行  
-f:实时追踪文件(比如文件在更改)  
contrl + c 终止  
tail -f filename 默认每隔1秒检查一次文件  
tail -f -s4 filename 默认每隔4秒检查一次文件  
* touch & mkdir 命令  
-touch filename1 filename2 创建文件filename1和filename2  
-mkdir dir1 dir2 创建文件夹dir1和dir2  
mkdir -p one/two/three 递归创建文件夹
* cp & mv 命令  
-cp filename new_filename 在当前目录拷贝filename为新文件new_filename  
-cp filename dir1 拷贝文件filename到dir文件夹下  
-cp filename dir1/new_filename 拷贝文件filename到dir文件夹下并重命名为new_filename  
-拷贝目录 cp -r(recursive)  
-*通配符 cp *.txt folder  
-mv filename new_filename 文件重命名  
-mv filename folder  
-*通配符 mv *.txt folder
* rm 命令  
-rm file1 file2 file3  
-f 强制删除  
-r 递归删除  
-i 删除时通知用户  
-注意: 不要用root权限去: rm -rf /; rm -rf /*; 或在/目录中 rm -rf *
* ln 创建链接  
-链接方式有两种: 物理链接(physical link,硬链接)/符号链接(symbolic link,软链接)  
-文件存储方式分为3部分, 1文件名(inode) 2文件内容(被分配inode) 3权限  
-ln file1 file1_new 创建硬链接, 文件内容相同被分配了同样的inode,如果删除file1不会对file1_new产生任何影响, 但修改内容会  
-ln -s fil1 file1_new 创建软链接, 如果删除file1, file1_new就会成为死链接, 但删除file1_new则对file1没有影响。软链接可以指向目录,硬链接不行
* 用户和权限  
-sudo 以root权限运行命令  
-sudo su 切换为root用户(保存密码)
-su 切换为root用户(不保存密码), su - 回到 root的home目录
-useradd user root用户添加普通用户
-passwd user root用户更改普通用户密码
-userdel user,-r 加上此参数,同时删除user home目录
* 群组管理:groupadd,usermod,groups,groupdel,chown,chgrp,chmod

* man,apropos,whatis

* 查找文件:locate,find

* 数据操作,使用正则:grep,sort,wc,uniq,cut

* 输入输出重定向:<,<<  >,>>,2>,2>>,2>&1  建立管道流: |

* 进程和系统监测: w,ps,top

* 管理进程和关闭系统:kill,&,nohup,ctrl+z,bg,fg   halt,reboot,poweroff

* 指定时间执行:at,atq,atrm,sleep,&&,||,;

* 定时任务:crontab

* 文件归档,压缩和解压:tar,gzip,gunzip,bzip2,bunzip2

* 对称加密,非对称加密,ssh协议,config文件配置ssh,ssh免密登录配置

* vim 操作

* 文件传输 wget,scp

* shell基本语法

* 管理服务器和服务:systemctl,journalctl,systemd-analyze

* 安装和配置apache

* 防火墙配置:firewall-cmd

* SElinux 管理

* DHCP动态和静态分配ip

* 使用https,配置数字证书

* 安装配置tomcat,jenkins,nginx



