var __index = {"config":{"lang":["en"],"separator":"[\\s\\u200b\\-]","pipeline":["stemmer"]},"docs":[{"location":"index.html","title":"Home","text":"<p>\u6b22\u8fce\u6765\u5230MUCHWAY\u7684\u7b14\u8bb0\u672c </p> <ul> <li> \u5de5\u5177 \u2013 \u5404\u79cd\u5de5\u5177\u7684\u4f7f\u7528\u65b9\u6cd5\u548c\u7ecf\u9a8c</li> <li> \u7f16\u7a0b \u2013 \u5199\u4ee3\u7801\u8fc7\u7a0b\u4e2d\u7684\u4e00\u4e9b\u77e5\u8bc6\u70b9\u548c\u7ecf\u9a8c</li> <li> Linux \u2013 \u4f7f\u7528Linux\u7cfb\u7edf\u65f6\u7684\u4e00\u4e9b\u77e5\u8bc6\u70b9\u548c\u7ecf\u9a8c</li> <li> \u9879\u76ee \u2013 \u9879\u76ee\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u7684\u8bb0\u5f55</li> </ul>"},{"location":"blog/index.html","title":"Blog","text":""},{"location":"linux/linux.html","title":"Linux","text":""},{"location":"linux/linux.html#_1","title":"\u5e38\u7528\u529f\u80fd","text":""},{"location":"linux/linux.html#_2","title":"\u6302\u8f7d\u7f51\u76d8","text":"<pre><code>sudo mount -t nfs -o nolock,nfsvers=3 192.168.101.77:/home/muchway/lubancat /home/cat/vmware\n</code></pre>"},{"location":"program/c_cpp/c_cpp.html","title":"\u77e5\u8bc6\u8bb0\u5f55","text":""},{"location":"program/c_cpp/c_cpp.html#switch-caseif-else","title":"switch case\u548cif else\u54ea\u4e2a\u6548\u7387\u9ad8","text":"<p>\u5728\u4e00\u822c\u60c5\u51b5\u4e0b\uff0cswitch case\u6bd4if else\u6548\u7387\u9ad8\uff0c\u56e0\u4e3aswitch case\u8bed\u53e5\u4f7f\u7528\u4e86\u8df3\u8f6c\u8868\uff08jump table\uff09\u6765\u5b9e\u73b0\u5206\u652f\u9009\u62e9\uff0c\u800cif else\u8bed\u53e5\u5219\u9700\u8981\u9010\u4e2a\u5224\u65ad\u6bcf\u4e2a\u6761\u4ef6\u3002\u8df3\u8f6c\u8868\u662f\u4e00\u4e2a\u7531\u7f16\u8bd1\u5668\u751f\u6210\u7684\u6570\u7ec4\uff0c\u5176\u4e2d\u6bcf\u4e2a\u5143\u7d20\u5bf9\u5e94\u4e00\u4e2acase\u6807\u7b7e\uff0c\u6570\u7ec4\u7684\u7d22\u5f15\u662fswitch\u8868\u8fbe\u5f0f\u7684\u503c\uff0c\u901a\u8fc7\u7d22\u5f15\u53ef\u4ee5\u5feb\u901f\u5730\u8df3\u8f6c\u5230\u5bf9\u5e94\u7684\u4ee3\u7801\u5757\uff0c\u4ece\u800c\u5b9e\u73b0\u5206\u652f\u9009\u62e9\u3002</p> <p>\u8df3\u8f6c\u8868\u7684\u6548\u7387\u6bd4\u9010\u4e2a\u5224\u65ad\u6bcf\u4e2a\u6761\u4ef6\u8981\u9ad8\uff0c\u56e0\u4e3a\u8df3\u8f6c\u8868\u7684\u65f6\u95f4\u590d\u6742\u5ea6\u662fO(1)\uff0c\u800c\u9010\u4e2a\u5224\u65ad\u6bcf\u4e2a\u6761\u4ef6\u7684\u65f6\u95f4\u590d\u6742\u5ea6\u662fO(n)\uff0c\u5176\u4e2dn\u662f\u6761\u4ef6\u7684\u4e2a\u6570\u3002\u56e0\u6b64\uff0c\u5728\u6761\u4ef6\u6bd4\u8f83\u591a\u7684\u60c5\u51b5\u4e0b\uff0cswitch case\u6bd4if else\u66f4\u52a0\u9ad8\u6548\u3002</p> <p>\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5982\u679cswitch case\u8bed\u53e5\u4e2d\u7684case\u6807\u7b7e\u6bd4\u8f83\u5c11\uff0c\u6216\u8005case\u6807\u7b7e\u7684\u503c\u6bd4\u8f83\u5206\u6563\uff0c\u8df3\u8f6c\u8868\u7684\u6548\u7387\u53ef\u80fd\u4f1a\u964d\u4f4e\uff0c\u6b64\u65f6if else\u8bed\u53e5\u53ef\u80fd\u66f4\u52a0\u9ad8\u6548\u3002\u53e6\u5916\uff0cswitch case\u8bed\u53e5\u4e2d\u7684case\u6807\u7b7e\u5fc5\u987b\u662f<code>\u5e38\u91cf\u8868\u8fbe\u5f0f</code>\uff0c\u4e0d\u80fd\u662f\u53d8\u91cf\u6216\u5176\u4ed6\u7c7b\u578b\u7684\u8868\u8fbe\u5f0f\uff0c\u5426\u5219\u7f16\u8bd1\u5668\u65e0\u6cd5\u751f\u6210\u8df3\u8f6c\u8868\uff0c\u6b64\u65f6if else\u8bed\u53e5\u53ef\u80fd\u66f4\u52a0\u9002\u5408\u3002</p>"},{"location":"program/c_cpp/c_cpp.html#_2","title":"\u6570\u7ec4\u521d\u59cb\u5316","text":"<p>GitHub Copilot: \u8fd9\u662f\u56e0\u4e3a C \u8bed\u8a00\u4e2d\uff0c\u5bf9\u4e8e\u5b57\u7b26\u6570\u7ec4\u7684\u521d\u59cb\u5316\u6709\u4e00\u4e9b\u7279\u6b8a\u7684\u89c4\u5219\u3002\u5982\u679c\u4f7f\u7528\u82b1\u62ec\u53f7\u521d\u59cb\u5316\u8bed\u6cd5\uff0c\u53ea\u63d0\u4f9b\u4e86\u90e8\u5206\u5143\u7d20\u7684\u503c\uff0c\u90a3\u4e48\u5269\u4f59\u7684\u5143\u7d20\u4f1a\u88ab\u521d\u59cb\u5316\u4e3a 0\u3002\u4f8b\u5982\uff0c\u5982\u679c\u4f7f\u7528\u4ee5\u4e0b\u4ee3\u7801\u521d\u59cb\u5316\u4e00\u4e2a\u957f\u5ea6\u4e3a 10 \u7684\u5b57\u7b26\u6570\u7ec4\uff1a</p> <pre><code>char str[10] = {'a', 'b', 'c'};\n</code></pre> <p>\u90a3\u4e48\u6570\u7ec4\u7684\u524d\u4e09\u4e2a\u5143\u7d20\u4f1a\u88ab\u521d\u59cb\u5316\u4e3a 'a'\u3001'b' \u548c 'c'\uff0c\u800c\u5269\u4f59\u7684\u5143\u7d20\u4f1a\u88ab\u521d\u59cb\u5316\u4e3a 0\u3002\u56e0\u6b64\uff0c\u8fd9\u4e2a\u5b57\u7b26\u6570\u7ec4\u7684\u503c\u662f \"abc\\0\\0\\0\\0\\0\"\u3002</p> <p>\u4f46\u662f\uff0c\u5bf9\u4e8e\u5176\u4ed6\u7c7b\u578b\u7684\u6570\u7ec4\uff0c\u5982\u679c\u4f7f\u7528\u82b1\u62ec\u53f7\u521d\u59cb\u5316\u8bed\u6cd5\uff0c\u53ea\u63d0\u4f9b\u4e86\u90e8\u5206\u5143\u7d20\u7684\u503c\uff0c\u90a3\u4e48\u5269\u4f59\u7684\u5143\u7d20\u4f1a\u88ab\u521d\u59cb\u5316\u4e3a\u9ed8\u8ba4\u503c\u3002\u5bf9\u4e8e <code>int</code> \u7c7b\u578b\u7684\u6570\u7ec4\uff0c\u5176\u9ed8\u8ba4\u503c\u662f 0\uff0c\u56e0\u6b64\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u4ee3\u7801\u521d\u59cb\u5316\u4e00\u4e2a\u957f\u5ea6\u4e3a 10 \u7684 <code>int</code> \u6570\u7ec4\uff1a</p> <pre><code>int arr[10] = {1, 2, 3};\n</code></pre> <p>\u8fd9\u6837\u6570\u7ec4\u7684\u524d\u4e09\u4e2a\u5143\u7d20\u4f1a\u88ab\u521d\u59cb\u5316\u4e3a 1\u30012 \u548c 3\uff0c\u800c\u5269\u4f59\u7684\u5143\u7d20\u4f1a\u88ab\u521d\u59cb\u5316\u4e3a 0\u3002</p>"},{"location":"project/dji_payload/dji_payload.html","title":"Dji_Payload","text":""},{"location":"project/dji_payload/dji_payload.html#_1","title":"\u5173\u952e\u505a\u6cd5\u7684\u8bb0\u5f55","text":""},{"location":"project/dji_payload/dji_payload.html#_2","title":"\u7279\u6b8a\u7684\u5730\u65b9","text":""},{"location":"project/mavsdk/mavsdk.html","title":"MAVSDK","text":""},{"location":"project/speaker/speaker.html","title":"Speaker","text":""},{"location":"project/speaker/speaker.html#mavsdk","title":"\u7f16\u8bd1MavSDK","text":""},{"location":"project/speaker/speaker.html#_1","title":"\u7f16\u8bd1\u547d\u4ee4","text":"<pre><code>cmake -DCMAKE_BUILD_TYPE=Debug -DCMAKE_INSTALL_PREFIX=install -DBUILD_MAVSDK_SERVER=ON -DBUILD_SHARED_LIBS=ON -DMAVLINK_DIALECT=custom -DBUILD_THIRD_PARTY=ON -DMANUAL_SPECIFIED_CUSTOM_TOOLCHAIN=ON -DCUSTOM_TOOLCHAIN_PATH=/home/muchway/lubancat/mavlink/Toolchain_aarch64_linux_gnu.cmake -DBUILD_CUSTOM_MAVLINK=ON -DCUSTOM_MAVLINK_PATH=/home/muchway/lubancat/mavlink/mavlink -DBUILD_CUSTOM_PLUGINS=ON -DCMAKE_EXPORT_COMPILE_COMMANDS=ON -Bbuild/default -H.\n\n\ncmake -DCMAKE_BUILD_TYPE=Debug -DCMAKE_INSTALL_PREFIX=/home/muchway/lubancat/mavlink/CustomMAVSDK_Playlod/custom_mavsdk_lib -DBUILD_MAVSDK_SERVER=ON -DBUILD_SHARED_LIBS=ON -DMAVLINK_DIALECT=custom -DBUILD_THIRD_PARTY=ON -DCUSTOM_TOOLCHAIN_PATH=/home/muchway/lubancat/mavlink/Toolchain_aarch64_linux_gnu.cmake -DBUILD_CUSTOM_MAVLINK=ON -DCUSTOM_MAVLINK_PATH=/home/muchway/lubancat/mavlink/mavlink -DBUILD_CUSTOM_PLUGINS=ON -DCMAKE_EXPORT_COMPILE_COMMANDS=ON -Bbuild/default -H.\n\n\ncmake --build build/default --target install -j4\n\ncmake -Bbuild -H. -DCUSTOM_TOOLCHAIN_PATH=/home/muchway/lubancat/mavlink/Toolchain_aarch64_linux_gnu.cmake -DCMAKE_PREFIX_PATH=/home/muchway/lubancat/mavlink/Custom_MAVSDK/install\n\nexport LD_LIBRARY_PATH=/home/cat/ffmpeg_rockchip/ffmpeg_7_rockchip_install/lib:/home/cat/vmware/mavlink/Custom_MAVSDK/install/lib\n</code></pre>"},{"location":"project/speaker/speaker.html#_2","title":"\u7f16\u8bd1\u8fc7\u7a0b\u4e2d\u7684\u610f\u5916\u5904\u7406","text":"<ul> <li> <p>libmz</p> <p>\u628a\u624b\u52a8\u4e0b\u8f7d\u7684\u538b\u7f29\u5305\u89e3\u538b\u5230\u6307\u5b9a\u7684\u76ee\u5f55\u4e0b\uff0c\u7136\u540e\u518d\u7f16\u8bd1\u7684\u65f6\u5019\u5c31\u4e0d\u4f1a\u518d\u53bb\u4e0b\u8f7d\u4e86\u3002 <pre><code>tar -xvf xxx/xz-5.4.5.tar.gz -C xxx/liblzma\n</code></pre> \u6ce8\u91ca\u6389\u4e0b\u8f7d\u7684\u90e8\u5206\uff0c\u76f4\u63a5\u6307\u5b9a\u89e3\u538b\u540e\u7684\u76ee\u5f55\u3002 <pre><code># URL https://github.com/tukaani-project/xz/releases/download/v5.4.5/xz-5.4.5.tar.gz\n# URL_MD5 d2bb81e1a1a7808352c4ca28622f5c72\nSOURCE_DIR /home/muchway/lubancat/mavlink/Custom_MAVSDK/build/default/third_party/liblzma/liblzma-prefix/src/liblzma\n</code></pre></p> </li> <li> <p>zlib-ng</p> <pre><code>tar -xvf xxx/zlib-ng-2.1.6.tar.gz -C xxx/zlib-ng\n</code></pre> <pre><code># URL https://github.com/zlib-ng/zlib-ng/archive/refs/tags/2.1.6.tar.gz\nSOURCE_DIR /home/muchway/lubancat/mavlink/Custom_MAVSDK/build/default/third_party/zlib-ng/zlib-ng/src/zlib-ng\n</code></pre> </li> <li> <p>libopenssl</p> <pre><code>tar -xvf xxx/openssl-1.1.1l.tar.gz -C xxx/openssl\n</code></pre> <p><pre><code># URL https://www.openssl.org/source/openssl-${OPENSSL_VERSION}.tar.gz\nSOURCE_DIR /home/muchway/lubancat/mavlink/Custom_MAVSDK/build/default/third_party/openssl/openssl/src/openssl\n</code></pre> \u51fa\u73b0\u62a5\u8b66\uff0c\u4f1a\u5361\u4e00\u4f1a\uff0c\u4f46\u662f\u4e0d\u7528\u7ba1\uff0c\u80fd\u8fc7\u53bb\u7684\u3002 <pre><code>make[3]: \u8b66\u544a: jobserver \u4e0d\u53ef\u7528: \u6b63\u4f7f\u7528 -j1\u3002\u6dfb\u52a0 \u201c+\u201d \u5230\u7236 make \u7684\u89c4\u5219\u3002\n</code></pre></p> </li> <li> <p>cares</p> <pre><code>tar -xvf build/default/third_party/cares/cares/src/c-ares-1.19.1.tar.gz -C /build/default/third_party/cares/cares/src\n</code></pre> <p><pre><code># URL https://github.com/c-ares/c-ares/releases/download/cares-1_19_1/c-ares-1.19.1.tar.gz\nSOURCE_DIR /home/muchway/lubancat/mavlink/Custom_MAVSDK/build/default/third_party/cares/cares/src/cares\n</code></pre> * protobuf</p> <pre><code>tar -xvf build/default/third_party/protobuf/protobuf/src/protobuf-25.1.tar.gz -C build/default/third_party/protobuf/protobuf/src\n</code></pre> <pre><code># URL https://github.com/protocolbuffers/protobuf/releases/download/v25.1/protobuf-25.1.tar.gz\nSOURCE_DIR /home/muchway/lubancat/mavlink/Custom_MAVSDK/build/default/third_party/protobuf/protobuf/src/protobuf\n</code></pre> </li> </ul>"},{"location":"project/speaker/speaker.html#custommavsdk_playlod","title":"\u7f16\u8bd1CustomMavsdk_Playlod\u7684\u7b2c\u4e09\u65b9\u5e93","text":""},{"location":"project/speaker/speaker.html#alsa","title":"\u7f16\u8bd1alsa","text":"<pre><code>./configure --host=aarch64-linux-gnu --prefix=$PWD/_install --disable-python --disable-shared\n\nmake -j4\n\nmake install\n</code></pre>"},{"location":"project/speaker/speaker.html#_3","title":"\u5173\u952e\u70b9\u8bb0\u5f55","text":""},{"location":"project/speaker/speaker.html#gpio","title":"\u9a8c\u8bc1GPIO","text":"<p> <p> </p> <p></p> <p>\u4e0b\u9762\u8fd9\u5f20\u56fe\u662f\u4eceorangepi zero 2w\u4e0a\u9762\u7528gpio readall\u8bfb\u51fa\u6765\u7684\uff1a  <p></p> <p></p> <p>\u5168\u5fd7H618\u7684GPIO\uff1a\u53c2\u8003\u94fe\u63a5</p> <p>GPIO\u7f16\u53f7 = \u63a7\u5236\u5668\u7aef\u53e3\u53f7 * 32 + \u7d22\u5f15\u5e8f\u53f7 \u5bf9\u4e8e\u63a7\u5236\u5668\u7aef\u53e3\u53f7\uff0c\u4f8b\u5982GPIOA\u5c31\u662f0 GPIOC\u5c31\u662f2\uff0c\u5bf9\u4e8ePI4\uff0c\u5c31\u662f: (I-A) * 32 + 4 = 260</p> <pre><code>#\u4ee5\u4e0b\u6240\u6709\u64cd\u4f5c\u5747\u9700\u8981\u6253\u5f00\u7ba1\u7406\u8005\u6743\u9650\u4f7f\u7528\uff0c\u4f7f\u7528sudo -s\n#\u4f7f\u80fd\u5f15\u811aGPIO1_C4\necho 260 &gt; /sys/class/gpio/export\necho 260 | sudo tee /sys/class/gpio/export\n\n#\u8bbe\u7f6e\u5f15\u811a\u4e3a\u8f93\u5165\u6a21\u5f0f\necho in &gt; /sys/class/gpio/gpio260/direction\n#\u8bfb\u53d6\u5f15\u811a\u7684\u503c\ncat /sys/class/gpio/gpio260/value\n\n#\u8bbe\u7f6e\u5f15\u811a\u4e3a\u8f93\u51fa\u6a21\u5f0f\necho out &gt; /sys/class/gpio/gpio260/direction\n#\u8bbe\u7f6e\u5f15\u811a\u4e3a\u4f4e\u7535\u5e73\necho 0 &gt; /sys/class/gpio/gpio260/value\n#\u8bbe\u7f6e\u5f15\u811a\u4e3a\u9ad8\u7535\u5e73\necho 1 &gt; /sys/class/gpio/gpio260/value\n\n#\u590d\u4f4d\u5f15\u811a\necho 260 &gt; /sys/class/gpio/unexport\n</code></pre> <p>\u91ce\u706b\u7684GPIO\u6559\u7a0b\uff1a\u53c2\u8003\u94fe\u63a5</p>"},{"location":"project/speaker/speaker.html#_4","title":"\u9a8c\u8bc1\u4e32\u53e3","text":"<p><pre><code>sudo stty -F /dev/ttyS1 115200 cs8 -cstopb -parenb\necho \"Hello, ttyS1\" &gt; /dev/ttyS1\n</code></pre> \u901a\u8fc7\u9a8c\u8bc1\u53d1\u73b0\uff0c\u4e32\u53e30\u9ed8\u8ba4\u662f\u505a\u8c03\u8bd5\u7528\uff0c1\u30013\u30014\u662f\u76f4\u63a5\u53ef\u4ee5\u4f7f\u7528\u7684\uff0c2\u662f\u7528\u6765\u505a\u84dd\u7259\u7684\uff0c\u9700\u8981\u91cd\u65b0\u914d\u7f6e\u624d\u80fd\u4f5c\u4e3a\u666e\u901a\u4e32\u53e3\u3002</p>"},{"location":"project/speaker/speaker.html#_5","title":"\u914d\u7f6e\u8bbe\u5907\u6811","text":""},{"location":"project/speaker/speaker.html#_6","title":"\u9a8c\u8bc1\u97f3\u9891\u9a71\u52a8","text":"<ul> <li> <p>GUI\u5de5\u5177</p> <pre><code>alsamixer\n</code></pre> </li> <li> <p>\u5217\u4e3e\u97f3\u9891\u9a71\u52a8</p> </li> <li> <p>\u83b7\u53d6\u97f3\u91cf</p> </li> <li> <p>\u8bbe\u7f6e\u97f3\u91cf</p> </li> <li> <p>\u64ad\u653ePCM</p> <pre><code>ffplay -nodisp -autoexit -ar 16000 -f s16le -i ./test_file/pcm_file/recorder.pcm\n</code></pre> </li> </ul>"},{"location":"project/speaker/speaker.html#nfs","title":"\u6302\u8f7dNFS","text":"<pre><code>sudo mount -t nfs -o nolock,nfsvers=3 192.168.101.77:/home/muchway/zero3 /home/orangepi/vmware\n</code></pre>"},{"location":"project/speaker/speaker.html#_7","title":"\u9a8c\u8bc1\u8f7d\u677f","text":"<p>\u4e00\u5f00\u59cb\u505a\u6d4b\u8bd5\u65f6\u5019\uff0c\u6211\u662f\u63a5\u4e86\u529f\u653e\u677f\u5b50\u548c\u8f7d\u677f\uff0c\u53d1\u73b0\u7cfb\u7edf\u542f\u52a8\u4e0d\u4e86\uff0c\u8c03\u8bd5\u4e32\u53e3\u6253\u5370\u7684\u6709\u5f88\u591a\u4e71\u7801\u3002\u7136\u540e\u53c8\u53bb\u505a\u5404\u79cd\u6d4b\u8bd5\uff0c\u53d1\u73b0\u53ea\u6709\u7528\u7535\u8111\u8fde\u63a5usb\u65f6\u5019\u53ef\u4ee5\u6b63\u5e38\u542f\u52a8\u3002\u540e\u9762\u6392\u67e5\u53d1\u73b0\u662f\u8c03\u8bd5\u4e32\u53e3\u6ca1\u6709\u63a5\u5730\u7684\u539f\u56e0\u3002 \u5728\u6b64\u57fa\u7840\u4e0a\u518d\u505a\u5b9e\u9a8c\uff0c\u6709\u4ee5\u4e0b\u73b0\u8c61\uff1a  TTL 2 USB\u8fde\u63a5PC TTL 2 USB\u4e0d\u63a5PC \u77ed\u63a5TX\u548cRX TX\u548cRX\u60ac\u7a7a \u63a5GND \u4e0d\u63a5GND \u63a5GND \u4e0d\u63a5GND \u80fd \u4e0d\u80fd \u80fd \u4e0d\u80fd \u4e0d\u80fd \u80fd <p></p> <p>\u7ecf\u8fc7\u7814\u7a76\u53d1\u73b0\uff0c\u6211\u4eec\u753b\u7684\u8f7d\u677f\u3001\u5b98\u65b9\u7684\u8f7d\u677f\u3001orangepi zero 2w\uff0c\u90fd\u662f\u4e00\u6837\u7684\u73b0\u8c61\u3002</p> <p>\u77ed\u63a5TX\u548cRX\u7684\u539f\u56e0\u662f\uff0c\u77ed\u63a5\u4e4b\u540e\uff0cTX\u7684\u8f93\u51fa\u5c31\u4f5c\u4e3a\u6307\u4ee4\u5f80RX\u53d1\u4e86\uff0c\u7cfb\u7edf\u4e0d\u77e5\u9053\u600e\u4e48\u56de\u590d\u8fd9\u4e9b\u4e1c\u897f\uff0c\u5c31\u6253\u65ad\u4e86\u542f\u52a8\u7684\u6b65\u9aa4\uff0c\u6240\u4ee5\u5c31\u542f\u52a8\u4e0d\u8d77\u6765\u3002</p> <p>\u8fd8\u6709\u53d1\u73b0\uff1a\u63a5GND: TX=3.2V, RX=0V; \u4e0d\u63a5GND\uff1aTX=0.6V, RX=1.38V \u4e0d\u77e5\u9053\u8fd9\u662f\u4ec0\u4e48\u9053\u7406\uff0c\u5927\u6982\u7387\u662f\u8ddf\u6211\u7528\u7684\u4e32\u53e3\u8f6cUSB\u6a21\u5757\u6709\u5173\u7cfb\u3002</p>"},{"location":"tool/github/github.html","title":"Github\u57fa\u672c\u539f\u7406\u548c\u64cd\u4f5c","text":""},{"location":"tool/github/github.html#_1","title":"\u53c2\u8003\u8d44\u6599","text":"<p>\u7334\u5b50\u90fd\u80fd\u5b66\u4f1a\u7684git\u5165\u95e8</p>"},{"location":"tool/github/github.html#git","title":"Git\u57fa\u672c\u539f\u7406","text":"<p>Git\u5de5\u4f5c\u6d41\u548c\u6838\u5fc3\u539f\u7406 | GitHub\u57fa\u672c\u64cd\u4f5c | VS Code\u91cc\u4f7f\u7528Git\u548c\u5173\u8054GitHub</p> <p>\u5f62\u8c61\u5730\u7406\u89e3Git\u7684\u539f\u7406</p> <p> <p></p> \u6b66\u529f\u79d8\u7c4d <p></p> <p>\u5177\u4f53\u7684Git\u539f\u7406</p> <p> <p></p> Git\u539f\u7406 <p></p> <p>\u6211\u4eec\u81ea\u5df1\u7535\u8111\u4e2d\u7684\u6587\u4ef6\u5939\u53eb\u505a\u5de5\u4f5c\u533a\uff0c\u8fd8\u6709\u4e00\u4e2a\u9690\u85cf\u7684.git\u6587\u4ef6\u5939\uff0c\u53eb\u505a\u7248\u672c\u5e93\uff0c\u7248\u672c\u5e93\u91cc\u9762\u5b58\u4e86\u5f88\u591a\u4e1c\u897f\uff0c\u5176\u4e2d\u6700\u91cd\u8981\u7684\u5c31\u662fstage\uff08\u6682\u5b58\u533a\uff09 \u5728\u81ea\u5df1\u6587\u4ef6\u4e2d\u5bf9\u6587\u4ef6\u8fdb\u884c\u4fee\u6539\u540e\uff0c\u9700\u8981\u5148add\u5230\u6682\u5b58\u533a\uff0c\u7136\u540e\u518dcommit\u5230\u5206\u652f\u4e0a\uff0c\u6700\u540e\u624d\u662fpull\u5230\u8fdc\u7a0b\u4ed3\u5e93 \u8fd8\u6709Git\u4e3a\u6211\u4eec\u81ea\u52a8\u521b\u5efa\u4e86\u7b2c\u4e00\u4e2a\u5206\u652fmaster\uff0c\u4ee5\u53ca\u6307\u5411master\u7684\u4e00\u4e2a\u6307\u9488HEAD\u3002 </p>"},{"location":"tool/github/github.html#github_1","title":"GitHub\u57fa\u672c\u64cd\u4f5c","text":""},{"location":"tool/github/github.html#git_1","title":"\u914d\u7f6eGit\u7528\u6237\u540d\u548c\u90ae\u7bb1","text":"<pre><code>git config --global user.name \"Your Name\"\ngit config --global user.email \"Your Email\"\n</code></pre>"},{"location":"tool/github/github.html#git_2","title":"\u67e5\u770bgit\u914d\u7f6e","text":"<pre><code>git config --list\n</code></pre>"},{"location":"tool/github/github.html#ssh-key","title":"\u751f\u6210ssh key","text":"<p><pre><code>ssh-keygen -t rsa -C \"XXX@XX.com\"\n</code></pre> \u7136\u540e\u4e00\u8def\u56de\u8f66\uff0c\u751f\u6210ssh key\u3002 \u7136\u540e\u5728.ssh\u6587\u4ef6\u5939\u4e0b\u9762\u4f1a\u751f\u6210id_rsa\u548cid_rsa.pub\u4e24\u4e2a\u6587\u4ef6\uff0cid_rsa\u662f\u79c1\u94a5\uff0cid_rsa.pub\u662f\u516c\u94a5\u3002</p>"},{"location":"tool/github/github.html#ssh-keygithub","title":"\u6dfb\u52a0ssh key\u5230github","text":"<p>\u6253\u5f00id_rsa.pub\u6587\u4ef6\uff0c\u590d\u5236\u91cc\u9762\u7684\u5185\u5bb9\uff0c\u7136\u540e\u6253\u5f00github\uff0c\u70b9\u51fb\u5934\u50cf\uff0c\u9009\u62e9settings\uff0c\u7136\u540e\u9009\u62e9SSH and GPG keys\uff0c\u7136\u540e\u70b9\u51fbNew SSH key\uff0c\u7136\u540e\u628a\u590d\u5236\u7684\u5185\u5bb9\u7c98\u8d34\u5230key\u91cc\u9762\uff0c\u7136\u540e\u70b9\u51fbAdd SSH key\u3002</p>"},{"location":"tool/github/github.html#ssh-key_1","title":"\u6d4b\u8bd5ssh key\u662f\u5426\u914d\u7f6e\u6210\u529f","text":"<p><pre><code>ssh -T\n</code></pre> \u5982\u679c\u51fa\u73b0Hi MUCHWAY! You've successfully authenticated, but GitHub does not provide shell access.\u8bf4\u660e\u914d\u7f6e\u6210\u529f\u4e86\u3002</p>"},{"location":"tool/github/github.html#_2","title":"\u521b\u5efa\u7248\u672c\u5e93","text":"<p><pre><code>git init\n</code></pre> \u8fd9\u6837\u4f1a\u521b\u5efa\u4e00\u4e2a.git\u6587\u4ef6\u5939\uff0c\u662f\u9690\u85cf\u7684\uff0c\u5bf9\u4e8egit\u5404\u79cd\u6570\u636e\u90fd\u8bb0\u5f55\u5728\u8fd9\u4e2a\u6587\u4ef6\u5939\u91cc\u9762\uff0c\u6682\u5b58\u533a\u3001\u672c\u5730\u4ed3\u5e93\u90fd\u5728\u8fd9\u91cc\u9762\u4e86\u3002\u521d\u59cb\u5316\u540e\uff0c\u9ed8\u8ba4\u5904\u4e8emaster\u5206\u652f\u3002</p>"},{"location":"tool/github/github.html#_3","title":"\u65b0\u5efa\u4e00\u4e2a\u6587\u4ef6","text":"<pre><code>echo 'my wiki' &gt; README.md\n</code></pre>"},{"location":"tool/github/github.html#_4","title":"\u67e5\u770b\u72b6\u6001","text":"<p><pre><code>git status\n</code></pre> \u53ef\u4ee5\u770b\u5230README.md\u6587\u4ef6\u5904\u4e8e\u672a\u8ddf\u8e2a\u72b6\u6001\uff1a</p> <p> <p></p> <p></p> <p>\u4ed6\u8fd8\u63d0\u793a\u4e86\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528git add\u547d\u4ee4\u5c06\u5176\u6dfb\u52a0\u5230\u6682\u5b58\u533a\u3002</p>"},{"location":"tool/github/github.html#_5","title":"\u6dfb\u52a0\u6587\u4ef6\u5230\u7248\u672c\u5e93","text":"<pre><code>git add .  # \u6dfb\u52a0\u5f53\u524d\u76ee\u5f55\u4e0b\u6240\u6709\u6587\u4ef6\u5230\u6682\u5b58\u533a\n</code></pre>"},{"location":"tool/github/github.html#_6","title":"\u518d\u6b21\u67e5\u770b\u72b6\u6001","text":"<p><pre><code>git status\n</code></pre> \u53ef\u4ee5\u770b\u5230README.md\u548c\u5176\u4ed6\u6240\u6709\u6587\u4ef6\u5904\u4e8e\u6682\u5b58\u533a\uff1a</p> <p> <p></p> <p></p>"},{"location":"tool/github/github.html#_7","title":"\u63d0\u4ea4\u6587\u4ef6\u5230\u7248\u672c\u5e93","text":"<pre><code>git commit -m \"first commit\"  # \u63d0\u4ea4\u5230\u672c\u5730\u4ed3\u5e93, -m\u540e\u9762\u662f\u672c\u6b21\u63d0\u4ea4\u7684\u8bf4\u660e\n</code></pre>"},{"location":"tool/github/github.html#_8","title":"\u67e5\u770b\u63d0\u4ea4\u65e5\u5fd7","text":"<p><pre><code>git log\n</code></pre> \u53ef\u4ee5\u770b\u5230\u6211\u4eec\u521a\u521a\u63d0\u4ea4\u7684commit\uff1a  <p></p> <p></p>"},{"location":"tool/github/github.html#_9","title":"\u4fee\u6539\u6587\u4ef6","text":"<p><pre><code>echo '## Git\u5de5\u4f5c\u6d41\u548c\u6838\u5fc3\u539f\u7406' &gt;&gt; README.md\n</code></pre> \u7136\u540e\u518d\u6b21 <pre><code>git add README.md\n</code></pre> <pre><code>git commit -m 'README.md\u589e\u52a0\u4e86\u4e00\u884c'\n</code></pre> \u8fd9\u4e4b\u540e\u6211\u4eec\u518d\u770b\u63d0\u4ea4\u65e5\u5fd7\uff1a  <p></p> <p></p> <p>\u53ef\u4ee5\u770b\u5230\u6211\u4eec\u7684\u63d0\u4ea4\u65e5\u5fd7\u662f\u6709\u4e24\u4e2a\u7684\uff0c\u7b2c\u4e00\u4e2a\u662f\u6211\u4eec\u7b2c\u4e00\u6b21\u63d0\u4ea4\u7684\uff0c\u7b2c\u4e8c\u4e2a\u662f\u6211\u4eec\u7b2c\u4e8c\u6b21\u63d0\u4ea4\u7684\uff0c\u8fd9\u5c31\u662f\u6211\u4eec\u7684\u7248\u672c\u63a7\u5236\u3002</p>"},{"location":"tool/github/github.html#_10","title":"\u63d0\u4ea4\u5230\u8fdc\u7a0b\u4ed3\u5e93","text":"<p><pre><code>git remote add origin git@github.com:MUCHWAY/mkdocs_github_test.git\n</code></pre> origin\u662f\u8fdc\u7a0b\u4ed3\u5e93\u7684\u540d\u5b57\uff0c\u53ef\u4ee5\u81ea\u5df1\u53d6\u540d\u5b57\uff0c\u4f46\u662f\u4e00\u822c\u90fd\u53eborigin\u3002 <pre><code>git push -u origin master\n</code></pre> -u\u662f\u7b2c\u4e00\u6b21\u63d0\u4ea4\u7684\u65f6\u5019\u9700\u8981\u52a0\u7684\uff0c\u4ee5\u540e\u5c31\u4e0d\u9700\u8981\u4e86\u3002 \u8fd9\u6837\u5c31\u628a\u672c\u5730\u7684master\u5206\u652f\u63a8\u9001\u5230\u4e86\u8fdc\u7a0b\u4ed3\u5e93origin\u4e0a\u9762\u3002  <p></p> <p></p> <p>\u53ef\u4ee5\u770b\u5230\u6211\u4eec\u7684github\u4e0a\u9762\u5df2\u7ecf\u6709\u4e86\u6211\u4eec\u7684\u6587\u4ef6\u4e86\uff1a  <p></p> <p></p>"},{"location":"tool/github/github.html#_11","title":"\u63d0\u4ea4\u5ffd\u7565\u6587\u4ef6","text":"<p>\u5148\u521b\u5efa\u4e00\u4e2a.gitignore\u6587\u4ef6 <pre><code>touch .gitignore\n</code></pre> \u7136\u540e\u5728.gitignore\u6587\u4ef6\u4e2d\u5199\u5165\u5ffd\u7565\u6587\u4ef6\u7684\u89c4\u5219\uff0c\u6bd4\u5982\u5ffd\u7565\u6389*.pyc\u6587\u4ef6\uff0c\u5c31\u53ef\u4ee5\u5199\u6210*.pyc\u3002 \u7136\u540e\u518d\u6b21add\u548ccommit\uff0c\u7136\u540e\u518d\u6b21push\u5230\u8fdc\u7a0b\u4ed3\u5e93\u3002 \u53ef\u4ee5\u770b\u5230\u6211\u4eec\u7684*.pyc\u6587\u4ef6\u5df2\u7ecf\u88ab\u5ffd\u7565\u4e86\u3002</p>"},{"location":"tool/github/github.html#_12","title":"\u521b\u5efa\u65b0\u7684\u5206\u652f","text":"<p><pre><code>git branch dev  # \u521b\u5efadev\u5206\u652f\n</code></pre> \u5207\u6362\u5230dev\u5206\u652f <pre><code>git checkout dev\n</code></pre> \u6216\u8005\u53ef\u4ee5\u76f4\u63a5\u521b\u5efa\u5e76\u5207\u6362\u5230dev\u5206\u652f  <pre><code>git checkout -b dev  # \u521b\u5efa\u5e76\u5207\u6362\u5230dev\u5206\u652f\n</code></pre> \u6b64\u5916 <pre><code>git branch  # \u67e5\u770b\u5f53\u524d\u5206\u652f\n</code></pre> <pre><code>git checkout master  # \u5207\u6362\u5230master\u5206\u652f\n</code></pre> <pre><code>git branch -d dev  # \u5220\u9664dev\u5206\u652f\n</code></pre></p>"},{"location":"tool/github/github.html#_13","title":"\u5408\u5e76\u5206\u652f","text":"<p><pre><code>git merge dev  # \u628adev\u5206\u652f\u5408\u5e76\u5230\u5f53\u524d\u5206\u652f\n</code></pre> \u5408\u5e76\u5b8c\u6210\u540e\uff0c\u53ef\u4ee5\u5220\u9664dev\u5206\u652f\u4e86\u3002</p>"},{"location":"tool/github/github.html#_14","title":"Github","text":""},{"location":"tool/github/github.html#_15","title":"\u4ece\u8fdc\u7a0b\u4ed3\u5e93\u4e2d\u5220\u9664\u6587\u4ef6","text":"<pre><code>git rm -r --cached test.txt  # \u5220\u9664\u6682\u5b58\u533a\u4e2d\u7684test.txt\u6587\u4ef6\ngit commit -m \"fixed untracked files\"\ngit push origin master\n</code></pre>"},{"location":"tool/github/github.html#checkout","title":"checkout\u547d\u4ee4","text":"<p>\u7528\u4e8e\u5207\u6362\u5206\u652f\u6216\u6062\u590d\u6587\u4ef6\u3002\u5b83\u7684\u4f5c\u7528\u53d6\u51b3\u4e8e\u4f7f\u7528\u7684\u53c2\u6570\u3002 <pre><code> git checkout &lt;branch&gt;\n ```\n\u5b83\u5c06\u4f1a\u5207\u6362\u5230\u6307\u5b9a\u7684\u5206\u652f\uff0c\u5e76\u5c06\u5de5\u4f5c\u76ee\u5f55\u66f4\u65b0\u4e3a\u8be5\u5206\u652f\u7684\u6700\u65b0\u7248\u672c\u3002\n```bash\ngit checkout &lt;commit&gt;\n</code></pre> \u5b83\u5c06\u4f1a\u5c06\u5de5\u4f5c\u76ee\u5f55\u66f4\u65b0\u4e3a\u6307\u5b9a\u63d0\u4ea4\u7684\u7248\u672c\uff0c\u5e76\u5c06\u4ee3\u7801\u6062\u590d\u5230\u8be5\u63d0\u4ea4\u7684\u72b6\u6001\u3002\u8fd9\u53ef\u4ee5\u7528\u4e8e\u6062\u590d\u5230\u4e4b\u524d\u7684\u7248\u672c\uff0c\u6216\u8005\u67e5\u770b\u67d0\u4e2a\u63d0\u4ea4\u7684\u4ee3\u7801\u3002 <pre><code>git checkout -- &lt;file&gt;\n</code></pre> \u5b83\u5c06\u4f1a\u5c06\u6307\u5b9a\u6587\u4ef6\u6062\u590d\u5230\u6700\u8fd1\u4e00\u6b21\u63d0\u4ea4\u7684\u72b6\u6001\u3002\u8fd9\u53ef\u4ee5\u7528\u4e8e\u64a4\u9500\u5bf9\u6587\u4ef6\u7684\u66f4\u6539\u3002</p> <p><pre><code>git checkout\n</code></pre> \u4f1a\u66f4\u6539\u5de5\u4f5c\u76ee\u5f55\u548c\u4ee3\u7801\u72b6\u6001\uff0c\u56e0\u6b64\u5728\u4f7f\u7528\u8be5\u547d\u4ee4\u4e4b\u524d\uff0c\u8bf7\u786e\u4fdd\u5df2\u7ecf\u4fdd\u5b58\u4e86\u6240\u6709\u66f4\u6539\uff0c\u5e76\u4e14\u5df2\u7ecf\u63d0\u4ea4\u4e86\u6240\u6709\u9700\u8981\u63d0\u4ea4\u7684\u66f4\u6539\u3002</p>"},{"location":"tool/github/github.html#_16","title":"\u5e38\u89c1\u95ee\u9898","text":""},{"location":"tool/github/github.html#gitignore","title":".gitignore\u8bbe\u7f6e\u540e\u4e0d\u8d77\u4f5c\u7528","text":"<p>\u53c2\u8003\u8fde\u63a5</p> <p>\u5176\u4e2d\u4e00\u79cd\u89e3\u51b3\u65b9\u6cd5\u662f\uff1a <pre><code>git rm -r --cached .  # \u5220\u9664\u672c\u5730\u7f13\u5b58\ngit add .  # \u91cd\u65b0trace file\ngit commit -m \"fixed untracked files\"\ngit push origin master\n</code></pre></p>"},{"location":"tool/github/github.html#git-pull","title":"git pull\u62a5\u9519","text":"<p><pre><code>MUCHWAY: error: Your local changes to the following files would be overwritten by merge:\n        docs/index.md\n        mkdocs.yml\nPlease commit your changes or stash them before you merge.\nAborting\n</code></pre> \u8fd9\u4e2a\u9519\u8bef\u63d0\u793a\u8868\u660e\u4f60\u5728\u672c\u5730\u4fee\u6539\u4e86 <code>docs/index.md</code> \u548c <code>mkdocs.yml</code> \u8fd9\u4e24\u4e2a\u6587\u4ef6\uff0c\u800c\u8fd9\u4e9b\u4fee\u6539\u4e0e\u4f60\u4ece\u8fdc\u7a0b\u4ed3\u5e93\u62c9\u53d6\u7684\u4ee3\u7801\u4ea7\u751f\u4e86\u51b2\u7a81\u3002\u4f60\u6709\u4e24\u4e2a\u89e3\u51b3\u65b9\u6848\uff1a 1. \u5728\u62c9\u53d6\u8fdc\u7a0b\u4ed3\u5e93\u7684\u4ee3\u7801\u4e4b\u524d\uff0c\u5148\u5c06\u4f60\u7684\u672c\u5730\u4fee\u6539\u63d0\u4ea4\u5230\u672c\u5730\u4ed3\u5e93\u3002\u4f60\u53ef\u4ee5\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a <pre><code>git add docs/index.md mkdocs.yml\ngit commit -m \"Committing changes before pulling from remote repository\"\ngit pull\n</code></pre> 2. \u5728\u62c9\u53d6\u8fdc\u7a0b\u4ed3\u5e93\u7684\u4ee3\u7801\u4e4b\u524d\uff0c\u5c06\u4f60\u7684\u672c\u5730\u4fee\u6539\u6682\u5b58\u8d77\u6765\u3002\u4f60\u53ef\u4ee5\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a <pre><code>git stash\ngit pull\n</code></pre> \u62c9\u53d6\u5b8c\u4ee3\u7801\u540e\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 <code>git stash apply</code> \u547d\u4ee4\u5c06\u4f60\u7684\u4fee\u6539\u5e94\u7528\u56de\u6765\u3002 <code>git stash</code> \u547d\u4ee4\u53ef\u4ee5\u5c06\u4f60\u7684\u672c\u5730\u4fee\u6539\u6682\u5b58\u8d77\u6765\uff0c\u4ee5\u4fbf\u4f60\u53ef\u4ee5\u5728\u4e0d\u63d0\u4ea4\u4fee\u6539\u7684\u60c5\u51b5\u4e0b\u5207\u6362\u5206\u652f\u6216\u62c9\u53d6\u8fdc\u7a0b\u4ed3\u5e93\u7684\u4ee3\u7801\u3002\u5f53\u4f60\u6267\u884c <code>git stash</code> \u547d\u4ee4\u65f6\uff0cGit\u4f1a\u5c06\u4f60\u7684\u672c\u5730\u4fee\u6539\u4fdd\u5b58\u5230\u4e00\u4e2a\u6808\u4e2d\uff0c\u5e76\u5c06\u4f60\u7684\u5de5\u4f5c\u76ee\u5f55\u6062\u590d\u5230\u4e0a\u4e00\u6b21\u63d0\u4ea4\u7684\u72b6\u6001\u3002\u8fd9\u6837\uff0c\u4f60\u5c31\u53ef\u4ee5\u5728\u4e0d\u63d0\u4ea4\u4fee\u6539\u7684\u60c5\u51b5\u4e0b\u6267\u884c\u5176\u4ed6\u64cd\u4f5c\uff0c\u6bd4\u5982\u5207\u6362\u5206\u652f\u6216\u62c9\u53d6\u8fdc\u7a0b\u4ed3\u5e93\u7684\u4ee3\u7801\u3002 \u5f53\u4f60\u9700\u8981\u6062\u590d\u4f60\u7684\u672c\u5730\u4fee\u6539\u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528 <code>git stash apply</code> \u547d\u4ee4\u5c06\u4f60\u7684\u4fee\u6539\u5e94\u7528\u56de\u6765\u3002\u5982\u679c\u4f60\u6709\u591a\u4e2a\u6682\u5b58\u7684\u4fee\u6539\uff0c\u53ef\u4ee5\u4f7f\u7528 <code>git stash list</code> \u547d\u4ee4\u67e5\u770b\u6240\u6709\u7684\u6682\u5b58\u8bb0\u5f55\uff0c\u5e76\u4f7f\u7528 <code>git stash apply stash@{n}</code> \u547d\u4ee4\u5c06\u6307\u5b9a\u7684\u6682\u5b58\u8bb0\u5f55\u5e94\u7528\u56de\u6765\u3002'</p> <ol> <li>\u8fd8\u6709\u4ee5\u4e00\u79cd\u60c5\u51b5\u662f\u60f3\u8ba9\u8fdc\u7a0b\u4ed3\u5e93\u7684\u4ee3\u7801\u8986\u76d6\u6211\u672c\u5730\u7684\u4ee3\u7801 \u6267\u884c <code>git fetch</code> \u547d\u4ee4\u62c9\u53d6\u8fdc\u7a0b\u4ed3\u5e93\u7684\u4ee3\u7801; \u6267\u884c <code>git reset</code> \u547d\u4ee4\u5c06\u672c\u5730\u4ed3\u5e93\u7684 HEAD \u6307\u9488\u6307\u5411\u8fdc\u7a0b\u4ed3\u5e93\u7684\u4ee3\u7801; \u8fd9\u4e2a\u547d\u4ee4\u4f1a\u5c06\u672c\u5730\u4ed3\u5e93\u7684 HEAD \u6307\u9488\u6307\u5411\u8fdc\u7a0b\u4ed3\u5e93\u7684 master \u5206\u652f\u7684\u6700\u65b0\u63d0\u4ea4\uff0c\u540c\u65f6\u5c06\u4f60\u672c\u5730\u7684\u4ee3\u7801\u8986\u76d6\u4e3a\u8fdc\u7a0b\u4ed3\u5e93\u7684\u4ee3\u7801\u3002 \u6ce8\u610f\uff1a\u8fd9\u4e2a\u64cd\u4f5c\u4f1a\u4e22\u5931\u4f60\u672c\u5730\u672a\u63d0\u4ea4\u7684\u4fee\u6539\uff0c\u8bf7\u786e\u4fdd\u4f60\u5df2\u7ecf\u5c06\u672c\u5730\u7684\u4fee\u6539\u63d0\u4ea4\u6216\u8005\u6682\u5b58\u8d77\u6765\u4e86\u3002</li> </ol>"},{"location":"tool/markdown/markdown.html","title":"Markdown","text":""},{"location":"tool/markdown/markdown.html#_1","title":"\u4f7f\u7528\u7ecf\u9a8c","text":""},{"location":"tool/markdown/markdown.html#_2","title":"\u56fe\u7247\u5c45\u4e2d","text":"<p>\u4f7f\u7528\u4e0b\u9762\u7684\u6765\u5339\u914d\u56fe\u7247\u7684\u8bed\u6cd5\uff1a <pre><code>!\\[(.*?)\\]\\((.*?\\/([^\\/]*?))\\)\n</code></pre></p> <p>\u66ff\u6362\u4e3a\uff1a <pre><code>&lt;center&gt;\\n\\n![]($2){width=90%}\\n&lt;figcaption&gt;$3&lt;/figcaption&gt;\\n\\n&lt;/center&gt;\n</code></pre> \u4ed6\u4eec\u5c31\u80fd\u591f\u5b9e\u73b0\uff0c\u628a\u6587\u4ef6\u540d\u63d0\u53d6\u51fa\u6765\u4f5c\u4e3a\u56fe\u7247\u7684\u6807\u9898\u3002</p> <p>\u5982\u679c\u4e0d\u60f3\u8981\u6807\u9898\uff0c\u53ef\u4ee5\u4f7f\u7528\u4e0b\u9762\u7684\u66ff\u6362\uff1a <pre><code>&lt;center&gt;\\n\\n![]($2){width=90%}\\n\\n&lt;/center&gt;\n</code></pre></p>"}]}