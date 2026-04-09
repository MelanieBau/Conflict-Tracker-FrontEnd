<template>
  <div class="home">
    <div class="hero">
      <h1>Global Conflict Monitor</h1>
      <p>Seguimiento en tiempo real de conflictos armados globales</p>
    </div>

    <div class="stats">
      <div class="stat-card">
        <span class="stat-number">{{ totalConflicts }}</span>
        <span class="stat-label">Total de conflictos</span>
      </div>
      <div class="stat-card activo">
        <span class="stat-number">{{ activeConflicts }}</span>
        <span class="stat-label">Conflictos activos</span>
      </div>
      <div class="stat-card finalizado">
        <span class="stat-number">{{ finishedConflicts }}</span>
        <span class="stat-label">Finalizados</span>
      </div>
    </div>

    <div class="cta">
      <RouterLink to="/conflicts" class="btn-primary">Ver todos los conflictos →</RouterLink>
      <RouterLink to="/create" class="btn-secondary">+ Añadir nuevo</RouterLink>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { useConflictStore } from '../stores/conflictStore'

const store = useConflictStore()

onMounted(() => {
  store.fetchConflicts()
})

const totalConflicts = computed(() => store.conflicts.length)
const activeConflicts = computed(() => store.conflicts.filter(c => c.status === 'ACTIVE').length)
const finishedConflicts = computed(() => store.conflicts.filter(c => c.status === 'FINISHED').length)
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.hero {
  padding: 3rem 0 1rem;
}

.hero h1 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #e8e4f0;
  margin-bottom: 0.75rem;
  letter-spacing: -0.5px;
}

.hero p {
  color: #9b93b0;
  font-size: 1.05rem;
}

.stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
}

.stat-card {
  background: #1e1a2e;
  border: 1px solid #2e2740;
  border-radius: 10px;
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  transition: border-color 0.2s;
}

.stat-card:hover {
  border-color: #6d3fd4;
}

.stat-card.activo {
  border-left: 3px solid #9b6dff;
}

.stat-card.finalizado {
  border-left: 3px solid #56d98a;
}

.stat-number {
  font-size: 2.8rem;
  font-weight: 700;
  color: #c4a7f7;
  line-height: 1;
}

.stat-card.finalizado .stat-number {
  color: #56d98a;
}

.stat-label {
  color: #9b93b0;
  font-size: 0.88rem;
}

.cta {
  display: flex;
  gap: 1rem;
}

.btn-primary {
  background: #6d3fd4;
  color: #fff;
  text-decoration: none;
  padding: 0.65rem 1.4rem;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 600;
  transition: background 0.2s;
}

.btn-primary:hover {
  background: #7c4fe0;
}

.btn-secondary {
  background: transparent;
  color: #9b93b0;
  text-decoration: none;
  padding: 0.65rem 1.4rem;
  border-radius: 8px;
  font-size: 0.95rem;
  border: 1px solid #2e2740;
  transition: all 0.2s;
}

.btn-secondary:hover {
  border-color: #6d3fd4;
  color: #c4a7f7;
}
</style>