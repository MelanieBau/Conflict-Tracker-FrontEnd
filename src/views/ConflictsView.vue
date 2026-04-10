<template>
  <div class="conflicts-page">
    <div class="page-header">
      <h1>Conflictos</h1>
      <span class="total">{{ filteredConflicts.length }} registros</span>
    </div>

    <div class="search-wrapper">
      <input
        v-model="search"
        type="text"
        placeholder="Buscar por nombre..."
        class="search-input"
      />
    </div>

    <p v-if="store.loading" class="mensaje">Cargando...</p>
    <p v-else-if="filteredConflicts.length === 0" class="mensaje">No se encontraron conflictos.</p>

    <div v-else class="lista">
      <ConflictCard
        v-for="conflict in filteredConflicts"
        :key="conflict.id"
        :conflict="conflict"
        @eliminar="store.removeConflict($event)"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useConflictStore } from '../stores/conflictStore'
import ConflictCard from '../components/ConflictCard.vue'

const store = useConflictStore()
const search = ref('')

onMounted(() => {
  store.fetchConflicts()
})

const filteredConflicts = computed(() =>
  store.conflicts.filter(c =>
    c.name.toLowerCase().includes(search.value.toLowerCase())
  )
)
</script>

<style scoped>
.conflicts-page {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.page-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-top: 1rem;
}

h1 {
  font-size: 2rem;
  font-weight: 700;
  color: #e8e4f0;
}

.total {
  background: #2e2740;
  color: #9b93b0;
  font-size: 0.8rem;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
}

.search-wrapper {
  position: relative;
}

.search-input {
  width: 100%;
  padding: 0.75rem 1rem;
  background: #1e1a2e;
  border: 1px solid #2e2740;
  border-radius: 8px;
  font-size: 0.95rem;
  color: #e8e4f0;
  outline: none;
  transition: border-color 0.2s;
}

.search-input::placeholder {
  color: #9b93b0;
}

.search-input:focus {
  border-color: #6d3fd4;
}

.mensaje {
  color: #9b93b0;
}

.lista {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.25rem;
}
</style>