<script setup>
import { VPHomeSponsors } from 'vitepress/theme'
import { useSponsor } from '../composables/sponsor'
const { data } = useSponsor()
</script>

<template>
  <VPHomeSponsors
    v-if="data"
    message="PUI基于elm-plus二次封装,更方便业务的使用，开源免费"
    :data="data"
  />
  <!-- <div class="action">
    <a class="sponsor" href="https://kgithub.com/sponsors/vitejs" target="_blank" rel="noreferrer">
      Sponsor Vite
    </a>
    <a
      class="sponsor"
      href="https://kgithub.com/sponsors/yyx990803"
      target="_blank"
      rel="noreferrer"
    >
      Sponsor Evan You
    </a>
  </div> -->
</template>

<style scoped>
.action {
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding-top: 4rem;
}
.sponsor {
  /* .VPButton */
  display: inline-block;
  border: 1px solid transparent;
  text-align: center;
  font-weight: 600;
  white-space: nowrap;
  transition: color 0.25s, border-color 0.25s, background-color 0.25s;
  /* .VPButton.medium */
  border-radius: 20px;
  padding: 0 20px;
  line-height: 38px;
  font-size: 14px;
  /* .VPButton.sponsor */
  border-color: var(--vp-button-sponsor-border);
  color: var(--vp-button-sponsor-text);
  background-color: var(--vp-button-sponsor-bg);
}
.sponsor:hover {
  /* .VPButton.sponsor:hover */
  border-color: var(--vp-button-sponsor-hover-border);
  color: var(--vp-button-sponsor-hover-text);
  background-color: var(--vp-button-sponsor-hover-bg);
}
</style>
