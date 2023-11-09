<script setup lang="ts">
const inputText = ref('ok')
const checked = ref(false)
const rgbColor = ref('00b3ff')
</script>

<template>
  <div class="flex flex-col items-start gap-4">
    <h1 class="text-green-400">
      Heading 1
    </h1>
    <h2 class="text-green-500">
      Heading 2
    </h2>
    <h3 class="text-green-600">
      Heading 3
    </h3>
    <h4 class="text-green-700">
      Heading 4
    </h4>
    <h5 class="text-green-800">
      Heading 5
    </h5>
    <h6 class="text-green-900">
      Heading 6
    </h6>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime ipsum hic minus nobis iure distinctio ullam nam dolor quidem. Quidem suscipit impedit dolorem eos minima debitis, dignissimos repellendus modi? Iste?</p>
    <PVInputText v-model="inputText" />
    <PVCheckbox v-model="checked" :binary="true" />
    <PVInputSwitch v-model="checked" />
  </div>
  <div class="space-y-20">
    <div>It works!</div>
    <div class="rounded-xl bg-slate-50 p-4 shadow-lg">
      <PVPaginator :rows="10" :total-records="120" :rows-per-page-options="[10, 20, 30]" />
    </div>
    <div class="flex items-center gap-4 rounded-xl bg-slate-50 p-4 shadow-lg" :style="{ '--color': `#${rgbColor}` }">
      <PVColorPicker v-model="rgbColor" />
      <div class="min-w-50">
        Color: {{ rgbColor }}
      </div>
      <div class="font-bold text-[var(--color)]">
        Color
      </div>
      <div class="h-10 w-10 rounded-xl bg-[var(--color)] shadow" />
    </div>
  </div>
</template>

<style scoped>

</style>
