import Field from './src/field.vue'
          
Field.name = 'p-field'

          Field.install = (app) => {
            // 注册组件
            app.component(Field.name, Field)
          }

          export default Field
        