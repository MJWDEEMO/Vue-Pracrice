var app=new Vue({
	el:"#app",
	data:{
		todos:[
		{text:'学习javascript'},
		{text:'学习Vue'},
		{text:'整个牛项目'}
		]
	}
})

app.todos.push({text:'新项目'})
//添加新项目到todos中，可在控制台输入