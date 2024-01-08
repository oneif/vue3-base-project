export const throttle = (app: any) => {
  // 使用=> v-throttle=''
  app.directive('throttle', {
    //代表使用这个全局自定义指令的DOM组件挂载完毕的时候会执行一次
    // el:使用自定义指令的DOM节点 options:配置项可以拿到使用自定义指令时传入的值
    mounted(el: any, options: any) {
      let throttleTime = 3000
      if (options.value) {
        throttleTime = options.value
      }
      let flag: any
      el.addEventListener(
        'click',
        (event: any) => {
          if (!flag) {
            // 第一次执行 !null==true
            flag = setTimeout(() => {
              flag = null
            }, throttleTime)
          } else {
            event && event.stopImmediatePropagation()
          }
        },
        true
      )
    }
  })
}
