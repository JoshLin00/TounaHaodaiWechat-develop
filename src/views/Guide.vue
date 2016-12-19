<!-- 指南 -->
<template>
  <div class="container-guide">
    <div class="guide-header">
      <mt-button class="btn-call">
        <a href="tel:400-0890-517">
          <img src="../assets/images/components/guide/phone@2x.png">
        </a>
      </mt-button>
      <div class="chart">
        <router-link to="/">
          <img src="../assets/images/components/guide/chart@2x.png">
        </router-link>
        <p>Hi，有问题快戳我哟~</p>
      </div>
    </div>

    <mt-navbar v-model="selected">
      <mt-tab-item id="xinshouyindao" class="tabbar-item">
        <p class="xsyd">新手引导</p>
      </mt-tab-item>
      <mt-tab-item id="daikuanliucheng" class="tabbar-item">
        <p class="dklc">贷款流程</p>
      </mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container class="tabbar-content" v-model="selected">
      <mt-tab-container-item id="xinshouyindao">
        <collapsible
        :accordion="true"
        item-class="tab-item"
        header-class="tab-item-header"
        body-class="tab-item-body"
      >
        <collapsible-item>
          <p slot="header">Q:如何通过投哪好贷借款？</p>
          <p>A:注册投哪好贷，登录成功后于首页输入借款金额，选择借款期数提单订单，再输入身份信息以及所在城市即可完成借款申请。</p>
        </collapsible-item>
        <collapsible-item>
          <p slot="header">Q:借款额度范围？</p>
          <p>A:目前支持2万-20万的借款申请。</p>
        </collapsible-item>
        <collapsible-item>
          <p slot="header">Q:借款期限有哪些？</p>
          <p>A:投哪好贷提供灵活的借款期限，支持1-24个月不等，具体借款期限以系统审批为准。</p>
        </collapsible-item>
        <collapsible-item>
          <p slot="header">Q:姓名与身份证</p>
          <p>A:需输入真实的姓名与身份证号码方可成功提单噢～</p>
        </collapsible-item>
        <collapsible-item>
          <p slot="header">Q:所在城市怎么选择？</p>
          <p>A:若允许GPS定位可自动获取所在地区定位，也可手动选择。目前投哪好贷全国范围内线下网点数量达到102家，可满足大多数地区的借款需求。</p>
        </collapsible-item>
        <collapsible-item>
          <p slot="header">Q:邀请码是什么？怎么获取？</p>
          <p>A:邀请码由客户经理提供，填写邀请码后相应的客户经理将协助您更快完成借款。若无邀请码可不填写。</p>
        </collapsible-item>
        <collapsible-item>
          <p slot="header">Q:为什么无法成功提交贷款申请？</p>
          <p>A:1、存在一笔已提交但未结清的贷款申请，不能再次提交；2、需确保身份信息、邀请码（选填）正确无误方可提交；</p>
        </collapsible-item>
        <collapsible-item>
          <p slot="header">Q:提交借款申请之后如何体验更快速借款体验？</p>
          <p>A:成功提交申请后，可先提前在”我”-“个人资料”中进行完善个人信息。</p>
        </collapsible-item>
        <collapsible-item>
          <p slot="header">Q:如何查看贷款进度？</p>
          <p>A:点击“我”-“我的借款”中可查看借款进度与还款情况，投哪好贷服务号将实时推送您的借款进度信息。</p>
        </collapsible-item>
        <collapsible-item>
          <p slot="header">Q:如何查看还款计划？</p>
          <p>A:于“我”-”我的借款”-“借款详情”中点击还款计划，已还清状态则可查看还款明细。</p>
        </collapsible-item>
        <collapsible-item>
          <p slot="header">Q:申请金额、期限与核批金额、期限的区别？</p>
          <p>A:申请金额为您提交贷款申请时选择的金额与期限，核批金额与期限则为最终审批评估后给出的额度与期限。</p>
        </collapsible-item>

      </collapsible>
      </mt-tab-container-item>

      <mt-tab-container-item id="daikuanliucheng">
        <collapsible
        :accordion="true"
        item-class="tab-item"
        header-class="tab-item-header"
        body-class="tab-item-body"
      >
        <collapsible-item>
          <p slot="header">Q:贷款申请的条件是什么？</p>
          <p>A:1、年龄为18-60岁；2、拥有车龄不超过8年的私家小汽车；3、有稳定收入来源。</p>
        </collapsible-item>
        <collapsible-item>
          <p slot="header">Q:按揭车可以贷款吗？</p>
          <p>A:按揭车、全款车都可以贷。</p>
        </collapsible-item>
        <collapsible-item>
          <p slot="header">Q:借款流程是怎样的？</p>
          <p>A:在投哪好贷服务号或APP申请后 > 客户经理与您联系 > 于服务号或APP端提前完善信息>携带必要资料到店评估车辆>审核通过，放款。只需一次上门，当天轻松拿到钱！</p>
        </collapsible-item>
        <collapsible-item>
          <p slot="header">Q:申请贷款需要哪些材料？</p>
          <p>A:不押车贷款需提供：身份证、居住证(非本地户口)、驾驶证和行驶证、车辆登记证、交通强制保险和商业保险、购车发票或车辆按揭完税证明(按揭车)、按揭合同或按揭还款证明、银行卡。</p>
        </collapsible-item>
        <collapsible-item>
          <p slot="header">Q:借款审核一般需要多长时间？</p>
          <p>A: 注册投哪好贷，登录成功后于首页输入借款金额，选择借款期数提单订单，再输入身份信息以及所在城市即可完成借款申请。</p>
        </collapsible-item>
        <collapsible-item>
          <p slot="header">Q:支持的还款方式有哪些？</p>
          <p>A:投哪好贷目前提供两种还款方式：等本等息和先息后本。您可以根据自身情况选择合适的还款方式。等本等息是指还款期限内，每月以同等的额度平均偿还贷款本金和利息。先息后本是指每月偿还当月利息，到期后一次性偿还本金。</p>
        </collapsible-item>
        <collapsible-item>
          <p slot="header">Q:为什么我的贷款申请没有通过？</p>
          <p>A:1、您提交的材料不齐全或者不符合要求；2、您的综合评分不足，暂时无法申请此笔贷款；3、您所在的城市暂无营业网点，暂时无法提供贷款。</p>
        </collapsible-item>
        <collapsible-item>
          <p slot="header">Q:如何还款？</p>
          <p>A:仅需保证预留的还款银行卡中资金在还款日前足以支付当期还款，系统将为您自动还款。</p>
        </collapsible-item>
        <collapsible-item>
          <p slot="header">Q:如果忘记还款了怎么办？</p>
          <p>A:如果还款出现逾期会直接影响您的信用记录，同时会产生相应的违约金。因此，为避免造成不必要的损失，每月还款日前，投哪好贷将会有短信或电话提醒您，请您严格按照还款日进行还款。</p>
        </collapsible-item>
      </collapsible>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>

