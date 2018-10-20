var app=new Vue({
	el:'#app',
	data:{
		message:'Hello Vue.js!'
	},
	methods:{
		reverseMessage:function(){
			return this.message=this.message.split('').reverse().join('')
			/*split()用于把一个字符串分割成字符串数组
			 *reverse()用于颠倒数组中元素的顺序
			 *join()用于把数组中的所有元素转换一个字符串
			 */
		}
	}
})