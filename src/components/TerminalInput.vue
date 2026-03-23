<template>
  <div
    ref="inputLineRef"
    :id="inputLineId"
    :class="[
      'flex items-center mt-2 flex-shrink-0 transition-all duration-200',
      isFocused ? 'is-focused' : '',
    ]"
  >
    <span class="manzano-green glow">manzzaano@portfolio:~$</span>

    <div class="relative ml-2 flex-grow h-6">
      <div class="absolute inset-0 flex items-center whitespace-pre">
        <span id="input-text">{{ modelValue }}</span>
        <span class="bg-manzano-green w-2 h-5 blink glow"></span>
        <span class="text-gray-500/50">{{ suggestionRemainder }}</span>
      </div>

      <input
        ref="inputRefLocal"
        id="command-input"
        type="text"
        class="absolute inset-0 bg-transparent border-none text-transparent w-full outline-none caret-transparent"
        :value="modelValue"
        @input="onInputLocal"
        @keydown="onKeyDownLocal"
        autocomplete="off"
        autocorrect="off"
        autocapitalize="off"
        spellcheck="false"
        autofocus
      />
    </div>
  </div>
</template>

<script setup>
import { ref, watch, nextTick } from "vue";
import { defineProps, defineEmits, defineExpose } from "vue";

const props = defineProps({
  modelValue: { type: String, default: "" },
  isFocused: { type: Boolean, default: true },
  inputLineId: { type: String, default: "input-line" },
  suggestionRemainder: { type: String, default: "" }, // <--- AÑADIDO: Prop para recibir la sugerencia
});
const emit = defineEmits(["update:modelValue", "keydown", "input"]);

const inputRefLocal = ref(null);
const inputLineRef = ref(null);

function focus() {
  nextTick(() => {
    inputRefLocal.value && inputRefLocal.value.focus();
  });
}
defineExpose({ focus, inputRefLocal, inputLineRef });

function onInputLocal(e) {
  emit("update:modelValue", e.target.value);
  emit("input", e);
}

function onKeyDownLocal(e) {
  emit("keydown", e);
}

watch(
  () => props.modelValue,
  async () => {
    if (props.isFocused) {
      await nextTick();
      if (
        inputRefLocal.value &&
        inputRefLocal.value.value !== props.modelValue
      ) {
        inputRefLocal.value.value = props.modelValue;
      }
    }
  },
);

nextTick(() => {
  if (props.isFocused) {
    focus();
  }
});
</script>

<style scoped>
.manzano-green {
  color: #34d399;
}
.bg-manzano-green {
  background-color: #34d399;
}
</style>