</template>

<script>
  import Collapsible from 'vue-collapsible/collapsible';
  import CollapsibleItem from 'vue-collapsible/collapsible-item';
  export default {
    name: 'guide',
    data() {
      return {
        selected: 'xinshouyindao',
      }
    },
    created: function() {
      this.$store.commit('COMMON_CONFIG', { // 组件创建的时候，去修改connon.js中配置项的状态
        showTabbar: true,   // 显示tabbar
      });
    },
    components: {
      Collapsible,
      CollapsibleItem,
    }
  }
</script>

<style lang='scss'>
.container-guide {
  background-color: #fafafa;
  .guide-header {
    position: relative;
    width: 100%;
    height: 2rem;
    background: url(../assets/images/components/guide/bg_banner@2x.png) no-repeat 0 0;
    background-size: cover;
    .btn-call {
      position: absolute;
      top: .22rem;
      right: 8px;
      background-color: transparent;
      box-shadow: none;
      img {
        width: .22rem;
      }
    }
    .chart {
      padding-top: .34rem;
      text-align: center;
      img {
        width: 1.21rem;
      }
      p {
        padding-top: 6px;
        font-size: 14px;
        color: #333;
      }
    }
  }
  .tabbar-item p {
    display: inline-block;
    padding-left: 30px;
    font-size: 15px;
    color: #757575;
  }
  .mint-navbar .tabbar-item.is-selected {
    border-bottom: none;
  }
  .tabbar-item.is-selected p {
    color: #26a2ff;
  }
  .tabbar-item p.xsyd {
    background: url(../assets/images/components/guide/guide_normal@2x.png) no-repeat;
    background-size: 16px;
  }
  .tabbar-item.is-selected p.xsyd {
    background: url(../assets/images/components/guide/guide_selected@2x.png) no-repeat;
    background-size: 16px;
  }
  .tabbar-item p.dklc {
    background: url(../assets/images/components/guide/process_normal@2x.png) no-repeat;
    background-size: 16px;
  }
  .tabbar-item.is-selected p.dklc {
    background: url(../assets/images/components/guide/process_selected@2x.png) no-repeat;
    background-size: 16px;
  }
  .tabbar-content {
    margin-top: 10px;
    background-color: #fff;
  }
  .tab-item {
    margin-left: 20px;
  }
  .tab-item-header {
    display: block;
    padding-right: 0.2rem;
    border-bottom: 1px solid #eee;
    font-size: 0.15rem;
    color: #555;
    line-height: 0.5rem;
    height: 0.5rem;
    p {
      background: url(../assets/images/common/rightarrow@2x.png) no-repeat right center;
      background-size: 0.08rem;
    }
  }
  .tab-item.active .tab-item-header p {
    background: url(../assets/images/common/downarrow@2x.png) no-repeat right center;
    background-size: 15px;
  }
  .tab-item-body {
    padding: 5px 20px 5px 0;
    font-size: 14px;
    color: #757575;
    line-height: 22px;
  }
}
</style>
