// 将事件绑定再已存在的父元素上，当点击子元素时，通过事件冒泡，事件会冒泡到父元素上。 通过获取e.target获取事件源 来执行操作
oUl1.onclick = function(event){
    event = event || window.event;
    target = event.target || event.srcElement;
    if(target.tagName == 'LI'){
        console.log(target.innerHTML);
    }
};