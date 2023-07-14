<template>
  <p-form
    ref="uForm"
    v-model="formModel"
    :options="options"
    @submit="formSubmit"
    @reset="formReset"
    @modelChange="modelChange"
  >
    <template #myInput>
      <div>dsdds</div>
    </template>
  </p-form>

  {{ formModel }}
</template>

<script setup>
import { ref, reactive, onMounted, nextTick } from 'vue'

const formModel = reactive({
  userName: '45544'
})
const formConfig = reactive({
  form: {
    ref: 'myForm',
    rules: {
      userName: [
        {
          required: true,
          message: 'Please input Activity name',
          trigger: 'blur'
        }
      ]
    }
  }
})
const options = reactive([
  [
    {
      type: 'input',
      title: '用户名',
      field: 'userName',
      col: {
        span: 24
      },
      props: {
        placeholder: '你好，请输入！',
        ref: 'uInputElm'
        // disabled: true
      }
    },
    {
      type: 'slot',
      slotName: 'myInput',
      title: '自定义',
      field: 'userTx',
      col: {
        span: 4
      }
    },
    {
      type: 'radio',
      title: '用户类型',
      field: 'userType',
      col: {
        span: 6
      },
      opCustomKey: {
        label: 'text',
        value: 'val'
      },
      // dict: 'sys_user_sex', // 字典项
      options: [
        {
          text: '医生',
          val: 1
        },
        {
          text: '律师',
          val: 2
        },
        {
          text: '教师',
          val: 3
        }
      ],
      props: {
        label: '用户名'
      }
    },
    {
      type: 'checkbox',
      title: '用户爱好',
      field: 'userHobby',
      col: {
        span: 10
      },
      options: [
        {
          label: '跑步',
          value: 1
        },
        {
          label: '跳舞',
          value: 2
        },
        {
          label: '打撸',
          value: 3
        }
      ],
      formItemProps: {
        class: 'm-l-30'
      },
      props: {
        label: '用户名',
        class: 'm-l-30'
      }
    },
    {
      type: 'switch',
      title: '是否有钱',
      field: 'isHaveMoney',
      col: {
        span: 12
      },
      props: {}
    }
  ],
  [
    {
      type: 'select',
      field: 'cate_id',
      title: '产品分类',
      props: {
        multiple: false
      },
      options: [
        {
          value: '104',
          label: '生态蔬菜',
          disabled: false
        },
        {
          value: '105',
          label: '新鲜水果',
          disabled: false
        }
      ]
    },
    {
      type: 'datePicker',
      field: 'section_day',
      title: '活动日期',
      col: {
        span: 12
      },
      props: {
        type: 'datetimerange'
      }
    },
    {
      type: 'timePicker',
      field: 'section_sss',
      title: '活动日期',
      col: {
        span: 12
      },
      props: {}
    },
    {
      type: 'timeSelect',
      field: 'section_ssss',
      title: '活动日期',
      col: {
        span: 12
      },
      props: {}
    },
    {
      type: 'upload',
      title: '图片上传',
      field: 'imgList',
      col: {
        span: 8
      },
      props: {
        'list-type': 'picture-card'
      }
    },
    {
      type: 'inputNumber',
      title: '数量',
      field: 'num',
      col: {
        span: 8
      },
      props: {}
    },
    {
      type: 'btnGroup',
      col: {
        span: 8
      }
    }
  ],
  [
    {
      type: 'btnGroup',
      align: 'center',
      col: {
        span: 24
      },
      props: {
        class: 'w-full text-center'
      }
    }
  ]
])

const uForm = ref(null)

const formSubmit = (valid) => {
  alert('dsdsd')
  console.log(valid)
}

const formReset = () => {
  console.log('reset')
}

const modelChange = (val) => {
  console.log(val)
}

onMounted(() => {
  nextTick(() => {
    console.log(uForm.value)
  })
})
</script>

<style scoped lang="scss"></style>
