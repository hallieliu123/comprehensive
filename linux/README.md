
#### Linux 核心技能与应用  

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












