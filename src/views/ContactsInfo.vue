<template>
	<div class="container-contact">
		<div class="contact-marryStatus">
			<label >{{ marryTxt }}</label>
			<button 
		      	class="rightBtn"
		      	@click="btnClick"
		    >
		    </button>
		</div>
		<div class="contact-relation1 contact-relation">
			<popup-input
   				type="text"
   				class="input-message"
   				:value="name1"
   				@input="name1Input"
				label="直系亲属"
				:maxlength="25"
				placeholder="请输入姓名"
			/>
			<div class="hairline"></div>
			<popup-input
   				type="text"
   				class="input-message"
   				:value="phoneNum1"
   				@input="phoneNum1Input"
				label="手机"
				:maxlength="11"
				placeholder="请输入手机号码"
			/>
			<div class="hairline"></div>
			<popup-input
   				type="text"
   				class="input-message"
   				:value="relation1"
   				@input="relation1Input"
   				@btnClick="relationsChoose1"
				label="关系"
				disabled
				placeholder="请选择"
				:rightPic="RightPic"
			/>
			<div class="hairline"></div>
			<div class="input-message input-radio">
				<label class="know-loan">知晓贷款</label>
				<input type="radio" name="knowLoan1" value="1" id="knowLoanY" class="knowLoanY">
				<label class="knowLoan" for="knowLoanY">是</label>
				<input type="radio" name="knowLoan1" value="2" id="knowLoanN" class="knowLoanN">
				<label class="knowLoan" for="knowLoanN">否</label>
			</div>			
		</div>
		<div class="contact-relation2 contact-relation">
			<popup-input
   				type="text"
   				class="input-message"
   				:value="name2"
   				@input="name2Input"
				label="直系亲属"
				:maxlength="25"
				placeholder="请输入姓名"
			/>
			<div class="hairline"></div>
			<popup-input
   				type="text"
   				class="input-message"
   				:value="phoneNum2"
   				@input="phoneNum2Input"
				label="手机"
				:maxlength="11"
				placeholder="请输入手机号码"
			/>
			<div class="hairline"></div>
			<popup-input
   				type="text"
   				class="input-message"
   				:value="relation2"
   				@input="relation2Input"
   				@btnClick="relationsChoose2"
				label="关系"
				disabled
				placeholder="请选择"
				:rightPic="RightPic"
			/>
			<div class="hairline"></div>
			<div class="input-message input-radio">
				<label class="know-loan">知晓贷款</label>
				<input type="radio" name="knowLoan2" value="1" id="knowLoanY" class="knowLoanY">
				<label class="knowLoan" for="knowLoanY">是</label>
				<input type="radio" name="knowLoan2" value="2" id="knowLoanN" class="knowLoanN">
				<label class="knowLoan" for="knowLoanN">否</label>
			</div>			
		</div>
		<div class="contact-relation3 contact-relation">
			<popup-input
   				type="text"
   				class="input-message"
   				:value="name3"
   				@input="name3Input"
				label="其他"
				:maxlength="25"
				placeholder="请输入姓名"
			/>
			<div class="hairline"></div>
			<popup-input
   				type="text"
   				class="input-message"
   				:value="phoneNum3"
   				@input="phoneNum3Input"
				label="手机"
				:maxlength="11"
				placeholder="请输入手机号码"
			/>
			<div class="hairline"></div>
			<popup-input
   				type="text"
   				class="input-message"
   				:value="relation3"
   				@input="relation3Input"
   				@btnClick="relationsChoose3"
				label="关系"
				disabled
				placeholder="请选择"
				:rightPic="RightPic"
			/>
			<div class="hairline"></div>
			<div class="input-message input-radio">
				<label class="know-loan">知晓贷款</label>
				<input type="radio" name="knowLoan3" value="1" id="knowLoanY" class="knowLoanY">
				<label class="knowLoan" for="knowLoanY">是</label>
				<input type="radio" name="knowLoan3" value="2" id="knowLoanN" class="knowLoanN">
				<label class="knowLoan" for="knowLoanN">否</label>
			</div>			
		</div>
		<mt-button @click.native="submit" :disabled="btnDisabled" type="primary" class="btn-save">保存</mt-button>
		<mt-popup position="bottom" v-model="btnArrowDisabled" closeOnClickModal popup-transition="popup-fade">
			<div class="check"><span class="checked" @click="checked">确定</span></div>
				<ul class="statusList">
					<li v-for="item in items" @click="chooseMarrySt(item)">
						{{ item }}
					</li>
				</ul>
		</mt-popup>
		<mt-popup position="bottom" v-model="btnRelation1Disabled" closeOnClickModal popup-transition="popup-fade">
			<div class="checkRelation"><span class="checked" @click="checkedRelation1">确定</span></div>
				<ul class="relation1List">
					<li v-for="relation1 in relations1" @click="chooseRelation1(relation1)">
						{{ relation1 }}
					</li>
				</ul>
		</mt-popup>
		<mt-popup position="bottom" v-model="btnRelation2Disabled" closeOnClickModal popup-transition="popup-fade">
			<div class="checkRelation"><span class="checked" @click="checkedRelation2">确定</span></div>
				<ul class="relation2List">
					<li v-for="relation2 in relations2" @click="chooseRelation2(relation2)">
						{{ relation2 }}
					</li>
				</ul>
		</mt-popup>
		<mt-popup position="bottom" v-model="btnRelation3Disabled" closeOnClickModal popup-transition="popup-fade">
			<div class="checkRelation"><span class="checked" @click="checkedRelation3">确定</span></div>
				<ul class="relation3List">
					<li v-for="relation3 in relations3" @click="chooseRelation3(relation3)">
						{{ relation3 }}
					</li>
				</ul>
		</mt-popup>
	</div>
