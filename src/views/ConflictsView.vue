<template>
  <div>
    <h1>Conflictos</h1>

    <input
      v-model="search"
      type="text"
      placeholder="Buscar conflicto..."
    />

    <p v-if="store.loading">Cargando...</p>
    <p v-else-if="filteredConflicts.length === 0">No se encontraron conflictos.</p>

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
h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

input {
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1.5rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
}

.lista {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}
</style>