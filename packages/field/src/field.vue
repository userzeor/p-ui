<template>
  <div>
    <el-form
      v-if="fieldObject.type === 'field'"
      ref="form"
      :inline="true"
      :model="sizeForm"
      :label-width="fieldObject.labelWidth"
      :label-position="fieldObject.labelPosition"
      :size="fieldObject.size"
    >
      <el-row>
        <el-col
          :span="Number(fieldObject.span || 6)"
          v-for="(item, index) in fieldData"
          :key="index"
        >
          <el-form-item :label="item.label + ':'">
            <div>{{ item.value }}</div>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>

    <el-input
      v-if="fieldObject.type === 'text'"
      :maxlength="fieldObject.maxlength"
      :placeholder="fieldObject.placeholder"
      :show-word-limit="fieldObject.showWordLimit"
      v-model="textarea"
      :rows="fieldObject.rows"
      type="textarea"
      @input="handleInput"
    />

    <div v-if="fieldObject.type === 'editor'" style="border: 1px solid #ccc; z-index: 100">
      <!-- 工具栏 -->
      <Toolbar
        style="border-bottom: 1px solid #ccc"
        :editor="editorRef"
        :defaultConfig="toolbarConfig"
        :mode="mode"
      />
      <Editor
        style="height: 500px; overflow-y: hidden"
        v-model="valueHtml"
        :defaultConfig="editorConfig"
        :mode="mode"
        @onCreated="handleCreated"
      />
    </div>
  </div>
</template>

<script setup name="p-field">
import { ref } from 'vue'
const props = defineProps({
  fieldObject: {
    default() {
      return {}
    },
    type: Object
  },
  fieldData: {
    default() {
      return {}
    },
    type: Array
  }
})
const textarea = ref(props.fieldObject.textarea)
const emits = defineEmits(['backTextMessage'])

const handleInput = (val) => {
  emits('backTextMessage', val)
}
</script>

<style scoped lang="scss">
.p-field {
}
</style>
