<script></script>
<template>
  <aside>
    <nav>
      <ul v-for="category in categorys" :key="category.id">
        <li>{{ categorys.category }}</li>
      </ul>
    </nav>
  </aside>
</template>
<style scoped></style>
