import Tree from './src/tree.vue'
          
Tree.name = 'p-tree'

          Tree.install = (app) => {
            // 注册组件
            app.component(Tree.name, Tree)
          }

          export default Tree
        