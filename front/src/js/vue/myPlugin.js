//插件
let mixin={
    methods:{
        //tabs事件
        tabsHandler:function(index){
            this.tabsTurn(index,this.items);
        },
        //tabs切换
        tabsTurn:function(index,Arr){
            for(let i in Arr){
                if(i==index){
                    Arr[i].isActive=true;
                }else{
                    Arr[i].isActive=false;
                }
            }
        },
        //日期格式化
        dataFormat:function(){
            // 对Date的扩展，将 Date 转化为指定格式的String
            // (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
            // (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
            Date.prototype.Format = function(fmt)
            { //author: meizz
                let o = {
                    "M+" : this.getMonth()+1,                 //月份
                    "d+" : this.getDate(),                    //日
                    "h+" : this.getHours(),                   //小时
                    "m+" : this.getMinutes(),                 //分
                    "s+" : this.getSeconds(),                 //秒
                    "q+" : Math.floor((this.getMonth()+3)/3), //季度
                    "S"  : this.getMilliseconds()             //毫秒
                };
                if(/(y+)/.test(fmt))
                    fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
                for(let k in o)
                    if(new RegExp("("+ k +")").test(fmt))
                        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
                return fmt;
            }
        }
    },
    directives:{
        scrollBottom: function () {
            $(".msg_detail").animate({
                scrollTop:$(".msg_detail ul").height()
            },100);
        }
    }
};
export default mixin;