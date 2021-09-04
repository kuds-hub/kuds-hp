<template>
  <header>
    <h1 id="header-corporate-name">KUDs</h1>
    <ul id="header-menu-left">
      <li id="menu-item"><a href="#">企業情報</a></li>
      <li id="menu-item"><a href="#">採用情報</a></li>
    </ul>
    <ul id="header-menu-right">
      <li id="menu-item">
        <input id="search-text" type="search" placeholder="キーワードを入力" />
        <input type="submit" value="検索" />
      </li>
      <li id="menu-item">
        <a href="#">言語選択</a>
      </li>
    </ul>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
  props: {
    msg: String,
  },
});
</script>


<style>
html {
  scroll-padding-top: 3rem; /* 固定ヘッダの高さ分 */
  padding-top: 3rem; /* 固定ヘッダの高さ分 */
}
</style>

<style scoped>
header {
  display: flex;
  width: 100%;
  height: 3rem;
  background-color: cornsilk;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
}

#header-corporate-name {
  margin-left: 1rem;
}

#header-menu-left {
  margin-right: auto;
}

#header-menu-right {
  margin-right: 1rem;
}

#menu-item {
  list-style: none;
  display: inline-block;
  padding: 0.5rem;
  margin: 0.5rem;
}
</style>
