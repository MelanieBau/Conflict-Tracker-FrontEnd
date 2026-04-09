<template>
  <BaseCard>
    <h2>{{ conflict.name }}</h2>
    <p>{{ conflict.startDate }}</p>
    <p>{{ conflict.countries.join(', ') }}</p>
    <span class="badge" :class="conflict.status === 'ACTIVE' ? 'activo' : 'finalizado'">
      {{ conflict.status }}
    </span>
    <div class="acciones">
      <RouterLink :to="`/conflicts/${conflict.id}`">Ver detalle →</RouterLink>
      <button @click="$emit('eliminar', conflict.id)">Eliminar</button>
    </div>
  </BaseCard>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import BaseCard from './BaseCard.vue'

defineProps({
  conflict: {
    type: Object,
    required: true
  }
})

defineEmits(['eliminar'])
</script>

<style scoped>
h2 {
  font-size: 1.05rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.5rem;
}

p {
  color: #d4d4d4;
  font-size: 0.88rem;
  margin-bottom: 0.25rem;
}

.badge {
  display: inline-block;
  padding: 0.2rem 0.7rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  margin: 0.6rem 0;
  letter-spacing: 0.5px;
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

.acciones {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #2e2740;
}

a {
  color: #9b6dff;
  text-decoration: none;
  font-size: 0.88rem;
  font-weight: 500;
}

a:hover {
  color: #c4a7f7;
}

button {
  background: none;
  border: 1px solid #ffffff;
  color: #ffffff;
  padding: 0.25rem 0.75rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.82rem;
  transition: all 0.2s;
}

button:hover {
  border-color: #a32e21;
  color: #e94560;
}
</style>