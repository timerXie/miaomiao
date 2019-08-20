<template>
  <div class="cinema_body">
      <ul>
          <li>
              <div>
                  <span>大地影院（新世纪店）</span>
                  <span class="q"><span class="prise">22.9</span>元起</span>
              </div>
              <div class="address">
                  <span>深圳经济技术开发区三层</span>
                  <span>1663.4km</span>
              </div>
              <div class="card">
                  <div>小吃</div>
                  <div>折扣卡</div>
              </div>
          </li>
          <li>
              <div>
                  <span>大地影院（新世纪店）</span>
                  <span class="q"><span class="prise">22.9</span>元起</span>
              </div>
              <div class="address">
                  <span>深圳经济技术开发区三层</span>
                  <span>1663.4km</span>
              </div>
              <div class="card">
                  <div>小吃</div>
                  <div>折扣卡</div>
              </div>
          </li>
          <li>
              <div>
                  <span>大地影院（新世纪店）</span>
                  <span class="q"><span class="prise">22.9</span>元起</span>
              </div>
              <div class="address">
                  <span>深圳经济技术开发区三层</span>
                  <span>1663.4km</span>
              </div>
              <div class="card">
                  <div>小吃</div>
                  <div>折扣卡</div>
              </div>
          </li>
      </ul>
  </div>
</template>
<script>
export default {
  name: "Clist"
};
</script>
<style lang="scss" scoped>
.cinema_body {
  flex: 1;
  overflow: auto;
  ul {
    padding: 20px;
    li {
      border-bottom: 1px solid #e6e6e6;
      margin-bottom: 20px;
    }
  }
  div {
    margin-bottom: 10px;
  }
  .q {
    font-size: 11px;
    color: #f03d37;
  }
  .prise {
    font-size: 18px;
  }
  .address {
    font-size: 13px;
    color: #666;
    span:nth-of-type(2) {
      float: right;
    }
  }
  .card{
   display: flex;
   div{
       padding: 0 3px;
       height: 15px;
       line-height: 15px;
       border-radius: 2px;
       color:#f90;
       border: 1px solid #f90;
       &.or{
           color: #f90;
           border: 1px solid #f90;
           
       }
       &.bl{
           color:#589daf;
           border: 1px solid #589daf;
       }
   }
  }
}
</style>