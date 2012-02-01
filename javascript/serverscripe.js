/**
 * @author timger <yishenggudou@gmail.com>
 * @timger http://weibo.com/zhanghaibo
 * @yishenggudou http://twitter.com/yishenggudou
 * Copyright (c) 2008-2011 timger - released under MIT License {{{
 */
(function(){
        setTimeout(function(){ 
                $('#ft-ads-slot').hide();
                        },1000);
        window.cmusic = {};
        setInterval(function(){
            var a=window.FM.getCurrentSongInfo();
            if (window.cmusic.id == a.id){}
            else{
                window.cmusic.artistName = a.artistName;
                window.cmusic.channelName = a.channelName;
                window.cmusic.id = a.id;
                window.cmusic.kind = a.kind;
                window.cmusic.songName = a.songName;
                window.cmusic.type = a.type;
                window.cmusic.url = a.url;
                window.cmusic.coverUrl = a.coverUrl;
            }
        //console.log(['xx',window.cmusic]);
        },1000);
        console.log(['插件在运行']);
})()
