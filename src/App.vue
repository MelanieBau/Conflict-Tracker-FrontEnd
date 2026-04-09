<template>
  <div class="app">
    <nav class="navbar">
      <div class="navbar-brand">
        <span class="dot"></span>
        Global Conflict Monitor
      </div>
      <div class="navbar-links">
        <RouterLink to="/">Inicio</RouterLink>
        <RouterLink to="/conflicts">Conflictos</RouterLink>
        <RouterLink to="/create" class="btn-new">+ Nuevo conflicto</RouterLink>
      </div>
    </nav>
    <main class="main-content">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', Arial, sans-serif;
}

body {
  background-color: #12101a;
  color: #e8e4f0;
}

.app {
  min-height: 100vh;
}

.navbar {
  background-color: #1a1625;
  border-bottom: 1px solid #2e2740;
  padding: 1rem 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 100;
}

.navbar-brand {
  font-size: 1.1rem;
  font-weight: 700;
  color: #c4a7f7;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  letter-spacing: 0.3px;
}

.dot {
  width: 8px;
  height: 8px;
  background: #9b6dff;
  border-radius: 50%;
  display: inline-block;
}

.navbar-links {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.navbar-links a {
  color: #9b93b0;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s;
}

.navbar-links a:hover {
  color: #e8e4f0;
}

.navbar-links a.router-link-active {
  color: #c4a7f7;
  font-weight: 600;
}

.btn-new {
  background-color: #6d3fd4;
  color: #ffffff !important;
  padding: 0.45rem 1.1rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.88rem !important;
  transition: background-color 0.2s !important;
}

.btn-new:hover {
  background-color: #7c4fe0 !important;
}

.main-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2.5rem 2rem;
}
</style>