# Vue Lifecycle

Vue Lifecycle

# lifecycle

- new Vue()
- beforeCreate---------------------实例初始化之后：this指向创建的实例-不能访问到data、compoted、watch、methods
- created--------------------------实例创建完成
- beforeMount----------------------在挂载开始之前被调用
- mounted--------------------------实例挂载到DOM上
- beforeUpdate---------------------响应式数据更新时调用
- update---------------------------虚拟DOM重新渲染和打补丁之后调用
- beforeDestory--------------------实例销毁之前调用
- destoryed------------------------实例销毁后调用