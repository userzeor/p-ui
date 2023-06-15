<template>
  <div class="com-container">
    <el-form @submit.prevent="submit" :model="formModel" v-bind="formConfig.form">
      <el-row v-for="(row, index) in options" :key="index" :gutter="gutter(index)">
        <el-col :span="item?.col?.span ?? 8" v-for="(item, kIndex) in row" :key="kIndex">
          <el-form-item :label="item.title" :prop="item.field" v-bind="item.formItemProps">
            <component
              :is="componentList[item.type]"
              v-model="formModel[item.field]"
              :item-config="item"
              :form-config="formConfig"
              :instance="proxy"
              @[eventBtnGroup(item)]="btnSubmit"
              :ref="setRef"
            >
              <template v-if="item.type == 'slot' && item.slotName" #[item.slotName]>
                <slot :name="item.slotName"></slot>
              </template>
            </component>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script setup name="p-form">
import { shallowReactive, getCurrentInstance, computed, ref, reactive, onMounted, watch } from 'vue'
import AutoComplete from './components/AutoComplete.vue'
import Cascader from './components/Cascader.vue'
import Checkbox from './components/Checkbox.vue'
import ColorPicker from './components/ColorPicker.vue'
import DatePicker from './components/DatePicker.vue'
import Hidden from './components/Hidden.vue'
import Input from './components/Input.vue'
import InputNumber from './components/InputNumber.vue'
import Radio from './components/Radio.vue'
import Rate from './components/Rate.vue'
import Select from './components/Select.vue'
import Slider from './components/Slider.vue'
import Switch from './components/Switch.vue'
import TimePicker from './components/TimePicker.vue'
import TimeSelect from './components/TimeSelect.vue'
import Transfer from './components/Transfer.vue'
import Upload from './components/Upload.vue'
import Slot from './components/Slot.vue'
import BtnGroup from './components/BtnGroup.vue'

import { deepAssign, isArray } from '@p-ui/utils'
import { useVModel } from '@vueuse/core'
import { useExposeRef } from '@p-ui/hook'

const emit = defineEmits(['update:modelValue', 'submit', 'modelChange'])
/**
  @prop v-model/modelValue | form表单绑定的数据 | Object | {} | {}
  @prop options | form表单每个控件的配置 | Array | form表单每一项的可选类型:
    input radio checkbox select
    datePicker timePicker timeSelect inputNumber
    colorPicker rate slider transfer
    upload cascader autocomplete hidden
    | []
  @prop formConfig | form表单本身的配置 | Object | {
    form: {
      ref: 'myform'
    },
    row: {
      //栅格间隔
      gutter: 16
    },
    submitBtn: {},
    resetBtn: {},
    info: {},
    wrap: {}
  } | {}
  @event submit | form表单提交事件支持两种触发方式，点击提交和任意表单项回车触发 | function | 返回valid参数，类型为Boolean值为表单校验结果
  @slot slotName(此为options项里传入的插槽名) | 自定义form表单的某一项 | options(表单所有的项) formConfig(表单的配置) curVal(当前form表单项的值)
  @exposes exposeObj | 返回的定义的每一项的ref和表单的ref | Object
  */
const props = defineProps({
  modelValue: {
    type: Object,
    default: () => {}
  },
  options: {
    type: Array,
    default: () => []
  },
  formConfig: {
    type: Object,
    default: () => {}
  }
})

// 解决传入的form数据双向绑定问题
const formModel = useVModel(props, 'modelValue', emit)

// 组件集合，此处必须用这种方式，setup语法糖下动态组件不能用字符串模式，用shallowReactive解决组件也双向绑定浪费性能问题
const componentList = shallowReactive({
  input: Input,
  radio: Radio,
  checkbox: Checkbox,
  select: Select,
  datePicker: DatePicker,
  timePicker: TimePicker,
  timeSelect: TimeSelect,
  inputNumber: InputNumber,
  colorPicker: ColorPicker,
  switch: Switch,
  rate: Rate,
  slider: Slider,
  transfer: Transfer,
  upload: Upload,
  cascader: Cascader,
  autoComplete: AutoComplete,
  hidden: Hidden,
  slot: Slot,
  btnGroup: BtnGroup
})

// 获取当前实例
const { proxy } = getCurrentInstance()

// 默认的form表单配置项
const defaultFormConfig = {
  form: {},
  row: {
    // 栅格间隔
    gutter: 16
  },
  submitBtn: {},
  resetBtn: {},
  info: {},
  wrap: {}
}

// 合并后的form表单配置项
const formConfig = computed(() => {
  return deepAssign({}, defaultFormConfig, props.formConfig)
})

// 表单间隔间距
const gutter = computed(() => {
  return (index) => {
    if (isArray(formConfig.value.row.gutter)) {
      return formConfig.value.row.gutter[index]
    } else {
      return formConfig.value.row.gutter
    }
  }
})

// 动态添加事件，只有传入btnGroup才监听submit事件
const eventBtnGroup = computed(() => {
  return (item) => {
    if (item.type === 'btnGroup') {
      return 'submit'
    } else {
      return ''
    }
  }
})

// 当有type为btnGroup时,提供提交事件回调
const btnSubmit = (valid) => {
  emit('submit', valid)
}

// 表单组件按回车会触发提交回调，同样抛出
const submit = () => {
  const formEl = proxy.$refs[formConfig.value.form?.ref]
  if (!formEl) return
  formEl.validate((valid) => {
    emit('submit', valid)
  })
}

// 获取动态组件ref实例，因为此处是循环所致，故得到的是数组实例
const comRefs = ref([])
const setRef = (el) => {
  if (el) {
    comRefs.value.push(el)
  }
}

watch(
  () => props.modelValue,
  (newVal) => {
    emit('modelChange', newVal)
  },
  { immediate: true, deep: true }
)

// 抛出form实例以及组件提供的ref实例
onMounted(() => {
  exposeObj = useExposeRef(proxy, exposeObj)
  comRefs.value.forEach((element) => {
    const key = Object.keys(element)
    if (key.length !== 0) {
      exposeObj[key] = element[key]
    }
  })
})

let exposeObj = reactive({})

defineExpose(exposeObj)
</script>
<style lang="scss" scoped></style>