</template>

<script>
	import PopupInput from '../components/input/PopupInput';
	import RightPic  from '../assets/images/components/borrow/arrow_right@2x.png';
	import { Toast } from 'mint-ui';
	import { Popup } from 'mint-ui';
	 		
	export default {
		name: 'ContactsInfo',
		props: {
			    
		},
		data() {
			return {
				name1: '',       // 联系人1姓名
				phoneNum1: '',   // 联系人1手机号
				relation1: '',   // 联系人1关系
				name2: '',       // 联系人2姓名
				phoneNum2: '',   // 联系人2手机号
				relation2: '',   // 联系人2关系
				name3: '',       // 联系人3姓名
				phoneNum3: '',   // 联系人3手机号
				relation3: '',   // 联系人3关系
				marryTxt: '请先选择您的婚姻状况',
				btnArrowDisabled: false,  //up婚姻状况选择控制
				btnRelation1Disabled: false,  //up联系人1关系选择控制
				btnRelation2Disabled: false,  //up联系人2关系选择控制
				btnRelation3Disabled: false,  //up联系人3关系选择控制
				RightPic: RightPic,	 //右边图标
				btnDisabled: true,			
				items: [
					'已婚七年以上',
					'已婚',
					'未婚',
					'离婚或丧偶',
				],
				relations1: [
					'父母',
					'兄弟姐妹',
					'子女',
				],
				relations2: [
					'父母',
					'兄弟姐妹',
					'子女',
				],
				relations3: [
					'亲戚',
					'朋友',
					'同事',
					'其他',
				],
			}		

		},
		computed: {
			btnDisabled() {
		        return this.phoneNum1.length == 11 ? false : true;
		     },
		},
		created: function() {
	        this.$store.commit('COMMON_CONFIG', { // 组件创建的时候，去修改connon.js中配置项的状态
	            showNavbar: false,   // 显示navbar
	            showBackBtn: false,  // 显示返回按钮
	            title: ' ',          // 页面标题
	            showTabbar: false,  // 不显示tabbar
	        });
	    },
	    methods: {
	    	name1Input(val) {   
	    		this.name1 = val;
	    	},
	    	phoneNum1Input(val) {
	    		this.phoneNum1 = val;
	    	},
	    	relation1Input(val) {
	    		this.relation1 = val;
	    	},
	    	name2Input(val) {
	    		this.name2 = val;
	    	},
	    	phoneNum2Input(val) {
	    		this.phoneNum2 = val;
	    	},
	    	relation2Input(val) {
	    		this.relation2 = val;
	    	},
	    	name3Input(val) {
	    		this.name3 = val;
	    	},
	    	phoneNum3Input(val) {
	    		this.phoneNum3 = val;
	    	},
	    	relation3Input(val) {
	    		this.relation3 = val;
	    	},
	    	btnClick() {             
               	this.btnArrowDisabled = true;               
	    	},
	    	checked() {
	    		this.btnArrowDisabled = false;
	    	},
	    	relationsChoose1() {
	    		this.btnRelation1Disabled = true;
	    	},
	    	checkedRelation1() {
	    		this.btnRelation1Disabled = false;
	    	},
	    	relationsChoose2() {
	    		this.btnRelation2Disabled = true;
	    	},
	    	checkedRelation2() {
	    		this.btnRelation2Disabled = false;
	    	},
	    	relationsChoose3() {
	    		this.btnRelation3Disabled = true;
	    	},
	    	checkedRelation3() {
	    		this.btnRelation3Disabled = false;
	    	},
	    	chooseMarrySt(val) {
	    		console.log(val);
	    		this.marryTxt = val;
	    	},
	    	chooseRelation1(val) {
	    		console.log(val);
	    		this.relation1 = val;
	    	},
	    	chooseRelation2(val) {
	    		console.log(val);
	    		this.relation2 = val;
	    	},
	    	chooseRelation3(val) {
	    		console.log(val);
	    		this.relation3 = val;
	    	},
	        submit() {
	        	let regPhone = /^1(3|4|5|7|8)\d{9}$/; // 验证手机号格式是否正确
	        	let regName = /[^\u4E00-\u9FA5]/g;  //验证姓名是否是中文
		        if(this.phoneNum1.match(regPhone) == null ) {
		          Toast({
		            message: '请输入正确的手机号',
		            duration: 4000,
		          });
		          return false;
		        } 
		    }
	    },
		components: {
			PopupInput,
		}
	}
