import { defineComponent } from 'vue'
const NAME = 'p-foo'

export default defineComponent({
  name: NAME,
  props: {
    msg: {
      type: String,
      default: ''
    }
  },
  setup(props, context) {
    const onBtnClick = () => {
      console.log('点击按钮测试', props.msg)
    }
    return () => (
      <div class={NAME}>
        <h1>p-ui Foo</h1>
        <p class={NAME + '__description'}>msg is: {props.msg}</p>
        <el-button type="primary" onClick={onBtnClick}>
          点击我
        </el-button>
      </div>
    )
  }
})
