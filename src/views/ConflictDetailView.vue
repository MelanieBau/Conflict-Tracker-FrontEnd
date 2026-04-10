<template>
  <div class="detalle-page">
    <RouterLink to="/conflicts" class="volver">← Volver a la lista</RouterLink>

    <p v-if="store.loading" class="mensaje">Cargando...</p>
    <p v-else-if="!store.currentConflict" class="mensaje">Conflicto no encontrado.</p>

    <div v-else class="detalle">
      <div class="header" :class="store.currentConflict.status === 'ACTIVE' ? 'activo' : 'finalizado'">
        <div class="header-top">
          <h1>{{ store.currentConflict.name }}</h1>
        <span class="badge" :class="store.currentConflict.status === 'ACTIVE' ? 'activo' : store.currentConflict.status === 'FROZEN' ? 'frozen' : 'finalizado'">
            {{ store.currentConflict.status === 'ACTIVE' ? 'Activo' : store.currentConflict.status === 'FROZEN' ? 'Congelado' : 'Finalizado' }}
        </span>   
    </div>
    </div>
    

      <div class="info">
        <div class="info-item">
          <h3>Fecha de inicio</h3>
          <p>{{ store.currentConflict.startDate }}</p>
        </div>
        <div class="info-item">
          <h3>Estado</h3>
          <p>{{ store.currentConflict.status }}</p>
        </div>
        <div class="info-item">
          <h3>Países involucrados</h3>
          <p>{{ store.currentConflict.countries.join(', ') }}</p>
        </div>
        <div class="info-item descripcion">
          <h3>Descripción</h3>
          <p>{{ store.currentConflict.description }}</p>
        </div>
      </div>

      <button class="btn-eliminar" @click="eliminar">Eliminar conflicto</button>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRoute, useRouter, RouterLink } from 'vue-router'
import { useConflictStore } from '../stores/conflictStore'

const store = useConflictStore()
const route = useRoute()
const router = useRouter()

onMounted(() => {
  store.fetchConflictById(route.params.id)
})

const eliminar = async () => {
  await store.removeConflict(route.params.id)
  router.push('/conflicts')
}
</script>

<style scoped>
.detalle-page {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.volver {
  color: #9b6dff;
  text-decoration: none;
  font-size: 0.9rem;
  display: inline-block;
}

.volver:hover {
  color: #c4a7f7;
}

.mensaje {
  color: #9b93b0;
}

.detalle {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 850px;
}

.header {
  padding: 2rem;
  border-radius: 10px;
  border-left: 4px solid #6d3fd4;
  background: #1e1a2e;
}

.header.activo {
  border-left-color: #9b6dff;
}

.header.finalizado {
  border-left-color: #56d98a;
}

.header-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.header h1 {
  font-size: 1.8rem;
  font-weight: 700;
  color: #e8e4f0;
}

.badge {
  display: inline-block;
  padding: 0.25rem 0.9rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  white-space: nowrap;
}

.badge.activo {
  background: #3a1f6e;
  color: #c4a7f7;
  border: 1px solid #6d3fd4;
}

.badge.finalizado {
  background: #1a3a2a;
  color: #56d98a;
  border: 1px solid #2ea043;
}

.info {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}

.info-item {
  background: #1e1a2e;
  border: 1px solid #2e2740;
  padding: 1.25rem;
  border-radius: 10px;
}

.info-item h3 {
  font-size: 0.78rem;
  color: #9b6dff;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  margin-bottom: 0.5rem;
}

.info-item p {
  color: #e8e4f0;
  font-size: 0.95rem;
}

.info-item.descripcion {
  grid-column: 1 / -1;
}

.btn-eliminar {
  background: transparent;
  color: #e94560;
  border: 1px solid #e94560;
  padding: 0.65rem 1.4rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.9rem;
  width: fit-content;
  transition: all 0.2s;
}

.btn-eliminar:hover {
  background: #e94560;
  color: white;
}

.badge.frozen {
  background: #1a2a3a;
  color: #56b4d9;
  border: 1px solid #2a7a9b;
}

</style>