</script>

<style lang="scss" scoped>
	.container-contact {
		display: flex;
		flex-direction: column;
		background-size: cover;
		background-color: #f4f4f4;	
		.contact-marryStatus {
			position:relative;
			line-height: 0.75rem;
			padding: 0 0.2rem;
			background-color: #fff;
			height: 0.75rem;
			margin-top: 0.1rem;
			font-size: 0.15rem;
			color: #212121;
			.rightBtn {
				position: absolute;
				top: 40%;
				right: 0.2rem;
				border: none;
				width: 0.075rem;
				height: 0.14rem;
				background: url(../assets/images/components/borrow/arrow_right@2x.png) no-repeat;
				background-size: 0.075rem 0.14rem;
			}						
		}
		.contact-relation {
			background-color: #fff;
			height: 2rem;
			padding: 0 0.2rem;
			margin-top: 0.1rem;
			font-size: 0.15rem;
			color: #212121;
			.input-message {
				height: 0.5rem;
			}
			.input-radio {
				// background-size: cover;
				line-height: 0.5rem;
				text-align: justify;
				.know-loan
				{
					margin-right: 40%;
				}				
				input[type=radio]
				{
					width: .15rem;
					height: .15rem;
					vertical-align: middle;
					background: #bdbdbd;
					border-radius: 50%;
					margin: -0.04rem 0.05rem 0 0.23rem;
				}
				input[type=radio]:checked
				{
					background: #368eff;
					color: #368eff;
				}
				input[type=radio]:checked+label
				{
					color: #368eff;
				}
				input[type=radio]:checked.loanKnow
				{
					color: #368eff;
				}
			}
			
		}
		.btn-save {
			margin-top: 0.5rem;
			margin-bottom: 0.5rem;
		}
		.mint-popup {
			width: 100%;
			height: 2.5rem;
			.check,.checkRelation {
				display: flex;
				flex-direction: column;
				background-size: cover;
				line-height: 0.5rem;
				text-align: right;
				margin-right: 0.2rem;
				font-size: 0.14rem;
				// color: #757575;
			}
			.statusList,.relation1List,.relation2List,.relation3List {
				li {
					display: flex;
					flex-direction: column;
					background-size: cover;
					text-align:center;
					line-height: 0.5rem;
					color: #212121;
					font-size: 0.16rem;
					border-top: 1px solid #bdbdbd;
				}
				li:active {
					background-color: #368eff;
				}
			}
		}
	}
</style>