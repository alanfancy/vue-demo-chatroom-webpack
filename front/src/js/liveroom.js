require('../less/liveroom.less');
// require('../less/dialog.less');
import Vue from 'vue';
import leftComponent from './vue/leftComponent.vue';//左侧组件
import centerComponent from './vue/centerComponent.vue';//中间组件
import rightComponent from './vue/rightComponent.vue';//右侧组件

import myInfo from './data/myInfo';//本机用户信息
import infoData from './data/infoData';//接收到的消息

const leftSide=new Vue({
    el:'#leftSideBar',
    components:{
        leftComponent
    }
});
const centerMain=new Vue({
    el:'#centerMain',
    components:{
        centerComponent
    }
});
const rightSide=new Vue({
    el:'#rightSideBar',
    data:{
        myInfo:myInfo,
        msgData:infoData,
        noticeMsgArr:[
            '热烈庆祝七天课堂在线直播新版面正式上线！',
            '关于上课时间调整注意事项'
        ]
    },
    components:{
        rightComponent
    }
});
if(DEVELOPMENT){
    if(module.hot){//启用热重载
        module.hot.accept();
    }
}

