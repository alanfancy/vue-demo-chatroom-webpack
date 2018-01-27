//弹窗内容
let dlgHtmlArr=[];
dlgHtmlArr[0]="<div class='dlg_msgset'><p class='msgset_tit'>允许学生：</p>"+
    "<p class='msgset_p'><input type='checkbox' name='allowFace' id='sendFace' checked /><label for='sendFace'>发送表情</label></p>"+
    "<p class='msgset_p'><input type='checkbox' name='allowAsk' id='ask' checked /><label for='ask'>向老师提问</label></p>"+
    "<p class='msgset_p'><input type='checkbox' name='allowMsg' id='discuss' checked /><label for='discuss'>参与讨论发表文字</label></p>"+
    "</div>";
dlgHtmlArr[1]="<div class='dlg_textarea'><textarea placeholder='发由公告后，信息将置顶显示在直播间讨论框顶部，请保持50字以内'></textarea></div>";
dlgHtmlArr[2]="<div class='dlg_msgset'><p class='msgset_tit'>表扬：<span class='red'>勾选一项则总分加一分</sapn></p>"+
    "<p class='msgset_p'><input type='checkbox' name='msgset' id='sendFace' checked /><label for='sendFace'>课堂积极回答问题</label></p>"+
    "<p class='msgset_p'><input type='checkbox' name='msgset' id='ask' checked /><label for='ask'>遵守课堂纪律</label></p>"+
    "<p class='msgset_p'><input type='checkbox' name='msgset' id='discuss' checked /><label for='discuss'>按时进入课堂，不早退</label></p>"+
    "<p class='msgset_p'><input type='checkbox' name='msgset' id='discuss' checked /><label for='discuss'>积极提交作业</label></p>"+
    "<p class='msgset_tit mt10'>批评：<span class='red'>勾选一项则总分减一分</sapn></p>"+
    "<p class='msgset_p'><input type='checkbox' name='msgset' id='sendFace' /><label for='sendFace'>扰乱课堂纪律</label></p>"+
    "<p class='msgset_p'><input type='checkbox' name='msgset' id='ask' /><label for='ask'>不积极思考，不回答问题</label></p>"+
    "<p class='msgset_p'><input type='checkbox' name='msgset' id='discuss' /><label for='discuss'>没交作业</label></p>"+
    "<p class='msgset_p'><input type='checkbox' name='msgset' id='discuss' /><label for='discuss'>旷课，早退</label></p>"+
    "<p class='msgset_tit mt10'>自定义操作：</p>"+
    "<div class='msgset_p'><select class='customSelec'><option>选择类型</option><option>表扬</option><option>批评</option></select>" +
    "<span class='ml20'>学分操作：</span>" +
     "<div class='spinner'><span class='s1'>-</span><input id='na' type='text' value='0' /><span class='s2'>+</span></div>"+
    "<p class='msgset_tit customNotice mt10'><input class='customInp' type='text' max-length='20' placeholder='请填写操作备注，20字以内。' /></p>"+
    "</div></div>";

export default dlgHtmlArr;