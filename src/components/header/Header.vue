<template>
  <div
    class="w-full bg-cover h-220px flex-col content-end"
    :style="{
      'background-image': `url(${img})`,
      'background-position-y': `${imgY}px`,
      'background-position-x': `${imgX}px`,
    }"
  >
    <div
      class="flex bg-light-500 bg-opacity-30 shadow-2xl backdrop-filter backdrop-blur-4 pl-8 h-16 items-center justify-center"
    >
      <!-- 首页图标 -->
      <div
        class="flex flex-col items-center text-sm cursor-pointer hover:( bg-opacity-40) h-16 flex justify-center bg-light-100 pl-2 pr-2 bg-opacity-25"
      >
        <i class="iconfont icon-zhuye" style="font-size: 1.125rem"></i>
        <span>主页</span>
      </div>
      <!-- 板块链接 -->
      <div class="flex pl-10 text-lg font-300 mr-22 ml-12">
        <!-- //每一个单独的选项 -->
        <div
          v-for="(item, index) in tarbarData"
          :key="item.id"
          class="pl-3 pr-3 cursor-pointer h-16 flex items-center relative hover:(bg-dark-50 bg-opacity-30)"
          @mouseover="isOpen = index"
          @mouseleave="isOpen = null"
        >
          {{ item.title }}
          <div
            class="absolute z-999 top-16 -left-0 p-2 rounded bg-light-200 bg-opacity-30 min-w-36"
            v-if="isOpen === index && item.children?.length != 0"
          >
            <div
              v-for="(tab, index1) in item.children"
              :key="tab.id"
              class="hover:(bg-dark-50 bg-opacity-30) pl-1 text-sm"
            >
              {{ tab.title }}
            </div>
          </div>
        </div>
      </div>
      <!-- //个人功能区 -->
      <!-- 签到 -->
      <div
        class="flex flex-col items-center text-lg cursor-pointer hover:( bg-opacity-40) h-16 flex justify-center bg-[#988560] ml-8 pl-4 pr-4 font-400"
      >
        <span class="">签到</span>
      </div>
      <!-- 头像 -->
      <div
        class="flex flex-col items-center text-sm cursor-pointer h-16 flex justify-center pl-2 pr-2 bg-opacity-25"
      >
        <img
          src="https://www.helloimg.com/i/2024/09/25/66f37f9e70877.jpg"
          class="w-12 h-12 rounded-1 bordered"
        />
      </div>
      <!-- 搜索 -->
      <div
        class="flex flex-col items-center text-sm cursor-pointer hover:( bg-opacity-40) h-16 flex justify-center bg-light-100 pl-2 pr-2 bg-opacity-25 w-12"
      >
        <i
          class="iconfont icon-sousuo text-lg text-shadow-xl"
          style="font-size: 1.75rem; font-weight: 400"
        ></i>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 资源加载
import { ref } from "vue";
const img = import.meta.env.VITE_HEADER_BGI;
const imgX = import.meta.env.VITE_HEADER_X;
const imgY = import.meta.env.VITE_HEADER_Y;

//数据区
const tarbarData: Array<{
  id: number;
  title: string;
  router: string;
  children:
    | Array<{ id: number; title: string; router: string }>
    | []
    | undefined;
}> = [
  {
    id: 0,
    title: "ASMR音声",
    router: "",
    children: [
      { id: 0, title: "test", router: "" },
      { id: 1, title: "test1", router: "" },
    ],
  },
  { id: 1, title: "AI交流区", router: "", children: [] },
  {
    id: 2,
    title: "神秘科技",
    router: "",
    children: [
      { id: 0, title: "test", router: "" },
      { id: 1, title: "test1", router: "" },
    ],
  },
  { id: 3, title: "软件资源", router: "", children: [] },
  { id: 4, title: "茶馆", router: "", children: [] },
  { id: 5, title: "求物专区", router: "", children: [] },
  { id: 6, title: "博客广场", router: "", children: [] },
  { id: 7, title: "赞助Me", router: "", children: [] },
];
const isOpen = ref<number | null>();
</script>

<style scoped>
.responsive-bg {
  width: 100%;
  height: 300px;
  background-image: url(img);
  background-size: cover;
  background-position: center;
}
.bordered:hover {
  border: 1.5px white solid;
}
</style>
