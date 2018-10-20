var app = new Vue({
	el : '#app',
	//el 提供一个在页面上已存在的DOM元素作为Vue实例的挂载目标
	data:{
	//data Vue实例的数据对象
		message:'Hello Vue!'
	}
}); 

app.message = 'I have changed the data!'
//修改已声明DOM的值
