$(function () {
    $(document).on("click", "#demo1", function () {
        alertify.alert("消息")
    });
    $(document).on("click", "#demo2", function () {
        alertify.confirm("消息", function () {
        }, function () {
        })
    });
    $(document).on("click", "#demo3", function () {
        alertify.defaultValue("默认值").prompt("这是一个Prompt对话框", function (val, ev) {
            ev.preventDefault();
            alertify.success("您单击了OK，类型为：" + val)
        }, function (ev) {
            ev.preventDefault();
            alertify.error("您单击了Cancel")
        })
    });
    $(document).on("click", "#demo4", function () {
        alertify.okBtn("同意").cancelBtn("拒绝").confirm("自定义按钮标签的Confirm对话框", function (ev) {
            ev.preventDefault();
            alertify.success("您单击了OK")
        }, function (ev) {
            ev.preventDefault();
            alertify.error("您单击了Cancel")
        }).reset()
    });
    $(document).on("click", "#demo5", function () {
        alertify.confirm("确认？", function (ev) {
            ev.preventDefault();
            alertify.alert("AJAX成功以后OK")
        }, function (ev) {
            ev.preventDefault();
            alertify.alert("AJAX成功以后Cancel")
        })
    });
    $(document).on("click", "#demo6", function () {
        if ("function" !== typeof Promise) {
            alertify.alert("您的浏览器不支持promises");
            return
        }
        alertify.confirm("确认？").then(function (resolvedValue) {
            resolvedValue.event.preventDefault();
            alertify.alert("您单击了" + resolvedValue.buttonClicked + "按钮！")
        })
    });
    $(document).on("click", "#demo7", function () {
        alertify.delay(1000);
        alertify.log("默认在左下角的位置显示");
        setTimeout(function () {
            alertify.logPosition("左上角");
            alertify.log("左上角")
        }, 1500);
        setTimeout(function () {
            alertify.logPosition("右上角");
            alertify.log("右上角")
        }, 3000);
        setTimeout(function () {
            alertify.logPosition("右下角");
            alertify.log("右下角")
        }, 4500);
        setTimeout(function () {
            alertify.reset();
            alertify.log("默认位置")
        }, 6000)
    });
    $(document).on("click", "#demo8", function () {
        alertify.log("标准日志消息")
    });
    $(document).on("click", "#demo9", function () {
        var msg = "<img src='https://placehold.it/256x128'>" + "<h3>这里是HTML内容</h3>" + "<p>看起来不错，不是吗？</p>";
        alertify.log(msg)
    });
    $(document).on("click", "#demo10", function () {
        alertify.log("带回调函数标准日志消息", function (ev) {
            ev.preventDefault();
            alertify.log("您单击了通知")
        })
    });
    $(document).on("click", "#demo11", function () {
        alertify.success("成功日志消息")
    });
    $(document).on("click", "#demo12", function () {
        alertify.success("带回调函数的成功日志消息", function (ev) {
            ev.preventDefault();
            alertify.success("您单击了通知")
        })
    });
    $(document).on("click", "#demo13", function () {
        alertify.error("错误日志消息")
    });
    $(document).on("click", "#demo14", function () {
        alertify.error("带回调函数的错误日志消息", function (ev) {
            ev.preventDefault();
            alertify.error("您单击了通知")
        })
    });
    $(document).on("click", "#demo15", function () {
        alertify.closeLogOnClick(true).log("单击关闭").reset()
    });
    $(document).on("click", "#demo16", function () {
        alertify.closeLogOnClick(true).log("单击关闭").closeLogOnClick(false).log("不能通过单击关闭").reset()
    });
    $(document).on("click", "#demo17", function () {
        alertify.delay(10000).log("10秒后隐藏").reset()
    });
    $(document).on("click", "#demo18", function () {
        alertify.closeLogOnClick(true).delay(0).log("一直显示直到被单击").reset()
    });
    $(document).on("click", "#demo19", function () {
        alertify.maxLogItems(1).log("这是第一个消息");
        setTimeout(function () {
            alertify.log("第二条消息显示会关闭第一条消息")
        }, 1000)
    });
    $(document).on("click", "#demo20", function () {
        alertify.setLogTemplate(function (input) {
            return "日志消息：" + input
        }).log("这是一条消息")
    });
    $(document).on("click", "#demo21", function () {
        alertify.okBtn("前往").reset().alert("自定义值已被重置！")
    })
});